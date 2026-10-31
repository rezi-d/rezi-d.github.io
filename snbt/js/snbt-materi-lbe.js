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
                },
                {
                    q: "Read the paragraph below:\n'Traditional concrete production accounts for roughly 8 percent of global carbon dioxide emissions, primarily due to the calcination of limestone in high-temperature kilns. Recently, materials scientists have developed bio-cement using Sporosarcina pasteurii bacteria, which precipitate calcium carbonate at ambient temperatures and significantly cut carbon footprints.'\nWhat is the main idea of the paragraph?",
                    opts: [
                        "Limestone calcination requires high-temperature kilns that operate continuously.",
                        "Bacteria-based bio-cement offers a low-carbon alternative to high-emission traditional concrete production.",
                        "Sporosarcina pasteurii bacteria can only survive inside high-temperature industrial kilns.",
                        "Global carbon dioxide emissions have decreased by 8 percent over the past decade."
                    ],
                    ans: 1,
                    exp: "Kalimat pertama menjelaskan masalah tingginya emisi karbon dari produksi beton tradisional, lalu kalimat kedua memaparkan solusi utamanya yaitu bio-semen berbasis bakteri yang rendah emisi pada suhu ruang."
                },
                {
                    q: "Read the excerpt below:\n'For over a century, historians attributed the rapid collapse of the Bronze Age civilizations around 1200 BCE solely to invasions by the mysterious Sea Peoples. However, paleoclimatic core samples from the Eastern Mediterranean now indicate that a multicentury megadrought crippled agricultural yields first, triggering internal famines and social rebellions that made empires vulnerable to external raiders.'\nWhat is the main idea of the excerpt?",
                    opts: [
                        "The Sea Peoples were the only cause of the Bronze Age collapse around 1200 BCE.",
                        "New paleoclimatic evidence shows that severe drought and resulting internal instability, rather than invasions alone, drove the Bronze Age collapse.",
                        "Agricultural yields in the Eastern Mediterranean reached record highs during 1200 BCE.",
                        "Historians no longer study the Bronze Age civilizations of the Eastern Mediterranean."
                    ],
                    ans: 1,
                    exp: "Kata transisi 'However' pada kalimat kedua menggeser anggapan lama (invasi semata) ke gagasan utama baru: bukti paleoklimatologi menunjukkan kekeringan panjang dan krisis pangan internal adalah pemicu utama keruntuhan Zaman Perunggu."
                },
                {
                    q: "Read the paragraph below:\n'Mycorrhizal fungi form intricate underground networks that connect the roots of different trees across a forest floor. Through this symbiotic web, mature canopy trees transfer surplus carbon, nitrogen, and phosphorus to shaded seedlings, while also transmitting chemical warning signals when insect outbreaks occur.'\nWhat is the best title for this paragraph?",
                    opts: [
                        "How Insect Outbreaks Destroy Forest Canopies",
                        "The Symbiotic Underground Nutrient and Signaling Network of Mycorrhizal Fungi",
                        "Chemical Differences Between Nitrogen and Phosphorus in Soil",
                        "Why Shaded Seedlings Cannot Perform Photosynthesis"
                    ],
                    ans: 1,
                    exp: "Paragraf ini membahas jaringan bawah tanah jamur mikoriza yang menghubungkan akar pohon untuk berbagi nutrisi sekaligus mengirim sinyal peringatan kimiawi. Opsi B merangkum topik tersebut dalam bentuk noun phrase yang tepat."
                },
                {
                    q: "Read the paragraph below:\n'While dark-colored solar panels absorb broad spectra of sunlight, they also trap substantial thermal energy that degrades photovoltaic efficiency on scorching afternoons. By applying a microscopic radiative-cooling photonic film onto panel surfaces, engineers can reflect sub-bandgap infrared heat back into space, lowering panel operating temperatures by up to 10°C and boosting power output.'\nWhat is the central point of the paragraph?",
                    opts: [
                        "Solar panels should only be installed in cold polar regions to prevent overheating.",
                        "Radiative-cooling photonic films improve solar panel efficiency by dissipating excess heat.",
                        "Dark-colored solar panels cannot absorb sunlight during scorching afternoons.",
                        "Infrared light is the primary source of electricity in standard silicon solar cells."
                    ],
                    ans: 1,
                    exp: "Kalimat pertama menyajikan masalah penurunan efisiensi panel surya akibat panas berlebih, dan kalimat kedua menjelaskan gagasan pokok tentang penggunaan lapisan fotonik pendingin radiatif untuk menurunkan suhu dan meningkatkan daya."
                },
                {
                    q: "Read the excerpt below:\n'Circadian rhythms govern not only sleep-wake cycles in humans but also the metabolic efficacy of pharmaceutical drugs. Clinical chronotherapy trials demonstrate that administering hypertension and chemotherapy medications at specific biological clock phases maximizes therapeutic action on target tissues while minimizing toxicity to healthy organs.'\nWhat does the excerpt mainly discuss?",
                    opts: [
                        "The history of insomnia treatments in nineteenth-century hospitals.",
                        "How aligning drug administration with human circadian rhythms optimizes treatment efficacy and reduces side effects.",
                        "Why chemotherapy medications are more expensive than hypertension drugs.",
                        "How to reset the human biological clock after international air travel."
                    ],
                    ans: 1,
                    exp: "Fokus utama kutipan tersebut adalah kronoterapi klinis—bagaimana pemberian obat yang diselaraskan dengan ritme sirkadian tubuh meningkatkan efektivitas pengobatan dan menekan efek samping toksik."
                },
                {
                    q: "Read the paragraph below:\n'Conventional lithium-ion battery recycling relies on energy-intensive smelting or corrosive acid leaching to recover metals. In contrast, newly developed ultrasonic delamination uses high-frequency sound waves in mild citric acid solutions to cavitate and peel active cathode materials off aluminum foils in minutes, achieving higher recovery rates with minimal toxic waste.'\nWhat is the primary topic of the paragraph?",
                    opts: [
                        "The environmental hazards of mining raw aluminum ore",
                        "An eco-friendly ultrasonic delamination method for recycling lithium-ion battery cathodes",
                        "How high-frequency sound waves are used in medical ultrasound imaging",
                        "Why citric acid is found naturally in citrus fruits"
                    ],
                    ans: 1,
                    exp: "Kalimat ke-2 yang diawali 'In contrast' menyoroti topik utama paragraf, yaitu inovasi metode delaminasi ultrasonik yang ramah lingkungan dan efisien untuk mendaur ulang katoda baterai litium-ion."
                },
                {
                    q: "Read the paragraph below:\n'Despite having brain volumes roughly one-hundredth the size of human brains, corvids such as New Caledonian crows exhibit remarkable causal reasoning and tool-manufacturing skills. Neurobiological studies reveal that instead of a layered mammalian neocortex, bird brains possess densely packed clusters of neurons in the nidopallium that provide comparable cognitive processing power.'\nWhat is the main idea of the paragraph?",
                    opts: [
                        "New Caledonian crows have larger brains than most mammals.",
                        "Corvids achieve advanced cognitive and tool-making abilities through densely packed neural structures despite their small brain size.",
                        "Mammals cannot manufacture tools because their neocortex is arranged in layers.",
                        "Neurobiologists have failed to understand how bird brains process visual information."
                    ],
                    ans: 1,
                    exp: "Paragraf ini menjelaskan bahwa meskipun ukuran otak burung korvid kecil dan tidak memiliki neokorteks berlapis seperti mamalia, kepadatan neuron di area nidopallium memungkinkan kemampuan kognitif dan pembuatan alat yang tinggi."
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
                },
                {
                    q: "Read the passage below:\n'Archaeological excavations at Pompeii revealed dozens of thermopolia—street-side counters with sunken terracotta jars used to serve hot food and spiced wine. Strikingly, many modest residential apartments nearby lacked private kitchens or cooking hearths altogether.'\nWhat can be reasonably inferred about daily life in Pompeii from this passage?",
                    opts: [
                        "Wealthy elites in Pompeii were legally forbidden from owning private kitchens.",
                        "Many working-class or apartment-dwelling residents in Pompeii relied regularly on street-side food vendors for their cooked meals.",
                        "Thermopolia only served cold raw vegetables to foreign tourists.",
                        "Terracotta jars could not withstand the heat of cooked food."
                    ],
                    ans: 1,
                    exp: "Karena terdapat banyak kedai makanan panas (thermopolia) di pinggir jalan dan banyak apartemen hunian sederhana di sekitarnya tidak memiliki dapur pribadi, dapat disimpulkan bahwa banyak warga mengandalkan kedai tersebut untuk makanan matang sehari-hari."
                },
                {
                    q: "Read the excerpt below:\n'When sea otters were hunted to near extinction along the Pacific coast in the nineteenth century, coastal kelp forests vanished rapidly. In areas where sea otter populations were later reintroduced in the late twentieth century, kelp forests rebounded within a decade.'\nWhat can be inferred from the excerpt?",
                    opts: [
                        "Sea otters feed primarily on giant kelp leaves.",
                        "The presence of sea otters plays a critical ecological role in preserving coastal kelp forest ecosystems.",
                        "Kelp forests cannot grow in the Pacific Ocean during the twentieth century.",
                        "Nineteenth-century hunters intentionally uprooted kelp forests to catch fish."
                    ],
                    ans: 1,
                    exp: "Hilangnya hutan kelp saat berang-berang laut hampir punah dan pulihnya kembali hutan kelp saat berang-berang laut diperkenalkan kembali membuktikan peran ekologis krusial berang-berang laut dalam menjaga ekosistem hutan kelp."
                },
                {
                    q: "Read the text below:\n'Antibacterial soaps containing triclosan were marketed for decades as superior to plain soap for preventing household illnesses. However, controlled clinical studies conducted by the FDA found no statistically significant difference in bacterial reduction on hands washed with triclosan soap versus plain soap and water, while noting that triclosan exposure promoted cross-resistance to medical antibiotics.'\nWhat can be concluded from the FDA's findings?",
                    opts: [
                        "Plain soap and water cannot remove any bacteria from human hands.",
                        "Using triclosan soap in households introduces potential antibiotic-resistance risks without offering added hygiene benefits over plain soap.",
                        "Triclosan is the most effective medicine for curing viral colds in hospitals.",
                        "The FDA recommends washing hands without water."
                    ],
                    ans: 1,
                    exp: "Karena sabun triclosan tidak memberikan pengurangan bakteri yang lebih baik daripada sabun biasa namun justru memicu resistensi silang terhadap antibiotik medis, dapat disimpulkan bahwa penggunaannya membawa risiko tanpa manfaat kebersihan tambahan."
                },
                {
                    q: "Read the passage below:\n'In 1995, astronomers discovered 51 Pegasi b, a gas giant with half the mass of Jupiter orbiting closer to its star than Mercury orbits the Sun. Prior to this discovery, planetary formation models held that gas giants could only form and remain in cold outer orbits beyond the frost line.'\nWhat does the discovery of 51 Pegasi b imply about pre-1995 planetary formation models?",
                    opts: [
                        "Pre-1995 models were completely accurate and required no adjustments.",
                        "Pre-1995 models were incomplete because they did not account for mechanisms such as inward planetary migration.",
                        "Mercury is actually a gas giant larger than Jupiter.",
                        "Gas giants can never exist anywhere in the Milky Way galaxy."
                    ],
                    ans: 1,
                    exp: "Karena model sebelum 1995 menyatakan planet gas raksasa hanya bisa berada di orbit luar yang dingin, penemuan planet gas raksasa yang mengorbit sangat dekat dengan bintangnya menyiratkan bahwa model lama tersebut belum lengkap dan perlu direvisi."
                },
                {
                    q: "Read the excerpt below:\n'Venomous cone snails paralyze fast-swimming fish using a complex cocktail of hundreds of conotoxins, each targeting a specific ion channel in the prey's nervous system. Pharmaceutical researchers have synthesized one such peptide, ziconotide, which blocks calcium channels in human pain pathways without binding to opioid receptors.'\nWhat can be inferred about the drug ziconotide?",
                    opts: [
                        "It causes severe paralysis in fast-swimming fish when taken by humans.",
                        "It can relieve severe pain in humans without carrying the addiction risks associated with opioid receptor activation.",
                        "It must be harvested directly from living fish in coral reefs.",
                        "It binds exclusively to opioid receptors in the human brain."
                    ],
                    ans: 1,
                    exp: "Karena ziconotide memblokir saluran kalsium pada jalur nyeri manusia tanpa mengikat reseptor opioid, dapat disimpulkan bahwa obat ini bekerja meredakan nyeri melalui mekanisme non-opioid (sehingga terhindar dari efek ketergantungan khas reseptor opioid)."
                },
                {
                    q: "Read the text below:\n'Lichens are composite organisms consisting of a fungus and a photosynthetic alga or cyanobacterium. Because lichens absorb water and dissolved minerals directly from rainwater and atmospheric dust across their entire surface rather than through roots, and lack protective waxy cuticles to filter out toxins, ecologists frequently survey lichen diversity near industrial zones.'\nWhy do ecologists survey lichen diversity near industrial zones?",
                    opts: [
                        "Because lichens grow deep underground roots that purify industrial soil.",
                        "Because lichens are highly sensitive to airborne pollutants and serve as reliable bioindicators of air quality.",
                        "Because industrial factories use lichens as their primary fuel source.",
                        "Because lichens thrive only in heavily polluted air containing sulfur dioxide."
                    ],
                    ans: 1,
                    exp: "Karena lumut kerak (lichens) menyerap air dan mineral langsung dari udara/hujan di seluruh permukaannya tanpa kutikula pelindung penyaring racun, mereka sangat peka terhadap polusi udara dan dapat dijadikan bioindikator kualitas udara."
                },
                {
                    q: "Read the statement below:\n'In blind taste tests where the color of white wine was artificially dyed red with odorless food coloring, professional sommeliers consistently described the wine using vocabulary typically reserved for red grape varieties, such as crushed berries, tannins, and dark plum.'\nWhat can be logically concluded from this experiment?",
                    opts: [
                        "Odorless red food coloring has a strong dark plum flavor.",
                        "Visual expectations can significantly influence olfactory and gustatory perception, even among trained experts.",
                        "Professional sommeliers have a weaker sense of smell than untrained consumers.",
                        "White wine and red wine have identical chemical compositions."
                    ],
                    ans: 1,
                    exp: "Fakta bahwa para ahli anggur (sommeliers) mendeskripsikan anggur putih yang diberi pewarna merah tak berbau menggunakan istilah rasa anggur merah membuktikan bahwa ekspektasi visual sangat memengaruhi persepsi penciuman dan pengecapan."
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
                },
                {
                    q: "Read the two-paragraph passage below:\n[1] Precision fermentation uses genetically engineered microorganisms—such as yeast or fungi—programmed with specific DNA sequences to produce dairy proteins like casein and whey in bioreactor tanks without raising cattle.\n[2] Although this technology could reduce agricultural land use and methane emissions by over 80 percent, scaling up bioreactor capacity to compete with conventional dairy prices remains a major engineering hurdle.\nWhich of the following best summarizes the passage?",
                    opts: [
                        "Yeast and fungi naturally produce cow milk in the wild without genetic engineering.",
                        "Precision fermentation offers a low-emission method to produce dairy proteins via engineered microbes, though commercial cost-competitiveness requires overcoming large-scale production challenges.",
                        "Conventional dairy farming reduces methane emissions by 80 percent compared to bioreactor tanks.",
                        "Consumers refuse to buy dairy products made in stainless-steel bioreactors."
                    ],
                    ans: 1,
                    exp: "Opsi B menggabungkan poin utama Paragraf 1 (konsep fermentasi presisi penghasil protein susu menggunakan mikroba rekayasa) dan Paragraf 2 (manfaat lingkungan serta tantangan skala produksi agar kompetitif secara biaya)."
                },
                {
                    q: "Read the passage below:\n[1] During the nineteenth century, London's rapid industrialization led to severe wastewater contamination of the River Thames, culminating in the 'Great Stink' of 1858 and recurrent cholera outbreaks.\n[2] In response, civil engineer Joseph Bazalgette designed an extensive network of brick-lined intercepting sewers and riverside embankments that diverted waste downstream, drastically reducing waterborne mortality and modernizing urban sanitation.\nWhich sentence provides the best summary of the passage?",
                    opts: [
                        "Joseph Bazalgette built riverside embankments along the River Thames using millions of red bricks.",
                        "Severe river pollution and cholera epidemics in nineteenth-century London prompted the construction of Bazalgette's intercepting sewer system, which transformed public health and urban sanitation.",
                        "Cholera outbreaks in 1858 were caused by air pollution from coal-burning factories in London.",
                        "London's sewer network was the only engineering project completed in Europe during the nineteenth century."
                    ],
                    ans: 1,
                    exp: "Opsi B mencakup masalah di Paragraf 1 (pencemaran Sungai Thames dan wabah kolera di London abad ke-19) serta solusi dan dampaknya di Paragraf 2 (pembangunan sistem selokan Bazalgette yang memulihkan kesehatan publik)."
                },
                {
                    q: "Read the passage below:\n[1] Permafrost soils across the Arctic circle lock away approximately 1,500 billion tons of ancient organic carbon that has remained frozen for millennia.\n[2] As polar regions warm at nearly four times the global average rate, thawing permafrost allows soil microbes to digest this organic matter, releasing methane and carbon dioxide in a self-reinforcing feedback loop that accelerates global climate change.\nWhich option best summarizes the passage?",
                    opts: [
                        "Arctic permafrost has remained completely frozen for thousands of years and will never thaw.",
                        "Rapid Arctic warming is thawing carbon-rich permafrost, enabling microbial decomposition that releases greenhouse gases and further accelerates warming.",
                        "Soil microbes cannot survive in the Arctic circle because temperatures are too low.",
                        "Polar regions warm four times slower than tropical rainforests."
                    ],
                    ans: 1,
                    exp: "Ringkasan pada opsi B merangkum cadangan karbon di permafrost Arktik (Paragraf 1) dan mekanisme pencairannya akibat pemanasan cepat yang melepaskan gas rumah kaca melalui dekomposisi mikroba (Paragraf 2)."
                },
                {
                    q: "Read the passage below:\n[1] Microfinance institutions emerged in the late twentieth century to provide small, collateral-free loans to low-income entrepreneurs in developing countries who were excluded from traditional banking.\n[2] Empirical evaluations over the past two decades show that while microcredit helps households smooth seasonal income fluctuations and sustain small retail ventures, it rarely transforms subsistence businesses into large enterprises without complementary training and infrastructure.\nWhat is the best summary of the passage?",
                    opts: [
                        "Microfinance institutions charge higher interest rates than traditional commercial banks.",
                        "Created to give unbanked low-income entrepreneurs access to capital, microfinance stabilizes household finances and small ventures but rarely drives large-scale business growth on its own.",
                        "Low-income entrepreneurs in developing countries prefer traditional banks over microfinance institutions.",
                        "Small businesses always grow into large corporations within two decades of receiving a microcredit loan."
                    ],
                    ans: 1,
                    exp: "Opsi B menyintesiskan tujuan awal lembaga keuangan mikro di Paragraf 1 dan hasil evaluasi empiris mengenai manfaat serta keterbatasannya di Paragraf 2."
                },
                {
                    q: "Read the two-paragraph text below:\n[1] Bacteriophages—viruses that infect and lyse specific bacterial species without harming human cells—were studied as antibacterial treatments in the 1920s before the widespread adoption of chemical antibiotics like penicillin.\n[2] Today, with the alarming rise of multidrug-resistant superbugs, biomedical researchers are reviving phage therapy and combining it with CRISPR gene editing to target antibiotic-resistant infections.\nWhich sentence best summarizes the text?",
                    opts: [
                        "Penicillin was discovered in the 1920s and immediately eradicated all bacteriophages.",
                        "Once overshadowed by chemical antibiotics, bacteriophage therapy is being revived and enhanced with modern genetic tools to combat multidrug-resistant bacterial infections.",
                        "Bacteriophages are dangerous viruses that infect human cells and cause antibiotic resistance.",
                        "CRISPR gene editing can only be used on chemical antibiotics such as penicillin."
                    ],
                    ans: 1,
                    exp: "Opsi B merangkum sejarah terapi bakteriofag yang sempat tergeser oleh antibiotik kimia (Paragraf 1) serta kebangkitannya kembali menggunakan teknologi modern untuk melawan bakteri kebal antibiotik (Paragraf 2)."
                },
                {
                    q: "Read the passage below:\n[1] Urban heat islands occur when dense concentrations of asphalt roads, dark rooftops, and concrete buildings absorb solar radiation and restrict nighttime cooling, making cities up to 7°C warmer than surrounding rural areas.\n[2] Municipal planners are mitigating this effect by mandating reflective 'cool roofs', expanding tree canopies, and replacing impermeable pavement with porous green corridors.\nWhich of the following is the most accurate summary of the passage?",
                    opts: [
                        "Rural areas are 7°C warmer than cities because they lack tall concrete buildings.",
                        "Cities trap excess heat due to dense heat-absorbing surfaces, prompting urban planners to implement reflective roofing and green infrastructure to cool urban environments.",
                        "Asphalt roads and dark rooftops are cheaper to construct than porous green corridors.",
                        "Tree canopies prevent rainwater from reaching porous pavements in urban parks."
                    ],
                    ans: 1,
                    exp: "Opsi B menyatukan penyebab fenomena pulau bahang perkotaan (urban heat island) di Paragraf 1 dengan langkah-langkah mitigasi tata kota (atap reflektif dan infrastruktur hijau) di Paragraf 2."
                },
                {
                    q: "Read the passage below:\n[1] Deep-sea hydrothermal vents form along mid-ocean ridges where tectonic plates diverge, superheating seawater infused with hydrogen sulfide and dissolved metals to over 350°C.\n[2] Despite complete darkness and crushing hydrostatic pressure, these vents host thriving ecosystems anchored not by photosynthetic plants, but by chemosynthetic bacteria that oxidize sulfur compounds to fix carbon for giant tubeworms and blind shrimp.\nWhich option best summarizes the passage?",
                    opts: [
                        "Giant tubeworms and blind shrimp cannot survive in water temperatures above 350°C.",
                        "Located along tectonic ridges, deep-sea hydrothermal vents support rich, lightless ecosystems powered by sulfur-oxidizing chemosynthetic bacteria rather than sunlight.",
                        "Photosynthetic plants grow abundantly around mid-ocean ridges despite the crushing pressure.",
                        "Tectonic plates diverge only when hydrogen sulfide is released by giant tubeworms."
                    ],
                    ans: 1,
                    exp: "Opsi B secara utuh merangkum pembentukan kawah hidrotermal laut dalam di punggung tengah samudra (Paragraf 1) dan keunikan ekosistem tanpa cahaya yang ditopang oleh bakteri kemosintetik (Paragraf 2)."
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
                },
                {
                    q: "Read the passage below:\n'The Rosetta Stone, unearthed by French soldiers near the town of Rashid in the Nile Delta in July 1799, features a royal decree issued at Memphis in 196 BCE on behalf of King Ptolemy V. Because the identical decree was inscribed in three scripts—Ancient Egyptian hieroglyphs, Demotic script, and Ancient Greek—philologist Jean-François Champollion was able to decipher hieroglyphs in 1822 by comparing them against the known Greek text.'\nAccording to the passage, which script on the Rosetta Stone was already known to scholars and enabled Champollion to decipher hieroglyphs?",
                    opts: [
                        "Latin script",
                        "Ancient Greek",
                        "Cuneiform script",
                        "Phoenician alphabet"
                    ],
                    ans: 1,
                    exp: "Kalimat terakhir menyebutkan secara eksplisit bahwa Champollion berhasil memecahkan hieroglif pada tahun 1822 dengan membandingkannya terhadap teks bahasa Yunani Kuno yang sudah dikenal ('by comparing them against the known Greek text')."
                },
                {
                    q: "Read the excerpt below:\n'Tardigrades, colloquially known as water bears, can survive extreme desiccation by entering a state called anhydrobiosis. During this process, they retract their eight legs, expel over 95 percent of the water from their bodies, and synthesize unique intrinsically disordered proteins (TDPs) that vitrify their cellular cytoplasm into a protective glass-like matrix.'\nAccording to the excerpt, how do tardigrades protect their cellular cytoplasm during extreme dehydration?",
                    opts: [
                        "By absorbing extra water from surrounding moss",
                        "By producing specialized proteins (TDPs) that turn their cytoplasm into a protective glass-like state",
                        "By growing a thick calcium carbonate shell around their legs",
                        "By increasing their metabolic rate by 95 percent"
                    ],
                    ans: 1,
                    exp: "Kalimat kedua menyatakan bahwa tardigrada mensintesis protein khusus (TDPs) yang mengubah sitoplasma selnya menjadi matriks menyerupai kaca pelindung ('vitrify their cellular cytoplasm into a protective glass-like matrix')."
                },
                {
                    q: "Read the text below:\n'Designed by architect Kunlé Adeyemi in Lagos, Nigeria, the Makoko Floating School was constructed primarily from locally harvested bamboo and timber, supported by a buoyant foundation of 256 recycled plastic barrels. The A-frame structure collected rainwater from its roof and generated electricity via rooftop photovoltaic panels.'\nAccording to the text, what provided the buoyancy (floating support) for the Makoko Floating School?",
                    opts: [
                        "Hollow concrete pontoons imported from Europe",
                        "256 recycled plastic barrels beneath the structure",
                        "Inflatable rubber rafts attached to the roof",
                        "Steel pilings driven deep into the lagoon floor"
                    ],
                    ans: 1,
                    exp: "Teks menyebutkan secara langsung: '...supported by a buoyant foundation of 256 recycled plastic barrels.'"
                },
                {
                    q: "Read the passage below:\n'In 1928, Scottish bacteriologist Alexander Fleming returned from a two-week vacation to find that a blue-green mold, Penicillium notatum, had contaminated one of his uncovered Petri dishes containing Staphylococcus bacteria. Around the mold colony, a clear halo had formed where the bacterial cells had undergone lysis and dissolved.'\nWhat specific observation on the Petri dish alerted Fleming to the antibacterial property of the mold?",
                    opts: [
                        "The Staphylococcus bacteria had multiplied to twice their normal size.",
                        "A clear zone had formed around the mold colony where bacteria had been destroyed.",
                        "The glass Petri dish had cracked from the heat produced by the mold.",
                        "The mold had turned bright red after consuming the agar jelly."
                    ],
                    ans: 1,
                    exp: "Kalimat terakhir menjelaskan pengamatan spesifik tersebut: di sekeliling koloni jamur terbentuk lingkaran bening ('a clear halo') tempat sel-sel bakteri mengalami lisis/hancur."
                },
                {
                    q: "Read the excerpt below:\n'The James Webb Space Telescope (JWST) operates at the Sun-Earth Lagrange Point 2 (L2), approximately 1.5 million kilometers beyond Earth's orbit. Because JWST observes the universe primarily in infrared wavelengths, its five-layer Kapton sunshield must keep its mirrors and instruments cooled below 50 Kelvin (-223°C) so the telescope's own thermal glow does not blind its sensors.'\nAccording to the excerpt, why must JWST's instruments be kept below 50 Kelvin?",
                    opts: [
                        "To prevent the Kapton sunshield from freezing in deep space",
                        "To ensure the telescope's own heat radiation does not interfere with its infrared sensors",
                        "To allow astronauts to repair the mirrors at Lagrange Point 2",
                        "To reflect visible light back toward Earth's atmosphere"
                    ],
                    ans: 1,
                    exp: "Bagian akhir kalimat kedua menyebutkan: '...so the telescope's own thermal glow does not blind its sensors' (agar pancaran panas teleskop sendiri tidak mengganggu sensor inframerahnya)."
                },
                {
                    q: "Read the passage below:\n'When Lake Nyos in northwestern Cameroon—a deep crater lake sitting atop a volcanic magma chamber—experienced a limnic eruption in August 1986, it suddenly released an estimated 1.6 million tons of dissolved carbon dioxide gas. Because carbon dioxide is roughly 1.5 times denser than ambient air, the invisible gas cloud hugged the ground and flowed down into surrounding valleys, displacing breathable oxygen.'\nWhy did the carbon dioxide cloud flow down into the valleys rather than rising into the upper atmosphere?",
                    opts: [
                        "Strong monsoon rains pushed the gas cloud toward the ground.",
                        "Carbon dioxide gas is approximately 1.5 times denser (heavier) than normal air.",
                        "The gas was frozen into solid dry-ice blocks inside the crater lake.",
                        "Surrounding mountain trees absorbed the oxygen from the upper sky."
                    ],
                    ans: 1,
                    exp: "Kalimat kedua menyatakan secara eksplisit: 'Because carbon dioxide is roughly 1.5 times denser than ambient air, the invisible gas cloud hugged the ground and flowed down into surrounding valleys'."
                },
                {
                    q: "Read the text below:\n'Silk fibers spun by the golden orb-weaver spider (Nephila clavipes) possess a tensile strength comparable to high-grade alloy steel while weighing only one-sixth as much. Since farming spiders at industrial scale is impractical due to their territorial and cannibalistic behavior, bioengineers have inserted spider fibroin genes into silkworms and goat milk glands to harvest recombinant silk proteins.'\nAccording to the text, why is it impractical to farm golden orb-weaver spiders directly on an industrial scale?",
                    opts: [
                        "They can only spin silk at altitudes above 4,000 meters.",
                        "They are territorial and cannibalistic when kept together in large numbers.",
                        "Their silk dissolves immediately upon contact with oxygen.",
                        "They require a diet of rare tropical orchids."
                    ],
                    ans: 1,
                    exp: "Kalimat kedua menyebutkan alasan spesifiknya: 'Since farming spiders at industrial scale is impractical due to their territorial and cannibalistic behavior...'."
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
                },
                {
                    q: "Read the passage below:\n'Proponents of algorithmic sentencing tools claim that artificial intelligence eliminates human judicial bias. However, because these algorithms are trained on historical arrest records that reflect decades of disproportionate policing in marginalized neighborhoods, they systematically assign higher risk scores to minority defendants. Courts should suspend the use of proprietary risk-scoring algorithms until transparent auditing standards are established.'\nWhat is the author's primary purpose in this passage?",
                    opts: [
                        "To advertise a new software package for law firms.",
                        "To critique the hidden bias in algorithmic sentencing tools and advocate for their suspension pending transparent audits.",
                        "To explain how computer programmers write code in Python.",
                        "To praise courts for replacing all human judges with artificial intelligence."
                    ],
                    ans: 1,
                    exp: "Penulis menyanggah klaim bahwa AI bebas bias dengan menjelaskan sumber bias datanya, lalu menutup dengan rekomendasi kebijakan ('Courts should suspend...'). Tujuannya adalah mengkritisi bias tersebut dan mengadvokasi penangguhannya."
                },
                {
                    q: "Read the excerpt below:\n'To calibrate the spectrophotometer before measuring chlorophyll absorbance, first insert a cuvette filled with pure acetone solvent into the sample holder and press the zero-baseline button. Ensure that the optical glass sides of the cuvette are wiped clean with lint-free lens paper to prevent fingerprint oils from scattering the light beam.'\nWhere would this excerpt most likely appear, and who is its target audience?",
                    opts: [
                        "In a travel brochure for tourists visiting tropical gardens",
                        "In a laboratory manual for biology or analytical chemistry students and technicians",
                        "In a newspaper editorial aimed at city council members",
                        "In a children's storybook about plants and sunlight"
                    ],
                    ans: 1,
                    exp: "Teks berisi instruksi teknis kalibrasi alat spektrofotometer menggunakan kuvet dan pelarut aseton, sehingga ditujukan bagi mahasiswa atau teknisi laboratorium di buku panduan praktikum."
                },
                {
                    q: "Read the passage below:\n'While both mRNA vaccines and traditional inactivated-virus vaccines train the human immune system to recognize pathogens, their production mechanisms differ fundamentally. Inactivated vaccines require growing large quantities of live virus in cell cultures or chicken eggs before chemically neutralizing them, whereas mRNA vaccines use synthetic genetic instructions to prompt host cells to temporarily produce a harmless viral spike protein.'\nThe author's main purpose in the passage is to...",
                    opts: [
                        "Compare and contrast the production mechanisms of mRNA vaccines and inactivated-virus vaccines.",
                        "Convince readers to avoid all forms of vaccination.",
                        "Argue that chicken eggs are too expensive for pharmaceutical companies to purchase.",
                        "Describe the symptoms of seasonal influenza in elderly patients."
                    ],
                    ans: 0,
                    exp: "Struktur kalimat 'While both... their production mechanisms differ fundamentally' diikuti perbandingan cara kerja keduanya menunjukkan bahwa tujuan penulis adalah membandingkan dan mempertentangkan (compare and contrast) kedua jenis vaksin tersebut."
                },
                {
                    q: "Read the excerpt below:\n'Why do songs from our late teens and early twenties evoke more vivid autobiographical memories than music heard at any other stage of life? Neuroscientists call this phenomenon the \"reminiscence bump.\" During late adolescence, surging neurochemical plasticity and identity formation cause the prefrontal cortex and hippocampus to encode novel musical experiences with exceptional emotional intensity.'\nWhy does the author begin the excerpt with a question?",
                    opts: [
                        "Because the author does not know the answer and is asking the reader for help.",
                        "To engage the reader's curiosity and introduce the psychological and neurological explanation that follows.",
                        "To prove that neuroscientists have failed to study musical memory.",
                        "To criticize young people for listening to loud music."
                    ],
                    ans: 1,
                    exp: "Pertanyaan retoris/pembuka di awal paragraf digunakan penulis untuk menarik perhatian pembaca (hook) sekaligus memperkenalkan fenomena 'reminiscence bump' yang langsung dijelaskan secara ilmiah di kalimat berikutnya."
                },
                {
                    q: "Read the text below:\n'Municipalities considering congestion pricing often fear backlash from suburban commuters. Yet, when Stockholm implemented a modest peak-hour toll on bridges entering the city center in 2006, traffic volume dropped by 20 percent immediately, bus punctuality improved, and pediatric asthma hospitalizations fell significantly—leading 53 percent of voters to approve making the system permanent in a subsequent referendum.'\nWhy does the author mention the example of Stockholm in 2006?",
                    opts: [
                        "To show that congestion pricing always fails when put to a public vote.",
                        "To provide empirical evidence that congestion pricing can achieve traffic, health, and public approval benefits despite initial political fears.",
                        "To describe the architectural design of bridges in Sweden.",
                        "To argue that suburban commuters should never visit city centers."
                    ],
                    ans: 1,
                    exp: "Penulis mengangkat studi kasus Stockholm untuk membuktikan secara nyata bahwa meskipun awalnya dikhawatirkan tidak populer, kebijakan jalan berbayar (congestion pricing) mampu menurunkan kemacetan, menyehatkan udara, dan akhirnya didukung mayoritas warga."
                },
                {
                    q: "Read the passage below:\n'For patients newly diagnosed with celiac disease, reading food labels carefully is essential to avoid accidental gluten ingestion. Even products that appear naturally grain-free—such as soy sauce, salad dressings, and processed meats—frequently contain wheat starch as a thickening agent or binding filler. Always look for certified gluten-free seals and consult a registered dietitian when planning your weekly meals.'\nWho is the primary target audience of this passage?",
                    opts: [
                        "Commercial wheat farmers looking to increase crop yields",
                        "Individuals newly diagnosed with celiac disease or managing a gluten-free diet",
                        "Chemical engineers designing industrial food packaging machinery",
                        "Historians studying ancient agricultural practices in Mesopotamia"
                    ],
                    ans: 1,
                    exp: "Kalimat pembuka ('For patients newly diagnosed with celiac disease...') dan sapaan langsung ('Always look... when planning your weekly meals') jelas menunjukkan bahwa audiens sasarannya adalah pasien penyakit celiac atau individu yang menjalani diet bebas gluten."
                },
                {
                    q: "Read the excerpt below:\n'Popular productivity books often glorify multitasking as the ultimate skill for busy professionals. However, functional MRI studies consistently demonstrate that the human prefrontal cortex cannot process two cognitively demanding tasks simultaneously; instead, it rapidly switches attention back and forth, incurring a \"switch cost\" that increases error rates by up to 40 percent and prolongs completion time.'\nWhat is the author's primary purpose in this excerpt?",
                    opts: [
                        "To recommend the best-selling productivity books for corporate managers.",
                        "To refute the popular myth of effective multitasking using neuroscientific evidence.",
                        "To explain how functional MRI machines are manufactured.",
                        "To encourage office workers to perform three tasks at the same time."
                    ],
                    ans: 1,
                    exp: "Penulis mengutip klaim populer tentang multitasking di kalimat pertama lalu membantahnya ('However, functional MRI studies consistently demonstrate...') dengan bukti ilmiah bahwa otak sebenarnya hanya berpindah fokus secara cepat yang justru menurunkan akurasi dan efisiensi."
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
                },
                {
                    q: "Read the excerpt below:\n'Breakthroughs in solid-state battery chemistry are genuinely exciting, offering nearly double the energy density of liquid-electrolyte cells without the risk of flammability. Yet, until manufacturers solve the formation of microscopic lithium dendrites during rapid charging cycles, claims that solid-state cars will dominate showrooms next year remain premature.'\nWhich phrase best captures the author's tone?",
                    opts: [
                        "Hostile and dismissive",
                        "Cautiously optimistic and realistic",
                        "Apathetic and bored",
                        "Unquestioningly enthusiastic"
                    ],
                    ans: 1,
                    exp: "Penulis menyambut positif keunggulan teknologi baterai solid-state ('genuinely exciting'), tetapi tetap realistis mengingatkan kendala teknis dendrit litium yang belum terpecahkan ('Yet, until manufacturers solve... remain premature')."
                },
                {
                    q: "Read the passage below:\n'Despite decades of international treaties pledging to halt deforestation, tropical primary forest loss continued at a staggering rate of 3.7 million hectares in 2023—equivalent to losing ten football fields of ancient canopy every single minute. Paper promises without enforceable supply-chain penalties have proven woefully inadequate.'\nWhat is the author's attitude toward existing international deforestation treaties?",
                    opts: [
                        "Deeply satisfied and proud",
                        "Critical and disappointed",
                        "Amused and playfully ironic",
                        "Neutral and celebratory"
                    ],
                    ans: 1,
                    exp: "Penggunaan frasa 'staggering rate', 'Paper promises', dan 'woefully inadequate' (sangat tidak memadai) menunjukkan sikap kritis dan kecewa penulis terhadap perjanjian internasional yang tidak disertai sanksi tegas."
                },
                {
                    q: "Read the excerpt below:\n'At the 1927 Solvay Conference in Brussels, twenty-nine of the world's most brilliant physicists gathered to debate the foundations of quantum mechanics. Their rigorous, passionate exchanges—most famously between Albert Einstein and Niels Bohr—exemplified the highest ideals of collaborative scientific inquiry.'\nThe author's attitude toward the physicists at the 1927 Solvay Conference is best described as...",
                    opts: [
                        "Admiring and appreciative",
                        "Cynical and contemptuous",
                        "Fearful and anxious",
                        "Indifferent and cold"
                    ],
                    ans: 0,
                    exp: "Pilihan kata positif seperti 'most brilliant physicists', 'rigorous, passionate exchanges', dan 'exemplified the highest ideals' menunjukkan sikap kagum dan menghargai (admiring and appreciative)."
                },
                {
                    q: "Read the passage below:\n'Standard seismographs measure ground motion along three perpendicular axes—vertical, north-south, and east-west. By comparing the arrival times of primary (P) compressional waves and slower secondary (S) shear waves at three or more seismic stations, geophysicists triangulate the epicenter of an earthquake.'\nWhat is the author's tone in this passage?",
                    opts: [
                        "Matter-of-fact and explanatory",
                        "Alarmed and panicked",
                        "Sentimental and poetic",
                        "Outraged and accusatory"
                    ],
                    ans: 0,
                    exp: "Paragraf tersebut menjelaskan cara kerja seismograf dan penentuan episentrum gempa secara lugas, netral, dan ilmiah tanpa muatan emosi (matter-of-fact and explanatory)."
                },
                {
                    q: "Read the review excerpt below:\n'While the documentary features breathtaking cinematography of deep-ocean bioluminescence, its narration repeatedly resorts to sensationalist metaphors that anthropomorphize marine predators as \"ruthless villains,\" undermining the scientific credibility of an otherwise visually stunning film.'\nWhat is the reviewer's stance toward the documentary?",
                    opts: [
                        "Completely negative about both the visuals and the narration",
                        "Mixed: praising the visual cinematography while criticizing the sensationalist narration",
                        "Unconditionally supportive of the narrator's metaphors",
                        "Indifferent to marine biology documentaries"
                    ],
                    ans: 1,
                    exp: "Penulis memberikan evaluasi campuran (mixed/ambivalent): memuji sinematografinya ('breathtaking cinematography', 'visually stunning') namun mengkritik narasinya yang sensasional ('undermining the scientific credibility')."
                },
                {
                    q: "Read the passage below:\n'So-called \"miracle detox teas\" promoted by social media influencers promise effortless weight loss by flushing unnamed toxins from the liver. In reality, the human liver and kidneys detoxify the bloodstream continuously on their own, and these unregulated herbal blends consist mostly of senna laxatives that cause dangerous dehydration and electrolyte imbalances.'\nWhich pair of words best describes the author's attitude toward 'miracle detox teas'?",
                    opts: [
                        "Reverent and trusting",
                        "Disapproving and cautionary",
                        "Curious and hopeful",
                        "Nostalgic and sympathetic"
                    ],
                    ans: 1,
                    exp: "Penggunaan tanda kutip ironis pada 'So-called \"miracle detox teas\"' serta paparan fakta medis tentang bahaya dehidrasi dan ketidakseimbangan elektrolit menunjukkan sikap tidak setuju dan memperingatkan pembaca (disapproving and cautionary)."
                },
                {
                    q: "Read the excerpt below:\n'Whether the recently discovered subsurface ocean on Saturn's moon Enceladus harbors microbial life remains an open question. Although plumes erupting from its south pole contain water vapor, molecular hydrogen, and organic compounds, future robotic sample-return missions will be required before astrobiologists can draw any definitive conclusions.'\nThe author's stance on the existence of life on Enceladus is...",
                    opts: [
                        "Dogmatically certain that life exists there",
                        "Convinced that Enceladus is completely sterile",
                        "Open-minded but scientifically cautious, awaiting conclusive empirical evidence",
                        "Frustrated by the waste of money on space exploration"
                    ],
                    ans: 2,
                    exp: "Penulis menyatakan bahwa hal tersebut masih merupakan pertanyaan terbuka ('remains an open question') dan memerlukan misi pengembalian sampel di masa depan sebelum kesimpulan pasti dapat ditarik, mencerminkan sikap terbuka namun hati-hati secara ilmiah."
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
                },
                {
                    q: "Read the argument below:\n'To curb childhood obesity, the Ministry of Health has proposed imposing a 20 percent excise tax on all sugar-sweetened beverages sold in supermarkets.'\nWhich of the following is an underlying assumption of the Ministry's proposal?",
                    opts: [
                        "Supermarkets only sell sugar-sweetened beverages to adults.",
                        "Higher retail prices for sugar-sweetened beverages will deter purchases and reduce children's overall sugar intake.",
                        "Sugar-sweetened beverages contain zero calories.",
                        "Childhood obesity is caused exclusively by a lack of physical education classes."
                    ],
                    ans: 1,
                    exp: "Agar pajak cukai 20% pada minuman manis efektif menekan obesitas anak, pembuat kebijakan berasumsi bahwa kenaikan harga jual akan mengurangi pembelian dan konsumsi gula pada anak-anak."
                },
                {
                    q: "Read the argument below:\n'Our software company will transition to a four-day workweek without reducing employee salaries, which we expect will maintain—or even increase—our quarterly code output.'\nWhat underlying assumption is necessary for the company's expectation to hold true?",
                    opts: [
                        "Software engineers will work higher-quality, more focused hours per day when well-rested, compensating for the fewer total days worked.",
                        "Clients will stop ordering software products during the next quarter.",
                        "Reducing salaries is the only way to motivate software engineers.",
                        "Computer servers automatically shut down on Fridays."
                    ],
                    ans: 0,
                    exp: "Agar pengurangan jam kerja menjadi 4 hari seminggu tetap mempertahankan atau meningkatkan output kode, perusahaan berasumsi bahwa peningkatan fokus dan produktivitas harian saat karyawan cukup istirahat dapat mengimbangi berkurangnya jumlah hari kerja."
                },
                {
                    q: "Read the statement below:\n'Archaeologists discovered obsidian spearheads made from volcanic glass indigenous to Melos Island inside a Mainland Greek cave dating to 11,000 BCE; therefore, Paleolithic inhabitants of the region must have possessed seaworthy watercraft.'\nWhich underlying assumption connects the archaeologists' evidence to their conclusion?",
                    opts: [
                        "Obsidian volcanic glass can float across the sea on its own.",
                        "Melos Island was separated from Mainland Greece by open sea in 11,000 BCE and could not be reached via a dry land bridge.",
                        "Paleolithic inhabitants used obsidian only for making jewelry.",
                        "Volcanoes on Mainland Greece erupted every year in 11,000 BCE."
                    ],
                    ans: 1,
                    exp: "Kesimpulan bahwa manusia Paleolitikum pasti memiliki perahu laut untuk membawa obsidian dari Pulau Melos ke daratan Yunani mengasumsikan bahwa pada 11.000 SM Pulau Melos memang terpisah oleh lautan (tidak terhubung jembatan darat)."
                },
                {
                    q: "Read the policy statement below:\n'In order to prevent cheating on final essays caused by generative AI chatbots, the university literature department will require all students to write their exams by hand in proctored classrooms without internet access.'\nWhat is the department's underlying assumption?",
                    opts: [
                        "Students cannot access generative AI tools when writing by hand in a supervised, offline classroom.",
                        "Handwritten essays are always longer than typed essays.",
                        "Literature professors prefer reading messy handwriting over printed text.",
                        "Generative AI chatbots can only write about computer science topics."
                    ],
                    ans: 0,
                    exp: "Kebijakan ujian tulis tangan di kelas berpengawas tanpa internet didasarkan pada asumsi bahwa kondisi tersebut mencegah mahasiswa mengakses bantuan chatbot AI generatif."
                },
                {
                    q: "Read the argument below:\n'Because city buses running on compressed biomethane emit 80 percent less nitrogen oxide than aging diesel buses, replacing the municipal diesel fleet with biomethane buses next year will significantly reduce urban smog.'\nWhich of the following is an assumption required by the argument?",
                    opts: [
                        "Diesel buses are painted a different color than biomethane buses.",
                        "Nitrogen oxide emissions from municipal buses are a meaningful contributor to the city's smog problem.",
                        "Passengers will pay double the fare to ride on a biomethane bus.",
                        "Biomethane buses travel twice as fast as high-speed trains."
                    ],
                    ans: 1,
                    exp: "Jika emisi nitrogen oksida dari armada bus kota ternyata bukan penyumbang berarti bagi kabut asap (smog) kota tersebut, maka mengganti bus diesel tidak akan mengurangi smog secara signifikan. Maka opsi B adalah asumsi dasarnya."
                },
                {
                    q: "Read the passage below:\n'Several pharmaceutical corporations have recently published sponsored articles warning consumers against buying generic off-patent medications, claiming that only brand-name pills guarantee consistent therapeutic relief.'\nWhat is the most likely underlying motive behind the corporations' sponsored articles?",
                    opts: [
                        "To help low-income patients save money at local pharmacies",
                        "To protect their market share and profit margins from cheaper generic competitors after patent expiration",
                        "To encourage governments to ban all prescription medicines",
                        "To educate chemistry students on how to synthesize generic drugs"
                    ],
                    ans: 1,
                    exp: "Motif utama perusahaan farmasi menerbitkan artikel bersponsor yang menakut-nakuti konsumen terhadap obat generik pasca-paten adalah untuk mempertahankan pangsa pasar dan keuntungan produk bermerek mereka yang lebih mahal."
                },
                {
                    q: "Read the argument below:\n'Installing motion-activated LED streetlamps that dim to 20 percent brightness when no pedestrians or vehicles are detected will save the municipality 40 percent on nighttime electricity costs without compromising public safety.'\nWhich of the following is an underlying assumption of this argument?",
                    opts: [
                        "Streets in the municipality have periods at night when no pedestrians or vehicles are present, and the motion sensors will reliably brighten the lamps whenever someone approaches.",
                        "Pedestrians prefer walking in complete darkness at midnight.",
                        "Motion-activated LED streetlamps consume more electricity when dimmed to 20 percent.",
                        "Vehicles do not have their own headlights at night."
                    ],
                    ans: 0,
                    exp: "Agar penghematan 40% tercapai tanpa mengorbankan keselamatan publik, diasumsikan bahwa ada waktu-waktu lengang di malam hari (sehingga lampu meredup dan hemat listrik) sekaligus sensor gerak bekerja andal menerangi jalan tepat saat ada orang/kendaraan lewat."
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
                },
                {
                    q: "Read the sentence below:\n'Rather than *mitigating* the seasonal flooding along the lower river basin, the poorly designed concrete levee actually worsened downstream inundation.'\nThe word 'mitigating' in the sentence is closest in meaning to...",
                    opts: [
                        "alleviating or reducing the severity of",
                        "accelerating and intensifying",
                        "measuring with satellite instruments",
                        "ignoring completely"
                    ],
                    ans: 0,
                    exp: "Kontras 'Rather than mitigating..., [it] actually worsened...' menunjukkan bahwa 'mitigating' adalah lawan dari memperparah ('worsened'), yaitu meredakan atau mengurangi keparahan ('alleviating or reducing the severity of')."
                },
                {
                    q: "Read the excerpt below:\n'During the 1930s Dust Bowl, prolonged drought and aggressive deep-plowing practices *stripped* the Great Plains of native prairie grasses that had anchored the topsoil for millennia.'\nIn this context, the word 'stripped' most nearly means...",
                    opts: [
                        "painted with colorful stripes",
                        "deprived or cleared of a protective covering",
                        "irrigated with underground water",
                        "planted with dense forests"
                    ],
                    ans: 1,
                    exp: "Dalam konteks 'stripped the Great Plains of native prairie grasses', kata 'stripped' bermakna mengupas/menghilangkan lapisan pelindung rumput asli dari lahan tersebut ('deprived or cleared of a protective covering')."
                },
                {
                    q: "Read the sentence below:\n'Because microplastics have been detected in Arctic snow, deep-sea trenches, and alpine rainwater, environmental toxicologists describe plastic pollution as truly *ubiquitous*.'\nThe word 'ubiquitous' in the sentence is closest in meaning to...",
                    opts: [
                        "omni-present or found everywhere",
                        "harmless to marine organisms",
                        "restricted to industrial cities",
                        "easily dissolved in warm water"
                    ],
                    ans: 0,
                    exp: "Contoh lokasi ekstrem (salju Arktik, palung laut dalam, air hujan pegunungan) memberi petunjuk bahwa 'ubiquitous' berarti ada di mana-mana ('omni-present or found everywhere')."
                },
                {
                    q: "Read the sentence below:\n'The central bank took decisive steps to *curb* runaway inflation by raising benchmark interest rates three times within six months.'\nWhich word is the closest SYNONYM of 'curb' as used in the sentence?",
                    opts: [
                        "restrain",
                        "encourage",
                        "celebrate",
                        "postpone"
                    ],
                    ans: 0,
                    exp: "Sebagai kata kerja dalam konteks kebijakan pengendalian inflasi ('to curb runaway inflation'), kata 'curb' berarti menahan, membatasi, atau mengendalikan ('restrain')."
                },
                {
                    q: "Read the sentence below:\n'While some desert succulents store water in fleshy stems, *ephemeral* desert wildflowers remain dormant as seeds for years and complete their entire blooming cycle within two weeks after a rare rainstorm.'\nWhat is the meaning of the word 'ephemeral' in this context?",
                    opts: [
                        "short-lived or lasting for a very brief time",
                        "poisonous to desert herbivores",
                        "growing tall like evergreen trees",
                        "permanent and unchanging"
                    ],
                    ans: 0,
                    exp: "Keterangan 'complete their entire blooming cycle within two weeks' menjelaskan bahwa 'ephemeral' berarti berusia sangat pendek atau berlangsung singkat ('short-lived')."
                },
                {
                    q: "Read the excerpt below:\n'The diplomat's *candid* assessment of the treaty's flaws surprised observers who were accustomed to vague, evasive official statements.'\nWhich of the following is the ANTONYM of the word 'candid'?",
                    opts: [
                        "frank and honest",
                        "straightforward",
                        "deceptive and evasive",
                        "sincere"
                    ],
                    ans: 2,
                    exp: "Kalimat tersebut mempertentangkan penilaian 'candid' (jujur/blak-blakan) dengan pernyataan resmi yang 'vague, evasive' (kabur/menghindar). Maka lawan kata (antonym) dari 'candid' adalah 'deceptive and evasive'."
                },
                {
                    q: "Read the sentence below:\n'To prevent contamination, the ancient DNA samples were extracted in a sterile facility that *harbors* no traces of modern human genetic material.'\nIn this sentence, the word 'harbors' is closest in meaning to...",
                    opts: [
                        "builds coastal ports for cargo ships",
                        "contains or holds within",
                        "destroys with ultraviolet light",
                        "exports to foreign laboratories"
                    ],
                    ans: 1,
                    exp: "Sebagai kata kerja transitif ('a sterile facility that harbors no traces...'), kata 'harbors' bermakna menyimpan, mengandung, atau menampung ('contains or holds within'), bukan pelabuhan kapal."
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
                },
                {
                    q: "Read the excerpt below:\n'When European rabbits were introduced to Australia in 1859, they multiplied rapidly across the continent because native marsupial predators could not hunt *them* fast enough to check population growth.'\nThe pronoun 'them' refers to...",
                    opts: [
                        "native marsupial predators",
                        "European rabbits",
                        "Australian continents",
                        "nineteenth-century settlers"
                    ],
                    ans: 1,
                    exp: "Dalam klausa 'because native marsupial predators could not hunt them fast enough', objek yang diburu oleh predator marsupial asli adalah kelinci Eropa ('European rabbits')."
                },
                {
                    q: "Read the sentence below:\n'Unlike synthetic fertilizers that leach quickly into groundwater, biochar retains nitrogen and phosphorus within *its* porous carbon structure for decades.'\nThe possessive pronoun 'its' refers to...",
                    opts: [
                        "groundwater",
                        "biochar",
                        "nitrogen",
                        "synthetic fertilizers"
                    ],
                    ans: 1,
                    exp: "Kata ganti kepemilikan tunggal 'its' merujuk pada subjek tunggal klausa utama yaitu 'biochar' yang memiliki struktur karbon berpori ('porous carbon structure')."
                },
                {
                    q: "Read the excerpt below:\n'Early gothic cathedrals relied on massive stone walls to support heavy vaulted ceilings, whereas twelfth-century builders introduced external flying buttresses, *which* transferred the lateral weight outward and allowed for tall stained-glass windows.'\nThe relative pronoun 'which' refers to...",
                    opts: [
                        "early gothic cathedrals",
                        "massive stone walls",
                        "external flying buttresses",
                        "tall stained-glass windows"
                    ],
                    ans: 2,
                    exp: "Klausa relatif 'which transferred the lateral weight outward' menerangkan kata benda tepat di depannya, yaitu penopang layang eksternal ('external flying buttresses')."
                },
                {
                    q: "Read the passage below:\n'Commercial honeybees are trucked across thousands of miles to pollinate almond orchards in California, yet native solitary bees often pollinate individual blossoms more efficiently than *those* managed by commercial beekeepers.'\nThe demonstrative pronoun 'those' refers to...",
                    opts: [
                        "almond orchards",
                        "bees",
                        "thousands of miles",
                        "individual blossoms"
                    ],
                    ans: 1,
                    exp: "Dalam struktur perbandingan 'native solitary bees ... more efficiently than those managed by commercial beekeepers', kata 'those' menggantikan kata benda jamak 'bees' agar tidak terjadi pengulangan kata."
                },
                {
                    q: "Read the excerpt below:\n'When volcanic ash settles on alpine glaciers, the dark particulate layer reduces surface albedo—the fraction of solar radiation reflected back into space. *This* accelerates summer ice melt across the mountain range.'\nWhat does the demonstrative pronoun 'This' at the beginning of the second sentence refer to?",
                    opts: [
                        "Space exploration",
                        "The reduction of surface albedo caused by dark volcanic ash settling on glaciers",
                        "The formation of new alpine glaciers during winter",
                        "The reflection of 100 percent of solar radiation into space"
                    ],
                    ans: 1,
                    exp: "Kata ganti demonstratif 'This' di awal kalimat kedua merujuk pada keseluruhan gagasan/peristiwa di kalimat pertama, yakni penurunan albedo permukaan akibat lapisan abu vulkanik gelap di atas gletser."
                },
                {
                    q: "Read the sentence below:\n'As mangrove seedlings take root in muddy intertidal flats, *their* tangled prop roots trap nutrient-rich sediment carried by incoming tides.'\nThe word 'their' in the sentence refers to...",
                    opts: [
                        "muddy intertidal flats",
                        "mangrove seedlings",
                        "incoming tides",
                        "nutrient-rich sediments"
                    ],
                    ans: 1,
                    exp: "Yang memiliki akar tunjang ('prop roots') dan tumbuh di dataran pasang surut berlumpur adalah bibit bakau ('mangrove seedlings')."
                },
                {
                    q: "Read the excerpt below:\n'While paper money was first issued during the Tang and Song dynasties in China, European merchants continued to rely on gold and silver coins until the seventeenth century, when *they* began adopting promissory banknotes issued by Stockholm Banco.'\nThe pronoun 'they' refers to...",
                    opts: [
                        "Tang and Song dynasties",
                        "European merchants",
                        "gold and silver coins",
                        "promissory banknotes"
                    ],
                    ans: 1,
                    exp: "Subjek jamak yang mengandalkan koin emas/perak hingga abad ke-17 lalu mulai mengadopsi uang kertas bank adalah para pedagang Eropa ('European merchants')."
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
                },
                {
                    q: "Which of the following best restates the sentence below?\n'Had the dam engineers inspected the spillway gates before the monsoon season, the downstream reservoir overflow could have been averted.'",
                    opts: [
                        "The engineers inspected the spillway gates before the monsoon, yet the reservoir still overflowed.",
                        "Because the dam engineers failed to inspect the spillway gates prior to the monsoon season, the downstream reservoir overflowed.",
                        "Inspecting the spillway gates during the monsoon season caused the downstream reservoir to overflow.",
                        "The downstream reservoir never overflows during the monsoon season."
                    ],
                    ans: 1,
                    exp: "Kalimat Conditional Tipe 3 dengan inversi 'Had the dam engineers inspected..., the overflow could have been averted' menyatakan fakta sebaliknya di masa lampau: para insinyur tidak memeriksa pintu pelimpah sebelum musim hujan, sehingga luapan waduk terjadi."
                },
                {
                    q: "Which sentence best restates the statement below?\n'Seldom do deep-sea hydrothermal vent organisms rely on sunlight for their primary energy source.'",
                    opts: [
                        "Organisms living near deep-sea hydrothermal vents almost never depend on solar energy as their main energy source.",
                        "All deep-sea hydrothermal vent organisms require direct sunlight to survive.",
                        "Sunlight penetrates easily to deep-sea hydrothermal vents.",
                        "Hydrothermal vent organisms produce sunlight at the bottom of the ocean."
                    ],
                    ans: 0,
                    exp: "Inversi kata keterangan negatif 'Seldom do ... rely on' bermakna 'jarang sekali / hampir tidak pernah bergantung pada' ('almost never depend on')."
                },
                {
                    q: "Read the sentence below:\n'The rapid proliferation of invasive zebra mussels in North American lakes stems primarily from the unregulated discharge of cargo ship ballast water.'\nWhich option best paraphrases this sentence?",
                    opts: [
                        "Invasive zebra mussels are used by cargo ships to filter ballast water in North American lakes.",
                        "Unregulated ballast water discharge from cargo ships is the main cause of the fast spread of invasive zebra mussels in North American lakes.",
                        "Cargo ships stopped discharging ballast water after zebra mussels disappeared from North America.",
                        "North American lakes naturally contain zebra mussels that damage cargo ships."
                    ],
                    ans: 1,
                    exp: "Frasa 'B stems primarily from A' (B bersumber terutama dari A) dapat dibalik menjadi 'A is the main cause of B' dengan makna yang 100% ekuivalen."
                },
                {
                    q: "Which of the following best restates the sentence below?\n'Not until the invention of the scanning tunneling microscope in 1981 were physicists able to image individual atoms on a conductive surface.'",
                    opts: [
                        "Physicists could already photograph individual atoms long before 1981.",
                        "Physicists became capable of imaging individual atoms on a conductive surface only after the scanning tunneling microscope was invented in 1981.",
                        "The scanning tunneling microscope invented in 1981 failed to image individual atoms.",
                        "After 1981, physicists stopped using scanning tunneling microscopes."
                    ],
                    ans: 1,
                    exp: "Pola 'Not until X were Y able to Z' bermakna bahwa Y baru bisa melakukan Z setelah terjadinya X ('only after X')."
                },
                {
                    q: "Read the original sentence:\n'No sooner had the central bank announced a cut in interest rates than stock market indices surged to a five-year high.'\nWhich option has the closest meaning to the original sentence?",
                    opts: [
                        "Stock market indices fell to a five-year low before the central bank cut interest rates.",
                        "Immediately after the central bank announced an interest rate reduction, stock market indices jumped to their highest level in five years.",
                        "The central bank refused to cut interest rates because stock market indices were already high.",
                        "It took five years for the stock market to react to the central bank's announcement."
                    ],
                    ans: 1,
                    exp: "Konstruksi 'No sooner had A happened than B happened' menyatakan bahwa peristiwa B terjadi segera setelah peristiwa A ('Immediately after A, B happened')."
                },
                {
                    q: "Which sentence best restates the excerpt below?\n'Far from rendering human radiologists obsolete, diagnostic AI algorithms serve to flag urgent anomalies so clinicians can prioritize critical patient scans.'",
                    opts: [
                        "Diagnostic AI algorithms have completely replaced human radiologists in modern hospitals.",
                        "Instead of replacing human radiologists, diagnostic AI tools assist them by highlighting urgent abnormalities to help prioritize critical cases.",
                        "Human radiologists refuse to use diagnostic AI algorithms because they are inaccurate.",
                        "Clinicians only examine patient scans that have no anomalies."
                    ],
                    ans: 1,
                    exp: "Frasa 'Far from rendering X obsolete, Y serves to...' bermakna 'Alih-alih membuat X usang/tergantikan, Y justru berfungsi membantu...' ('Instead of replacing X, Y assists them by...')."
                },
                {
                    q: "Read the sentence below:\n'Crop rotation not only replenishes soil nitrogen through legume cultivation but also disrupts the reproductive cycles of host-specific agricultural pests.'\nWhich of the following best restates the sentence?",
                    opts: [
                        "Rotating crops depletes soil nitrogen while encouraging agricultural pests to multiply.",
                        "In addition to restoring nitrogen to the soil via legumes, rotating crops breaks the life cycles of pests that target specific crops.",
                        "Farmers must choose between replenishing soil nitrogen and controlling agricultural pests.",
                        "Legumes are the only crops that are vulnerable to host-specific agricultural pests."
                    ],
                    ans: 1,
                    exp: "Pola korelatif 'not only A but also B' setara dengan 'In addition to A, [subject] also B'. 'replenishes' = 'restoring', dan 'disrupts the reproductive cycles' = 'breaks the life cycles'."
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
                },
                {
                    q: "Read the passage below:\n'Although medieval European alchemists failed in their quest to transmute lead into gold, their systematic experiments with distillation, sublimation, and acid dissolution laid the practical apparatus foundations for seventeenth-century analytical chemistry. Several mineral acids they isolated—including nitric, hydrochloric, and sulfuric acids—remain indispensable industrial reagents today.'\nWhich statement is TRUE based on the passage?",
                    opts: [
                        "Medieval European alchemists successfully transmuted lead into gold using nitric acid.",
                        "None of the chemical substances isolated by medieval alchemists are used in modern industry.",
                        "Experimental techniques and mineral acids developed by medieval alchemists contributed significantly to modern chemistry.",
                        "Analytical chemistry was invented before medieval alchemy existed."
                    ],
                    ans: 2,
                    exp: "Teks menyebutkan bahwa eksperimen sistematis alkemis abad pertengahan meletakkan dasar peralatan kimia analitik dan asam mineral yang mereka isolasi tetap penting dalam industri modern."
                },
                {
                    q: "Read the excerpt below:\n'Naked mole-rats live in underground colonies of up to 300 individuals in East Africa. Unlike nearly all other mammals, they are virtually thermo-conformers whose body temperature fluctuates with ambient tunnel temperature, and longitudinal studies of thousands of captive individuals have documented an extraordinary resistance to spontaneous cancer.'\nAccording to the excerpt, which of the following statements is FALSE?",
                    opts: [
                        "Naked mole-rats inhabit subterranean colonies in East Africa.",
                        "Naked mole-rats maintain a strictly constant internal body temperature regardless of their surroundings.",
                        "Most mammals regulate their internal body temperature differently than naked mole-rats do.",
                        "Captive naked mole-rats exhibit a remarkably low incidence of spontaneous cancer."
                    ],
                    ans: 1,
                    exp: "Pernyataan B SALAH karena bertolak belakang dengan teks yang menyatakan bahwa tikus mondok telanjang adalah 'thermo-conformers whose body temperature fluctuates with ambient tunnel temperature' (suhu tubuhnya berfluktuasi mengikuti suhu terowongan)."
                },
                {
                    q: "Read the passage below:\n'In 1974, chemists Mario Molina and F. Sherwood Rowland published findings showing that chlorofluorocarbons (CFCs)—nontoxic gases then widely used in aerosol sprays and refrigerators—accumulate in the upper stratosphere, where solar ultraviolet radiation breaks them apart and releases chlorine atoms that catalytically destroy ozone molecules.'\nWhich of the following is NOT true according to the passage?",
                    opts: [
                        "CFCs were commonly used in refrigerators and aerosol sprays in the 1970s.",
                        "Solar ultraviolet radiation breaks down CFC molecules in the upper stratosphere.",
                        "Chlorine atoms released from CFCs catalyze the destruction of stratospheric ozone.",
                        "CFCs are highly toxic gases that immediately poison humans at ground level."
                    ],
                    ans: 3,
                    exp: "Pernyataan D TIDAK benar karena di dalam teks disebutkan secara eksplisit bahwa CFC adalah gas tidak beracun ('nontoxic gases')."
                },
                {
                    q: "Read the text below:\n'Whereas acoustic sonar relies on sound pulses that travel roughly 1,500 meters per second in seawater, airborne bathymetric LiDAR uses green laser pulses (532 nm wavelength) from low-flying aircraft to map shallow coastal seabeds down to 40 meters depth, provided the water is relatively clear.'\nWhich statement is SUPPORTED by the text?",
                    opts: [
                        "Airborne bathymetric LiDAR can map ocean trenches that are 5,000 meters deep.",
                        "High water turbidity (murkiness) limits the effectiveness of airborne bathymetric LiDAR.",
                        "Sound pulses travel faster in seawater than green laser light travels in air.",
                        "Bathymetric LiDAR uses acoustic sound waves instead of laser light."
                    ],
                    ans: 1,
                    exp: "Teks menyatakan LiDAR batimetri udara mampu memetakan dasar laut dangkal hingga kedalaman 40 meter 'provided the water is relatively clear' (asalkan airnya relatif jernih), yang mendukung pernyataan bahwa air keruh membatasi efektivitasnya."
                },
                {
                    q: "Read the excerpt below:\n'Dendrochronology—the dating of past events through study of tree ring growth—relies on the fact that trees in temperate zones form one distinct growth ring each year. Wide rings generally indicate wet, favorable growing seasons, whereas narrow rings reflect years of drought or severe cold. Tropical trees, however, often lack distinct annual rings because year-round warmth and rainfall allow continuous cambial growth.'\nAccording to the excerpt, which statement is TRUE?",
                    opts: [
                        "Tropical trees always form wider annual rings than temperate trees.",
                        "Narrow growth rings in temperate trees typically correspond to dry or unusually cold years.",
                        "Temperate trees form twelve distinct growth rings every single year.",
                        "Dendrochronology can only be performed on tropical rainforest trees."
                    ],
                    ans: 1,
                    exp: "Kalimat kedua menyatakan secara eksplisit: '...whereas narrow rings reflect years of drought or severe cold' (lingkar sempit mencerminkan tahun-tahun kekeringan atau dingin ekstrem)."
                },
                {
                    q: "Read the passage below:\n'Clinical trials of the new antimalarial vaccine RTS,S demonstrated a 36 percent reduction in severe malaria cases over four years among young children who received four scheduled doses. When the vaccine was administered seasonally alongside preventive antimalarial drugs before peak monsoon transmission months, protective efficacy rose to nearly 70 percent.'\nWhich statement is FALSE according to the passage?",
                    opts: [
                        "Receiving four doses of RTS,S alone reduced severe malaria cases by 36 percent over four years in the trial.",
                        "Combining seasonal RTS,S vaccination with preventive antimalarial drugs achieved higher protection than the vaccine alone.",
                        "Malaria transmission peaks during the monsoon season in the study region.",
                        "A single dose of the RTS,S vaccine provides 100 percent lifelong immunity without any additional medication."
                    ],
                    ans: 3,
                    exp: "Pernyataan D SALAH karena bertentangan dengan data uji klinis di teks (4 dosis memberikan penurunan 36%, dan bila dikombinasikan dengan obat pencegahan musiman mencapai hampir 70%, bukan 1 dosis 100% seumur hidup)."
                },
                {
                    q: "Read the text below:\n'Roman concrete structures such as the Pantheon dome and ancient Mediterranean harbors have endured for two millennia. Petrographic analysis shows that Roman builders mixed volcanic ash (pozzolana) with lime and included millimeter-scale white lime clasts; when microscopic cracks form and rainwater or seawater seeps in, these lime clasts dissolve and recrystallize as calcium carbonate, sealing the fissures automatically.'\nAll of the following statements are supported by the text EXCEPT...",
                    opts: [
                        "Roman builders incorporated volcanic ash known as pozzolana into their concrete mixture.",
                        "White lime clasts in Roman concrete react with infiltrating water to self-heal microscopic cracks.",
                        "Ancient Roman harbor structures have survived for roughly two thousand years.",
                        "Roman concrete lasted for millennia because it was reinforced with stainless-steel rebar."
                    ],
                    ans: 3,
                    exp: "Untuk soal EXCEPT, opsi D tidak didukung teks dan salah secara historis karena keawetan beton Romawi dijelaskan berasal dari abu vulkanik (pozzolana) dan gumpalan kapur putih (lime clasts) yang menutup retakan secara otomatis, bukan tulangan baja tahan karat."
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
                },
                {
                    q: "Read the four statements below from a report on electric aviation:\n(1) Battery packs used in current prototype electric aircraft have an energy density of approximately 250 to 300 watt-hours per kilogram, compared to roughly 12,000 watt-hours per kilogram for aviation kerosene.\n(2) In September 2022, a nine-passenger all-electric commuter plane completed a 24-minute test flight in Washington State.\n(3) Aviation enthusiasts on social media insist that nuclear-fusion passenger airliners will replace all commercial jets within the next three years.\n(4) Short-haul regional flights under 400 kilometers account for roughly 15 percent of departing flights at major European airports.\nWhich statement is an UNSUPPORTED SPECULATION?",
                    opts: [
                        "Statement (1)",
                        "Statement (2)",
                        "Statement (3)",
                        "Statement (4)"
                    ],
                    ans: 2,
                    exp: "Pernyataan (3) merupakan spekulasi tanpa dasar ilmiah yang hanya mengutip opini antusias media sosial ('Aviation enthusiasts on social media insist... within the next three years'), sedangkan pernyataan (1), (2), dan (4) adalah fakta teknis dan historis yang terverifikasi."
                },
                {
                    q: "Read the forum posts below debating whether secondary schools should delay morning start times from 7:00 AM to 8:30 AM:\n• **Parent_88:** 'Teenagers today are simply lazy; waking up at 5:30 AM built character when I was young, and changing the schedule will spoil them.'\n• **Dr_Lin:** 'Endocrine studies show that during puberty, melatonin secretion shifts later by up to two hours. In a 2023 district-wide trial across 18 high schools, shifting start times to 8:30 AM increased average nightly sleep by 43 minutes and reduced tardiness by 31%.'\n• **Student_Ray:** 'If school starts at 8:30 AM, every single student will get straight A's effortlessly.'\n• **Coach_Dan:** 'Morning traffic might change if buses run later.'\nWhich contributor bases their position on verifiable empirical evidence?",
                    opts: [
                        "Parent_88",
                        "Dr_Lin",
                        "Student_Ray",
                        "Coach_Dan"
                    ],
                    ans: 1,
                    exp: "Dr_Lin mendasarkan argumennya pada bukti endokrinologi (pergeseran sekresi melatonin saat pubertas) serta data terukur dari uji coba tahun 2023 di 18 SMA."
                },
                {
                    q: "Read the excerpt below:\n'(A) Ice core samples drilled at Vostok Station in Antarctica preserve trapped atmospheric gas bubbles spanning the past 800,000 years. (B) Mass spectrometry of these bubbles shows that atmospheric carbon dioxide concentrations remained between 180 and 300 parts per million throughout eight glacial cycles before surpassing 420 parts per million in the twenty-first century. (C) Some anonymous commentators assert that the Vostok ice cores were fabricated by thermometer companies to boost sales. (D) The drilling reached a depth of over 3,600 meters above subglacial Lake Vostok.'\nWhich sentence in the excerpt is an UNSUBSTANTIATED CLAIM?",
                    opts: [
                        "Sentence (A)",
                        "Sentence (B)",
                        "Sentence (C)",
                        "Sentence (D)"
                    ],
                    ans: 2,
                    exp: "Kalimat (C) adalah tuduhan konspiratif dari komentator anonim ('Some anonymous commentators assert...') tanpa bukti ilmiah sama sekali."
                },
                {
                    q: "In critical reading, why is an anecdotal testimony (e.g., 'My grandfather smoked two packs a day and lived to 94, so smoking is harmless') considered weak evidence compared to epidemiological studies?",
                    opts: [
                        "Because grandfathers never tell the truth about their age.",
                        "Because an isolated individual case cannot refute statistical probabilities established across hundreds of thousands of subjects.",
                        "Because epidemiological studies only examine people who do not smoke.",
                        "Because anecdotal testimonies are written in first-person grammar."
                    ],
                    ans: 1,
                    exp: "Bukti anekdotal (kasus tunggal/individu) tidak dapat digeneralisasi untuk menyanggah probabilitas statistik dan hubungan kausal yang telah diuji pada ratusan ribu sampel dalam studi epidemiologi."
                },
                {
                    q: "Read the passage below:\n'A newly marketed copper wristband is advertised with the slogan: \"Clinically proven to realign bio-magnetic energy fields and cure chronic arthritis pain in 48 hours!\" However, a double-blind randomized controlled trial published in *Rheumatology* involving 140 osteoarthritis patients found no difference in pain scores, joint stiffness, or C-reactive protein levels between patients wearing copper wristbands and those wearing demagnetized placebo bands.'\nWhat can a critical reader conclude from this passage?",
                    opts: [
                        "The advertising slogan is an unsubstantiated commercial claim that is directly contradicted by rigorous clinical trial evidence.",
                        "Copper wristbands cure arthritis in 48 hours only when worn on both wrists.",
                        "Double-blind randomized controlled trials are less reliable than advertising slogans.",
                        "Placebo wristbands cause severe joint stiffness in healthy adults."
                    ],
                    ans: 0,
                    exp: "Slogan iklan tersebut merupakan klaim komersial tak berdasar yang secara langsung terbantahkan oleh uji klinis acak tersamar ganda (double-blind randomized controlled trial) yang tidak menemukan perbedaan hasil dibanding plasebo."
                },
                {
                    q: "Which of the following statements from an article on marine archaeology is a STATEMENT OF OPINION or value judgment rather than a verifiable objective fact?",
                    opts: [
                        "The Antikythera wreck was discovered by Greek sponge divers at a depth of 45 meters in 1900.",
                        "Radiocarbon dating and coin inscriptions place the sinking of the vessel between 70 and 60 BCE.",
                        "The bronze gear-wheel mechanism recovered from the wreck is by far the most breathtaking and inspiring artifact ever created in human history.",
                        "X-ray tomography revealed 30 meshing bronze gears inside the corroded wooden housing."
                    ],
                    ans: 2,
                    exp: "Frasa superlatif subjektif 'by far the most breathtaking and inspiring artifact ever created in human history' adalah penilaian estetika/opini pribadi penulis yang tidak dapat diukur secara objektif seperti kedalaman penyelaman, penanggalan karbon, atau jumlah roda gigi pada pemindaian sinar-X."
                },
                {
                    q: "Read the excerpt from a scientific peer review:\n'While the authors accurately report a 15 percent increase in test scores among the 12 students who used the VR headset for one week, their sweeping conclusion that VR headsets should immediately replace all school textbooks nationwide is not warranted by such a small, short-term, unblinded sample.'\nWhat flaw is the peer reviewer pointing out in the authors' paper?",
                    opts: [
                        "The authors fabricated the 15 percent score increase.",
                        "The authors made an overgeneralized policy claim that exceeds the scope and statistical power of their limited empirical data.",
                        "VR headsets cannot be used by 12 students in the same week.",
                        "Textbooks are heavier to carry than VR headsets."
                    ],
                    ans: 1,
                    exp: "Penelaah sejawat (peer reviewer) menunjukkan bahwa kesimpulan luas penulis (mengganti semua buku teks secara nasional) merupakan generalisasi berlebihan (overgeneralization) yang tidak sebanding dengan ukuran sampel yang sangat kecil (12 siswa) dan durasi singkat (1 minggu)."
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
                },
                {
                    q: "Read the two passages below:\n[Text 1] First-generation biofuels, produced by fermenting food crops such as corn and sugarcane into ethanol, were subsidized in the 2000s to reduce dependence on imported petroleum.\n[Text 2] Economic analyses subsequently revealed that diverting millions of tons of corn into fuel tanks drove up global grain prices and incentivized the clearing of carbon-rich savannas, prompting researchers to shift toward second-generation cellulosic biofuels made from inedible agricultural waste such as wheat straw and corn stalks.\nHow does Text 2 build upon Text 1?",
                    opts: [
                        "Text 2 explains the unintended economic and environmental drawbacks of the first-generation biofuels described in Text 1 and introduces second-generation alternatives.",
                        "Text 2 argues that petroleum is cleaner than second-generation cellulosic biofuels.",
                        "Text 2 proves that corn and sugarcane cannot be fermented into ethanol.",
                        "Text 2 contradicts Text 1 by claiming that biofuels were never subsidized in the 2000s."
                    ],
                    ans: 0,
                    exp: "Text 1 memperkenalkan biofuel generasi pertama dari tanaman pangan, lalu Text 2 memaparkan dampak ikutan negatifnya (kenaikan harga pangan dan pembukaan lahan) serta pergeseran menuju biofuel selulosa generasi kedua dari limbah pertanian tak layak makan."
                },
                {
                    q: "Read the two passages below:\n[Text 1] Bergmann's ecogeographical rule states that within a broadly distributed taxonomic clade of endothermic (warm-blooded) animals, populations and species of larger body size are found in colder, higher-latitude environments because a lower surface-area-to-volume ratio minimizes heat loss.\n[Text 2] The burrowing woodland vole (Microtus pinetorum) defies Bergmann's rule: northern populations in Canada have smaller body masses than southern populations, as their subterranean winter microhabitats beneath insulating snowpack favor compact bodies that require less total foraging energy.\nWhat is the relationship between Text 1 and Text 2?",
                    opts: [
                        "Text 1 presents a general biological rule, while Text 2 describes a specific species exception and explains the ecological reason behind it.",
                        "Text 2 proves that warm-blooded animals cannot survive in Canada.",
                        "Both texts argue that surface-area-to-volume ratio has no relation to body heat.",
                        "Text 1 and Text 2 describe the exact same species of Arctic bear."
                    ],
                    ans: 0,
                    exp: "Text 1 memaparkan aturan umum biogeografi (Aturan Bergmann), sedangkan Text 2 menyajikan pengecualian spesifik (tikus tanah Microtus pinetorum) beserta alasan ekologis mengapa spesies tersebut menyimpang dari aturan umum."
                },
                {
                    q: "Read the two excerpts below:\n[Text 1] Proponents of universal basic income (UBI) argue that providing every citizen with an unconditional monthly cash stipend streamlines welfare bureaucracy and provides a financial floor as automation displaces routine manufacturing and clerical jobs.\n[Text 2] Fiscal policy analysts counter that funding a universal cash stipend large enough to replace existing targeted social safety nets would require doubling value-added taxes, while potentially diverting funds away from targeted disability, housing, and healthcare subsidies for the most vulnerable households.\nWhich question is addressed in Text 2 but NOT in Text 1?",
                    opts: [
                        "Why automation is displacing routine manufacturing jobs",
                        "How universal basic income simplifies welfare bureaucracy",
                        "What fiscal tax burdens and trade-offs for targeted vulnerable groups might arise from funding a universal stipend",
                        "Whether manufacturing jobs existed in the nineteenth century"
                    ],
                    ans: 2,
                    exp: "Text 1 hanya membahas manfaat penyederhanaan birokrasi dan jaring pengaman otomatisasi, sedangkan Text 2 secara spesifik membahas beban pajak (PPN dua kali lipat) dan risiko tergerusnya subsidi tepat sasaran bagi kelompok rentan."
                },
                {
                    q: "Read the two passages below:\n[Text 1] Deep-ocean polymetallic nodules—potato-sized rock concretions lying on the abyssal plains of the Clarion-Clipperton Zone at depths of 4,000 meters—contain rich concentrations of cobalt, nickel, copper, and manganese needed for electric vehicle batteries.\n[Text 2] Marine biologists warn that robotic seabed harvesters vacuuming up polymetallic nodules also strip away the only hard substrate available for deep-sea sponges, soft corals, and octopuses, while creating suspended sediment plumes that can smother filter-feeding organisms across hundreds of square kilometers.\nSynthesizing both texts, what is the central dilemma surrounding deep-sea polymetallic nodules?",
                    opts: [
                        "The nodules contain no useful metals for electric vehicle batteries.",
                        "Harvesting the nodules supplies critical minerals for green-energy batteries but risks severe, long-lasting destruction of fragile abyssal ecosystems.",
                        "Robotic harvesters cannot reach depths of 4,000 meters in the Clarion-Clipperton Zone.",
                        "Deep-sea sponges and octopuses produce cobalt and nickel inside their shells."
                    ],
                    ans: 1,
                    exp: "Sintesis dari kedua teks menunjukkan dilema utama antara pemenuhan mineral penting untuk transisi baterai kendaraan listrik (Text 1) dan risiko kehancuran ekosistem dasar laut dalam yang rapuh akibat penambangannya (Text 2)."
                },
                {
                    q: "Read the two texts below:\n[Text 1] Open-plan offices were widely adopted by technology and media firms in the early 2000s on the theory that removing physical cubicles and interior walls would spark spontaneous face-to-face collaboration among employees.\n[Text 2] Empirical tracking by organizational psychologists using sociometric badges before and after companies transitioned to open-plan layouts revealed that face-to-face interactions actually dropped by roughly 70 percent, as distracted employees put on noise-canceling headphones and communicated via instant messaging instead to preserve privacy.\nWhat does Text 2 reveal about the theory described in Text 1?",
                    opts: [
                        "The theory was empirically validated in every company studied.",
                        "In practice, removing physical walls produced the opposite of the intended effect, reducing rather than increasing face-to-face interaction.",
                        "Employees in open-plan offices never use computers or instant messaging.",
                        "Sociometric badges are too heavy for office employees to wear."
                    ],
                    ans: 1,
                    exp: "Text 2 membuktikan bahwa teori ruang kantor terbuka di Text 1 justru menghasilkan efek sebaliknya di dunia nyata: interaksi tatap muka turun sekitar 70% karena karyawan merasa terganggu dan memilih memakai headphone serta berkirim pesan daring."
                },
                {
                    q: "Read the two excerpts below:\n[Text 1] During the Green Revolution of the 1960s, agronomist Norman Borlaug bred semi-dwarf, disease-resistant wheat varieties with short, sturdy stalks that did not topple over under the weight of heavy grain heads when fertilized, averting famine across South Asia.\n[Text 2] Today, plant geneticists are applying CRISPR-Cas9 genome editing to shorten the stems of teff and pearl millet—nutrient-dense indigenous African grains that traditionally suffer up to 40 percent yield loss from wind lodging (falling over before harvest).\nHow do the two texts relate to one another?",
                    opts: [
                        "Text 2 shows how modern genome-editing tools are applying the same architectural crop-improvement principle pioneered by Borlaug in Text 1 to indigenous African grains.",
                        "Text 2 argues that Norman Borlaug's semi-dwarf wheat caused famines in South Asia.",
                        "Text 1 and Text 2 both oppose the use of short-stemmed grain varieties.",
                        "Text 2 explains why teff and pearl millet can only be grown in South Asia."
                    ],
                    ans: 0,
                    exp: "Text 1 memaparkan keberhasilan historis gandum berbatang pendek (semi-dwarf) yang tahan rebah oleh Norman Borlaug, lalu Text 2 menunjukkan bagaimana prinsip pemendekan batang yang sama kini diterapkan oleh ahli genetika modern menggunakan CRISPR pada biji-bijian lokal Afrika (teff dan milet)."
                },
                {
                    q: "Read the two passages below:\n[Text 1] Pumped-storage hydroelectricity accounts for over 90 percent of utility-scale energy storage worldwide. When solar or wind generation exceeds grid demand, surplus electricity pumps water from a lower reservoir to an upper mountain reservoir; during peak evening demand, the water is released back down through turbines.\n[Text 2] For flat coastal or desert regions that lack the steep mountain topography required for pumped hydro, engineers have developed compressed-air energy storage (CAES), which uses surplus renewable electricity to pump high-pressure air into deep underground salt caverns and releases it to drive expansion turbines when needed.\nBased on both passages, how do pumped-storage hydroelectricity and CAES compare?",
                    opts: [
                        "Both systems store surplus renewable energy mechanically and release it via turbines during peak demand, but CAES overcomes the topographic limitation of pumped hydro in flat regions.",
                        "CAES requires steep mountain reservoirs, whereas pumped-storage hydroelectricity uses underground salt caverns.",
                        "Neither system can be connected to solar or wind power grids.",
                        "Pumped-storage hydroelectricity is only used in flat desert regions."
                    ],
                    ans: 0,
                    exp: "Kedua sistem memiliki prinsip dasar yang serupa (menyimpan surplus listrik terbarukan secara mekanis lalu melepaskannya untuk memutar turbin saat beban puncak), namun CAES di Text 2 mengatasi keterbatasan topografi pegunungan yang disyaratkan oleh PLTA pompa di Text 1."
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
                },
                {
                    q: "Choose the most logical transitional phrase to fill in the blank:\n'Prolonged exposure to microgravity causes astronauts to lose 1 to 2 percent of their weight-bearing bone mineral density each month. [...], astronauts aboard the International Space Station are required to perform two hours of resistive exercise daily using vacuum-cylinder machines.'",
                    opts: [
                        "Consequently",
                        "Nevertheless",
                        "On the contrary",
                        "For instance"
                    ],
                    ans: 0,
                    exp: "Kalimat pertama menjelaskan penyebab (hilangnya kepadatan tulang akibat gravitasi mikro), dan kalimat kedua adalah akibat/tindakan solutifnya (kewajiban olahraga resistif 2 jam sehari). Kata hubung sebab-akibat yang tepat adalah 'Consequently'."
                },
                {
                    q: "Read the paragraph below:\n'(1) In 1854, London physician John Snow doubted the prevailing miasma theory that cholera was spread by foul air. (2) By plotting the residential addresses of hundreds of cholera fatalities on a street map of Soho, he noticed that cases clustered densely around a single public water pump on Broad Street. (3) After Snow persuaded parish authorities to remove the pump's handle, new cholera infections in the neighborhood subsided almost immediately.'\nHow is the information in this paragraph organized?",
                    opts: [
                        "In chronological cause-and-effect order tracing a scientific investigation from hypothesis to intervention",
                        "By comparing four different cities in Europe during the twentieth century",
                        "From the least important detail to a list of unrelated chemical definitions",
                        "By presenting a modern policy proposal and refuting every historical record"
                    ],
                    ans: 0,
                    exp: "Paragraf ini disusun secara kronologis dan kausal yang merunut penyelidikan ilmiah John Snow pada tahun 1854: mulai dari keraguan terhadap teori lama (1), pemetaan bukti spasial kasus kolera (2), hingga tindakan pelepasan gagang pompa dan hasilnya (3)."
                },
                {
                    q: "Read the opening sentence of a paragraph:\n'Beyond these acoustic adaptations for echolocation in murky river waters, the Amazon river dolphin also possesses unfused cervical vertebrae that allow it to turn its head 90 degrees when maneuvering around submerged tree trunks.'\nWhat did the paragraph IMMEDIATELY PRECEDING this sentence most likely discuss?",
                    opts: [
                        "How the Amazon river dolphin uses acoustic adaptations and echolocation to navigate murky river waters",
                        "Why marine sharks swim faster than freshwater fish in the Pacific Ocean",
                        "The deforestation of timber trees along the Amazon highway",
                        "The diet of polar bears in the Arctic Circle"
                    ],
                    ans: 0,
                    exp: "Frasa pembuka 'Beyond these acoustic adaptations for echolocation in murky river waters...' merujuk kembali pada bahasan di paragraf sebelumnya, yaitu adaptasi akustik dan ekolokasi lumba-lumba sungai Amazon."
                },
                {
                    q: "Choose the best connector to complete the passage:\n'Graphene conducts electricity more efficiently than copper and is two hundred times stronger than steel by weight. [...], its thermal conductivity surpasses that of diamond, making it a versatile material for next-generation nanoelectronics.'",
                    opts: [
                        "Moreover",
                        "Otherwise",
                        "Despite this",
                        "Instead"
                    ],
                    ans: 0,
                    exp: "Kalimat kedua menambahkan keunggulan lain dari graphene (konduktivitas termal yang melampaui berlian) yang sejalan dengan keunggulan di kalimat pertama. Maka kata hubung penambahan (addition) yang tepat adalah 'Moreover'."
                },
                {
                    q: "Read the final sentence of an article section:\n'While monetary policy adjustments by the central bank can cool demand-driven inflation over twelve to eighteen months, addressing supply-side food price shocks requires targeted investments in cold-chain storage and rural transport infrastructure.'\nIf the article continues, the NEXT paragraph will most likely focus on...",
                    opts: [
                        "How central banks print paper currency and mint coins",
                        "How investments in cold-chain storage and rural transport infrastructure can mitigate supply-side food price shocks",
                        "The history of gold mining in the nineteenth century",
                        "Why inflation never affects food prices in urban supermarkets"
                    ],
                    ans: 1,
                    exp: "Bagian akhir kalimat penutup memperkenalkan fokus baru ('addressing supply-side food price shocks requires targeted investments in cold-chain storage and rural transport infrastructure') yang akan dijabarkan pada paragraf selanjutnya."
                },
                {
                    q: "Read the paragraph below:\n'Many apex predators regulate entire food webs through trophic cascades. [...], when gray wolves were reintroduced to Yellowstone National Park in 1995, their predation altered the foraging behavior of elk, allowing overgrazed streamside willow and aspen stands to regenerate and stabilizing riverbanks.'\nWhich transitional phrase best fits the blank?",
                    opts: [
                        "For instance",
                        "On the other hand",
                        "Nevertheless",
                        "In contrast"
                    ],
                    ans: 0,
                    exp: "Kalimat pertama menyampaikan pernyataan umum tentang predator puncak dan kaskade trofik, lalu kalimat kedua memberikan contoh kasus spesifik (serigala abu-abu di Taman Nasional Yellowstone). Maka transisi yang tepat adalah 'For instance'."
                },
                {
                    q: "Read the three-sentence excerpt below:\n'[Sentence 1] Early nineteenth-century geologists assumed that erratic boulders scattered across northern European plains had been deposited by a single catastrophic biblical flood.\n[Sentence 2] In the 1830s, Swiss naturalist Louis Agassiz examined striated bedrock and moraine ridges in the Alpine valleys and noticed identical markings across Scotland and Scandinavia.\n[Sentence 3] He concluded that vast continental ice sheets had once advanced across much of Europe during a prehistoric Ice Age, slowly grinding and transporting boulders over hundreds of kilometers.'\nWhat is the rhetorical function of Sentence 2 within the excerpt?",
                    opts: [
                        "It summarizes the biblical flood theory supported by Sentence 1.",
                        "It presents the empirical field observations that led Agassiz to formulate the Ice Age theory in Sentence 3, overturning the earlier assumption in Sentence 1.",
                        "It refutes Agassiz's conclusion in Sentence 3 by proving that glaciers cannot move boulders.",
                        "It introduces an unrelated biographical anecdote about Scottish tourists in Switzerland."
                    ],
                    ans: 1,
                    exp: "Kalimat 2 berfungsi sebagai jembatan bukti observasi lapangan (batuan dasar bergores dan punggung morena di Alpen serta Skotlandia/Skandinavia) yang mengantarkan Agassiz pada kesimpulan teori Zaman Es di Kalimat 3 sekaligus mematahkan asumsi lama di Kalimat 1."
                }
            ]
        }
    ]
};
