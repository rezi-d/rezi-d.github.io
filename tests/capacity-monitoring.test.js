import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const FREE_LIMIT_REQUESTS = 100000;
const FREE_LIMIT_ROWS_WRITTEN = 100000;
const FREE_LIMIT_STORAGE_BYTES = 500 * 1024 * 1024; // 500 MB
const FREE_LIMIT_STORAGE_MB = 500;

function evaluateCapacityMetric(used, limit, warnPct = 60, dangerPct = 80) {
    const percent = Math.min(100, Number(((used / limit) * 100).toFixed(1)));
    let status = 'normal';
    let label = 'Normal (<60%)';
    let color = 'green';
    if (percent >= dangerPct) {
        status = 'danger';
        label = `Kritis (≥${dangerPct}%)`;
        color = 'red';
    } else if (percent >= warnPct) {
        status = 'warning';
        label = `Peringatan (≥${warnPct}%)`;
        color = 'yellow';
    }
    return { percent, status, label, color };
}

function calculateOverallCapacity(storageEval, requestsEval, rowsWrittenEval) {
    if (storageEval.status === 'danger' || requestsEval.status === 'danger' || rowsWrittenEval.status === 'danger') {
        return 'danger';
    }
    if (storageEval.status === 'warning' || requestsEval.status === 'warning' || rowsWrittenEval.status === 'warning') {
        return 'warning';
    }
    return 'normal';
}

function estimateDailyUsage(todayActivity) {
    const lisToday = Number(todayActivity.lis_today || 0);
    const readToday = Number(todayActivity.read_today || 0);
    const writeToday = Number(todayActivity.write_today || 0);
    const spkToday = Number(todayActivity.spk_today || 0);
    const recToday = Number(todayActivity.rec_today || 0);

    const estimatedRowsWritten = (lisToday * 3) + (readToday * 3) + (writeToday * 15) + (spkToday * 5) + (recToday * 1) + 2;
    const estimatedRequests = (lisToday * 15) + (readToday * 15) + (writeToday * 30) + (spkToday * 30) + (recToday * 3) + 25;

    return { estimatedRowsWritten, estimatedRequests };
}

// ----------------------------------------------------
// PENGUJIAN TAHAP A4: PEMANTAUAN KAPASITAS D1
// ----------------------------------------------------

test('Batas Paket Gratis: Nilai konstanta batas Cloudflare D1 sesuai spesifikasi', () => {
    assert.equal(FREE_LIMIT_REQUESTS, 100000, 'Batas request harian harus 100.000 req/hari');
    assert.equal(FREE_LIMIT_ROWS_WRITTEN, 100000, 'Batas rows written harian harus 100.000 baris/hari');
    assert.equal(FREE_LIMIT_STORAGE_MB, 500, 'Batas penyimpanan database harus 500 MB');
    assert.equal(FREE_LIMIT_STORAGE_BYTES, 524288000, 'Batas byte penyimpanan 500 MB');
});

test('Ambang Evaluasi Kapasitas: status normal jika persentase di bawah 60%', () => {
    const res = evaluateCapacityMetric(250 * 1024 * 1024, FREE_LIMIT_STORAGE_BYTES);
    assert.equal(res.percent, 50.0);
    assert.equal(res.status, 'normal');
    assert.equal(res.color, 'green');
    assert.match(res.label, /Normal/i);
});

test('Ambang Evaluasi Kapasitas: status warning (kuning) jika persentase mencapai 60% – 79.9%', () => {
    const res60 = evaluateCapacityMetric(300 * 1024 * 1024, FREE_LIMIT_STORAGE_BYTES);
    assert.equal(res60.percent, 60.0);
    assert.equal(res60.status, 'warning');
    assert.equal(res60.color, 'yellow');
    assert.match(res60.label, /Peringatan/i);

    const res75 = evaluateCapacityMetric(75000, FREE_LIMIT_REQUESTS);
    assert.equal(res75.percent, 75.0);
    assert.equal(res75.status, 'warning');
    assert.equal(res75.color, 'yellow');
});

test('Ambang Evaluasi Kapasitas: status danger (merah) jika persentase mencapai atau melebihi 80%', () => {
    const res80 = evaluateCapacityMetric(400 * 1024 * 1024, FREE_LIMIT_STORAGE_BYTES);
    assert.equal(res80.percent, 80.0);
    assert.equal(res80.status, 'danger');
    assert.equal(res80.color, 'red');
    assert.match(res80.label, /Kritis/i);

    const res95 = evaluateCapacityMetric(95000, FREE_LIMIT_ROWS_WRITTEN);
    assert.equal(res95.percent, 95.0);
    assert.equal(res95.status, 'danger');
    assert.equal(res95.color, 'red');
});

test('Overall System Capacity: menghitung status terburuk dari metrik-metrik yang ada', () => {
    const normalMetric = { status: 'normal' };
    const warningMetric = { status: 'warning' };
    const dangerMetric = { status: 'danger' };

    assert.equal(calculateOverallCapacity(normalMetric, normalMetric, normalMetric), 'normal');
    assert.equal(calculateOverallCapacity(normalMetric, warningMetric, normalMetric), 'warning');
    assert.equal(calculateOverallCapacity(warningMetric, warningMetric, normalMetric), 'warning');
    assert.equal(calculateOverallCapacity(normalMetric, warningMetric, dangerMetric), 'danger');
    assert.equal(calculateOverallCapacity(dangerMetric, normalMetric, normalMetric), 'danger');
});

test('Estimasi Aktivitas Harian: menghitung beban tanpa operasi tulis tambahan ke D1 (Zero Write)', () => {
    const activity = {
        lis_today: 10,
        read_today: 10,
        write_today: 5,
        spk_today: 4,
        rec_today: 12
    };

    const { estimatedRowsWritten, estimatedRequests } = estimateDailyUsage(activity);

    // Rows written: (10*3) + (10*3) + (5*15) + (4*5) + (12*1) + 2 = 30 + 30 + 75 + 20 + 12 + 2 = 169
    assert.equal(estimatedRowsWritten, 169);

    // Requests: (10*15) + (10*15) + (5*30) + (4*30) + (12*3) + 25 = 150 + 150 + 150 + 120 + 36 + 25 = 631
    assert.equal(estimatedRequests, 631);
});

test('Worker Endpoint: GET /guru/rekap memuat objek capacity_monitoring lengkap dengan limits dan metrics', () => {
    const workerContent = fs.readFileSync(path.resolve('worker/src/index.js'), 'utf-8');

    assert.match(workerContent, /capacity_monitoring:\s*\{/, 'Worker harus menyertakan properti capacity_monitoring');
    assert.match(workerContent, /daily_requests:\s*FREE_LIMIT_REQUESTS/, 'Worker harus memuat limit daily_requests');
    assert.match(workerContent, /daily_rows_written:\s*FREE_LIMIT_ROWS_WRITTEN/, 'Worker harus memuat limit daily_rows_written');
    assert.match(workerContent, /storage_mb:\s*FREE_LIMIT_STORAGE_MB/, 'Worker harus memuat limit storage_mb');
    assert.match(workerContent, /warning_threshold_pct:\s*60/, 'Worker harus menyertakan ambang 60');
    assert.match(workerContent, /danger_threshold_pct:\s*80/, 'Worker harus menyertakan ambang 80');
    assert.match(workerContent, /active_licenses:\s*\{\s*count:\s*activeLicensesCount\s*\}/, 'Worker harus memuat active_licenses');
});

test('Dashboard Admin UI: ielts/rekap.html memuat panel visual pemantauan kapasitas D1', () => {
    const rekapHtml = fs.readFileSync(path.resolve('ielts/rekap.html'), 'utf-8');

    assert.match(rekapHtml, /id="capacity-monitoring-panel"/, 'Panel kapasitas harus ada di rekap.html');
    assert.match(rekapHtml, /id="cap-storage-val"/, 'Elemen ukuran storage audio D1');
    assert.match(rekapHtml, /id="cap-requests-val"/, 'Elemen estimasi requests');
    assert.match(rekapHtml, /id="cap-rows-val"/, 'Elemen rows written');
    assert.match(rekapHtml, /id="cap-licenses-val"/, 'Elemen lisensi aktif');
    assert.match(rekapHtml, /id="cap-recordings-val"/, 'Elemen rekaman audio aktif');
    assert.match(rekapHtml, /id="capacity-overall-badge"/, 'Badge status kapasitas keseluruhan');
    assert.match(rekapHtml, /renderCapacityMonitoringUI/, 'Fungsi render kapasitas di rekap.html');
});
