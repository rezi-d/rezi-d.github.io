// =========================================================================
// DATA MATERI & MINI-GAME SNBT 2026 — SUBTES 6: LITERASI BAHASA INGGRIS (LBE)
// Total: 14 Sub-Materi × 3 Soal Game = 42 Soal Khusus Mini-Game
// Hadiah Maksimal per Sub-Materi: Rp 400 (Skor 3/3)
// =========================================================================

window.SNBT_MATERI_REGISTRY = window.SNBT_MATERI_REGISTRY || {};

window.SNBT_MATERI_REGISTRY["lbe"] = {
    id: "lbe",
    nama: "Literasi Bahasa Inggris (LBE)",
    icon: "🇬🇧",
    color: "indigo",
    rewardPerSub: 400,
    submateri: [
        {
            key: "lbe_0_0",
            kategori: "Reading Comprehension & Critical Analysis",
            judul: "Identifying Topic and Main Idea of Academic Texts",
            ringkasan: `
                <p>Pertanyaan <strong>Topic / Main Idea</strong> selalu muncul di nomor awal setiap bacaan LBE. Gunakan teknik <strong>Skimming 3 Titik</strong>: baca kalimat pertama paragraf 1 (<em>hook/thesis</em>), kalimat pertama tiap paragraf isi (<em>topic sentence</em>), dan kalimat terakhir paragraf penutup.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Tipe Pertanyaan</th>
                                <th class="p-2 border border-slate-200 text-left">Ciri Jawaban Benar vs Jebakan (Distractor)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold"><em>What is the main topic / subject of the passage?</em></td>
                                <td class="p-2">Berupa <strong>noun phrase</strong> yang memuat <em>repeated keywords</em> di semua paragraf. Hindari opsi yang <em>too narrow</em> (hanya 1 kalimat) atau <em>too broad</em>.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold"><em>What is the main idea of paragraph X?</em></td>
                                <td class="p-2">Fokus pada <strong>kalimat ke-1</strong> paragraf X. Namun jika kalimat ke-2 diawali <strong><em>However, Nevertheless, Yet, In contrast,</em></strong> maka ide pokoknya berada di kalimat ke-2!</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Passage: 'For decades, neuroscientists believed that the adult human brain was structurally fixed. However, recent neuroimaging studies demonstrate that neuroplasticity—the brain's ability to reorganize synaptic connections—continues throughout adulthood in response to learning and recovery from injury.' What is the main idea?",
                langkah: "Kalimat ke-1 adalah anggapan lama ('For decades...'). Kalimat ke-2 diawali 'However,' yang memuat gagasan utama penulis: otak orang dewasa tetap memiliki kemampuan neuroplastisitas sepanjang hidup."
            },
            gameQuestions: [
                {
                    q: "Read the paragraph below:\n'Urban vertical farming has emerged as a promising response to shrinking arable land and long-distance food supply chains. By cultivating crops in stacked indoor layers using hydroponic or aeroponic systems, vertical farms can reduce water consumption by up to 95 percent compared to conventional agriculture while eliminating the need for chemical pesticides.'\nWhat is the main idea of the paragraph?",
                    opts: [
                        "Conventional agriculture uses more chemical pesticides than rural gardeners do.",
                        "Urban vertical farming offers an efficient, resource-saving alternative to traditional farming through indoor hydroponic and aeroponic systems.",
                        "Hydroponic systems were invented to replace all outdoor farms in tropical countries.",
                        "Long-distance food supply chains are the only cause of global water shortages."
                    ],
                    ans: 1,
                    exp: "Kalimat pertama memperkenalkan vertical farming sebagai solusi lahan dan rantai pasok, lalu kalimat kedua menjelaskan efisiensinya (hemat air 95% dan bebas pestisida). Opsi B merangkum keduanya secara akurat."
                },
                {
                    q: "Read the excerpt below:\n'Many consumers assume that biodegradable plastics decompose rapidly in any natural environment. Yet, marine biologists have found that most commercial polylactic acid (PLA) plastics require industrial composting temperatures above 55°C to break down, meaning they persist in cold ocean waters almost as long as petroleum-based plastics.'\nWhat does the paragraph mainly discuss?",
                    opts: [
                        "The step-by-step manufacturing process of petroleum-based plastics.",
                        "Why commercial biodegradable plastics fail to decompose quickly in cold marine environments despite popular belief.",
                        "How marine biologists measure ocean temperatures across different seasons.",
                        "The economic profitability of industrial composting facilities in coastal cities."
                    ],
                    ans: 1,
                    exp: "Kata transisi 'Yet,' di kalimat kedua membalik asumsi umum di kalimat pertama dan menjelaskan mengapa plastik biodegradable (PLA) tetap sulit terurai di air laut yang dingin."
                },
                {
                    q: "Which of the following is the BEST strategy to identify the best title for a multi-paragraph academic passage?",
                    opts: [
                        "Choose an option that quotes a specific statistic from the middle paragraph.",
                        "Select a concise noun phrase that captures the central subject and controlling idea shared across all paragraphs.",
                        "Pick the longest option containing extreme words such as 'always', 'never', or 'completely'.",
                        "Look only at the last three words of the final paragraph."
                    ],
                    ans: 1,
                    exp: "Judul terbaik dalam teks akademik LBE harus berupa frasa benda (noun phrase) yang ringkas dan merangkum subjek utama serta fokus bahasan seluruh paragraf."
                }
            ]
        },
        {
            key: "lbe_0_1",
            kategori: "Reading Comprehension & Critical Analysis",
            judul: "Drawing Conclusions and Logical Inferences",
            ringkasan: `
                <p>Pertanyaan <strong>Inference / Conclusion</strong> dikenali dari kata kunci: <em>"It can be inferred from the passage that..."</em>, <em>"What does the author imply about..."</em>, atau <em>"We can conclude that..."</em>.</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Golden Rules for Inference Questions:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Must Be 100% Supported by Textual Evidence:</strong> Di ujian bahasa Inggris standar (SNBT/TOEFL/IELTS), <em>inference</em> bukanlah tebakan liar, melainkan <strong>deduksi logis langsung</strong> dari fakta di teks.</li>
                        <li><strong>Avoid Extreme Modifiers:</strong> Hati-hati terhadap opsi yang memuat kata absolut seperti <em>only, never, all, completely, impossible</em> kecuali teks aslinya memang menyatakan demikian.</li>
                        <li><strong>Safe Modifiers:</strong> Opsi yang benar sering menggunakan <em>may, can, likely, tend to, some, most</em>.</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Text: 'Unlike deciduous trees that shed their leaves every autumn to conserve water, boreal conifers retain their needle-like foliage year-round, coated in a thick waxy cutin layer.' What can be inferred about boreal conifers?",
                langkah: "Karena konifer mempertahankan daun jarumnya sepanjang tahun dengan lapisan lilin tebal (berbeda dari pohon gugur yang menggugurkan daun untuk menghemat air), dapat disimpulkan bahwa lapisan lilin dan bentuk jarum tersebut membantu konifer menahan kehilangan air selama musim dingin."
            },
            gameQuestions: [
                {
                    q: "Read the text below:\n'Before the introduction of the printing press in the fifteenth century, books in Europe were painstakingly copied by hand on parchment by monastic scribes. A single illuminated manuscript could require over a year of labor, making personal libraries a privilege restricted almost exclusively to royalty and high-ranking clergy.'\nWhat can be logically inferred from the text?",
                    opts: [
                        "Monastic scribes refused to learn how to operate the fifteenth-century printing press.",
                        "Prior to the fifteenth century, ordinary European citizens rarely owned books due to their extreme scarcity and high production cost.",
                        "Books copied on parchment were less durable than books printed on modern paper.",
                        "Royalty in the fifteenth century wrote all of their own manuscripts by hand."
                    ],
                    ans: 1,
                    exp: "Karena penyalinan buku secara manual memakan waktu lebih dari setahun dan kepemilikan buku terbatas hampir eksklusif pada raja dan pemuka agama tinggi, dapat disimpulkan bahwa warga biasa jarang memiliki buku sebelum abad ke-15."
                },
                {
                    q: "Read the text below:\n'Alpine marmots hibernate in family burrows for up to seven months of the year. During this period, their heart rate drops from 180 beats per minute to as low as 5 beats per minute, and their body temperature approaches ambient burrow temperature. Young marmots that hibernate alone have a significantly lower winter survival rate than those that hibernate in huddled family groups.'\nIt can be inferred from the passage that huddling in family groups helps young marmots survive winter primarily by...",
                    opts: [
                        "Increasing their heart rate back to 180 beats per minute throughout winter.",
                        "Conserving thermal energy and preventing their body temperature from dropping below lethal limits.",
                        "Allowing them to forage for fresh grass outside the burrow every week.",
                        "Shortening the winter season from seven months to two months."
                    ],
                    ans: 1,
                    exp: "Karena suhu tubuh marmot mendekati suhu liang dan marmot muda yang berhibernasi berkelompok (huddled) memiliki tingkat kelangsungan hidup jauh lebih tinggi daripada yang sendirian, dapat disimpulkan bahwa berkumpul membantu menjaga suhu/energi termal."
                },
                {
                    q: "Read the statement:\n'Electric vehicles produce zero tailpipe emissions while driving; however, their overall carbon footprint depends heavily on whether the electricity used to charge them is generated from coal-fired power plants or renewable sources.'\nBased on the statement, it can be concluded that...",
                    opts: [
                        "Electric vehicles generate more tailpipe smoke than diesel trucks.",
                        "Switching to electric vehicles reduces carbon emissions most effectively when paired with a renewable energy power grid.",
                        "Coal-fired power plants cannot produce electricity for charging stations.",
                        "Renewable energy sources are more expensive than coal in every country."
                    ],
                    ans: 1,
                    exp: "Karena jejak karbon total kendaraan listrik sangat bergantung pada sumber listrik pengisiannya (batu bara vs energi terbarukan), maka pengurangan emisi karbon paling optimal bila dikombinasikan dengan jaringan listrik energi terbarukan."
                }
            ]
        },
        {
            key: "lbe_0_2",
            kategori: "Reading Comprehension & Critical Analysis",
            judul: "Best Summary of the Passage",
            ringkasan: `
                <p>Pertanyaan <strong>Best Summary</strong> meminta satu kalimat atau paragraf pendek yang merangkum <strong>seluruh poin utama dari awal hingga akhir</strong> secara proporsional.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Syarat Summary yang Tepat</th>
                                <th class="p-2 border border-slate-200 text-left">Tiga Ciri Opsi Pengecoh (Salah)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2"><strong>Formula:</strong> [Main Idea Paragraf 1] + [Main Idea Paragraf 2] + [Conclusion/Outcome]</td>
                                <td class="p-2">1. <strong>Partial Detail:</strong> Hanya mengutip 1 detail kecil.<br>2. <strong>Distorted Fact:</strong> Membalik sebab-akibat.<br>3. <strong>Outside Info:</strong> Memuat klaim yang tidak ada di teks.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Jika Paragraf 1 membahas penyebab kelangkaan litium, dan Paragraf 2 membahas pengembangan baterai natrium-ion sebagai alternatif yang lebih murah dan melimpah, manakah ringkasan terbaiknya?",
                langkah: "Ringkasan terbaik wajib memuat kedua bagian: 'Keterbatasan pasokan litium mendorong para ilmuwan mengembangkan baterai natrium-ion yang bahan bakunya lebih melimpah dan ekonomis.'"
            },
            gameQuestions: [
                {
                    q: "Read the two-paragraph text below:\n[1] Coral reefs occupy less than one percent of the ocean floor, yet they support nearly a quarter of all known marine species by providing shelter and breeding grounds.\n[2] Rising sea temperatures and coastal pollution have degraded nearly half of the world's shallow coral reefs over the past three decades, prompting scientists to cultivate heat-resistant coral strains for reef restoration.\nWhich of the following is the BEST summary of the passage?",
                    opts: [
                        "Coral reefs cover less than one percent of the ocean floor and are mostly found in shallow tropical waters.",
                        "Although ecologically vital to marine biodiversity, coral reefs face severe decline from warming and pollution, leading researchers to develop heat-tolerant corals for restoration.",
                        "Scientists have successfully replaced all polluted coral reefs with artificial concrete structures over the past three decades.",
                        "Coastal pollution is a much greater threat to deep-sea fish than rising sea temperatures."
                    ],
                    ans: 1,
                    exp: "Opsi B merangkum isi Paragraf 1 ('ecologically vital to marine biodiversity') dan isi Paragraf 2 ('face severe decline from warming and pollution, leading researchers to develop heat-tolerant corals')."
                },
                {
                    q: "Read the passage below:\n'Telemedicine expanded rapidly during global public health emergencies, allowing patients in remote rural clinics to consult specialists via video link without traveling hundreds of kilometers. Nevertheless, healthcare researchers caution that digital consultations cannot fully replace physical examinations and remain inaccessible to elderly populations lacking broadband internet.'\nWhich sentence best summarizes the passage?",
                    opts: [
                        "Telemedicine has completely eliminated the need for rural hospitals and physical examinations.",
                        "While telemedicine significantly improves specialist access for remote patients, it has diagnostic limitations and connectivity barriers for some elderly groups.",
                        "Elderly patients prefer traveling hundreds of kilometers rather than using video calls.",
                        "Broadband internet is too expensive to install in rural medical clinics."
                    ],
                    ans: 1,
                    exp: "Ringkasan yang tepat harus mencakup kedua sisi yang dipaparkan penulis: manfaat aksesibilitas telemedisin bagi pasien daerah terpencil sekaligus keterbatasan pemeriksaan fisik dan kendala internet bagi lansia."
                },
                {
                    q: "When evaluating multiple-choice options for a 'Best Summary' question, why should you eliminate an option that focuses solely on a specific statistical example from paragraph 2?",
                    opts: [
                        "Because numbers are never allowed in English sentences.",
                        "Because a summary must synthesize the overarching main points of the entire text rather than isolating a single supporting detail.",
                        "Because paragraph 2 is always the least important part of an essay.",
                        "Because statistical examples are always factually incorrect."
                    ],
                    ans: 1,
                    exp: "Sebuah ringkasan (summary) harus merangkum ide-ide utama keseluruhan bacaan, bukan hanya menyalin satu contoh pendukung atau angka detail."
                }
            ]
        },
        {
            key: "lbe_0_3",
            kategori: "Reading Comprehension & Critical Analysis",
            judul: "Locating Specific and Detailed Information",
            ringkasan: `
                <p>Pertanyaan <strong>Specific Detail (5W+1H: Who, What, When, Where, Why, How)</strong> menguji kecepatan <strong>Scanning</strong>. Jangan baca seluruh teks dari awal; cari <strong>Keyword Anchor</strong> (huruf kapital, angka tahun, istilah teknis, nama tempat) di soal!</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ 3 Langkah Cepat Menjawab Detail Question:</div>
                    <ol class="list-decimal pl-4 space-y-1">
                        <li><strong>Kunci Kata Unik di Soal:</strong> Misalnya soal menanyakan <em>"According to the passage, why did the Norse settlements in Greenland collapse?"</em> &rarr; Kata kuncinya: <strong>Norse settlements / Greenland / collapse</strong>.</li>
                        <li><strong>Scan Baris Teks:</strong> Gerakkan mata cepat mencari kata <em>Greenland</em>, lalu baca <strong>1 kalimat penuh tempat kata itu berada</strong>.</li>
                        <li><strong>Cocokkan Sinonim (Paraphrase):</strong> Jawaban yang benar hampir selalu menggunakan sinonim (misal di teks tertulis <em>"prolonged cooling climate"</em> &rarr; di opsi tertulis <em>"extended periods of colder temperatures"</em>).</li>
                    </ol>
                </div>
            `,
            contoh: {
                soal: "Text: 'The Atacama Desert in northern Chile receives less than 1 millimeter of rainfall annually because it lies in a double rain shadow between the Andes Mountains to the east and the Chilean Coastal Range to the west.' Why is the Atacama Desert extremely dry?",
                langkah: "Scan kata kunci 'Atacama Desert' dan 'because': karena diapit oleh dua pegunungan (Andes dan Chilean Coastal Range) yang menghalangi awan hujan (double rain shadow)."
            },
            gameQuestions: [
                {
                    q: "Read the text below:\n'The Svalbard Global Seed Vault, built deep inside a sandstone mountain on Spitsbergen island in Norway, stores duplicate samples of over 1.2 million crop varieties from around the world. The facility is positioned 130 meters above sea level to ensure that the vault remains dry even if the polar ice caps melt completely, while surrounding permafrost naturally maintains the chambers at -18°C.'\nAccording to the passage, why was the vault constructed 130 meters above sea level?",
                    opts: [
                        "To make it easier for cargo airplanes to land on top of the sandstone mountain.",
                        "To protect the facility from flooding even if polar ice caps were to melt entirely.",
                        "To expose the crop seeds to direct sunlight during the Arctic summer.",
                        "To keep the chambers warmer than the surrounding permafrost."
                    ],
                    ans: 1,
                    exp: "Sesuai kalimat kedua teks: 'positioned 130 meters above sea level to ensure that the vault remains dry even if the polar ice caps melt completely' (melindungi dari banjir kenaikan muka air laut jika es kutub mencair)."
                },
                {
                    q: "Based on the Svalbard Global Seed Vault passage in the previous question, what naturally helps keep the storage chambers at -18°C?",
                    opts: [
                        "Solar-powered air conditioning units on the roof",
                        "Liquid nitrogen tanks imported weekly from Oslo",
                        "The surrounding permafrost inside the mountain",
                        "Ocean currents flowing beneath Spitsbergen island"
                    ],
                    ans: 2,
                    exp: "Pada akhir kalimat kedua disebutkan secara eksplisit: '...while surrounding permafrost naturally maintains the chambers at -18°C.'"
                },
                {
                    q: "Read the excerpt:\n'Lithium-iron-phosphate (LFP) batteries have gained popularity in standard-range electric cars because they do not require cobalt or nickel, making them roughly 20% cheaper to manufacture and far less prone to thermal runaway fires than nickel-manganese-cobalt (NMC) batteries.'\nAccording to the excerpt, which two metals are NOT required in LFP batteries?",
                    opts: [
                        "Lithium and iron",
                        "Cobalt and nickel",
                        "Copper and aluminum",
                        "Sodium and magnesium"
                    ],
                    ans: 1,
                    exp: "Teks menyebutkan secara eksplisit: '...because they do not require cobalt or nickel'."
                }
            ]
        },
        {
            key: "lbe_0_4",
            kategori: "Reading Comprehension & Critical Analysis",
            judul: "Determining the Author's Purpose and Target Audience",
            ringkasan: `
                <p>Pertanyaan <strong>Author's Purpose</strong> (<em>Why did the author write the passage?</em>) dan <strong>Target Audience</strong> (<em>Who is the intended reader?</em>) menilai fungsi komunikatif teks.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Kata Kerja Tujuan (Purpose Verbs)</th>
                                <th class="p-2 border border-slate-200 text-left">Kapan Dipilih?</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold"><em>To inform / To explain / To describe</em></td>
                                <td class="p-2">Teks bersifat objektif memaparkan mekanisme ilmiah, sejarah, atau fenomena tanpa membujuk pembaca.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold"><em>To persuade / To advocate / To urge</em></td>
                                <td class="p-2">Teks memuat ajakan tindakan (<em>should, must, need to</em>) atau membela suatu kebijakan tertentu.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold"><em>To refute / To challenge / To critique</em></td>
                                <td class="p-2">Teks menyanggah teori lama atau mengkritisi kelemahan suatu kebijakan/argumen.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold"><em>To compare and contrast</em></td>
                                <td class="p-2">Teks membandingkan dua metode, dua zaman, atau dua hipotesis secara berimbang.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Teks menjelaskan langkah-langkah bagaimana bakteri ekstremofil di kawah hidrotermal laut dalam mengubah hidrogen sulfida menjadi energi kimia (kemosintesis) tanpa sinar matahari. Apakah tujuan penulis?",
                langkah: "Karena teks memaparkan mekanisme biologis secara objektif tanpa opini persuasif, tujuannya adalah 'To explain how deep-sea extremophile bacteria produce energy through chemosynthesis.'"
            },
            gameQuestions: [
                {
                    q: "Read the passage below:\n'Antibiotic stewardship programs are urgently needed in livestock farming. Currently, over 70 percent of medically important antibiotics globally are administered not to treat sick animals, but to promote rapid growth in crowded feedlots. Policymakers must prohibit the routine use of human-class antibiotics as growth promoters before untreatable superbugs render modern surgery too dangerous to perform.'\nThe author's primary purpose in writing this passage is to...",
                    opts: [
                        "Explain the nutritional benefits of feeding antibiotics to dairy cattle.",
                        "Urge policymakers to ban the routine use of medically important antibiotics as livestock growth promoters.",
                        "Compare the prices of different veterinary medicines in developing nations.",
                        "Entertain readers with humorous stories about rural farm life."
                    ],
                    ans: 1,
                    exp: "Kalimat pertama ('urgently needed') dan kalimat terakhir ('Policymakers must prohibit...') menunjukkan tujuan persuasif/advokasi penulis untuk mendesak pelarangan penggunaan antibiotik medis sebagai pemacu tumbuh ternak."
                },
                {
                    q: "Read the excerpt below:\n'When preparing for a high-altitude trek above 3,500 meters, hikers should ascend gradually—ideally no more than 300 to 500 meters of sleeping elevation per day—to allow their bodies to produce additional red blood cells. Staying well-hydrated and avoiding alcohol during the first 48 hours also significantly reduces the risk of acute mountain sickness.'\nWho is the most likely intended target audience for this excerpt?",
                    opts: [
                        "Deep-sea commercial divers and submarine engineers",
                        "Mountain trekkers and outdoor hikers planning high-altitude expeditions",
                        "Hospital pharmacists manufacturing blood-pressure tablets",
                        "Urban architects designing underground subway stations"
                    ],
                    ans: 1,
                    exp: "Teks memberikan panduan praktis aklimatisasi ketinggian di atas 3.500 meter bagi para pendaki gunung (hikers/mountain trekkers)."
                },
                {
                    q: "Why does an author typically include a counterargument in an academic persuasive essay before refuting it?",
                    opts: [
                        "To confuse the reader about what the essay is actually about.",
                        "To demonstrate fairness and strengthen the author's own position by showing why opposing views are flawed or incomplete.",
                        "To prove that the author agrees with both sides equally and has no opinion.",
                        "To fill up space and meet the minimum word count requirement."
                    ],
                    ans: 1,
                    exp: "Dalam penulisan akademik, menyertakan argumen lawan (counterargument) lalu membantahnya dengan bukti bertujuan menunjukkan objektivitas sekaligus memperkuat posisi argumen penulis sendiri."
                }
            ]
        },
        {
            key: "lbe_0_5",
            kategori: "Reading Comprehension & Critical Analysis",
            judul: "Analyzing Author's Tone, Attitude, and Stance",
            ringkasan: `
                <p>Pertanyaan <strong>Tone / Attitude</strong> menanyakan nuansa emosi atau sikap penulis terhadap topik yang dibahas. Perhatikan <strong>adjektiva (kata sifat)</strong> dan <strong>adverbia</strong> yang dipilih penulis!</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Kategori Tone</th>
                                <th class="p-2 border border-slate-200 text-left">Kosakata Tone yang Sering Muncul di LBE</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Netral / Ilmiah</td>
                                <td class="p-2"><strong>Objective, neutral, informative, analytical, matter-of-fact, impartial</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Positif / Mendukung</td>
                                <td class="p-2"><strong>Optimistic, enthusiastic, supportive, appreciative, hopeful, admiring</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Khawatir / Kritis</td>
                                <td class="p-2"><strong>Concerned, cautious, critical, skeptical, cautionary, alarmed</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Jebakan Tone (Jarang Benar!)</td>
                                <td class="p-2"><em>Indifferent / apathetic</em> (masa bodoh), <em>hostile</em> (bermusuhan kasar), <em>depressed</em> (putus asa ekstrem)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Excerpt: 'While quantum computing holds extraordinary promise for drug discovery, we must remain vigilant about its potential to break existing encryption standards overnight.' What is the author's tone?",
                langkah: "Penulis mengakui potensi besarnya ('extraordinary promise') tetapi mengingatkan perlunya kewaspadaan ('must remain vigilant'). Tone yang paling tepat adalah 'Cautiously optimistic' atau 'Balanced and cautionary'."
            },
            gameQuestions: [
                {
                    q: "Read the passage below:\n'The rapid disappearance of indigenous languages across the Pacific is nothing short of a cultural tragedy. Every time a language dies without documentation, humanity loses an irreplaceable library of ecological knowledge, oral history, and unique ways of perceiving the natural world. Urgent community-led revitalization programs must be funded before these voices vanish forever.'\nWhich word best describes the author's tone in the passage?",
                    opts: [
                        "Indifferent and detached",
                        "Concerned and urgent",
                        "Humorous and lighthearted",
                        "Skeptical and mocking"
                    ],
                    ans: 1,
                    exp: "Pilihan diksi 'cultural tragedy', 'irreplaceable', 'Urgent... must be funded before these voices vanish forever' jelas mencerminkan nada yang prihatin dan mendesak (concerned and urgent)."
                },
                {
                    q: "Read the excerpt below:\n'Photosynthesis in C4 plants, such as maize and sugarcane, incorporates a specialized spatial separation of carbon fixation between mesophyll cells and bundle-sheath cells. This anatomical adaptation minimizes photorespiration under high temperatures and intense solar radiation.'\nThe tone of this excerpt can best be described as...",
                    opts: [
                        "Objective and informative",
                        "Bitter and sarcastic",
                        "Emotional and nostalgic",
                        "Doubtful and hesitant"
                    ],
                    ans: 0,
                    exp: "Teks memaparkan mekanisme fisiologi tumbuhan C4 secara ilmiah dan faktual tanpa emosi subjektif, sehingga nadanya adalah objective and informative."
                },
                {
                    q: "Read the comment below:\n'Supporters of the luxury stadium project claim it will revitalize the local economy; however, independent audits of twelve similar stadiums built over the past twenty years reveal that public subsidies rarely generate the promised tax revenues, leaving taxpayers burdened with decades of maintenance debt.'\nWhat is the author's attitude toward the claim that the luxury stadium will revitalize the local economy?",
                    opts: [
                        "Wholeheartedly supportive",
                        "Skeptical and critical",
                        "Completely unconcerned",
                        "Overwhelmed with joy"
                    ],
                    ans: 1,
                    exp: "Penulis menggunakan bukti audit independen ('however, independent audits... reveal that public subsidies rarely generate the promised tax revenues') untuk meragukan dan mengkritisi klaim para pendukung proyek stadion."
                }
            ]
        },
        {
            key: "lbe_0_6",
            kategori: "Reading Comprehension & Critical Analysis",
            judul: "Writer's Underlying Motive or Underlying Assumption",
            ringkasan: `
                <p><strong>Underlying Assumption (Asumsi Dasar)</strong> adalah premis tak tertulis yang <strong>dianggap benar oleh penulis</strong> agar argumen atau kesimpulannya dapat berlaku (<em>The Negation Test: jika asumsi ini disangkal/dibuat negatif, maka argumen penulis runtuh!</em>).</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ Cara Menguji Underlying Assumption (Negation Test):</div>
                    <p>Contoh Argumen: <em>"Sekolah ini mewajibkan semua siswa memakai seragam batik setiap hari Kamis agar kecintaan siswa terhadap budaya lokal meningkat."</em><br>
                    <strong>Asumsi Dasar Penulis:</strong> Memakai seragam batik secara rutin dapat menumbuhkan rasa cinta terhadap budaya lokal. (Jika asumsi ini salah, maka kebijakan sekolah tersebut tidak akan mencapai tujuannya!)</p>
                </div>
            `,
            contoh: {
                soal: "Argument: 'To reduce traffic accidents on mountain highways at night, the transport ministry will install reflective cat's-eye studs along all lane markings next month.' What is the underlying assumption?",
                langkah: "Penulis berasumsi bahwa sebagian kecelakaan malam hari di jalan pegunungan disebabkan oleh kurang jelasnya batas jalur jalan bagi pengemudi dalam gelap."
            },
            gameQuestions: [
                {
                    q: "Read the argument below:\n'To boost declining museum attendance among teenagers, the National History Museum has decided to replace its printed guidebooks with an interactive augmented-reality (AR) smartphone app next month.'\nWhich of the following is an underlying assumption made by the museum management?",
                    opts: [
                        "Teenagers are more likely to visit and engage with the museum if exhibits feature interactive digital technology.",
                        "Printed paper guidebooks are more expensive to produce than smartphone applications.",
                        "Elderly visitors do not know how to read printed museum guidebooks.",
                        "The National History Museum will close its doors permanently next year."
                    ],
                    ans: 0,
                    exp: "Agar keputusan mengganti buku panduan cetak dengan aplikasi AR mampu meningkatkan kunjungan remaja, pihak manajemen berasumsi bahwa remaja tertarik pada fitur teknologi digital interaktif."
                },
                {
                    q: "Read the statement below:\n'Because the newly discovered exoplanet orbits within its star's habitable zone where surface temperatures allow liquid water to exist, astronomers consider it a prime candidate in the search for extraterrestrial life.'\nWhat underlying assumption is the astronomers' reasoning based on?",
                    opts: [
                        "All exoplanets in the universe have exactly the same mass as Earth.",
                        "The presence of liquid water is a fundamental requirement or key indicator for supporting life.",
                        "Extraterrestrial life can only survive on planets that are completely frozen.",
                        "Astronomers have already sent a robotic spacecraft to land on the exoplanet."
                    ],
                    ans: 1,
                    exp: "Penalaran astronom yang menjadikan planet berair cair sebagai kandidat utama pencarian kehidupan didasarkan pada asumsi bahwa air cair merupakan syarat fundamental bagi kehidupan."
                },
                {
                    q: "Why does an author write an op-ed exposing how fast-fashion brands dispose of millions of tons of unsold synthetic clothing in desert landfills?",
                    opts: [
                        "To promote the opening of a new fast-fashion shopping mall.",
                        "To raise public awareness about the hidden environmental cost of overproduction in the garment industry and encourage more sustainable consumption.",
                        "To teach desert nomads how to weave synthetic polyester fibers.",
                        "To prove that synthetic clothing is biodegradable in dry sand."
                    ],
                    ans: 1,
                    exp: "Motif utama penulis menulis opini investigatif tentang pembuangan limbah pakaian fast-fashion adalah untuk membuka kesadaran publik akan dampak lingkungannya serta mendorong konsumsi berkelanjutan."
                }
            ]
        },
        {
            key: "lbe_0_7",
            kategori: "Reading Comprehension & Critical Analysis",
            judul: "Contextual Meaning of Vocabulary, Synonyms, and Antonyms",
            ringkasan: `
                <p>Soal <strong>Vocabulary in Context</strong> (<em>"The word 'X' in paragraph 2 is closest in meaning to..."</em>) tidak boleh dijawab hanya dari arti kamus pertama! Banyak kata bahasa Inggris memiliki makna sekunder yang bergantung pada konteks kalimat.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Jenis Context Clues</th>
                                <th class="p-2 border border-slate-200 text-left">Penanda di Kalimat</th>
                                <th class="p-2 border border-slate-200 text-left">Contoh</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Definition / Appositive</td>
                                <td class="p-2">Tanda pisah (—), koma, <em>or, that is, namely</em></td>
                                <td class="p-2"><em>arable</em>—capable of being plowed for crops—land</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Contrast / Antonym Clue</td>
                                <td class="p-2"><em>unlike, whereas, while, instead of, rather than</em></td>
                                <td class="p-2">Unlike his <em>gregarious</em> brother, Tom is shy and reserved. (<em>gregarious</em> = sociable)</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Polysemous Academic Words</td>
                                <td class="p-2">Kata umum bermakna khusus</td>
                                <td class="p-2"><em>sound</em> argument = <strong>valid/logical</strong> (bukan suara!); <em>novel</em> approach = <strong>new/innovative</strong> (bukan buku cerita!)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "In the sentence 'The researchers proposed a novel method to desalinate seawater using solar membranes', the word 'novel' is closest in meaning to...",
                langkah: "Sebagai kata sifat sebelum 'method', kata 'novel' bermakna 'baru dan inovatif' (new / original / innovative), bukan buku novel sastra."
            },
            gameQuestions: [
                {
                    q: "Read the sentence below:\n'Although early prototypes of the solar-powered aircraft were fragile and prone to structural failure in turbulent winds, the latest model is remarkably *robust*.'\nThe word 'robust' in the sentence is closest in meaning to...",
                    opts: [
                        "delicate",
                        "sturdy and strong",
                        "expensive",
                        "invisible"
                    ],
                    ans: 1,
                    exp: "Kata penghubung kontras 'Although' mempertentangkan model lama yang 'fragile' (rapuh) dengan model terbaru yang 'robust'. Maka 'robust' berarti kuat dan kokoh (sturdy and strong)."
                },
                {
                    q: "Read the sentence below:\n'Because the archaeological evidence was *scant*, historians could not reach a definitive conclusion about how the ancient city was abandoned.'\nWhich of the following is the ANTONYM (opposite in meaning) of the word 'scant'?",
                    opts: [
                        "scarce",
                        "minimal",
                        "abundant",
                        "insufficient"
                    ],
                    ans: 2,
                    exp: "Dalam konteks 'historians could not reach a definitive conclusion', kata 'scant' bermakna sedikit/minim/langka (scarce/insufficient). Maka lawan katanya (antonym) adalah melimpah ('abundant')."
                },
                {
                    q: "Read the sentence below:\n'The committee rejected the contractor's proposal because its financial projections were not *sound*.'\nIn this context, the word 'sound' means...",
                    opts: [
                        "loud and noisy",
                        "logically valid and reliable",
                        "transmitted through acoustic waves",
                        "silent and peaceful"
                    ],
                    ans: 1,
                    exp: "Dalam konteks evaluasi proposal atau argumen ('financial projections were not sound'), kata sifat 'sound' bermakna valid, berdasar kuat, dan dapat diandalkan (logically valid and reliable)."
                }
            ]
        },
        {
            key: "lbe_0_8",
            kategori: "Reading Comprehension & Critical Analysis",
            judul: "Pronoun Reference and Syntactic Antecedents",
            ringkasan: `
                <p>Soal <strong>Pronoun Reference</strong> (<em>"The word 'it / they / their / which / this / ones' in line X refers to..."</em>) menguji ketelitian mencari <strong>Antecedent</strong> (kata benda yang dirujuk di bagian sebelumnya).</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ 3 Aturan Mencari Rujukan Pronoun:</div>
                    <ol class="list-decimal pl-4 space-y-1">
                        <li><strong>Cek Tunggal vs Jamak (Number Agreement):</strong><br>
                        • <em>it, its, this, that</em> &rarr; Wajib merujuk pada <strong>Singular / Uncountable Noun</strong>.<br>
                        • <em>they, them, their, these, those</em> &rarr; Wajib merujuk pada <strong>Plural Noun (jamak)</strong>.</li>
                        <li><strong>Baca Mundur 1 Kalimat:</strong> Antecedent hampir selalu berada di klausa sebelumnya atau kalimat tepat di depannya.</li>
                        <li><strong>Uji Substitusi:</strong> Ganti pronoun tersebut dengan pilihan jawaban; pastikan kalimatnya tetap logis secara tata bahasa dan makna!</li>
                    </ol>
                </div>
            `,
            contoh: {
                soal: "Text: 'When honeybees collect nectar from wildflowers, they inadvertently transfer pollen grains from one blossom to another, enabling them to produce seeds.' What does 'them' refer to?",
                langkah: "Siapa yang menghasilkan biji ('produce seeds')? Bukan lebah ('honeybees') dan bukan serbuk sari ('pollen grains'), melainkan bunga liar ('wildflowers' / 'blossoms')."
            },
            gameQuestions: [
                {
                    q: "Read the excerpt below:\n'Sea otters play a keystone role in maintaining the health of coastal kelp forests. By preying on sea urchins, *they* prevent these spiny herbivores from overgrazing the giant kelp holdfasts.'\nThe word 'they' in the second sentence refers to...",
                    opts: [
                        "coastal kelp forests",
                        "sea otters",
                        "sea urchins",
                        "giant kelp holdfasts"
                    ],
                    ans: 1,
                    exp: "Perhatikan klausa partisipial 'By preying on sea urchins, they prevent...'. Pelaku yang memangsa bulu babi (sea urchins) dan mencegah kerusakan hutan kelp adalah berang-berang laut ('sea otters')."
                },
                {
                    q: "Read the excerpt below:\n'Although bamboo is often classified colloquially as a tree due to its woody stems, *it* is botanically a fast-growing member of the true grass family Poaceae.'\nThe pronoun 'it' refers to...",
                    opts: [
                        "a tree",
                        "bamboo",
                        "its woody stems",
                        "the true grass family"
                    ],
                    ans: 1,
                    exp: "'it' adalah kata ganti tunggal yang merujuk kembali pada subjek klausa pertama, yaitu 'bamboo' (uncountable/singular noun). 'woody stems' berbentuk jamak sehingga tidak mungkin dirujuk oleh 'it'."
                },
                {
                    q: "Read the excerpt below:\n'Traditional silicon solar panels are rigid and heavy, whereas perovskite solar cells can be printed onto flexible plastic films, making *them* ideal for curved building facades and portable electronics.'\nThe word 'them' in the excerpt refers to...",
                    opts: [
                        "traditional silicon solar panels",
                        "perovskite solar cells",
                        "curved building facades",
                        "portable electronics"
                    ],
                    ans: 1,
                    exp: "Yang dapat dicetak di atas film plastik lentur sehingga cocok dipasang pada fasad gedung melengkung adalah 'perovskite solar cells'."
                }
            ]
        },
        {
            key: "lbe_0_9",
            kategori: "Reading Comprehension & Critical Analysis",
            judul: "Restating Sentences or Phrases (Paraphrasing)",
            ringkasan: `
                <p>Soal <strong>Restatement / Paraphrasing</strong> (<em>"Which of the following best restates the sentence..."</em>) menuntut kamu memilih kalimat yang <strong>mengubah struktur dan kosakata</strong> tetapi <strong>mempertahankan 100% makna logis dan hubungan antarklausanya</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Pola Transformasi Restatement</th>
                                <th class="p-2 border border-slate-200 text-left">Ekuivalensi Struktur Bahasa Inggris</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Double Negative &hArr; Positive</td>
                                <td class="p-2"><em>"Not uncommon"</em> = <strong>common / frequent</strong> | <em>"Never fails to impress"</em> = <strong>always impresses</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Conditional (Unless)</td>
                                <td class="p-2"><em>"Unless A happens, B will fail"</em> = <strong>If A does not happen, B will fail</strong> = <strong>B will succeed only if A happens</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Cause-Effect Reversal</td>
                                <td class="p-2"><em>"A leads to / triggers B"</em> = <strong>B results from / stems from / is driven by A</strong></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Concession (Although / Despite)</td>
                                <td class="p-2"><em>"Although X is expensive, it is popular"</em> = <strong>Despite its high cost, X remains widely used</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Restate: 'Had the coastal mangrove belt not been cleared for shrimp ponds, the village would have suffered far less damage from the storm surge.'",
                langkah: "Kalimat ini adalah Conditional Tipe 3 (fakta masa lalu kebalikannya): hutan bakau telah ditebang untuk tambak udang, sehingga desa tersebut mengalami kerusakan parah akibat gelombang badai."
            },
            gameQuestions: [
                {
                    q: "Which of the following best restates the sentence below?\n'Unless industrial carbon emissions are curbed within this decade, global coral reefs will experience irreversible bleaching.'",
                    opts: [
                        "Global coral reefs have already recovered from bleaching because industrial carbon emissions were reduced.",
                        "Global coral reefs will suffer permanent bleaching if industrial carbon emissions are not reduced within this decade.",
                        "Curbing industrial carbon emissions within this decade will cause coral reefs to bleach more rapidly.",
                        "Industrial carbon emissions have no measurable impact on the health of global coral reefs."
                    ],
                    ans: 1,
                    exp: "'Unless A' setara dengan 'If not A'; 'curbed' = 'reduced'; dan 'irreversible' = 'permanent'. Maka opsi B adalah parafrasa yang paling akurat."
                },
                {
                    q: "Which option best restates the following sentence?\n'It is not uncommon for migratory songbirds to lose up to a third of their body mass during nonstop transoceanic flights.'",
                    opts: [
                        "Migratory songbirds never lose any body weight when flying across the ocean.",
                        "Migratory songbirds frequently lose as much as one-third of their body weight while flying nonstop across oceans.",
                        "Only rare species of songbirds are capable of flying across the ocean without stopping.",
                        "Migratory songbirds gain a third of their body mass before starting a transoceanic flight."
                    ],
                    ans: 1,
                    exp: "Bentuk negasi ganda 'It is not uncommon' bermakna 'It is common / frequent' (sering terjadi). Opsi B memparafrasakan kalimat tersebut secara tepat."
                },
                {
                    q: "Read the original sentence:\n'Despite its exorbitant initial installation cost, geothermal heating significantly lowers household energy bills over a twenty-year lifespan.'\nWhich sentence has the closest meaning to the original sentence?",
                    opts: [
                        "Geothermal heating is cheap to install, but it increases household energy bills after twenty years.",
                        "Although installing geothermal heating is very expensive at first, it substantially reduces home energy expenses in the long run.",
                        "Because geothermal heating lowers energy bills, no one minds paying a high installation fee.",
                        "Households should avoid geothermal heating because it only lasts for twenty years."
                    ],
                    ans: 1,
                    exp: "'Despite its exorbitant initial installation cost' = 'Although installing ... is very expensive at first'; 'significantly lowers household energy bills over a twenty-year lifespan' = 'substantially reduces home energy expenses in the long run'."
                }
            ]
        },
        {
            key: "lbe_0_10",
            kategori: "Reading Comprehension & Critical Analysis",
            judul: "Evaluating True / False Statements Against Evidence",
            ringkasan: `
                <p>Pertanyaan <strong>True / False / NOT True (Except)</strong> menuntut verifikasi silang antara pernyataan opsi dan bukti kalimat di teks. Hati-hati terhadap perubahan kecil pada <strong>kata keterangan kuantitas, waktu, atau perbandingan</strong>!</p>
                <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1.5 my-2">
                    <div class="font-bold text-amber-900">⚠️ 4 Jebakan Pembalik Kebenaran (False Statement Traps):</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Comparison Trap:</strong> Teks menyebutkan <em>A dan B digunakan bersama</em>, tetapi opsi mengklaim <em>A lebih baik daripada B</em>.</li>
                        <li><strong>Quantifier Shift:</strong> Teks menulis <em>some / several</em>, tetapi opsi mengubahnya menjadi <em>all / exclusively</em>.</li>
                        <li><strong>Causal Reversal:</strong> Teks menulis <em>A causes B</em>, tetapi opsi membaliknya menjadi <em>B causes A</em>.</li>
                        <li><strong>Temporal Shift:</strong> Teks menyebut <em>in the future / under development</em>, tetapi opsi menulis <em>already widely used for decades</em>.</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Text: 'Some deep-sea cephalopods produce bioluminescent light to startle predators.' Why is the statement 'All deep-sea cephalopods use bioluminescence to attract prey' FALSE?",
                langkah: "Ada 2 kesalahan fatal: (1) mengubah 'Some' menjadi 'All', dan (2) mengubah fungsi 'to startle predators' (mengejutkan pemangsa) menjadi 'to attract prey' (menarik mangsa)."
            },
            gameQuestions: [
                {
                    q: "Read the passage below:\n'Coffee rust, caused by the fungus Hemileia vastatrix, wiped out Sri Lanka's coffee plantations in the 1870s, forcing colonial planters to replace coffee fields with tea estates. Today, while Arabica coffee remains highly susceptible to the fungus, Robusta coffee possesses natural genetic resistance, though its beans command a lower market price due to their more bitter flavor profile.'\nWhich of the following statements is TRUE according to the passage?",
                    opts: [
                        "Sri Lankan planters replaced tea estates with coffee plantations in the 1870s.",
                        "Arabica coffee is naturally immune to the fungus Hemileia vastatrix.",
                        "Robusta coffee is more resistant to coffee rust than Arabica coffee, but its beans sell for a lower price.",
                        "Coffee rust is caused by a bacterial infection that only affects tea leaves."
                    ],
                    ans: 2,
                    exp: "Sesuai kalimat kedua: Arabica sangat rentan (susceptible), sedangkan Robusta memiliki ketahanan genetik alami terhadap jamur karat daun kopi meskipun harga pasarnya lebih rendah."
                },
                {
                    q: "Based on the Coffee Rust passage in the previous question, all of the following statements are true EXCEPT...",
                    opts: [
                        "Coffee rust is caused by a fungal pathogen named Hemileia vastatrix.",
                        "Sri Lanka shifted from coffee cultivation to tea cultivation in the late nineteenth century.",
                        "Robusta coffee beans have a more bitter taste than Arabica beans.",
                        "Robusta coffee beans are more expensive than Arabica beans because of their fungus resistance."
                    ],
                    ans: 3,
                    exp: "Untuk soal 'EXCEPT' (cari yang SALAH): opsi D salah karena teks menyebutkan bahwa biji kopi Robusta memiliki harga pasar yang lebih rendah ('command a lower market price'), bukan lebih mahal."
                },
                {
                    q: "Read the text:\n'While hydrogen fuel cells emit only water vapor during operation, nearly 95 percent of global hydrogen is currently produced via steam methane reforming—a process that releases substantial carbon dioxide.'\nWhich statement is SUPPORTED by the text?",
                    opts: [
                        "Most hydrogen fuel today is still produced through a method that generates significant carbon emissions.",
                        "Hydrogen fuel cells emit large amounts of methane gas from vehicle exhaust pipes.",
                        "Steam methane reforming is a completely carbon-free method of producing hydrogen.",
                        "Ninety-five percent of cars in the world currently run on hydrogen fuel cells."
                    ],
                    ans: 0,
                    exp: "Angka 'nearly 95 percent' setara dengan 'Most', dan 'releases substantial carbon dioxide' setara dengan 'generates significant carbon emissions'."
                }
            ]
        },
        {
            key: "lbe_0_11",
            kategori: "Reading Comprehension & Critical Analysis",
            judul: "Detailing Facts vs Unsupported Claims",
            ringkasan: `
                <p>Dalam literasi kritis bahasa Inggris (termasuk model soal <em>forum discussion thread</em> atau artikel opini), kamu diminta membedakan <strong>Verified Empirical Facts</strong>, <strong>Reasoned Opinions</strong>, dan <strong>Unsupported Claims / Speculations</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Kategori Pernyataan</th>
                                <th class="p-2 border border-slate-200 text-left">Ciri Penanda Bahasa Inggris</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold">Empirical Fact (Supported)</td>
                                <td class="p-2">Didukung data riset terukur, catatan sejarah, atau observasi langsung: <em>"Clinical trials on 500 patients showed a 34% reduction..."</em></td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Unsupported Claim / Speculation</td>
                                <td class="p-2">Klaim sepihak tanpa bukti, rumor, atau generalisasi berlebihan: <em>"Everyone knows that...", "It is rumored that...", "Surely this will..."</em></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Manakah yang merupakan Unsupported Claim? (A) 'Satellite telemetry recorded a 12% decline in Arctic sea ice extent between 2000 and 2020.' vs (B) 'Many people believe that polar bears will easily adapt by learning to eat grass on land.'",
                langkah: "Kalimat (A) adalah fakta terukur dari telemetri satelit. Kalimat (B) ('Many people believe...') adalah klaim tanpa bukti ilmiah (unsupported claim)."
            },
            gameQuestions: [
                {
                    q: "Read the four sentences below from an article on sleep science:\n(1) Polysomnography recordings indicate that human sleep cycles alternate between non-REM and REM stages approximately every 90 minutes.\n(2) During REM sleep, brain metabolic activity reaches levels comparable to waking hours while skeletal muscles experience temporary paralysis.\n(3) Some popular wellness bloggers claim that drinking celery juice before bed guarantees lucid dreaming every single night.\n(4) A 2024 longitudinal study of 4,000 adults found that chronic sleep deprivation (<5 hours per night) correlated with a 28% higher incidence of hypertension.\nWhich sentence represents an UNSUPPORTED CLAIM lacking scientific evidence?",
                    opts: [
                        "Sentence (1)",
                        "Sentence (2)",
                        "Sentence (3)",
                        "Sentence (4)"
                    ],
                    ans: 2,
                    exp: "Kalimat (3) hanya mengutip klaim sepihak blogger ('Some popular wellness bloggers claim... guarantees...') tanpa dasar penelitian ilmiah, sedangkan kalimat (1), (2), dan (4) didasarkan pada rekaman medis dan studi longitudinal."
                },
                {
                    q: "In an online discussion thread about urban cycling lanes, which participant provides the most CREDIBLE and well-supported argument?",
                    opts: [
                        "User_A: 'Nobody in our city ever uses bike lanes because it is always too hot outside!'",
                        "User_B: 'According to the Municipal Transport Department's 2025 annual count, daily commuter traffic on protected bike lanes increased by 42% within six months of installation, while pedestrian-cyclist collisions dropped by 19%.'",
                        "User_C: 'Bike lanes are a secret conspiracy by bicycle manufacturers to ruin car dealerships.'",
                        "User_D: 'My cousin told me that bike lanes make traffic ten times worse everywhere in the world.'"
                    ],
                    ans: 1,
                    exp: "User_B menyertakan sumber resmi ('Municipal Transport Department's 2025 annual count') dan data kuantitatif yang terukur serta relevan, sedangkan peserta lain hanya melontarkan generalisasi ekstrem, teori konspirasi, atau anekdot sepihak."
                },
                {
                    q: "Which of the following phrases in a passage signals that the author is presenting a tentative hypothesis rather than an established fact?",
                    opts: [
                        "Chemical analysis conclusively demonstrates that...",
                        "Historical census records confirm that...",
                        "Preliminary observations suggest that this phenomenon might be linked to...",
                        "Thermodynamic laws dictate that..."
                    ],
                    ans: 2,
                    exp: "Frasa 'Preliminary observations suggest that... might be linked to...' menggunakan kata kerja tentatif ('suggest') dan modal kemungkinan ('might'), yang menandai hipotesis awal dan bukan fakta final."
                }
            ]
        },
        {
            key: "lbe_0_12",
            kategori: "Reading Comprehension & Critical Analysis",
            judul: "Comparative Analysis of Two Related Passages (Synthesis)",
            ringkasan: `
                <p>Soal <strong>Paired Passages (Text 1 & Text 2)</strong> di LBE menguji kemampuan membandingkan dan menyintesiskan dua teks pendek yang membahas topik serumpun.</p>
                <div class="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1.5 my-2">
                    <div class="font-bold text-teal-800">⚡ 3 Pola Hubungan Text 1 & Text 2 di UTBK LBE:</div>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><strong>Problem &rarr; Solution / Application:</strong> Text 1 memaparkan masalah/fenomena umum, sedangkan Text 2 memaparkan solusi teknologi atau studi kasus spesifiknya.</li>
                        <li><strong>Support &rarr; Qualification / Counter-perspective:</strong> Text 1 menyoroti manfaat suatu inovasi, sedangkan Text 2 memberikan catatan kritis, risiko, atau batasan penerapannya.</li>
                        <li><strong>General Theory &rarr; Specific Exception:</strong> Text 1 menjelaskan aturan umum di alam, sedangkan Text 2 menunjukkan spesies/kasus unik yang menjadi pengecualian.</li>
                    </ul>
                </div>
            `,
            contoh: {
                soal: "Text 1 explains how reforestation absorbs atmospheric carbon. Text 2 warns that planting monoculture non-native eucalyptus plantations can deplete local groundwater and reduce native biodiversity. How does Text 2 relate to Text 1?",
                langkah: "Text 2 memberikan kualifikasi/peringatan penting terhadap solusi reforestasi di Text 1, bahwa reforestasi monokultur spesies asing justru bisa merusak air tanah dan biodiversitas."
            },
            gameQuestions: [
                {
                    q: "Read the two texts below:\n[Text 1] Desalination plants using reverse osmosis technology have enabled arid coastal nations in the Middle East to supply millions of cubic meters of fresh drinking water daily from seawater.\n[Text 2] For every liter of freshwater produced by reverse osmosis desalination, approximately 1.5 liters of hypersaline brine laced with anti-scaling chemicals are discharged back into the sea, depleting dissolved oxygen along the ocean floor.\nWhat is the relationship between Text 1 and Text 2?",
                    opts: [
                        "Text 2 proves that reverse osmosis cannot produce fresh drinking water from seawater.",
                        "Text 1 highlights the practical benefit of desalination for water-scarce nations, whereas Text 2 examines the harmful marine environmental byproduct of the same process.",
                        "Both texts argue that desalination plants should be built in tropical rainforests.",
                        "Text 2 provides a historical biography of the engineer who invented Text 1's technology."
                    ],
                    ans: 1,
                    exp: "Text 1 menyoroti manfaat penyediaan air bersih dari desalinasi osmosis balik, sedangkan Text 2 memaparkan dampak negatif limbah air garam pekat (hypersaline brine) dari proses tersebut terhadap ekosistem dasar laut."
                },
                {
                    q: "Based on Text 1 and Text 2 in the previous question, on which point would the authors of both texts most likely AGREE?",
                    opts: [
                        "Desalination has zero impact on coastal marine ecosystems.",
                        "Reverse osmosis desalination is an active industrial process that converts seawater into freshwater on a large scale.",
                        "Middle Eastern nations no longer need fresh drinking water.",
                        "Hypersaline brine is safe for humans to drink without treatment."
                    ],
                    ans: 1,
                    exp: "Kedua penulis sama-sama mengakui fakta bahwa desalinasi osmosis balik mengubah air laut menjadi air tawar (Text 1 membahas kapasitas produksinya, Text 2 membahas rasio air tawar terhadap limbah brine yang dihasilkannya)."
                },
                {
                    q: "Read the two excerpts:\n[Text A] Classical economists assumed that consumers always make rational purchasing decisions by weighing utility against price.\n[Text B] Behavioral economists such as Daniel Kahneman demonstrated through empirical experiments that human financial choices are systematically skewed by cognitive biases, loss aversion, and emotional framing.\nHow does Text B respond to the view presented in Text A?",
                    opts: [
                        "It reinforces Text A's assumption with additional mathematical equations.",
                        "It challenges Text A's assumption of pure consumer rationality by presenting experimental evidence of psychological biases.",
                        "It argues that economics should not study consumer purchasing decisions at all.",
                        "It agrees that emotional framing never affects financial choices."
                    ],
                    ans: 1,
                    exp: "Text B menyanggah (challenges) asumsi rasionalitas murni ekonom klasik di Text A dengan bukti eksperimen bahwa keputusan manusia dipengaruhi oleh bias kognitif dan emosi."
                }
            ]
        },
        {
            key: "lbe_0_13",
            kategori: "Reading Comprehension & Critical Analysis",
            judul: "Discourse Structure and Transitional Organization",
            ringkasan: `
                <p>Pertanyaan <strong>Discourse Structure & Transition</strong> mencakup: <em>"How is the passage organized?"</em>, <em>"What is the topic of the preceding/following paragraph?"</em>, serta pemilihan <strong>kata hubung transisi (<em>Moreover, However, Consequently, For instance</em>)</strong>.</p>
                <div class="my-3 overflow-x-auto">
                    <table class="w-full text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-2 border border-slate-200 text-left">Tipe Pertanyaan Struktur</th>
                                <th class="p-2 border border-slate-200 text-left">Kunci Jawaban Cepat</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-2 font-semibold"><em>Preceding Paragraph</em> (Paragraf Sebelumnya)</td>
                                <td class="p-2">Baca <strong>kalimat pertama Paragraf 1</strong>! Perhatikan kata rujukan seperti <em>"In addition to these mechanical methods,..."</em> &rarr; berarti paragraf sebelumnya membahas <em>mechanical methods</em>!</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold"><em>Following Paragraph</em> (Paragraf Sesudahnya)</td>
                                <td class="p-2">Baca <strong>kalimat paling akhir dari paragraf terakhir</strong>! Topik baru yang diperkenalkan di ujung kalimat itulah isi paragraf berikutnya.</td>
                            </tr>
                            <tr>
                                <td class="p-2 font-semibold">Logical Connectors</td>
                                <td class="p-2"><strong>Contrast:</strong> <em>However, Nevertheless, Conversely</em> | <strong>Result:</strong> <em>Consequently, Therefore, Thus</em> | <strong>Addition:</strong> <em>Furthermore, Moreover</em></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            contoh: {
                soal: "Kalimat pertama Paragraf 1 berbunyi: 'While physical barriers such as seawalls can temporarily halt coastal erosion, biological restoration offers a more self-sustaining defense.' Apakah topik paragraf yang mendahului (preceding) teks ini?",
                langkah: "Frasa pembuka 'While physical barriers such as seawalls...' merujuk kembali pada bahasan sebelumnya, yaitu penggunaan penghalang fisik seperti tanggul laut (seawalls) untuk menahan erosi pantai."
            },
            gameQuestions: [
                {
                    q: "Read the opening sentence of a passage:\n'Unlike these early mechanical calculators that relied on rotating brass gears, the first generation of electronic computers in the 1940s used thousands of vacuum tubes to process binary data.'\nWhat was most likely the topic of the paragraph IMMEDIATELY PRECEDING (before) this passage?",
                    opts: [
                        "Modern smartphones and cloud computing in the twenty-first century",
                        "Early mechanical calculators and how they operated using gear mechanisms",
                        "The biography of astronauts who landed on the Moon in 1969",
                        "How fiber-optic cables transmit laser light across oceans"
                    ],
                    ans: 1,
                    exp: "Frasa rujukan 'Unlike these early mechanical calculators that relied on rotating brass gears' di awal kalimat menunjukkan bahwa paragraf tepat sebelumnya baru saja membahas kalkulator mekanis awal yang menggunakan roda gigi kuningan."
                },
                {
                    q: "Read the final sentence of a passage:\n'Thus, while soil solarization effectively eradicates shallow weed seeds without synthetic herbicides, farmers dealing with deep-rooted perennial weeds must turn to integrated biological control agents.'\nThe paragraph IMMEDIATELY FOLLOWING this passage will most likely discuss...",
                    opts: [
                        "The chemical formula of synthetic herbicides banned in the 1970s",
                        "How integrated biological control agents are used to manage deep-rooted perennial weeds",
                        "Recipes for cooking organic vegetables at home",
                        "Why soil solarization is the only method needed for all types of weeds"
                    ],
                    ans: 1,
                    exp: "Kalimat terakhir memperkenalkan subtopik baru di bagian akhirnya ('must turn to integrated biological control agents' untuk mengatasi gulma berakar dalam), yang menjadi jembatan langsung menuju paragraf berikutnya."
                },
                {
                    q: "Choose the most appropriate transitional word to complete the excerpt:\n'Boreal peatlands store nearly twice as much carbon as all the world's forests combined. [...], when these waterlogged ecosystems dry out due to warming temperatures, aerobic bacteria rapidly decompose the peat and release massive quantities of greenhouse gases.'",
                    opts: [
                        "Similarly",
                        "However",
                        "For example",
                        "Therefore"
                    ],
                    ans: 1,
                    exp: "Kalimat pertama menyampaikan fakta positif (lahan gambut menyimpan cadangan karbon raksasa), sedangkan kalimat kedua memaparkan kondisi berlawanan yang berbahaya saat gambut mengering. Transisi kontras yang tepat adalah 'However'."
                }
            ]
        }
    ]
};
