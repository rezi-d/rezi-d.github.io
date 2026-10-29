// scripts/build_inggris_pilihan_paket2.js
// Generator untuk tka/data/mapel-inggris-pilihan-paket2.js
// 25 Soal Standar TKA Bahasa Inggris (Pilihan / Tingkat Lanjut) Kurikulum Merdeka Fase F
// Disinkronkan langsung dari Halaman 164-184 Buku Kompilasi Soal TKA Mata Pilihan 2025
// Variasi: 17 PG, 4 MCMA, 4 Benar/Salah (kompleks_bs)
// 100% BEBAS tanda dolar ($)

const fs = require('fs');
const path = require('path');

const soalList = [
  // --- PASSAGE 1: BEHAVIORAL SOCIOLOGY & SOCIAL NORMS (Soal 1 s.d. 3) ---
  {
    id: 1,
    kode: "25ENGP-PRED2-001",
    elemen: "Membaca dan Memirsa",
    subelemen: "Main Idea of Social Science Text",
    kompetensi: "Menganalisis ide pokok wacana sosiologi perilaku dan norma sosial.",
    indikator: "Menentukan fokus utama wacana tentang pembentukan norma sosial dan sustainable behavior.",
    tipe: "pg",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-teal-100 text-teal-800 font-bold rounded-lg text-xs mb-1">Reading Passage 1 (Questions 1 to 3)</span>
  <p class="font-bold text-slate-900 text-sm sm:text-base">Social Norms, Conformity, and Sustainable Behavior</p>
  <p><strong>[1]</strong> Social norms are the implicit social rules that govern behavior within a community. Norms are not directly established; instead, they develop over time as people go about their daily behaviors, sense people's reactions to those behaviors, and observe what other people are doing. Social norms differ, depending on the group of people, community, or culture. What is considered fully normal, even admirable, in one group may be met with disapproval in another (e.g., offices where casual dress is normal versus offices where everyone must wear a formal suit).</p>
  <p><strong>[2]</strong> According to renowned psychologist Robert Cialdini, people are constantly looking for "social proof" to guide their own behavior. They look for clues to what other people are doing in order to understand what is appropriate. This psychological tendency is remarkably potent: when individuals see their neighbors conserving water or installing solar panels, they are significantly more likely to adopt those eco-friendly habits themselves. The goal of environmental policy makers is therefore to make sustainable behavior something people actively aspire to, effectively transforming green practices into the dominant social norm that propels society toward collective ecological resilience.</p>
</div>
<p class="font-semibold text-slate-900 mb-2">
The passage is mainly concerned with....
</p>`,
    options: [
      { id: "A", key: "A", text: "The historical evolution of corporate office dress codes" },
      { id: "B", key: "B", text: "The psychological origins of social phobia in urban communities" },
      { id: "C", key: "C", text: "Strict legal punishments for citizens who violate communal guidelines" },
      { id: "D", key: "D", text: "The concept of social norms and how social proof can be utilized to promote sustainable behavior" },
      { id: "E", key: "E", text: "Technological innovations in residential solar panel manufacturing" }
    ],
    kunci: "D",
    pembahasan: `<strong>Main Topic Analysis (Hal. 178):</strong><br>
The text introduces how implicit social norms develop and how people seek social proof (paragraph 1), concluding with how social proof can turn sustainable behavior into an aspirational collective norm (paragraph 2). Therefore, the passage is primarily concerned with <strong>the concept of social norms and how social proof promotes sustainable behavior (Option D)</strong>.<br><br>
<strong>Answer: D</strong>`
  },
  {
    id: 2,
    kode: "25ENGP-PRED2-002",
    elemen: "Membaca dan Memirsa",
    subelemen: "Contextual Vocabulary",
    kompetensi: "Menjelaskan makna kosakata kontekstual dalam wacana sosiologi.",
    indikator: "Menentukan makna kata 'disapproval' berdasarkan konteks bacaan.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Consider the following sentence from paragraph [1]:<br>
<em>"What is considered fully normal, even admirable, in one group may be met with <strong>disapproval</strong> in another."</em>
</p>
<p class="font-semibold text-slate-900 mb-2">
Based on the text, the word <strong>disapproval</strong> is closest in meaning to....
</p>`,
    options: [
      { id: "A", key: "A", text: "admiration and praise" },
      { id: "B", key: "B", text: "indifference and neutrality" },
      { id: "C", key: "C", text: "unconditional support" },
      { id: "D", key: "D", text: "unfavorable judgment or objection" },
      { id: "E", key: "E", text: "enthusiastic agreement" }
    ],
    kunci: "D",
    pembahasan: `<strong>Vocabulary Meaning (Hal. 178):</strong><br>
The word <strong>disapproval</strong> means feeling or expressing that something is wrong, unacceptable, or objectionable (ketidaksetujuan / penilaian negatif). It is the direct opposite of admiration.<br><br>
<strong>Answer: D</strong>`
  },
  {
    id: 3,
    kode: "25ENGP-PRED2-003",
    elemen: "Membaca dan Memirsa",
    subelemen: "Specific Detail & Author's Argument",
    kompetensi: "Menganalisis argumen penulis terkait pembentukan perilaku berkelanjutan.",
    indikator: "Menjelaskan bagaimana perilaku berkelanjutan dapat diadopsi luas oleh masyarakat.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
According to the author, how can sustainable behavior be effectively established as a widespread norm in society?
</p>`,
    options: [
      { id: "A", key: "A", text: "By making it an admirable social benchmark that people naturally aspire to follow" },
      { id: "B", key: "B", text: "By imposing heavy criminal fines on anyone wearing casual clothes" },
      { id: "C", key: "C", text: "By eliminating all forms of peer observation in public spaces" },
      { id: "D", key: "D", text: "By prohibiting psychologists from conducting community research" },
      { id: "E", key: "E", text: "By forcing neighbors to sign commercial contracts with solar companies" }
    ],
    kunci: "A",
    pembahasan: `<strong>Specific Detail Analysis (Hal. 178):</strong><br>
Paragraph [2] explicitly states: <em>"The goal of environmental policy makers is therefore to make sustainable behavior something people actively aspire to..."</em>. People adopt eco-friendly habits when they observe their peers and view it as aspirational social proof.<br><br>
<strong>Answer: A</strong>`
  },

  // --- PASSAGE 2: EDUCATIONAL TECHNOLOGY & HOME-SCHOOL COMMUNICATION (Soal 4 s.d. 6) ---
  {
    id: 4,
    kode: "25ENGP-PRED2-004",
    elemen: "Membaca dan Memirsa",
    subelemen: "Paragraph Organization & Relationship",
    kompetensi: "Menganalisis hubungan retoris dan koherensi antarparagraf.",
    indikator: "Menilai kebenaran hubungan antara ide umum pada paragraf 1 dan contoh konkret pada paragraf 2.",
    tipe: "kompleks_bs",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-amber-100 text-amber-800 font-bold rounded-lg text-xs mb-1">Reading Passage 2 (Questions 4 to 6)</span>
  <p class="font-bold text-slate-900 text-sm sm:text-base">Digital Bridges: Technology in Early Childhood Education</p>
  <p><strong>[1]</strong> Technology tools can help educators make and strengthen home-school connections. With digital platforms as a means of sharing developmental milestones and communicating proactively with one another, early childhood educators have an unprecedented opportunity to cultivate trusting partnerships with parents and guardians.</p>
  <p><strong>[2]</strong> Practical digital applications such as real-time messaging apps, interactive portfolios, and secure video conferencing offer affordable ways for busy working families to participate in their child's classroom experiences. Rather than waiting for quarterly parent-teacher conferences, parents can now observe daily learning activities and reinforce pedagogical concepts at home.</p>
</div>
<p class="font-semibold text-slate-900 mb-2">
Evaluate whether each statement about the relationship between paragraphs [1] and [2] is <strong>True</strong> or <strong>False</strong>:
</p>`,
    items: [
      {
        pernyataan: "Paragraph [1] introduces the general concept of technology fostering home-school partnerships, while paragraph [2] elaborates with specific digital tools and practical benefits.",
        kunci: "Benar",
        penjelasan: "Follows general-to-specific (umum-ke-khusus) expository relationship."
      },
      {
        pernyataan: "Paragraph [2] completely refutes and disproves all claims made in paragraph [1] regarding the usefulness of technology.",
        kunci: "Salah",
        penjelasan: "Paragraph [2] reinforces and supports paragraph [1] with concrete application examples."
      },
      {
        pernyataan: "Both paragraphs highlight that digital communication tools allow working parents to engage more frequently with early childhood education.",
        kunci: "Benar",
        penjelasan: "Consistent with the shared thesis of both paragraphs."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Paragraph Relationship Breakdown (Hal. 178):</strong><br>
1. <strong>Statement 1 (True):</strong> Paragraf 1 memaparkan konsep umum (general), sedangkan paragraf 2 menyajikan alat-alat spesifik seperti video conference dan portofolio interaktif (specific).<br>
2. <strong>Statement 2 (False):</strong> Paragraf 2 tidak membantah (refute), melainkan memperkuat argumen paragraf 1.<br>
3. <strong>Statement 3 (True):</strong> Keduanya menekankan peningkatan keterlibatan orang tua bekerja.<br><br>
<strong>Answer: True, False, True</strong>`
  },
  {
    id: 5,
    kode: "25ENGP-PRED2-005",
    elemen: "Membaca dan Memirsa",
    subelemen: "Multi-Select Educational Advantages",
    kompetensi: "Mengidentifikasi berbagai manfaat penggunaan teknologi dalam komunikasi sekolah-keluarga.",
    indikator: "Memilih keuntungan konkret penggunaan aplikasi digital dalam pendidikan anak usia dini.",
    tipe: "mcma",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
According to Passage 2, what practical advantages do modern digital tools provide for early childhood educators and parents? <em>(Select all correct answers!)</em>
</p>`,
    options: [
      { id: "A", key: "A", text: "Enabling continuous, real-time sharing of children's developmental milestones" },
      { id: "B", key: "B", text: "Providing flexible video conferencing options for working parents who cannot attend physical meetings" },
      { id: "C", key: "C", text: "Completely eliminating the professional role of classroom teachers in early education" },
      { id: "D", key: "D", text: "Allowing parents to reinforce classroom learning concepts directly at home" },
      { id: "E", key: "E", text: "Replacing all physical textbooks with mandatory social media accounts for toddlers" }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: `<strong>Multi-Select Detail Analysis:</strong><br>
- <strong>Option A (Correct):</strong> Stated in paragraph [1] regarding developmental sharing.<br>
- <strong>Option B (Correct):</strong> Stated in paragraph [2] regarding flexible video conferencing for busy working families.<br>
- <strong>Option D (Correct):</strong> Stated in paragraph [2]: <em>"reinforce pedagogical concepts at home"</em>.<br>
- Options C and E are absurd distortions of the text.<br><br>
<strong>Answer: A, B, and D</strong>`
  },
  {
    id: 6,
    kode: "25ENGP-PRED2-006",
    elemen: "Membaca dan Memirsa",
    subelemen: "Author's Underlying Assumption",
    kompetensi: "Menganalisis asumsi dasar yang mendasari argumen penulis.",
    indikator: "Menentukan asumsi penulis mengenai peran sinergi sekolah dan keluarga.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
The author of Passage 2 holds the underlying assumption that....
</p>`,
    options: [
      { id: "A", key: "A", text: "Early childhood development thrives best when there is consistent collaboration and information sharing between educators and families" },
      { id: "B", key: "B", text: "Children under age five should spend at least eight hours a day in front of computer screens" },
      { id: "C", key: "C", text: "Parents generally have no interest in their children's cognitive development" },
      { id: "D", key: "D", text: "Face-to-face communication in schools is harmful and should be permanently outlawed" },
      { id: "E", key: "E", text: "Teachers are solely responsible for a child's moral and academic upbringing" }
    ],
    kunci: "A",
    pembahasan: `<strong>Author's Underlying Assumption:</strong><br>
The entire passage rests on the core premise that children's learning outcomes and emotional development are substantially enhanced when teachers and parents build strong, continuous collaborative partnerships.<br><br>
<strong>Answer: A</strong>`
  },

  // --- PASSAGE 3: AMERICAN LITERARY BIOGRAPHY (ERNEST HEMINGWAY) (Soal 7 s.d. 9) ---
  {
    id: 7,
    kode: "25ENGP-PRED2-007",
    elemen: "Membaca dan Memirsa",
    subelemen: "Literary Biography Comprehension",
    kompetensi: "Menganalisis biografi sastrawan dan karakteristik gaya kepenulisannya.",
    indikator: "Menentukan topik utama wacana biografi Ernest Hemingway.",
    tipe: "pg",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-purple-100 text-purple-800 font-bold rounded-lg text-xs mb-1">Reading Passage 3 (Questions 7 to 9)</span>
  <p class="font-bold text-slate-900 text-sm sm:text-base">Ernest Hemingway: The Architecture of Minimalist Prose</p>
  <p><strong>[1]</strong> One of the most towering figures in twentieth-century world literature is Ernest Miller Hemingway. Born in 1899 in Oak Park, Illinois, Hemingway was raised by a physician father who instilled in him a passion for outdoor life and a musician mother. During high school, Hemingway actively participated in boxing, football, and track while developing his sharp prose instincts as a reporter for his school's newspaper.</p>
  <p><strong>[2]</strong> After working as a cub reporter for <em>The Kansas City Star</em>, where he absorbed the newspaper's legendary style guide—<em>"Use short sentences. Use short first paragraphs. Use vigorous English. Be positive, not negative"</em>—Hemingway forged his revolutionary "Iceberg Theory" of writing. He maintained that the dignity of an iceberg is due to only one-eighth of it being above water. A writer who omits things because he knows them creates deeper emotional resonance than one who writes everything explicitly.</p>
  <p><strong>[3]</strong> Hemingway produced his most celebrated masterpieces, including <em>The Sun Also Rises</em>, <em>A Farewell to Arms</em>, and <em>The Old Man and the Sea</em>, between the mid-1920s and the mid-1950s, ultimately earning the Pulitzer Prize in 1953 and the Nobel Prize in Literature in 1954.</p>
</div>
<p class="font-semibold text-slate-900 mb-2">
The passage mainly discusses....
</p>`,
    options: [
      { id: "A", key: "A", text: "The medical practices of Midwestern physicians in the early 1900s" },
      { id: "B", key: "B", text: "Ernest Hemingway's life, career milestones, and the formation of his signature writing style" },
      { id: "C", key: "C", text: "The physical training routines of high school boxing athletes" },
      { id: "D", key: "D", text: "A detailed plot analysis of <em>The Kansas City Star</em> newspapers" },
      { id: "E", key: "E", text: "The geographical climate of Oak Park, Illinois" }
    ],
    kunci: "B",
    pembahasan: `<strong>Main Topic Analysis (Hal. 179–180):</strong><br>
The text presents a biographical overview of Ernest Hemingway: his upbringing and school years (paragraph 1), his journalistic training and the philosophical development of his Iceberg Theory (paragraph 2), and his peak literary achievements and Nobel Prize (paragraph 3). Thus, it discusses <strong>Hemingway's life, career, and writing style (Option B)</strong>.<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 8,
    kode: "25ENGP-PRED2-008",
    elemen: "Membaca dan Memirsa",
    subelemen: "Literary Theory & Specific Detail",
    kompetensi: "Menjelaskan konsep 'Iceberg Theory' dalam sastra modern.",
    indikator: "Menjelaskan esensi teori gunung es gaya kepenulisan Hemingway.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
What is the core principle of Hemingway's celebrated <strong>"Iceberg Theory"</strong> as described in paragraph [2]?
</p>`,
    options: [
      { id: "A", key: "A", text: "Writers should describe every minor character's biography in exhaustive detail" },
      { id: "B", key: "B", text: "A story gains greater emotional power when underlying themes and deep knowledge remain subtly implied beneath concise, stripped-down prose rather than explicitly stated" },
      { id: "C", key: "C", text: "Authors must set their novels exclusively in freezing Arctic polar environments" },
      { id: "D", key: "D", text: "Novels should be written in long, convoluted sentences filled with obscure metaphors" },
      { id: "E", key: "E", text: "Writers should only publish books after they turn eighty years old" }
    ],
    kunci: "B",
    pembahasan: `<strong>Literary Concept Analysis (Hal. 180):</strong><br>
The Iceberg Theory (*Teori Gunung Es*) posits that seven-eighths of a story's emotional weight lies submerged beneath the surface. By deliberately omitting obvious descriptions and using concise, vigorous prose, the underlying truth resonates more powerfully with the reader.<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 9,
    kode: "25ENGP-PRED2-009",
    elemen: "Membaca dan Memirsa",
    subelemen: "Factual Chronology",
    kompetensi: "Mengidentifikasi rentang waktu produktif karya sastrawan dunia.",
    indikator: "Menentukan kurun waktu penulisan sebagian besar karya besar Hemingway.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
According to the passage, during which period did Ernest Hemingway produce the vast majority of his most acclaimed literary works?
</p>`,
    options: [
      { id: "A", key: "A", text: "Between the mid-1920s and the mid-1950s" },
      { id: "B", key: "B", text: "Before his graduation from high school in 1913" },
      { id: "C", key: "C", text: "Exclusively during the nineteenth century" },
      { id: "D", key: "D", text: "After the year 1975" },
      { id: "E", key: "E", text: "Only while working as a high school boxing coach" }
    ],
    kunci: "A",
    pembahasan: `<strong>Chronological Detail (Hal. 180):</strong><br>
Paragraph [3] states explicitly: <em>"Hemingway produced his most celebrated masterpieces... between the mid-1920s and the mid-1950s"</em>.<br><br>
<strong>Answer: A</strong>`
  },

  // --- PASSAGE 4: ALPINE GEOMORPHOLOGY & NATIONAL PARKS (YOSEMITE FALLS) (Soal 10 s.d. 12) ---
  {
    id: 10,
    kode: "25ENGP-PRED2-010",
    elemen: "Membaca dan Memirsa",
    subelemen: "Physical Geography Evaluation (True/False)",
    kompetensi: "Mengevaluasi fakta geologis dan jalur pendakian air terjun Yosemite.",
    indikator: "Menilai kebenaran pernyataan terkait topografi dan rute pendakian Yosemite Falls.",
    tipe: "kompleks_bs",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-rose-100 text-rose-800 font-bold rounded-lg text-xs mb-1">Reading Passage 4 (Questions 10 to 12)</span>
  <p class="font-bold text-slate-900 text-sm sm:text-base">Ascending the Majesty of Yosemite Falls</p>
  <p><strong>[1]</strong> Yosemite Falls in California is world-renowned as one of the tallest waterfalls in North America, plunging a breathtaking total of 2,425 feet (739 meters). Although casually referred to by tourists as a two-stage cascade, it actually consists of three distinct geological sections: Upper Yosemite Fall, the Middle Cascades, and Lower Yosemite Fall.</p>
  <p><strong>[2]</strong> Hiking to the crest of Upper Yosemite Fall is considered one of the park's most strenuous and rewarding day treks. It takes an entire day of rigorous switchback climbing across exposed granite cliffs. During late spring, melting snowpack fuels a thunderous surge of glacial water, creating mist that renders the narrow rocky trails extraordinarily slippery and treacherous.</p>
</div>
<p class="font-semibold text-slate-900 mb-2">
Evaluate whether each statement regarding Yosemite Falls is <strong>True</strong> or <strong>False</strong>:
</p>`,
    items: [
      {
        pernyataan: "Yosemite Falls consists of three distinct geological sections rather than just two.",
        kunci: "Benar",
        penjelasan: "Supported by paragraph [1]: 'it actually consists of three distinct geological sections'."
      },
      {
        pernyataan: "Reaching the summit of Upper Yosemite Fall is a gentle, twenty-minute stroll accessible to untrained visitors in flip-flops.",
        kunci: "Salah",
        penjelasan: "Contradicted by paragraph [2]: 'It takes an entire day of rigorous switchback climbing across exposed granite cliffs'."
      },
      {
        pernyataan: "The volume of water plunging over the falls reaches peak thunderous intensity during the late spring snowmelt.",
        kunci: "Benar",
        penjelasan: "Supported by paragraph [2]: 'During late spring, melting snowpack fuels a thunderous surge'."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Geological Passage Evaluation (Hal. 180):</strong><br>
1. <strong>Statement 1 (True):</strong> Terdiri dari 3 bagian: Upper Fall, Middle Cascades, Lower Fall.<br>
2. <strong>Statement 2 (False):</strong> Pendakian sangat berat (*strenuous*) dan membutuhkan waktu seharian penuh (*takes an entire day*).<br>
3. <strong>Statement 3 (True):</strong> Puncak debit air terjadi pada akhir musim semi akibat lelehan salju (*snowmelt*).<br><br>
<strong>Answer: True, False, True</strong>`
  },
  {
    id: 11,
    kode: "25ENGP-PRED2-011",
    elemen: "Membaca dan Memirsa",
    subelemen: "Multi-Select Trail Hazards",
    kompetensi: "Mengidentifikasi faktor bahaya alam dalam pendakian tebing granit.",
    indikator: "Memilih kondisi alam yang menjadikan jalur Yosemite Falls berbahaya.",
    tipe: "mcma",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
According to Passage 4, what environmental factors make the hiking trail to Upper Yosemite Fall challenging and hazardous? <em>(Select all correct answers!)</em>
</p>`,
    options: [
      { id: "A", key: "A", text: "Steep, strenuous switchback ascents carved into exposed granite cliffs" },
      { id: "B", key: "B", text: "Trail paths rendered slippery by dense spray and glacial mist from the falls" },
      { id: "C", key: "C", text: "Active lava flows spilling regularly onto the hiking footpaths" },
      { id: "D", key: "D", text: "Physical exhaustion resulting from a full day of demanding climbing" },
      { id: "E", key: "E", text: "Constant sandstorms blowing in from surrounding Sahara deserts" }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: `<strong>Multi-Select Hazard Analysis:</strong><br>
- <strong>Option A (Correct):</strong> Stated in paragraph [2]: <em>"rigorous switchback climbing across exposed granite cliffs"</em>.<br>
- <strong>Option B (Correct):</strong> Stated in paragraph [2]: <em>"mist that renders the narrow rocky trails extraordinarily slippery and treacherous"</em>.<br>
- <strong>Option D (Correct):</strong> Stated in paragraph [2]: <em>"most strenuous... takes an entire day"</em>.<br>
- Options C and E are geographically absurd.<br><br>
<strong>Answer: A, B, and D</strong>`
  },
  {
    id: 12,
    kode: "25ENGP-PRED2-012",
    elemen: "Membaca dan Memirsa",
    subelemen: "Vocabulary Synonyms",
    kompetensi: "Menentukan sinonim kata dalam konteks bahaya medan alam.",
    indikator: "Menentukan kata yang paling dekat artinya dengan 'treacherous'.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
In paragraph [2], the word <strong>treacherous</strong> in the phrase <em>"...slippery and <strong>treacherous</strong>"</em> is closest in meaning to....
</p>`,
    options: [
      { id: "A", key: "A", text: "comforting" },
      { id: "B", key: "B", text: "perilous or hazardous" },
      { id: "C", key: "C", text: "luxurious" },
      { id: "D", key: "D", text: "wide and paved" },
      { id: "E", key: "E", text: "monotonous" }
    ],
    kunci: "B",
    pembahasan: `<strong>Vocabulary Synonym (Hal. 180):</strong><br>
The word <strong>treacherous</strong> when describing terrain or roads means dangerously unstable, unpredictable, or unsafe (berbahaya / rawan kecelakaan). Its closest synonym is <strong>perilous</strong> or <strong>hazardous</strong>.<br><br>
<strong>Answer: B</strong>`
  },

  // --- PASSAGE 5: AEROSPACE HISTORY & THE APOLLO LUNAR PROGRAM (Soal 13 s.d. 15) ---
  {
    id: 13,
    kode: "25ENGP-PRED2-013",
    elemen: "Membaca dan Memirsa",
    subelemen: "Historical Overview of Spaceflight",
    kompetensi: "Menganalisis sejarah penjelajahan ruang angkasa program Apollo.",
    indikator: "Menentukan judul yang paling representatif untuk teks program Apollo.",
    tipe: "pg",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-blue-100 text-blue-800 font-bold rounded-lg text-xs mb-1">Reading Passage 5 (Questions 13 to 15)</span>
  <p class="font-bold text-slate-900 text-sm sm:text-base">Landing on the Moon: The Triumphs and Perils of Project Apollo</p>
  <p><strong>[1]</strong> The Apollo program was the historic United States spaceflight effort that successfully landed the first humans on Earth's Moon. Conceived during the Eisenhower administration and executed by NASA, the program accelerated dramatically following President John F. Kennedy's 1961 congressional address committing the nation to achieve a lunar landing before the decade was out.</p>
  <p><strong>[2]</strong> Running from 1961 to 1972, Apollo was America's third human spaceflight initiative, building upon the pioneering Mercury and Gemini programs. Powered by the colossal Saturn V rocket, six missions—Apollos 11, 12, 14, 15, 16, and 17—achieved successful lunar touchdowns, beginning with Neil Armstrong and Buzz Aldrin in July 1969.</p>
  <p><strong>[3]</strong> However, triumph was shadowed by acute peril. Apollo 13 failed to reach the lunar surface when an oxygen tank exploded en route, crippling the Service Module's life-support and propulsion systems. Through extraordinary improvisational teamwork between the crew and ground controllers in Houston, the astronauts navigated around the Moon and splashed down safely on Earth.</p>
</div>
<p class="font-semibold text-slate-900 mb-2">
Which of the following titles is the most appropriate for the passage?
</p>`,
    options: [
      { id: "A", key: "A", text: "The Commercial Future of Space Tourism" },
      { id: "B", key: "B", text: "The Apollo Program: Milestones, Achievements, and the Crisis of Lunar Exploration" },
      { id: "C", key: "C", text: "The Atmospheric Chemistry of Mars and Venus" },
      { id: "D", key: "D", text: "A Technical Manual for Manufacturing Oxygen Tanks" },
      { id: "E", key: "E", text: "The Political Election of President Eisenhower" }
    ],
    kunci: "B",
    pembahasan: `<strong>Appropriate Title Selection (Hal. 180–181):</strong><br>
The passage summarizes the inception, triumphs (landing six missions on the Moon), and harrowing challenges (Apollo 13 explosion) of NASA's Apollo initiative. <strong>Option B</strong> encapsulates the entire narrative accurately.<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 14,
    kode: "25ENGP-PRED2-014",
    elemen: "Membaca dan Memirsa",
    subelemen: "Specific Historical Detail (Apollo 13)",
    kompetensi: "Menganalisis sebab kegagalan misi pendaratan Apollo 13.",
    indikator: "Menjelaskan alasan mengapa Apollo 13 tidak mendarat di permukaan bulan.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Why did the Apollo 13 mission fail to land on the Moon according to paragraph [3]?
</p>`,
    options: [
      { id: "A", key: "A", text: "Because the crew refused to follow NASA's flight instructions" },
      { id: "B", key: "B", text: "Because the spacecraft was intercepted by hostile satellites" },
      { id: "C", key: "C", text: "Because the lunar landing site was covered in unexpected stormy clouds" },
      { id: "D", key: "D", text: "Because an en-route oxygen tank explosion crippled the spacecraft's life-support and propulsion systems" },
      { id: "E", key: "E", text: "Because the Saturn V rocket ran out of fuel before leaving Earth's atmosphere" }
    ],
    kunci: "D",
    pembahasan: `<strong>Specific Cause Analysis (Hal. 181):</strong><br>
Paragraph [3] states directly: <em>"Apollo 13 failed to reach the lunar surface when an oxygen tank exploded en route, crippling the Service Module's life-support and propulsion systems."</em> (Gagal beroperasi karena tangki oksigen meledak di tengah perjalanan).<br><br>
<strong>Answer: D</strong>`
  },
  {
    id: 15,
    kode: "25ENGP-PRED2-015",
    elemen: "Membaca dan Memirsa",
    subelemen: "Chronological Sequence Evaluation",
    kompetensi: "Menilai kebenaran kronologi program antariksa Amerika Serikat.",
    indikator: "Menilai kebenaran pernyataan terkait urutan program Mercury, Gemini, dan Apollo.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Evaluate whether each chronological statement regarding the US space program is <strong>True</strong> or <strong>False</strong>:
</p>`,
    items: [
      {
        pernyataan: "The Apollo program was America's very first human spaceflight endeavor, preceding both the Mercury and Gemini programs.",
        kunci: "Salah",
        penjelasan: "Contradicted by paragraph [2]: Apollo was America's third program, following Mercury and Gemini."
      },
      {
        pernyataan: "A total of six Apollo missions successfully landed astronauts on the surface of the Moon between 1969 and 1972.",
        kunci: "Benar",
        penjelasan: "Supported by paragraph [2]: 'six missions—Apollos 11, 12, 14, 15, 16, and 17—achieved successful lunar touchdowns'."
      },
      {
        pernyataan: "The crew of Apollo 13 was completely lost in deep space and never returned to Earth.",
        kunci: "Salah",
        penjelasan: "Contradicted by paragraph [3]: the astronauts successfully 'splashed down safely on Earth'."
      }
    ],
    kunci: ["Salah", "Benar", "Salah"],
    pembahasan: `<strong>Historical Chronology Evaluation (Hal. 181):</strong><br>
1. <strong>Statement 1 (False):</strong> Apollo adalah program berawak ketiga, setelah Mercury dan Gemini.<br>
2. <strong>Statement 2 (True):</strong> Tepat ada 6 misi yang berhasil mendarat di Bulan.<br>
3. <strong>Statement 3 (False):</strong> Awak Apollo 13 berhasil kembali ke bumi dengan selamat lewat koordinasi Houston.<br><br>
<strong>Answer: False, True, False</strong>`
  },

  // --- PASSAGE 6: ART HISTORY & RENAISSANCE OIL PAINTING (Soal 16 s.d. 18) ---
  {
    id: 16,
    kode: "25ENGP-PRED2-016",
    elemen: "Membaca dan Memirsa",
    subelemen: "Art History & Technical Innovation",
    kompetensi: "Menganalisis evolusi teknik lukisan cat minyak pada era Renaisans.",
    indikator: "Menjelaskan keuntungan teknis cat minyak dibanding tempera berbasis kuning telur.",
    tipe: "pg",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-amber-100 text-amber-800 font-bold rounded-lg text-xs mb-1">Reading Passage 6 (Questions 16 to 18)</span>
  <p class="font-bold text-slate-900 text-sm sm:text-base">The Alchemy of Pigment: The Renaissance Oil Painting Revolution</p>
  <p>Prior to the fifteenth century, European painters relied predominantly on egg tempera—a fast-drying medium made by grinding mineral pigments with egg yolk. While tempera produced vivid, opaque hues, its rapid drying time prevented artists from blending colors seamlessly or achieving subtle gradations of light and shadow (<em>chiaroscuro</em>).</p>
  <p>The mastery of oil medium, pioneered by Flemish artists like Jan van Eyck and subsequently perfected across Renaissance Italy, transformed visual realism. By suspending pigments in slow-drying walnut or linseed oils, painters could apply translucent glazes in successive micro-layers. This technique allowed ambient light to penetrate the paint film and reflect from the white gesso ground below, generating an unprecedented luminescence and lifelike rendering of human skin, velvet, and metallic surfaces.</p>
</div>
<p class="font-semibold text-slate-900 mb-2">
What major technical breakthrough did oil medium offer painters compared to traditional egg tempera?
</p>`,
    options: [
      { id: "A", key: "A", text: "It dried instantly within seconds, eliminating the need for studio ventilation" },
      { id: "B", key: "B", text: "Its slow drying rate enabled artists to blend shades smoothly and apply translucent glazes for luminous depth" },
      { id: "C", key: "C", text: "It was completely free of cost because water was the only solvent required" },
      { id: "D", key: "D", text: "It dissolved canvas fibers to create three-dimensional sculptures" },
      { id: "E", key: "E", text: "It produced completely colorless paintings that only glowed in total darkness" }
    ],
    kunci: "B",
    pembahasan: `<strong>Art History Technical Breakthrough (Hal. 181–182):</strong><br>
Paragraph [2] highlights that slow-drying linseed and walnut oils allowed artists to blend tones (*seamless blending*) and build translucent glazes layer upon layer, creating luminous depth and realistic textures impossible with fast-drying egg tempera.<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 17,
    kode: "25ENGP-PRED2-017",
    elemen: "Membaca dan Memirsa",
    subelemen: "Multi-Select Aesthetic Qualities",
    kompetensi: "Mengidentifikasi efek visual yang dimungkinkan oleh teknik glazing cat minyak.",
    indikator: "Memilih kualitas estetis yang dihasilkan oleh teknik lapisan minyak Renaisans.",
    tipe: "mcma",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
According to Passage 6, which aesthetic qualities were dramatically enhanced by the adoption of oil paint? <em>(Select all correct answers!)</em>
</p>`,
    options: [
      { id: "A", key: "A", text: "Subtle, gradual transitions between illumination and shadow (chiaroscuro)" },
      { id: "B", key: "B", text: "Lifelike textural rendering of human flesh, velvet fabrics, and reflective metals" },
      { id: "C", key: "C", text: "Luminous optical depth created by light penetrating transparent layers" },
      { id: "D", key: "D", text: "Chalky, brittle finishes that flaked off the canvas immediately" },
      { id: "E", key: "E", text: "Mandatory geometric abstraction with zero figurative elements" }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: `<strong>Multi-Select Aesthetics Analysis:</strong><br>
- <strong>Option A (Correct):</strong> Chiaroscuro gradations possible through slow drying.<br>
- <strong>Option B (Correct):</strong> Realistic depiction of human skin, fabrics, and metals.<br>
- <strong>Option C (Correct):</strong> Luminescence from translucent glazes reflecting off gesso.<br>
- Options D and E are factually incorrect.<br><br>
<strong>Answer: A, B, and C</strong>`
  },
  {
    id: 18,
    kode: "25ENGP-PRED2-018",
    elemen: "Membaca dan Memirsa",
    subelemen: "Contextual Vocabulary in Art History",
    kompetensi: "Menjelaskan arti istilah teknis seni rupa 'translucent glazes'.",
    indikator: "Menentukan makna frasa 'translucent glazes' dalam wacana lukisan cat minyak.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
In paragraph [2], the phrase <strong>translucent glazes</strong> refers to....
</p>`,
    options: [
      { id: "A", key: "A", text: "solid ceramic plates used for mixing food ingredients" },
      { id: "B", key: "B", text: "semi-transparent thin layers of diluted oil paint that allow light to pass through" },
      { id: "C", key: "C", text: "heavy opaque coats of black plaster applied to cover canvas flaws" },
      { id: "D", key: "D", text: "protective glass frames placed over completed museum artworks" },
      { id: "E", key: "E", text: "varnishes made from honey and raw beeswax" }
    ],
    kunci: "B",
    pembahasan: `<strong>Art Technique Vocabulary:</strong><br>
A <em>glaze</em> in oil painting is a thin, oily, semi-transparent layer of pigment that modifies the color of the paint layer beneath it while allowing light to transmit through, producing luminous optical richness.<br><br>
<strong>Answer: B</strong>`
  },

  // --- PASSAGE 7: COGNITIVE NEUROSCIENCE (HUMAN MEMORY VS COMPUTERS) (Soal 19 s.d. 21) ---
  {
    id: 19,
    kode: "25ENGP-PRED2-019",
    elemen: "Membaca dan Memirsa",
    subelemen: "Comparative Cognitive Neuroscience",
    kompetensi: "Menganalisis perbandingan arsitektur memori otak manusia dengan komputer digital.",
    indikator: "Menjelaskan mengapa memori manusia dinilai jauh lebih canggih (sophisticated) dibanding komputer.",
    tipe: "pg",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-teal-100 text-teal-800 font-bold rounded-lg text-xs mb-1">Reading Passage 7 (Questions 19 to 21)</span>
  <p class="font-bold text-slate-900 text-sm sm:text-base">The Architecture of Recollection: Brain vs. Binary</p>
  <p>Human memory, formerly assumed by early cyberneticists to be an inefficient and lossy biological filing system, is fundamentally much more sophisticated than the binary storage of a digital computer. While a computer retrieves data by looking up fixed numerical memory addresses across silicon chips, the human brain reconstructs memories dynamically through associative neural networks across billions of synaptic connections.</p>
  <p>Pioneering Canadian neurosurgeon Dr. Wilder Penfield demonstrated that gentle electrical stimulation of specific temporal lobe cortices could elicit the vivid, total sensory recall of forgotten life events—including distant childhood melodies, smells, and dream fragments. Unlike hard drives that passively store static bits, our neural memory traces continuously integrate new experiences, contextual meaning, and emotional significance.</p>
</div>
<p class="font-semibold text-slate-900 mb-2">
Compared with digital computer storage, human memory is described as....
</p>`,
    options: [
      { id: "A", key: "A", text: "inflexible, robotic, and limited to binary 1s and 0s" },
      { id: "B", key: "B", text: "vastly more complex, associative, and capable of dynamic contextual reconstruction" },
      { id: "C", key: "C", text: "incapable of remembering anything that occurred longer than two days ago" },
      { id: "D", key: "D", text: "easily erased whenever a person takes a hot shower" },
      { id: "E", key: "E", text: "identical in every mechanical detail to a silicon microchip" }
    ],
    kunci: "B",
    pembahasan: `<strong>Cognitive Comparison Analysis (Hal. 182):</strong><br>
The word <em>sophisticated</em> means highly complex and developed. Unlike computers that search rigid addresses, human memory utilizes associative neural networks that dynamically synthesize context, emotion, and sensory cues (<strong>more complex and associative, Option B</strong>).<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 20,
    kode: "25ENGP-PRED2-020",
    elemen: "Membaca dan Memirsa",
    subelemen: "Experimental Neurobiology Detail",
    kompetensi: "Menganalisis eksperimen stimulasi korteks otak oleh Dr. Wilder Penfield.",
    indikator: "Menjelaskan metode yang digunakan Dr. Penfield untuk membangkitkan ingatan masa lampau.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
How did neurosurgeon Dr. Wilder Penfield elicit the vivid recall of long-forgotten past events in his patients?
</p>`,
    options: [
      { id: "A", key: "A", text: "By administering large doses of synthetic sleeping pills" },
      { id: "B", key: "B", text: "By using gentle electrical stimulation on localized areas of the brain's temporal cortex" },
      { id: "C", key: "C", text: "By having subjects solve complex algebraic equations on a blackboard" },
      { id: "D", key: "D", text: "By hypnotizing subjects in total sensory deprivation tanks" },
      { id: "E", key: "E", text: "By surgically removing half of their cerebral hemispheres" }
    ],
    kunci: "B",
    pembahasan: `<strong>Experimental Detail (Hal. 182):</strong><br>
Paragraph [2] states: <em>"proved that by stimulating their brains electrically, he could elicit the total recall of complex events in his subjects' lives"</em> (stimulasi elektrik mikro pada korteks temporal otak).<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 21,
    kode: "25ENGP-PRED2-021",
    elemen: "Membaca dan Memirsa",
    subelemen: "Vocabulary in Neuroscience Context",
    kompetensi: "Memaknai istilah 'associative neural networks' dalam neurosains.",
    indikator: "Menentukan arti keterkaitan jaringan sinaptik dalam membentuk memori.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
In the context of paragraph [1], what does the term <strong>associative</strong> imply regarding how the human mind retrieves memories?
</p>`,
    options: [
      { id: "A", key: "A", text: "Memories can only be retrieved if someone reads aloud from an encyclopedia" },
      { id: "B", key: "B", text: "Thoughts and recollections are interconnected by semantic meaning, sensory cues, and emotional relationships rather than rigid numerical index slots" },
      { id: "C", key: "C", text: "The human brain cannot store more than ten phone numbers simultaneously" },
      { id: "D", key: "D", text: "Every memory requires an external internet Wi-Fi connection to be processed" },
      { id: "E", key: "E", text: "Memories are filed alphabetically in the bloodstream" }
    ],
    kunci: "B",
    pembahasan: `<strong>Neuroscience Concept:</strong><br>
Associative memory means that one concept or sensory stimulus (e.g., a specific scent or melody) automatically triggers related neural pathways and emotional recollections throughout interconnected synaptic networks.<br><br>
<strong>Answer: B</strong>`
  },

  // --- PASSAGE 8: HIGHER EDUCATION POLICY & LECTURER LAW (Soal 22 s.d. 23) ---
  {
    id: 22,
    kode: "25ENGP-PRED2-022",
    elemen: "Membaca dan Memirsa",
    subelemen: "Educational Policy Evaluation (True/False)",
    kompetensi: "Mengevaluasi kebijakan peningkatan kualifikasi dosen dan rasio akademik.",
    indikator: "Menilai kebenaran pernyataan terkait implementasi Undang-Undang Guru dan Dosen.",
    tipe: "kompleks_bs",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-purple-100 text-purple-800 font-bold rounded-lg text-xs mb-1">Reading Passage 8 (Questions 22 to 23)</span>
  <p class="font-bold text-slate-900 text-sm sm:text-base">Upgrading Faculty Standards in Indonesian Higher Education</p>
  <p>The enactment of the 2005 Teacher and Lecturer Law mandated that all university faculty members in Indonesia hold at least a master's degree (S-2) to teach undergraduate programs and a doctoral degree (S-3) for graduate supervision. With over 25,000 university lecturers initially holding only undergraduate diplomas (S-1), the government launched nationwide scholarship schemes to facilitate advanced degree completion and upgrade national scientific productivity.</p>
</div>
<p class="font-semibold text-slate-900 mb-2">
Evaluate whether each statement regarding higher education faculty policy is <strong>True</strong> or <strong>False</strong>:
</p>`,
    items: [
      {
        pernyataan: "Under the Teacher and Lecturer Law, university lecturers teaching undergraduate programs are legally required to hold at least a master's degree (S-2).",
        kunci: "Benar",
        penjelasan: "Directly matches the statutory mandate described in the text."
      },
      {
        pernyataan: "The government completely terminated the employment of all 25,000 non-master lecturers without providing any scholarship or study opportunities.",
        kunci: "Salah",
        penjelasan: "Contradicted by the text: government launched nationwide scholarship schemes to facilitate advanced degree completion."
      },
      {
        pernyataan: "Upgrading academic faculty credentials aims to foster higher national scientific productivity and research excellence.",
        kunci: "Benar",
        penjelasan: "Supported by the final clause of the passage."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Educational Policy Evaluation (Hal. 183–184):</strong><br>
1. <strong>Statement 1 (True):</strong> Kualifikasi minimum dosen program sarjana adalah S-2.<br>
2. <strong>Statement 2 (False):</strong> Pemerintah tidak memecat, melainkan menyediakan program beasiswa pembinaan.<br>
3. <strong>Statement 3 (True):</strong> Peningkatan kualifikasi bertujuan memacu produktivitas riset dan mutu akademik nasional.<br><br>
<strong>Answer: True, False, True</strong>`
  },
  {
    id: 23,
    kode: "25ENGP-PRED2-023",
    elemen: "Membaca dan Memirsa",
    subelemen: "Multi-Select Educational Challenges",
    kompetensi: "Mengidentifikasi tujuan strategis reformasi kualifikasi dosen di perguruan tinggi.",
    indikator: "Memilih tujuan-tujuan strategis peningkatan kualifikasi akademik dosen.",
    tipe: "mcma",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
What are the primary strategic objectives of mandating advanced degrees (master's and doctoral) for university faculty members? <em>(Select all correct answers!)</em>
</p>`,
    options: [
      { id: "A", key: "A", text: "Elevating the quality and rigor of undergraduate instructional pedagogy" },
      { id: "B", key: "B", text: "Increasing peer-reviewed scientific publications and international patent generation" },
      { id: "C", key: "C", text: "Preventing all university students from accessing library books" },
      { id: "D", key: "D", text: "Strengthening graduate-level thesis and dissertation research supervision" },
      { id: "E", key: "E", text: "Closing down all universities across the nation permanently" }
    ],
    kunci: ["A", "B", "D"],
    pembahasan: `<strong>Multi-Select Policy Analysis:</strong><br>
- <strong>Option A (Correct):</strong> Improves pedagogical standards and curriculum rigor.<br>
- <strong>Option B (Correct):</strong> Advances national scientific research and publication productivity.<br>
- <strong>Option D (Correct):</strong> Ensures qualified doctoral supervision for graduate students.<br>
- Options C and E contradict the purpose of higher education development.<br><br>
<strong>Answer: A, B, and D</strong>`
  },

  // --- SYNTHESIS & ADVANCED SUMMARY (Soal 24 s.d. 25) ---
  {
    id: 24,
    kode: "25ENGP-PRED2-024",
    elemen: "Menulis",
    subelemen: "Academic Transition Words in Complex Sentences",
    kompetensi: "Melengkapi kalimat akademik dengan konjungsi transisi yang logis.",
    indikator: "Memilih kata transisi yang menyatakan konsesi dan penegasan kesimpulan.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Read the sentence with blanks:<br>
<em>"<strong>[ ...1... ]</strong> the initial capital expenditure of offshore wind turbines remains high, their long-term operational costs are minimal; <strong>[ ...2... ]</strong>, governments are offering targeted subsidies to accelerate deployment."</em>
</p>
<p class="font-semibold text-slate-900 mb-2">
Which pair of transition words correctly completes the sentence?
</p>`,
    options: [
      { id: "A", key: "A", text: "Although; consequently" },
      { id: "B", key: "B", text: "Because; however" },
      { id: "C", key: "C", text: "Unless; nevertheless" },
      { id: "D", key: "D", text: "Since; on the contrary" },
      { id: "E", key: "E", text: "Despite; furthermore" }
    ],
    kunci: "A",
    pembahasan: `<strong>Academic Transition Words:</strong><br>
- Blank [1] introduces a concessive dependent clause contrasting high upfront capital with minimal operating costs: <strong>Although</strong>.<br>
- Blank [2] introduces a logical result/consequence connecting minimal long-term costs to government subsidies: <strong>consequently</strong>.<br><br>
<strong>Answer: A (Although; consequently)</strong>`
  },
  {
    id: 25,
    kode: "25ENGP-PRED2-025",
    elemen: "Membaca dan Memirsa",
    subelemen: "Comprehensive Summary of Literary Prose Style",
    kompetensi: "Menyusun ringkasan objektif mengenai gaya penulisan sastra Ernest Hemingway.",
    indikator: "Menentukan rangkuman paling tepat mengenai filosofi Iceberg Theory Hemingway.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Which of the following statements provides the most accurate and concise summary of Ernest Hemingway's literary philosophy (<em>Reading Passage 3</em>)?
</p>`,
    options: [
      { id: "A", key: "A", text: "Hemingway revolutionized modern literature by utilizing vigorous, stripped-down language and the Iceberg Theory, wherein deep subtext and emotional gravity are powerfully conveyed through what is left unsaid." },
      { id: "B", key: "B", text: "Hemingway advocated that writers must write hundreds of adjective-heavy pages to entertain casual readers." },
      { id: "C", key: "C", text: "Hemingway believed that only medical doctors have the right to write historical novels about sports." },
      { id: "D", key: "D", text: "Hemingway's success was entirely due to his boxing victories, with his prose receiving zero recognition." },
      { id: "E", key: "E", text: "Hemingway argued that modern literature should avoid short sentences and focus only on rhyming poetry." }
    ],
    kunci: "A",
    pembahasan: `<strong>Summary Synthesis:</strong><br>
Hemingway's literary revolution centered on concise, vigorous English and the *Iceberg Theory*—delivering profound emotional impact by deliberately leaving deep thematic subtext beneath bare, unadorned prose. <strong>Option A</strong> summarizes this philosophy flawlessly.<br><br>
<strong>Answer: A</strong>`
  }
];

// Validasi 0 Tanda Dolar
const fullJson = JSON.stringify(soalList);
if (fullJson.includes('$')) {
  console.error("FATAL: Masih ada tanda dolar ($) di soal!");
  process.exit(1);
}

// Generate Javascript File
const fileContent = `// tka/data/mapel-inggris-pilihan-paket2.js
// Bank Soal & Pembahasan Prediksi Resmi TKA Bahasa Inggris (Pilihan / Tingkat Lanjut) SMA 2025/2026 (Paket 2: 25 Butir Soal Standar TKA BPPP)
// Disinkronkan langsung dari Dokumen Resmi Hal. 164-184 Buku Kompilasi Soal TKA Mata Pilihan 2025
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun berdasarkan kurikulum resmi TKA Bahasa Inggris (Pilihan) SMA 2025/2026 bebas tanda dolar & pembahasan komprehensif

const tkaInggrisPilihanPaket2Data = ${JSON.stringify(soalList, null, 2)};

// Inisialisasi package global
if (typeof window !== 'undefined') {
  window.tkaInggrisPilihanPackages = window.tkaInggrisPilihanPackages || {};
  window.tkaInggrisPilihanPackages['paket2'] = {
    title: "Paket 2: Prediksi Resmi TKA Bahasa Inggris (Pilihan) SMA 2025/2026 (25 Soal Variatif PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 2 (Prediksi 2025/2026 • 25 Soal)",
    data: tkaInggrisPilihanPaket2Data
  };
}
`;

const targetPath = path.join(__dirname, '../tka/data/mapel-inggris-pilihan-paket2.js');
fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log("✅ Dataset Bahasa Inggris (Pilihan) Paket 2 100% BEBAS dari tanda dolar ($)!");
console.log(`🎉 ${targetPath} berhasil dibuat! (${soalList.length} soal)`);
