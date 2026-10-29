// scripts/build_inggris_wajib_paket2.js
// Generator untuk tka/data/mapel-inggris-wajib-paket2.js
// 25 Soal Standar TKA Bahasa Inggris (Wajib) Kurikulum Merdeka Fase F
// Variasi: 17 PG, 4 MCMA, 4 Benar/Salah (kompleks_bs)
// 100% BEBAS tanda dolar ($)

const fs = require('fs');
const path = require('path');

const soalList = [
  // --- PASSAGE 1: ENVIRONMENTAL SCIENCE & RENEWABLE OCEAN ENERGY (Soal 1 s.d. 4) ---
  {
    id: 1,
    kode: "25ENGW-PRED2-001",
    elemen: "Membaca dan Memirsa",
    subelemen: "Identifying Main Idea of Scientific Exposition",
    kompetensi: "Menganalisis ide pokok dan gagasan pendukung dalam teks sains lingkungan.",
    indikator: "Menentukan gagasan utama bacaan tentang potensi energi laut terbarukan.",
    tipe: "pg",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-teal-100 text-teal-800 font-bold rounded-lg text-xs mb-1">Reading Passage 1 (Questions 1 to 4)</span>
  <p class="font-bold text-slate-900 text-sm sm:text-base">Harnessing the Relentless Power of Ocean Tides and Waves</p>
  <p><strong>[1]</strong> As the global community accelerates its quest to replace fossil fuels with clean energy alternatives, marine energy has emerged as one of the most promising yet underexploited frontiers. Unlike solar radiation and wind patterns, which are inherently intermittent and subject to atmospheric unpredictability, ocean tides are governed by the gravitational pull of the moon and the sun. This celestial mechanics makes tidal streams extraordinarily predictable centuries in advance, allowing grid operators to plan baseload electricity integration with unmatched precision.</p>
  <p><strong>[2]</strong> Marine kinetic energy is primarily harvested through two distinct engineering methodologies: tidal stream generators and wave energy converters. Underwater tidal turbines function much like submerged windmills, driven by the colossal density of seawater, which is roughly 800 times denser than ambient air. Consequently, a marine turbine can generate equivalent electrical power to a conventional wind turbine while utilizing significantly smaller rotor blades.</p>
  <p><strong>[3]</strong> Nonetheless, commercial scaling faces formidable hurdles. Hostile saltwater environments inevitably induce rapid galvanic corrosion and marine biofouling on mechanical components. Furthermore, the installation of underwater moorings and high-voltage transmission cables demands substantial upfront capital expenditures. Balancing technological resilience with marine ecosystem preservation remains the vital challenge for coastal engineers worldwide.</p>
</div>
<p class="font-semibold text-slate-900 mb-2">
What is the primary topic of the passage?
</p>`,
    options: [
      { id: "A", key: "A", text: "The historical evolution of sailing navigation in the deep ocean" },
      { id: "B", key: "B", text: "The potential, engineering mechanisms, and logistical challenges of harnessing ocean energy" },
      { id: "C", key: "C", text: "The catastrophic impact of offshore fossil fuel extraction on coral reefs" },
      { id: "D", key: "D", text: "The comparative cost analysis between lunar exploration and solar farms" },
      { id: "E", key: "E", text: "The biological migration routes of marine mammals across tidal turbines" }
    ],
    kunci: "B",
    pembahasan: `<strong>Main Idea Analysis:</strong><br>
The passage thoroughly examines marine energy: its competitive advantages (predictability due to gravitational mechanics in paragraph 1), its mechanical operations (submerged turbines and water density in paragraph 2), and its operational challenges (corrosion, high costs, and ecological preservation in paragraph 3). Thus, <strong>Option B</strong> provides the most comprehensive summary.<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 2,
    kode: "25ENGW-PRED2-002",
    elemen: "Membaca dan Memirsa",
    subelemen: "Vocabulary in Context",
    kompetensi: "Memaknai kosakata dan frasa dalam konteks teks sains populer.",
    indikator: "Menentukan antonim kata 'intermittent' berdasarkan wacana.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Consider the following sentence from paragraph [1]:<br>
<em>"Unlike solar radiation and wind patterns, which are inherently <strong>intermittent</strong> and subject to atmospheric unpredictability, ocean tides are governed by the gravitational pull of the moon and the sun."</em>
</p>
<p class="font-semibold text-slate-900 mb-2">
Which of the following words is the closest <strong>opposite (antonym)</strong> in meaning to the word <strong>intermittent</strong>?
</p>`,
    options: [
      { id: "A", key: "A", text: "Sporadic" },
      { id: "B", key: "B", text: "Continuous" },
      { id: "C", key: "C", text: "Fluctuating" },
      { id: "D", key: "D", text: "Temporary" },
      { id: "E", key: "E", text: "Periodic" }
    ],
    kunci: "B",
    pembahasan: `<strong>Vocabulary in Context:</strong><br>
The word <strong>intermittent</strong> means occurring at irregular intervals, not continuous or steady (tersendat-sendat / berselang-seling).<br>
The antonym (lawan kata) of intermittent is <strong>continuous</strong> (berkelanjutan / terus-menerus tanpa putus). Words like <em>sporadic</em> and <em>fluctuating</em> are near-synonyms.<br><br>
<strong>Answer: B (Continuous)</strong>`
  },
  {
    id: 3,
    kode: "25ENGW-PRED2-003",
    elemen: "Membaca dan Memirsa",
    subelemen: "Specific Detail Comprehension",
    kompetensi: "Menemukan informasi rinci tersurat dan tersirat dalam teks eksplanasi ilmiah.",
    indikator: "Menjelaskan alasan fisik mengapa turbin laut dapat berukuran lebih kecil dibanding turbin angin.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
According to paragraph [2], why can a marine tidal turbine utilize significantly smaller blades than a conventional wind turbine to generate comparable electrical power?
</p>`,
    options: [
      { id: "A", key: "A", text: "Because ocean water moves at supersonic velocities during high tides" },
      { id: "B", key: "B", text: "Because seawater possesses a physical density roughly 800 times greater than that of ambient air" },
      { id: "C", key: "C", text: "Because underwater turbines are painted with specialized magnetic polymers" },
      { id: "D", key: "D", text: "Because the gravitational field of the moon is concentrated entirely on the seabed" },
      { id: "E", key: "E", text: "Because wind turbines are designed primarily to monitor weather, not generate power" }
    ],
    kunci: "B",
    pembahasan: `<strong>Specific Detail Comprehension:</strong><br>
Paragraph [2] explicitly states: <em>"driven by the colossal density of seawater, which is roughly 800 times denser than ambient air. Consequently, a marine turbine can generate equivalent electrical power to a conventional wind turbine while utilizing significantly smaller rotor blades."</em> (Kerapatan air laut sekitar 800 kali lebih padat daripada udara).<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 4,
    kode: "25ENGW-PRED2-004",
    elemen: "Membaca dan Memirsa",
    subelemen: "Factual Evaluation (True/False)",
    kompetensi: "Mengevaluasi kebenaran klaim faktual berdasarkan teks sains lingkungan.",
    indikator: "Menilai kebenaran pernyataan terkait kelebihan dan tantangan energi laut.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Based on Reading Passage 1, evaluate whether each of the following statements is <strong>True</strong> or <strong>False</strong>:
</p>`,
    items: [
      {
        pernyataan: "Tidal stream movements can be reliably predicted years in advance due to regular gravitational celestial mechanics.",
        kunci: "Benar",
        penjelasan: "Supported by paragraph [1]: 'ocean tides are governed by the gravitational pull of the moon and the sun... extraordinarily predictable centuries in advance'."
      },
      {
        pernyataan: "Underwater tidal equipment is completely immune to galvanic corrosion because saltwater naturally protects metal alloys.",
        kunci: "Salah",
        penjelasan: "Contradicted by paragraph [3]: 'Hostile saltwater environments inevitably induce rapid galvanic corrosion and marine biofouling'."
      },
      {
        pernyataan: "Deploying marine power requires balancing durable engineering designs with the conservation of local coastal ecosystems.",
        kunci: "Benar",
        penjelasan: "Supported by the final sentence of paragraph [3]: 'Balancing technological resilience with marine ecosystem preservation remains the vital challenge'."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Factual Evaluation Breakdown:</strong><br>
1. <strong>Statement 1 (True):</strong> Gravitational cycles make tidal energy highly predictable.<br>
2. <strong>Statement 2 (False):</strong> Saltwater accelerates metallic corrosion and biofouling rather than protecting it.<br>
3. <strong>Statement 3 (True):</strong> Coastal engineers must balance mechanical durability with environmental protection.<br><br>
<strong>Answer: True, False, True</strong>`
  },

  // --- PASSAGE 2: DIGITAL PSYCHOLOGY & THE SCIENCE OF SLEEP (Soal 5 s.d. 8) ---
  {
    id: 5,
    kode: "25ENGW-PRED2-005",
    elemen: "Membaca dan Memirsa",
    subelemen: "Multi-Select Information Identification",
    kompetensi: "Mengidentifikasi berbagai implikasi biologis paparan layar gawai di malam hari.",
    indikator: "Memilih dampak fisiologis cahaya biru terhadap sekresi hormon melatonin dan pola tidur.",
    tipe: "mcma",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-amber-100 text-amber-800 font-bold rounded-lg text-xs mb-1">Reading Passage 2 (Questions 5 to 8)</span>
  <p class="font-bold text-slate-900 text-sm sm:text-base">Blue Light, Circadian Rhythms, and the Modern Sleep Deficit</p>
  <p>In our hyper-connected society, the boundary between daytime alertness and nocturnal rest has been profoundly blurred by electronic screens. Smartphones, tablets, and LED displays emit short-wavelength blue light (ranging approximately between 450 and 480 nanometers). While natural blue light from the sun is indispensable during the morning hours to enhance cognitive performance and elevate mood, artificial nocturnal exposure triggers photoreceptive retinal ganglion cells to signal the brain's suprachiasmatic nucleus that it is still midday.</p>
  <p>This neurological deception severely suppresses the secretion of melatonin, the neurohormone responsible for inducing drowsiness and modulating circadian rhythm. Chronic sleep deprivation induced by bedtime screen scrolling does not merely lead to daytime lethargy; clinical epidemiology directly links prolonged circadian misalignment with impaired glucose tolerance, elevated cardiovascular vulnerability, and diminished immune responsiveness.</p>
</div>
<p class="font-semibold text-slate-900 mb-2">
Based on Passage 2, which of the following biological consequences are directly linked to nocturnal blue light exposure? <em>(Select all correct answers!)</em>
</p>`,
    options: [
      { id: "A", key: "A", text: "Suppression of melatonin secretion in the brain" },
      { id: "B", key: "B", text: "Immediate and permanent loss of auditory hearing capability" },
      { id: "C", key: "C", text: "Disruption of the body's natural circadian rhythm" },
      { id: "D", key: "D", text: "Increased vulnerability to cardiovascular and metabolic dysfunctions over time" },
      { id: "E", key: "E", text: "Complete immunity against all seasonal influenza viruses" }
    ],
    kunci: ["A", "C", "D"],
    pembahasan: `<strong>Multi-Select Analysis:</strong><br>
- <strong>Option A (Correct):</strong> Stated in paragraph 2: <em>"severely suppresses the secretion of melatonin"</em>.<br>
- <strong>Option C (Correct):</strong> Stated in paragraph 2: <em>"modulating circadian rhythm / prolonged circadian misalignment"</em>.<br>
- <strong>Option D (Correct):</strong> Stated in paragraph 2: <em>"linked with impaired glucose tolerance, elevated cardiovascular vulnerability..."</em>.<br>
- Options B and E are fabricated and irrelevant to the text.<br><br>
<strong>Answer: A, C, and D</strong>`
  },
  {
    id: 6,
    kode: "25ENGW-PRED2-006",
    elemen: "Membaca dan Memirsa",
    subelemen: "Author's Tone and Perspective",
    kompetensi: "Menganalisis nada bahasa dan sikap penulis terhadap topik wacana.",
    indikator: "Menentukan sikap penulis terkait penggunaan gawai larut malam.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
The author's tone in Passage 2 can best be described as....
</p>`,
    options: [
      { id: "A", key: "A", text: "humorous and playful" },
      { id: "B", key: "B", text: "informative, scientific, and cautionary" },
      { id: "C", key: "C", text: "indifferent and dismissive" },
      { id: "D", key: "D", text: "sarcastic and hostile towards technology companies" },
      { id: "E", key: "E", text: "euphoric and wildly enthusiastic" }
    ],
    kunci: "B",
    pembahasan: `<strong>Author's Tone:</strong><br>
The author relies on objective neuroscience terms (retinal ganglion cells, suprachiasmatic nucleus, melatonin, circadian rhythm) and delivers an evidence-based, <strong>informative, scientific, and cautionary</strong> warning regarding health risks.<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 7,
    kode: "25ENGW-PRED2-007",
    elemen: "Membaca dan Memirsa",
    subelemen: "Inferential Comprehension",
    kompetensi: "Menarik kesimpulan inferensial berdasarkan pemaparan wacana.",
    indikator: "Menyimpulkan fungsi alami cahaya biru matahari di pagi hari.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
What can be inferred from the passage regarding natural sunlight exposure during morning hours?
</p>`,
    options: [
      { id: "A", key: "A", text: "It is harmful to humans and should be completely avoided by wearing polarized sunglasses indoors" },
      { id: "B", key: "B", text: "It is biologically beneficial because it reinforces daytime alertness, cognitive vitality, and mood regulation" },
      { id: "C", key: "C", text: "It triggers immediate melatonin surges that make people fall asleep at noon" },
      { id: "D", key: "D", text: "It produces entirely different wavelengths than electronic device screens" },
      { id: "E", key: "E", text: "It has no impact whatsoever on human physiology or the nervous system" }
    ],
    kunci: "B",
    pembahasan: `<strong>Inferential Comprehension:</strong><br>
Paragraph [1] highlights: <em>"While natural blue light from the sun is indispensable during the morning hours to enhance cognitive performance and elevate mood..."</em>. This indicates that morning sunlight is physically necessary and beneficial for establishing optimal daytime alertness.<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 8,
    kode: "25ENGW-PRED2-008",
    elemen: "Membaca dan Memirsa",
    subelemen: "Identifying Cause and Effect",
    kompetensi: "Menganalisis hubungan kausalitas dalam teks sains.",
    indikator: "Menentukan pemicu langsung 'penipuan neurologis' pada otak manusia.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
What causes the brain to mistakenly believe that it is still midday when someone scrolls on a smartphone late at night?
</p>`,
    options: [
      { id: "A", key: "A", text: "The loud audio vibrations coming from the smartphone's speakers" },
      { id: "B", key: "B", text: "The artificial short-wavelength blue light stimulating photoreceptive retinal cells that signal the suprachiasmatic nucleus" },
      { id: "C", key: "C", text: "The chemical heat generated by charging the lithium-ion phone battery" },
      { id: "D", key: "D", text: "The physical weight of holding a digital device in one's hands for hours" },
      { id: "E", key: "E", text: "The reduction of room temperature caused by air conditioning" }
    ],
    kunci: "B",
    pembahasan: `<strong>Cause-and-Effect Relationship:</strong><br>
The text clearly links the cause: <em>"artificial nocturnal exposure triggers photoreceptive retinal ganglion cells to signal the brain's suprachiasmatic nucleus that it is still midday"</em>, which directly initiates the neurological deception.<br><br>
<strong>Answer: B</strong>`
  },

  // --- PASSAGE 3: MARITIME HISTORY & GLOBAL SPICE TRADE (Soal 9 s.d. 12) ---
  {
    id: 9,
    kode: "25ENGW-PRED2-009",
    elemen: "Membaca dan Memirsa",
    subelemen: "Historical Narrative Comprehension",
    kompetensi: "Menganalisis hubungan sejarah perdagangan global dan dampaknya terhadap geopolitik.",
    indikator: "Menjelaskan peran kepulauan Maluku dalam perdagangan rempah dunia.",
    tipe: "pg",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-purple-100 text-purple-800 font-bold rounded-lg text-xs mb-1">Reading Passage 3 (Questions 9 to 12)</span>
  <p class="font-bold text-slate-900 text-sm sm:text-base">The Fragrant Allure: Spices That Shaped World Geography</p>
  <p>Long before gold and petroleum drove global geopolitical ambitions, tiny aromatic botanical products dictated the rise and fall of merchant empires. For centuries, the volcanic islands of the Moluccas (Maluku) in eastern Indonesia were the sole geographic source on earth for nutmeg, mace, and cloves. Highly prized in medieval Europe not only as culinary seasonings and meat preservatives but also as sacred medicinal panaceas believed to ward off deadly plagues, these spices fetched prices that routinely exceeded their weight in pure gold.</p>
  <p>The quest to circumvent cumbersome Venetian-Arab overland monopolies through the Silk Road catalyzed the European Age of Discovery. Iberian navigators such as Ferdinand Magellan and Vasco da Gama ventured into uncharted oceanic routes precisely to locate the legendary Spice Islands. This maritime competition fundamentally redrew world maps, inaugurating early commercial globalization while unleashing centuries of colonial conflict and economic subjugation across Southeast Asia.</p>
</div>
<p class="font-semibold text-slate-900 mb-2">
What primary motivation prompted European maritime powers to embark on long oceanic voyages to the Moluccas?
</p>`,
    options: [
      { id: "A", key: "A", text: "To import European grain and wine directly to Asian kingdoms" },
      { id: "B", key: "B", text: "To locate an alternative sea route to bypass Arab-Venetian monopolies and secure direct access to lucrative spices" },
      { id: "C", key: "C", text: "To escape severe volcanic winters occurring in the Mediterranean basin" },
      { id: "D", key: "D", text: "To map the migration habits of deep-sea whales across the Pacific" },
      { id: "E", key: "E", text: "To abandon international trade entirely and establish isolated farming colonies" }
    ],
    kunci: "B",
    pembahasan: `<strong>Historical Reading Comprehension:</strong><br>
Paragraph [2] explicitly notes: <em>"The quest to circumvent cumbersome Venetian-Arab overland monopolies through the Silk Road catalyzed the European Age of Discovery... precisely to locate the legendary Spice Islands."</em><br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 10,
    kode: "25ENGW-PRED2-010",
    elemen: "Membaca dan Memirsa",
    subelemen: "Historical Text Evaluation (True/False)",
    kompetensi: "Mengevaluasi kebenaran pernyataan historis terkait komoditas rempah kepulauan Nusantara.",
    indikator: "Menilai kebenaran pernyataan seputar nilai ekonomi dan geopolitik rempah Maluku.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Based on Reading Passage 3, evaluate whether each historical statement is <strong>True</strong> or <strong>False</strong>:
</p>`,
    items: [
      {
        pernyataan: "In medieval Europe, nutmeg and cloves were valued solely for flavoring desserts and possessed no medical or preservative reputation.",
        kunci: "Salah",
        penjelasan: "Contradicted by paragraph [1]: spices were also prized 'as meat preservatives' and 'as sacred medicinal panaceas believed to ward off deadly plagues'."
      },
      {
        pernyataan: "The Moluccas were historically the exclusive natural habitat in the world for nutmeg, mace, and cloves.",
        kunci: "Benar",
        penjelasan: "Supported by paragraph [1]: 'were the sole geographic source on earth for nutmeg, mace, and cloves'."
      },
      {
        pernyataan: "The international competition to control the spice trade acted as a major catalyst for European maritime exploration and colonial expansion in Southeast Asia.",
        kunci: "Benar",
        penjelasan: "Supported by paragraph [2]: 'catalyzed the European Age of Discovery... while unleashing centuries of colonial conflict'."
      }
    ],
    kunci: ["Salah", "Benar", "Benar"],
    pembahasan: `<strong>Historical Evaluation:</strong><br>
1. <strong>Statement 1 (False):</strong> Spices were heavily valued as meat preservatives and anti-plague medicines, not just dessert flavorings.<br>
2. <strong>Statement 2 (True):</strong> Maluku was the sole global geographic origin of those spices at that time.<br>
3. <strong>Statement 3 (True):</strong> The spice race initiated European oceanic voyages and colonial regimes in Southeast Asia.<br><br>
<strong>Answer: False, True, True</strong>`
  },
  {
    id: 11,
    kode: "25ENGW-PRED2-011",
    elemen: "Membaca dan Memirsa",
    subelemen: "Multi-Select Historical Analysis",
    kompetensi: "Mengidentifikasi faktor-faktor pendorong tingginya nilai ekonomi rempah di masa lalu.",
    indikator: "Memilih alasan mengapa cengkih dan pala dihargai sangat mahal di Eropa abad pertengahan.",
    tipe: "mcma",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Why were cloves and nutmeg traded at prices exceeding their weight in gold during medieval times? <em>(Select all correct answers!)</em>
</p>`,
    options: [
      { id: "A", key: "A", text: "Their geographic origin was extremely limited to a single remote archipelago" },
      { id: "B", key: "B", text: "They could be grown easily in backyard gardens throughout northern Europe" },
      { id: "C", key: "C", text: "They were believed to possess therapeutic powers capable of warding off contagious plagues" },
      { id: "D", key: "D", text: "They were essential for preserving meat across long winter seasons before modern refrigeration" },
      { id: "E", key: "E", text: "European monarchs mandated that spices be used exclusively as currency coins" }
    ],
    kunci: ["A", "C", "D"],
    pembahasan: `<strong>Multi-Select Factor Analysis:</strong><br>
- <strong>Option A (Correct):</strong> Scarcity due to exclusive origin in the Moluccas.<br>
- <strong>Option C (Correct):</strong> Medical superstition / perceived cure for diseases/plagues.<br>
- <strong>Option D (Correct):</strong> Crucial food preservative in pre-refrigeration times.<br>
- Option B is false (tropical spices could not grow in Europe) and Option E is fictitious.<br><br>
<strong>Answer: A, C, and D</strong>`
  },
  {
    id: 12,
    kode: "25ENGW-PRED2-012",
    elemen: "Membaca dan Memirsa",
    subelemen: "Contextual Vocabulary",
    kompetensi: "Menjelaskan makna kata kiasan dalam teks sejarah.",
    indikator: "Menentukan makna kata 'circumvent' dalam konteks jalur perdagangan.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
In paragraph [2], the word <strong>circumvent</strong> in the phrase <em>"The quest to <strong>circumvent</strong> cumbersome Venetian-Arab overland monopolies..."</em> most nearly means....
</p>`,
    options: [
      { id: "A", key: "A", text: "reinforce and support" },
      { id: "B", key: "B", text: "bypass or find a way around" },
      { id: "C", key: "C", text: "surrender completely to" },
      { id: "D", key: "D", text: "celebrate publicly" },
      { id: "E", key: "E", text: "translate into multiple languages" }
    ],
    kunci: "B",
    pembahasan: `<strong>Contextual Vocabulary:</strong><br>
To <strong>circumvent</strong> an obstacle or monopoly means to find a way around it, bypass it, or avoid dealing with it directly (menghindari / mencari jalan pintas). European explorers sailed around the African continent to bypass overland tariffs.<br><br>
<strong>Answer: B (bypass or find a way around)</strong>`
  },

  // --- APPLIED GRAMMAR & STRUCTURE IN CONTEXT (Soal 13 s.d. 17) ---
  {
    id: 13,
    kode: "25ENGW-PRED2-013",
    elemen: "Menulis",
    subelemen: "Conditional Sentences (Type 3 / Unreal Past)",
    kompetensi: "Menerapkan struktur kalimat pengandaian masa lampau (Conditional Type 3).",
    indikator: "Melengkapi kalimat bersyarat lampau dengan bentuk verba yang tepat.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Read the following sentence with a blank:<br>
<em>"If the civil engineers <strong>[ ... ]</strong> the suspension bridge cables more thoroughly last month, the catastrophic collapse during the storm would have been prevented."</em>
</p>
<p class="font-semibold text-slate-900 mb-2">
Which verb form correctly completes the conditional sentence?
</p>`,
    options: [
      { id: "A", key: "A", text: "inspected" },
      { id: "B", key: "B", text: "had inspected" },
      { id: "C", key: "C", text: "would inspect" },
      { id: "D", key: "D", text: "have inspected" },
      { id: "E", key: "E", text: "were inspecting" }
    ],
    kunci: "B",
    pembahasan: `<strong>Conditional Sentence Type 3 (Past Unreal):</strong><br>
Formula:<br>
<code>If + Subject + Past Perfect (had + V3), Subject + would have + V3</code>.<br>
Since the result clause is <em>"would have been prevented"</em>, the if-clause must use the past perfect tense: <strong>had inspected</strong>.<br><br>
<strong>Answer: B (had inspected)</strong>`
  },
  {
    id: 14,
    kode: "25ENGW-PRED2-014",
    elemen: "Menulis",
    subelemen: "Subject-Verb Agreement with Complex Prepositions",
    kompetensi: "Menganalisis kesesuaian subjek dan predikat dalam kalimat kompleks.",
    indikator: "Memilih bentuk verba yang sesuai dengan subjek tunggal 'Neither of the...'.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Read the following sentence with a blank:<br>
<em>"Neither of the proposed urban drainage systems <strong>[ ... ]</strong> the stringent environmental safety standards established by the municipal council."</em>
</p>
<p class="font-semibold text-slate-900 mb-2">
Which verb form correctly completes the sentence according to standard formal English grammar?
</p>`,
    options: [
      { id: "A", key: "A", text: "satisfy" },
      { id: "B", key: "B", text: "satisfies" },
      { id: "C", key: "C", text: "are satisfying" },
      { id: "D", key: "D", text: "have satisfied" },
      { id: "E", key: "E", text: "were satisfied" }
    ],
    kunci: "B",
    pembahasan: `<strong>Subject-Verb Agreement:</strong><br>
The subject headword is the indefinite pronoun <strong>Neither</strong> (referring to neither one), which takes a singular verb in formal standard English.<br>
Even though <em>systems</em> is plural, it is part of the prepositional phrase <em>of the proposed urban drainage systems</em>.<br>
Therefore, the correct singular present verb is <strong>satisfies</strong>.<br><br>
<strong>Answer: B (satisfies)</strong>`
  },
  {
    id: 15,
    kode: "25ENGW-PRED2-015",
    elemen: "Menulis",
    subelemen: "Grammar Evaluation: Active vs Passive Voice",
    kompetensi: "Mengevaluasi ketepatan gramatikal kalimat pasif dan aktif dalam konteks ilmiah.",
    indikator: "Menilai kebenaran struktur gramatikal pada tiga kalimat akademik.",
    tipe: "kompleks_bs",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
Evaluate whether each of the following sentences adheres to correct grammatical rules regarding voice and structure:
</p>`,
    items: [
      {
        pernyataan: "The experimental vaccine was administered to fifty laboratory volunteers by the chief virologist yesterday.",
        kunci: "Benar",
        penjelasan: "Correct passive structure: was administered + agent 'by the chief virologist'."
      },
      {
        pernyataan: "The severe structural damage caused by the magnitude 7.2 earthquake, leaving thousands homeless.",
        kunci: "Salah",
        penjelasan: "Sentence fragment: it lacks a main finite verb predicate (should be 'was caused by' or needs a main clause)."
      },
      {
        pernyataan: "All synthesized chemical compounds must thoroughly be tested before human clinical trials can commence.",
        kunci: "Benar",
        penjelasan: "Correct passive modal structure with adverb: must be thoroughly tested / must thoroughly be tested."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Grammar Structure Analysis:</strong><br>
1. <strong>Sentence 1 (Correct):</strong> Proper passive past construction (was administered).<br>
2. <strong>Sentence 2 (Incorrect):</strong> Sentence fragment without a main independent verb predicate.<br>
3. <strong>Sentence 3 (Correct):</strong> Proper modal passive voice construction.<br><br>
<strong>Answer: True, False, True</strong>`
  },
  {
    id: 16,
    kode: "25ENGW-PRED2-016",
    elemen: "Menulis",
    subelemen: "Parallel Structure (Kesejajaran Bentuk)",
    kompetensi: "Memperbaiki ketidaksejajaran bentuk gramatikal dalam kalimat majemuk.",
    indikator: "Memilih kalimat yang memenuhi aturan keparalelan bentuk gerund / infinitive.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Which of the following sentences demonstrates <strong>correct parallel structure</strong>?
</p>`,
    options: [
      { id: "A", key: "A", text: "To reduce operating expenses, the factory plans on installing solar panels, to upgrade insulation, and modernizes machinery." },
      { id: "B", key: "B", text: "To reduce operating expenses, the factory plans on installing solar panels, upgrading insulation, and modernizing machinery." },
      { id: "C", key: "C", text: "To reduce operating expenses, the factory plans on install solar panels, upgraded insulation, and modernizing machinery." },
      { id: "D", key: "D", text: "To reduce operating expenses, the factory plans on installing solar panels, upgrade insulation, and to modernize machinery." },
      { id: "E", key: "E", text: "To reduce operating expenses, the factory plans on installation solar panels, upgrading insulation, and modernized machinery." }
    ],
    kunci: "B",
    pembahasan: `<strong>Parallel Structure:</strong><br>
After the preposition <em>on</em>, all coordinated verbs must follow the exact same grammatical form (gerund / -ing form):<br>
<em>installing solar panels</em>, <em>upgrading insulation</em>, and <em>modernizing machinery</em>.<br>
Only <strong>Option B</strong> maintains flawless parallelism.<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 17,
    kode: "25ENGW-PRED2-017",
    elemen: "Menulis",
    subelemen: "Relative Pronouns in Complex Clauses",
    kompetensi: "Mengidentifikasi penggunaan kata ganti penghubung (relative pronouns) yang benar.",
    indikator: "Memilih kalimat yang menggunakan relative pronouns 'whose', 'whom', atau 'which' secara tepat.",
    tipe: "mcma",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Which of the following sentences use <strong>relative pronouns correctly</strong>? <em>(Select all correct answers!)</em>
</p>`,
    options: [
      { id: "A", key: "A", text: "Dr. Aris Thorne, whose groundbreaking research on dark matter won the international prize, will deliver the keynote lecture tomorrow." },
      { id: "B", key: "B", text: "The senior diplomat whom the president appointed to the ambassadorial post has over twenty years of foreign service experience." },
      { id: "C", key: "C", text: "The ancient manuscript, whose pages had yellowed with age, was carefully digitized by the museum curator." },
      { id: "D", key: "D", text: "The student which scored highest on the calculus exam received a university scholarship." },
      { id: "E", key: "E", text: "The laboratory where the breakthrough experiments occurred was equipped with electron microscopes." }
    ],
    kunci: ["A", "B", "C", "E"],
    pembahasan: `<strong>Relative Pronouns Rules:</strong><br>
- <strong>A (Correct):</strong> <em>whose</em> expresses possession for persons (Dr. Thorne's research).<br>
- <strong>B (Correct):</strong> <em>whom</em> is the objective pronoun referring to the diplomat (president appointed him).<br>
- <strong>C (Correct):</strong> <em>whose</em> can also be used for inanimate objects to denote possession (manuscript's pages).<br>
- <strong>D (Incorrect):</strong> <em>which</em> cannot refer to human beings (should be <em>who scored highest</em>).<br>
- <strong>E (Correct):</strong> <em>where</em> correctly denotes the relative adverb of place.<br><br>
<strong>Answer: A, B, C, and E</strong>`
  },

  // --- PASSAGE 4: NARRATIVE PROSE ANALYSIS ("THE CLOCKMAKER'S SECRET") (Soal 18 s.d. 21) ---
  {
    id: 18,
    kode: "25ENGW-PRED2-018",
    elemen: "Membaca dan Memirsa",
    subelemen: "Literary Prose & Characterization",
    kompetensi: "Menganalisis perwatakan tokoh dalam kutipan prosa naratif sastra Inggris.",
    indikator: "Menentukan watak Master Alistair dalam merestorasi jam astronomi kuno.",
    tipe: "pg",
    soalHtml: `<div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
  <span class="inline-block px-2.5 py-1 bg-rose-100 text-rose-800 font-bold rounded-lg text-xs mb-1">Literary Excerpt (Questions 18 to 21)</span>
  <p class="font-bold text-slate-900 text-sm sm:text-base">The Clockmaker's Secret</p>
  <p>Beneath the ticking gloom of his workshop, Master Alistair adjusted his magnifying loupe with calloused fingers. Before him lay the intricate escapement of an eighteenth-century astronomical clock, silent for nearly eighty years. A wealthy merchant had offered a staggering fortune if Alistair could replace the broken brass gears with modern motorized clockwork to make it run effortlessly by morning. Alistair had flatly refused.</p>
  <p>"Anyone can buy motion," the old craftsman whispered softly into the quiet room, gently filing a minuscule handmade tooth of hand-hammered bronze, "but a master restores soul." He worked without haste through the freezing midnight hours, knowing that true craftsmanship demands not the shortcut of convenience, but the reverence of patience.</p>
</div>
<p class="font-semibold text-slate-900 mb-2">
What character trait defines Master Alistair based on his actions in the story?
</p>`,
    options: [
      { id: "A", key: "A", text: "Greed and opportunistic materialism" },
      { id: "B", key: "B", text: "Uncompromising integrity, artisanal dedication, and deep reverence for authenticity" },
      { id: "C", key: "C", text: "Arrogance and indifference toward his clients" },
      { id: "D", key: "D", text: "Carelessness and haste in mechanical repairs" },
      { id: "E", key: "E", text: "Fear of modern technology and electricity" }
    ],
    kunci: "B",
    pembahasan: `<strong>Characterization:</strong><br>
Master Alistair refuses a fortune because replacing the handmade antique mechanism with an electric motor would destroy its authenticity and soul. His meticulous work through the freezing night exemplifies <strong>uncompromising integrity, artisanal dedication, and deep reverence for authenticity</strong>.<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 19,
    kode: "25ENGW-PRED2-019",
    elemen: "Membaca dan Memirsa",
    subelemen: "Symbolism in Fiction",
    kompetensi: "Menganalisis makna simbolik dalam karya fiksi sastra.",
    indikator: "Menjelaskan perlambang 'escapement jam astronomi'.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
In the context of the story, what does the restoration of the astronomical clock symbolize?
</p>`,
    options: [
      { id: "A", key: "A", text: "The inevitable victory of industrialized mass production over human skills" },
      { id: "B", key: "B", text: "The preservation of timeless human artistry and moral patience against the transient lure of quick profit" },
      { id: "C", key: "C", text: "The merchant's political triumph over the guild of clockmakers" },
      { id: "D", key: "D", text: "The fear of getting older and running out of time" },
      { id: "E", key: "E", text: "The necessity of buying cheaper consumer goods" }
    ],
    kunci: "B",
    pembahasan: `<strong>Symbolism:</strong><br>
The clock restoration represents the triumph of patient, authentic human artistry and moral values over superficial shortcuts and monetary temptation.<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 20,
    kode: "25ENGW-PRED2-020",
    elemen: "Membaca dan Memirsa",
    subelemen: "Theme and Moral Lesson",
    kompetensi: "Merumuskan tema dan amanat moral cerita fiksi.",
    indikator: "Menentukan pesan moral utama kutipan 'The Clockmaker's Secret'.",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
What moral lesson does the story convey through Master Alistair's words: <em>"Anyone can buy motion, but a master restores soul"</em>?
</p>`,
    options: [
      { id: "A", key: "A", text: "Money can solve every technical and emotional dilemma in life" },
      { id: "B", key: "B", text: "True value and mastery lie in dedication, patience, and honoring the deeper heritage of one's craft rather than settling for expedient imitations" },
      { id: "C", key: "C", text: "Clocks that do not tell exact digital time should be discarded immediately" },
      { id: "D", key: "D", text: "Old craftsmen should never argue with wealthy customers" },
      { id: "E", key: "E", text: "Working in the dark is preferable to using electric illumination" }
    ],
    kunci: "B",
    pembahasan: `<strong>Theme and Moral Message:</strong><br>
Alistair's maxim illustrates that genuine mastery is rooted in patience, ethical dedication, and honoring heritage, which cannot be bought by mere wealth or simulated by mechanical shortcuts.<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 21,
    kode: "25ENGW-PRED2-021",
    elemen: "Membaca dan Memirsa",
    subelemen: "Point of View & Narrative Technique",
    kompetensi: "Menganalisis sudut pandang penceritaan teks narasi.",
    indikator: "Menentukan sudut pandang orang ketiga terbatas (Third-person limited).",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Which narrative point of view is utilized by the author in <em>"The Clockmaker's Secret"</em>?
</p>`,
    options: [
      { id: "A", key: "A", text: "First-person protagonist ('I')" },
      { id: "B", key: "B", text: "Second-person instructional ('You')" },
      { id: "C", key: "C", text: "Third-person limited (focusing on Master Alistair's actions and internal feelings)" },
      { id: "D", key: "D", text: "First-person peripheral bystander" },
      { id: "E", key: "E", text: "Stream of consciousness alternating randomly" }
    ],
    kunci: "C",
    pembahasan: `<strong>Point of View:</strong><br>
The story is narrated using third-person pronouns (<em>he, his, Alistair</em>) while focusing intimately on Alistair's thoughts and whispered reflections. This is the hallmark of <strong>third-person limited</strong> point of view.<br><br>
<strong>Answer: C</strong>`
  },

  // --- SYNTHESIS & APPLIED LITERACY: E-WASTE & SUMMARY (Soal 22 s.d. 25) ---
  {
    id: 22,
    kode: "25ENGW-PRED2-022",
    elemen: "Membaca dan Memirsa",
    subelemen: "Comparative Synthesis of Two Texts",
    kompetensi: "Membandingkan data makro kuantitatif dan inisiatif mikro komunitas.",
    indikator: "Menilai kebenaran perbandingan antara Teks A dan Teks B tentang limbah elektronik (E-waste).",
    tipe: "kompleks_bs",
    soalHtml: `<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
  <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
    <p class="font-bold text-slate-900 mb-1">Text A: Global E-Waste Monitor</p>
    <p>A staggering 62 million metric tons of electronic waste was generated globally in 2022, yet less than 23% was documented as formally collected and recycled. Discarded electronics contain hazardous heavy metals like lead and mercury, alongside recoverable precious metals valued at billions of dollars.</p>
  </div>
  <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
    <p class="font-bold text-slate-900 mb-1">Text B: Urban Mining Collective</p>
    <p>In a suburban neighborhood, high school youth volunteers launched 'Drop & Renew', a community initiative collecting outdated laptops and broken cell phones. Local vocational students repair usable devices for underprivileged children, while non-repairable units are safely sent to certified smelting facilities.</p>
  </div>
</div>
<p class="font-semibold text-slate-900 mb-2">
Evaluate whether each comparative statement is <strong>True</strong> or <strong>False</strong>:
</p>`,
    items: [
      {
        pernyataan: "Text A presents a macroscopic global overview of the e-waste crisis, whereas Text B showcases a grassroots community-driven solution.",
        kunci: "Benar",
        penjelasan: "Text A uses global statistical data; Text B highlights local action by youth volunteers."
      },
      {
        pernyataan: "Both texts argue that broken electronic devices have zero monetary or educational value and should be thrown into common landfills.",
        kunci: "Salah",
        penjelasan: "Text A highlights recoverable precious metals; Text B shows vocational students repairing devices for needy students."
      },
      {
        pernyataan: "Text B exemplifies how circular economy principles can mitigate the environmental and educational challenges described in Text A.",
        kunci: "Benar",
        penjelasan: "Repairing and certified recycling in Text B directly counters the waste problem in Text A."
      }
    ],
    kunci: ["Benar", "Salah", "Benar"],
    pembahasan: `<strong>Comparative Synthesis Breakdown:</strong><br>
1. <strong>Statement 1 (True):</strong> Text A is macroeconomic/global; Text B is micro/grassroots.<br>
2. <strong>Statement 2 (False):</strong> Both texts emphasize the high value of e-waste (recoverable metals and refurbished education tools).<br>
3. <strong>Statement 3 (True):</strong> Text B embodies practical circular economy solutions.<br><br>
<strong>Answer: True, False, True</strong>`
  },
  {
    id: 23,
    kode: "25ENGW-PRED2-023",
    elemen: "Membaca dan Memirsa",
    subelemen: "Multi-Select Environmental Benefits",
    kompetensi: "Mengidentifikasi keuntungan ganda daur ulang limbah elektronik.",
    indikator: "Memilih manfaat lingkungan dan sosial dari program 'Drop & Renew'.",
    tipe: "mcma",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Based on Text B (Urban Mining Collective), what are the dual social and environmental benefits of the 'Drop & Renew' initiative? <em>(Select all correct answers!)</em>
</p>`,
    options: [
      { id: "A", key: "A", text: "Bridging the digital divide by donating refurbished computers to underprivileged students" },
      { id: "B", key: "B", text: "Preventing toxic heavy metals from contaminating local soil and water tables through certified recycling" },
      { id: "C", key: "C", text: "Providing vocational students with real-world technical repair training" },
      { id: "D", key: "D", text: "Encouraging community members to purchase brand-new smartphones every month" },
      { id: "E", key: "E", text: "Burning electronic waste in backyard open barrels to produce household heat" }
    ],
    kunci: ["A", "B", "C"],
    pembahasan: `<strong>Dual Benefits Analysis:</strong><br>
- <strong>Option A (Correct):</strong> Refurbished devices given to underprivileged children.<br>
- <strong>Option B (Correct):</strong> Certified smelting prevents toxic lead/mercury contamination.<br>
- <strong>Option C (Correct):</strong> Vocational students gain practical engineering/repair experience.<br>
- Options D and E promote unsustainable waste practices.<br><br>
<strong>Answer: A, B, and C</strong>`
  },
  {
    id: 24,
    kode: "25ENGW-PRED2-024",
    elemen: "Menulis",
    subelemen: "Concluding Sentence of an Analytical Essay",
    kompetensi: "Menentukan kalimat simpulan penutup esai yang koheren dan persuasif.",
    indikator: "Memilih kalimat penutup terbaik untuk esai bertema pembelajaran sepanjang hayat.",
    tipe: "pg",
    soalHtml: `<p class="font-medium text-slate-800 leading-relaxed mb-3">
An analytical essay discusses the necessity of lifelong learning in an automated workplace where AI increasingly replaces routine jobs.
</p>
<p class="font-semibold text-slate-900 mb-2">
Which concluding sentence most effectively and persuasively synthesizes the central thesis of the essay?
</p>`,
    options: [
      { id: "A", key: "A", text: "Therefore, all students should drop out of school because computer algorithms will soon do all human work anyway." },
      { id: "B", key: "B", text: "Ultimately, thriving in an era of technological disruption demands not the passive fear of obsolescence, but a proactive commitment to continuous reskilling, critical thinking, and enduring curiosity." },
      { id: "C", key: "C", text: "In conclusion, robots are much more intelligent than human beings and will rule the world." },
      { id: "D", key: "D", text: "Consequently, everyone must immediately buy shares in artificial intelligence startups to get rich." },
      { id: "E", key: "E", text: "Thus, learning new skills after high school graduation is a waste of time and energy." }
    ],
    kunci: "B",
    pembahasan: `<strong>Essay Conclusion Synthesis:</strong><br>
A strong analytical essay conclusion synthesizes the thesis with constructive, inspiring insight without resorting to defeatism or absurd exaggeration. <strong>Option B</strong> provides the most balanced and eloquent summary of lifelong learning.<br><br>
<strong>Answer: B</strong>`
  },
  {
    id: 25,
    kode: "25ENGW-PRED2-025",
    elemen: "Membaca dan Memirsa",
    subelemen: "Objective Summary of Reading Text",
    kompetensi: "Menyusun rangkuman teks secara padat, objektif, dan representatif.",
    indikator: "Menentukan ringkasan terbaik dari Reading Passage 1 (Tidal and Wave Energy).",
    tipe: "pg",
    soalHtml: `<p class="font-semibold text-slate-900 mb-2">
Which of the following options offers the most accurate, concise, and objective summary of Reading Passage 1 (<em>Harnessing the Relentless Power of Ocean Tides and Waves</em>)?
</p>`,
    options: [
      { id: "A", key: "A", text: "Ocean energy offers highly predictable and dense clean power through tidal turbines, though overcoming corrosion, financial costs, and ecological preservation remains vital for widespread adoption." },
      { id: "B", key: "B", text: "Wind turbines are obsolete because underwater turbines have permanently solved the world's energy crisis without any expenses." },
      { id: "C", key: "C", text: "The moon and the sun have caused massive marine corrosion that makes generating electricity in the ocean impossible." },
      { id: "D", key: "D", text: "Solar panels and marine turbines are identical technologies that produce the exact same amount of electricity in every country." },
      { id: "E", key: "E", text: "Saltwater marine life has migrated to rivers because undersea turbine blades are too loud." }
    ],
    kunci: "A",
    pembahasan: `<strong>Summary Selection:</strong><br>
An objective summary must encapsulate the main advantages (predictable, dense energy) and the realistic constraints (corrosion, costs, ecological balance) without omitting critical points or exaggerating facts. <strong>Option A</strong> perfectly captures the entire passage.<br><br>
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
const fileContent = `// tka/data/mapel-inggris-wajib-paket2.js
// Bank Soal & Pembahasan Prediksi Resmi TKA Bahasa Inggris (Wajib) SMA 2025/2026 (Paket 2: 25 Butir Soal Standar TKA BPPP)
// Memuat variasi tipe soal: Pilihan Ganda (PG), Pilihan Ganda Kompleks (MCMA), dan Pernyataan Benar/Salah (kompleks_bs)
// Disusun berdasarkan kurikulum resmi TKA Bahasa Inggris (Wajib) SMA 2025/2026 bebas tanda dolar & pembahasan komprehensif

const tkaInggrisWajibPaket2Data = ${JSON.stringify(soalList, null, 2)};

// Inisialisasi package global
if (typeof window !== 'undefined') {
  window.tkaInggrisWajibPackages = window.tkaInggrisWajibPackages || {};
  window.tkaInggrisWajibPackages['paket2'] = {
    title: "Paket 2: Prediksi Resmi TKA Bahasa Inggris (Wajib) SMA 2025/2026 (25 Soal Variatif PG, MCMA & Benar/Salah)",
    shortTitle: "Paket 2 (Prediksi 2025/2026 • 25 Soal)",
    data: tkaInggrisWajibPaket2Data
  };
}
`;

const targetPath = path.join(__dirname, '../tka/data/mapel-inggris-wajib-paket2.js');
fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log("✅ Dataset Bahasa Inggris (Wajib) Paket 2 100% BEBAS dari tanda dolar ($)!");
console.log(`🎉 ${targetPath} berhasil dibuat! (${soalList.length} soal)`);
