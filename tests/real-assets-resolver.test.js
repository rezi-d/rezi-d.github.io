import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import worker, { fetchMasterAsset } from '../worker/src/index.js';

describe('Real Assets Master Resolver & Fallback 404 Defense', () => {
    const premiumDir = path.resolve('worker/premium');

    // 1. Verifikasi Eksistensi Berkas Fisik Nyata di worker/premium/
    test('Eksistensi berkas master fisik di disk lokal worker/premium/', () => {
        const listeningFile = path.join(premiumDir, 'listening/test1-master.json');
        const readingFile = path.join(premiumDir, 'reading/reading1-master.json');
        const writingFile = path.join(premiumDir, 'writing/writing1-master.json');
        const speakingFile = path.join(premiumDir, 'speaking/speaking1-master.json');

        assert.ok(fs.existsSync(listeningFile), 'worker/premium/listening/test1-master.json harus ada di disk');
        assert.ok(fs.existsSync(readingFile), 'worker/premium/reading/reading1-master.json harus ada di disk');
        assert.ok(fs.existsSync(writingFile), 'worker/premium/writing/writing1-master.json harus ada di disk');
        assert.ok(fs.existsSync(speakingFile), 'worker/premium/speaking/speaking1-master.json harus ada di disk');

        // Pastikan isi berkas adalah JSON valid
        assert.doesNotThrow(() => JSON.parse(fs.readFileSync(listeningFile, 'utf8')));
        assert.doesNotThrow(() => JSON.parse(fs.readFileSync(readingFile, 'utf8')));
        assert.doesNotThrow(() => JSON.parse(fs.readFileSync(writingFile, 'utf8')));
        assert.doesNotThrow(() => JSON.parse(fs.readFileSync(speakingFile, 'utf8')));
    });

    // 2. Mock ASSETS yang Membaca Langsung dari worker/premium/ (Tanpa Data Tiruan)
    function createRealDiskAssets() {
        return {
            fetch: async (req) => {
                const url = new URL(req.url);
                const relPath = url.pathname.replace(/^\/+/, '');
                const diskPath = path.join(premiumDir, relPath);
                if (fs.existsSync(diskPath)) {
                    const content = fs.readFileSync(diskPath, 'utf8');
                    return new Response(content, {
                        status: 200,
                        headers: { 'Content-Type': 'application/json' }
                    });
                }
                return new Response('Asset Not Found', { status: 404 });
            }
        };
    }

    test('fetchMasterAsset berhasil menemukan Mock 1 di keempat modul dari disk nyata', async () => {
        const realAssets = createRealDiskAssets();
        const mockEnv = { ASSETS: realAssets };
        const dummyUrl = new URL('https://kimia.ajarkita.my.id');

        const modules = ['listening', 'reading', 'writing', 'speaking'];
        for (const mod of modules) {
            // Uji dengan testId standar
            const resStandard = await fetchMasterAsset(mockEnv, dummyUrl, mod, 'test1');
            assert.strictEqual(resStandard.status, 200, `${mod} harus 200 dengan testId 'test1'`);
            const dataStd = await resStandard.json();
            assert.ok(dataStd && typeof dataStd === 'object', `${mod} data harus berupa objek JSON valid`);

            // Uji dengan alias ('1', 'reading1', dll.)
            const resAlias = await fetchMasterAsset(mockEnv, dummyUrl, mod, '1');
            assert.strictEqual(resAlias.status, 200, `${mod} harus 200 dengan alias '1'`);

            const resModAlias = await fetchMasterAsset(mockEnv, dummyUrl, mod, `${mod}1`);
            assert.strictEqual(resModAlias.status, 200, `${mod} harus 200 dengan alias '${mod}1'`);

            // Uji dengan input kosong / null
            const resEmpty = await fetchMasterAsset(mockEnv, dummyUrl, mod, null);
            assert.strictEqual(resEmpty.status, 200, `${mod} harus 200 dengan testId null`);
        }
    });

    // 3. Syarat Ketat: Fallback HANYA untuk status 404 (Tidak menyamarkan 403 atau 500)
    test('fetchMasterAsset TIDAK memicu fallback saat status 403 atau 500', async () => {
        const dummyUrl = new URL('https://kimia.ajarkita.my.id');
        let callLog = [];

        // Kasus A: Status 403 (Forbidden)
        const env403 = {
            ASSETS: {
                fetch: async (req) => {
                    const p = new URL(req.url).pathname;
                    callLog.push(p);
                    return new Response('Akses Ditolak', { status: 403 });
                }
            }
        };
        callLog = [];
        const res403 = await fetchMasterAsset(env403, dummyUrl, 'reading', 'test1');
        assert.strictEqual(res403.status, 403, 'Status 403 wajib dipertahankan');
        assert.deepStrictEqual(callLog, ['/reading/test1-master.json'], '403 tidak boleh mencoba path fallback');

        // Kasus B: Status 500 (Internal Server Error)
        const env500 = {
            ASSETS: {
                fetch: async (req) => {
                    const p = new URL(req.url).pathname;
                    callLog.push(p);
                    return new Response('Server Error', { status: 500 });
                }
            }
        };
        callLog = [];
        const res500 = await fetchMasterAsset(env500, dummyUrl, 'writing', 'test1');
        assert.strictEqual(res500.status, 500, 'Status 500 wajib dipertahankan');
        assert.deepStrictEqual(callLog, ['/writing/test1-master.json'], '500 tidak boleh mencoba path fallback');
    });

    // 4. Isolasi Mock 2: Tidak Pernah Fallback ke Berkas Mock 1
    test('fetchMasterAsset untuk Mock 2 (test2) tidak pernah membaca berkas Mock 1 jika 404', async () => {
        const dummyUrl = new URL('https://kimia.ajarkita.my.id');
        let requestedPaths = [];

        const mockEnv = {
            ASSETS: {
                fetch: async (req) => {
                    const p = new URL(req.url).pathname;
                    requestedPaths.push(p);
                    // Mock 1 ada, Mock 2 belum ada
                    if (p.includes('reading1-master.json')) {
                        return new Response('{"mock":1}', { status: 200 });
                    }
                    return new Response('Not Found', { status: 404 });
                }
            }
        };

        requestedPaths = [];
        const resTest2 = await fetchMasterAsset(mockEnv, dummyUrl, 'reading', 'test2');
        assert.strictEqual(resTest2.status, 404, 'Mock 2 yang tidak ada harus tetap 404');
        assert.deepStrictEqual(requestedPaths, ['/reading/test2-master.json'], 'Mock 2 tidak boleh mencari reading1-master.json');
    });

    // 5. Uji Menyeluruh Endpoint Worker (/start, /submit, /status) dengan Berkas Disk Nyata
    test('Seluruh endpoint Worker di keempat modul berhasil melayani Mock 1 menggunakan berkas disk nyata', async () => {
        const realAssets = createRealDiskAssets();
        const storedSessions = new Map();

        const mockDb = {
            prepare: (sql) => ({
                bind: (...args) => ({
                    run: async () => {
                        if (sql.includes('INSERT INTO')) {
                            const [id, test_id, device_id, nama_peserta, kelas] = args;
                            storedSessions.set(id, { id, test_id, device_id, nama_peserta, kelas, status: 'in_progress', started_at: Date.now() });
                        }
                        if (sql.includes('UPDATE')) {
                            // Update status
                            const id = args[args.length - 1];
                            const existing = storedSessions.get(id);
                            if (existing) {
                                existing.status = 'submitted';
                                existing.submitted_at = Date.now();
                            }
                        }
                        return { meta: { changes: 1 } };
                    },
                    first: async () => {
                        if (sql.includes('WHERE id = ?')) {
                            return storedSessions.get(args[0]) || null;
                        }
                        return null;
                    },
                    all: async () => ({ results: Array.from(storedSessions.values()) })
                }),
                run: async () => ({ meta: { changes: 1 } }),
                first: async () => null,
                all: async () => ({ results: [] })
            })
        };

        const env = {
            DB: mockDb,
            ASSETS: realAssets,
            ALLOWED_ORIGINS: 'https://kimia.ajarkita.my.id'
        };

        // A. Reading Lifecycle
        const startReading = await worker.fetch(new Request('https://kimia.ajarkita.my.id/reading/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ testId: 'test1', nama: 'Fulan', kelas: '12 IPA', deviceId: 'dev_real_test_01' })
        }), env);
        assert.strictEqual(startReading.status, 200, 'POST /reading/start harus 200 OK dengan berkas disk nyata');
        const startReadJson = await startReading.json();
        assert.ok(startReadJson.ok, 'Respons reading start harus ok');
        assert.ok(startReadJson.testData && startReadJson.testData.passages, 'Reading testData harus memuat passages');

        // Submit Reading
        const submitReading = await worker.fetch(new Request('https://kimia.ajarkita.my.id/reading/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId: startReadJson.sessionId, deviceId: 'dev_real_test_01', answers: { "1": "TRUE" } })
        }), env);
        assert.strictEqual(submitReading.status, 200, 'POST /reading/submit harus 200 OK dengan berkas disk nyata');
        const submitReadJson = await submitReading.json();
        assert.ok(submitReadJson.ok, 'Respons reading submit harus ok');

        // B. Writing Lifecycle
        const startWriting = await worker.fetch(new Request('https://kimia.ajarkita.my.id/writing/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ testId: 'test1', nama: 'Fulan', kelas: '12 IPA', deviceId: 'dev_real_test_02' })
        }), env);
        assert.strictEqual(startWriting.status, 200, 'POST /writing/start harus 200 OK dengan berkas disk nyata');
        const startWriteJson = await startWriting.json();
        assert.ok(startWriteJson.testData && startWriteJson.testData.tasks, 'Writing testData harus memuat tasks');

        // Status Writing (memuat sample answers)
        const statusWriting = await worker.fetch(new Request(`https://kimia.ajarkita.my.id/writing/status?sessionId=${startWriteJson.sessionId}&deviceId=dev_real_test_02`), env);
        assert.strictEqual(statusWriting.status, 200, 'GET /writing/status harus 200 OK dengan berkas disk nyata');

        // C. Speaking Lifecycle
        const startSpeaking = await worker.fetch(new Request('https://kimia.ajarkita.my.id/speaking/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ testId: 'test1', nama: 'Fulan', kelas: '12 IPA', deviceId: 'dev_real_test_03' })
        }), env);
        assert.strictEqual(startSpeaking.status, 200, 'POST /speaking/start harus 200 OK dengan berkas disk nyata');
        const startSpkJson = await startSpeaking.json();
        assert.ok(startSpkJson.testData && startSpkJson.testData.part1, 'Speaking testData harus memuat part1');

        // Status Speaking
        const statusSpeaking = await worker.fetch(new Request(`https://kimia.ajarkita.my.id/speaking/status?sessionId=${startSpkJson.sessionId}&deviceId=dev_real_test_03`), env);
        assert.strictEqual(statusSpeaking.status, 200, 'GET /speaking/status harus 200 OK dengan berkas disk nyata');

        // D. Listening Lifecycle
        const startListening = await worker.fetch(new Request('https://kimia.ajarkita.my.id/listening/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ testId: 'test1', nama: 'Fulan', kelas: '12 IPA', deviceId: 'dev_real_test_04' })
        }), env);
        assert.strictEqual(startListening.status, 200, 'POST /listening/start harus 200 OK dengan berkas disk nyata');
    });
});
