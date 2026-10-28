import json
import os

soal_list = [
    # 1 - 5: Balancing Online & Offline Selves (Digital Dissonance)
    {
        "id": 1,
        "nomor": 1,
        "kode": "25BIGLANPTX118SL-250079-0690",
        "elemen": "Reading and Viewing",
        "subelemen": "Identifying explicit details in discussion text",
        "indikator": "Menemukan informasi eksplisit pada exposition/discussion text dengan struktur kalimat kompleks (1)",
        "tipe": "mcma",
        "soalHtml": "<div class='stimulus-box mb-3'><span class='badge bg-primary mb-2'>Reading Passage (Questions 1 to 5)</span><p><strong>Balancing Our Online and Offline Selves</strong></p><p>In today's world, the line between our online and offline lives is becoming less clear. Many people create ideal versions of themselves on social media, which often do not fully match who they really are. This difference is called <em>\"digital dissonance\"</em>—the gap between how we present ourselves online and who we truly are in real life. This can affect our mental health and the quality of our relationships.</p><p>First, the pressure to keep a perfect online image can cause stress, anxiety, and low self-esteem. When we compare ourselves to the happy and successful posts of others, we may feel like we are not good enough. It is important to remember that what we see online is only a small part of someone's life, not the whole story. Reminding ourselves of this can reduce the harmful effects of unrealistic comparisons and improve our self-worth.</p><p>Second, carefully crafted online personas can reduce honesty in real-life interactions. People might act differently online to gain approval or likes. This can harm genuine communication and relationships. Over time, this may create distance between friends or family members who feel they no longer know the \"real\" person behind the screen.</p><p>To address this, we need to be mindful and responsible when using digital platforms. Being mindful means paying attention to whether our online behavior reflects our true values. It means thinking carefully before posting, being honest about our experiences, and understanding that social media is not the only way to measure success. Practicing digital mindfulness can help us use technology in a healthier, more balanced way.</p></div><p>What are the negative effects of online life on a person's mental health according to the text?<br><em>(Click on every correct answer!)</em></p>",
        "options": [
            {"key": "A", "text": "It may distance friends or family members"},
            {"key": "B", "text": "It can lower self-confidence and self-esteem"},
            {"key": "C", "text": "It can reduce honesty in real-life relationships"},
            {"key": "D", "text": "It may cause anxiety when comparing oneself to others"},
            {"key": "E", "text": "It can lead to chronic psychological stress"}
        ],
        "kunci": ["B", "D", "E"],
        "pembahasan": "Paragraf kedua secara spesifik menyebutkan dampak langsung terhadap kesehatan mental (mental health): 'stress, anxiety, and low self-esteem' (Jawaban B, D, E). Sementara merenggangkan hubungan pertemanan (A & C) lebih merupakan dampak interpersonal.",
        "gambar": "tka/img/inggris-pilihan/soal_01.png"
    },
    {
        "id": 2,
        "nomor": 2,
        "kode": "25BIGLANPTX122SL-250115-0418",
        "elemen": "Reading and Viewing",
        "subelemen": "Supporting evidence in empirical studies",
        "indikator": "Menemukan bukti yang mendukung hasil penelitian pada teks eksposisi finansial (2)",
        "tipe": "pg",
        "soalHtml": "<div class='stimulus-box mb-3'><span class='badge bg-primary mb-2'>Reading Passage (BNPL Impact)</span><p><strong>The Influence of Buy Now Pay Later (BNPL) Existence on Impulsive Buying Behavior</strong></p><p>The impact of the Buy Now Pay Later (BNPL) system is evident in individual behaviors, where it can ease payments in urgent situations, particularly when buying necessary items rather than merely desired ones, especially when financial conditions are inadequate. This phenomenon is notably prevalent among individuals aged 18 to 21 years, as late adolescents are still influenced by various internal and external psychological factors, which often lead them to make purchases without careful deliberation. The convenience of delayed settlement significantly amplifies spontaneous purchasing urges.</p></div><p>Which statement supports the study result about BNPL impact on consumerism?</p>",
        "options": [
            {"key": "A", "text": "Simplified payments via BNPL can prompt impulsive purchases"},
            {"key": "B", "text": "Adults who manage spending well are the main BNPL users"},
            {"key": "C", "text": "BNPL drives customers to seek unnecessary offline promotions"},
            {"key": "D", "text": "Payment preferences such as BNPL stabilize global economic conditions"},
            {"key": "E", "text": "BNPL is exclusively designed for business corporate investments"}
        ],
        "kunci": "A",
        "pembahasan": "Penelitian menunjukkan bahwa kemudahan sistem pembayaran tunda (BNPL) memicu peningkatan perilaku belanja impulsif (impulsive buying) tanpa perencanaan matang, khususnya di kalangan usia muda (Jawaban A).",
        "gambar": "tka/img/inggris-pilihan/soal_02.png"
    },
    {
        "id": 3,
        "nomor": 3,
        "kode": "25BIGLANPIN123SL-250115-0436",
        "elemen": "Reading and Viewing",
        "subelemen": "Inferring concluding paragraphs",
        "indikator": "Menilai gagasan pendukung untuk memperkuat argumen penulis sebelum simpulan (3)",
        "tipe": "pg",
        "soalHtml": "<p>Which of the following ideas could be placed right before the conclusion to strengthen the writer's argument regarding the broader cultural shift caused by BNPL?</p>",
        "options": [
            {"key": "A", "text": "BNPL is influenced strictly by seasonal holiday promotions in shopping malls"},
            {"key": "B", "text": "Many fintech companies have expanded aggressively into international banking hubs"},
            {"key": "C", "text": "Traditional credit cards have completely vanished from modern financial transactions"},
            {"key": "D", "text": "The growing use of BNPL reflects broader shifts in consumer culture and emerging financial spending habits among digital natives"},
            {"key": "E", "text": "Retailers have refused to accept deferred payment methods due to administrative fees"}
        ],
        "kunci": "D",
        "pembahasan": "Gagasan yang paling relevan untuk memperkuat argumen penulis sebelum kesimpulan adalah menempatkan fenomena BNPL sebagai bagian dari pergeseran kultural dan kebiasaan finansial generasi muda dalam era digital (Jawaban D).",
        "gambar": "tka/img/inggris-pilihan/soal_03.png"
    },
    {
        "id": 4,
        "nomor": 4,
        "kode": "25BIGLANPIN126SL-250079-0687",
        "elemen": "Reading and Viewing",
        "subelemen": "Analyzing perspective and bias in discussion text",
        "indikator": "Mengidentifikasi keterbatasan sudut pandang (single viewpoint) pada teks opini (4)",
        "tipe": "pg",
        "soalHtml": "<p>Which option indicates that the text <em>'Balancing Our Online and Offline Selves'</em> represents predominantly a single viewpoint?</p>",
        "options": [
            {"key": "A", "text": "The text focuses heavily on the negative effects of social media and online personas while giving minimal attention to its educational and professional networking benefits"},
            {"key": "B", "text": "The text only discusses the technical history of digital dissonance without practical advice"},
            {"key": "C", "text": "The text only emphasizes clinical medicine solutions for acute mental illness"},
            {"key": "D", "text": "The text presents problems without proposing any ethical solutions"},
            {"key": "E", "text": "The text rejects technology completely and advocates abandoning smartphones"}
        ],
        "kunci": "A",
        "pembahasan": "Teks tersebut lebih condong berfokus pada sisi bahaya dan dampak negatif komparasi sosial online ('stress, anxiety, loss of authenticity'), sehingga sudut pandangnya didominasi oleh peringatan risiko psikologis tanpa banyak mengulas manfaat positif media sosial (Jawaban A).",
        "gambar": "tka/img/inggris-pilihan/soal_04.png"
    },
    {
        "id": 5,
        "nomor": 5,
        "kode": "25BIGLANEVA130SL-250079-0695",
        "elemen": "Evaluating and Appreciating",
        "subelemen": "Evaluating claim credibility",
        "indikator": "Menilai pernyataan yang paling kuat mendukung klaim tentang bahaya komparasi digital (5)",
        "tipe": "pg",
        "soalHtml": "<p>A psychologist claims: <em>\"Constantly measuring one's self-worth against curated digital highlight reels inevitably damages self-esteem.\"</em><br>Which statement from the text most strongly supports her claim?</p>",
        "options": [
            {"key": "A", "text": "Social media accounts are easily created with email addresses"},
            {"key": "B", "text": "When we compare ourselves to the happy and successful posts of others, we may feel like we are not good enough"},
            {"key": "C", "text": "Mindful digital behavior means spending fewer hours watching streaming videos"},
            {"key": "D", "text": "Young adults prefer mobile messaging over face-to-face family conversations"},
            {"key": "E", "text": "Online transactions require high internet bandwidth"}
        ],
        "kunci": "B",
        "pembahasan": "Kutipan teks: 'When we compare ourselves to the happy and successful posts of others, we may feel like we are not good enough' secara langsung memvalidasi klaim psikolog bahwa perbandingan sosial online merusak harga diri (Jawaban B).",
        "gambar": "tka/img/inggris-pilihan/soal_05.png"
    },

    # 6 - 10: BNPL & Digital Selves
    {
        "id": 6,
        "nomor": 6,
        "kode": "25BIGLANPIN124SL-250115-0427",
        "elemen": "Reading and Viewing",
        "subelemen": "Author's intent in organizing text",
        "indikator": "Menjelaskan alasan penulis menyajikan faktor psikologis internal dan eksternal (6)",
        "tipe": "pg",
        "soalHtml": "<p>Why did the writer choose to present both internal and external psychological factors when explaining youth spending behavior?</p>",
        "options": [
            {"key": "A", "text": "To prove that financial problems are solely caused by peer pressure"},
            {"key": "B", "text": "To suggest that banks should discontinue all online lending platforms"},
            {"key": "C", "text": "To provide a comprehensive explanation of how emotional maturity interacts with marketing triggers to drive impulsive buying"},
            {"key": "D", "text": "To show that internal emotions have zero influence on consumer transactions"},
            {"key": "E", "text": "To argue that young adults cannot understand modern credit systems"}
        ],
        "kunci": "C",
        "pembahasan": "Dengan menyandingkan faktor internal (kondisi emosional, kematangan berpikir) dan eksternal (kemudahan fitur BNPL, diskon, tekanan sosial), penulis memberikan penjelasan holistik dan saintifik mengenai perilaku konsumtif generasi muda (Jawaban C).",
        "gambar": "tka/img/inggris-pilihan/soal_06.png"
    },
    {
        "id": 7,
        "nomor": 7,
        "kode": "25BIGLANEVA129SL-250079-0762",
        "elemen": "Evaluating and Appreciating",
        "subelemen": "Categorization of concepts",
        "indikator": "Mengklasifikasikan pernyataan ke dalam Digital Dissonance atau Mindful Digital Behavior (7)",
        "tipe": "kompleks_bs",
        "soalHtml": "<p>Which of the following statements reflect <strong>Digital Dissonance</strong> or <strong>Mindful Digital Behavior</strong>? Decide for each statement!</p>",
        "items": [
            {"pernyataan": "Thinking carefully before posting to reflect personal authentic values.", "kunci": "Mindful Digital Behavior"},
            {"pernyataan": "Acting differently online to hide true feelings and impress strangers for likes.", "kunci": "Digital Dissonance"},
            {"pernyataan": "Recognizing that social media highlight reels do not represent someone's entire reality.", "kunci": "Mindful Digital Behavior"}
        ],
        "kunci": ["Mindful Digital Behavior", "Digital Dissonance", "Mindful Digital Behavior"],
        "pembahasan": "Digital Dissonance adalah kesenjangan identitas maya vs nyata demi mencari persetujuan orang lain. Sedangkan berpikir sebelum mengunggah dan bersikap realistis terhadap media sosial mencerminkan Mindful Digital Behavior.",
        "gambar": "tka/img/inggris-pilihan/soal_07.png"
    },
    {
        "id": 8,
        "nomor": 8,
        "kode": "25BIGLANPIN125SL-250115-0428",
        "elemen": "Reading and Viewing",
        "subelemen": "Inferring cause-effect relationships in financial behavior",
        "indikator": "Mengidentifikasi dampak BNPL terhadap pola perilaku belanja (8)",
        "tipe": "mcma",
        "soalHtml": "<p>How does BNPL affect shopping behavior according to the research findings?<br><em>(Choose all correct answers!)</em></p>",
        "options": [
            {"key": "A", "text": "It encourages immediate purchases by lowering the perception of financial pain"},
            {"key": "B", "text": "It eliminates the need for consumers to ever pay for their purchased goods"},
            {"key": "C", "text": "It may lead young buyers to accumulate debt without realizing the total sum"},
            {"key": "D", "text": "It prompts users to buy non-essential lifestyle items impulsively"},
            {"key": "E", "text": "It guarantees that consumers always save more money each month"}
        ],
        "kunci": ["A", "C", "D"],
        "pembahasan": "BNPL menunda rasa sakit mengeluarkan uang tunai (pain of paying) sehingga mendorong pembelian impulsif (A), memicu akumulasi utang tak terkontrol (C), dan mendorong konsumsi barang non-esensial (D).",
        "gambar": "tka/img/inggris-pilihan/soal_08.png"
    },
    {
        "id": 9,
        "nomor": 9,
        "kode": "25BIGLANEVA132SL-250115-0432",
        "elemen": "Evaluating and Appreciating",
        "subelemen": "Cause and Effect Analysis",
        "indikator": "Menganalisis hubungan sebab-akibat pada ekosistem fintech BNPL (9)",
        "tipe": "kompleks_bs",
        "soalHtml": "<p>Decide whether each statement is a <strong>CAUSE</strong> or an <strong>EFFECT</strong> based on the text about BNPL adoption!</p>",
        "items": [
            {"pernyataan": "Fintech platforms offer frictionless one-click deferred payment options.", "kunci": "Cause"},
            {"pernyataan": "Young consumers experience financial anxiety and unexpected monthly debt burdens.", "kunci": "Effect"},
            {"pernyataan": "Aggressive targeted advertising triggers the desire for non-essential lifestyle goods.", "kunci": "Cause"}
        ],
        "kunci": ["Cause", "Effect", "Cause"],
        "pembahasan": "Fitur pembayaran instan dan iklan tertarget merupakan faktor pemicu (Cause), sedangkan kecemasan finansial dan tumpukan tagihan adalah akibat (Effect) yang timbul.",
        "gambar": "tka/img/inggris-pilihan/soal_09.png"
    },
    {
        "id": 10,
        "nomor": 10,
        "kode": "25BIGLANPIN128SL-250079-0769",
        "elemen": "Evaluating and Appreciating",
        "subelemen": "Classifying psychological impacts",
        "indikator": "Mengklasifikasikan situasi ke dalam Increased Stress atau Loss of Authenticity (10)",
        "tipe": "kompleks_bs",
        "soalHtml": "<p>Which of the following situations leads to <strong>Increased Stress</strong> or <strong>Loss of Authenticity</strong> based on the text?</p>",
        "items": [
            {"pernyataan": "Constantly comparing oneself to others' seemingly flawless social media posts.", "kunci": "Increased Stress"},
            {"pernyataan": "Creating a fake, idealized online persona to hide one's true background and win approval.", "kunci": "Loss of Authenticity"},
            {"pernyataan": "Fearing that one is not good enough or falling behind peers.", "kunci": "Increased Stress"}
        ],
        "kunci": ["Increased Stress", "Loss of Authenticity", "Increased Stress"],
        "pembahasan": "Membandingkan diri dengan standar semu orang lain memicu kecemasan dan stres (Increased Stress). Memanipulasi persona diri demi 'likes' mengakibatkan hilangnya kepribadian autentik (Loss of Authenticity).",
        "gambar": "tka/img/inggris-pilihan/soal_10.png"
    },

    # 11 - 15: Electric Vehicles (EVs)
    {
        "id": 11,
        "nomor": 11,
        "kode": "25BIGLANPTX118SL-250077-0620",
        "elemen": "Reading and Viewing",
        "subelemen": "Explicit environmental benefits",
        "indikator": "Mengidentifikasi keunggulan lingkungan kendaraan listrik secara eksplisit (11)",
        "tipe": "pg",
        "soalHtml": "<div class='stimulus-box mb-3'><span class='badge bg-primary mb-2'>Reading Passage (Questions 11 to 15)</span><p><strong>Do Electric Vehicles Shape a Sustainable Future?</strong></p><p>The growing popularity of electric vehicles (EVs) has sparked global discussions about their role in shaping a sustainable future. As nations strive to reduce carbon emissions and transition to cleaner energy sources, EVs have been widely promoted as a practical alternative to traditional gasoline-powered cars. However, despite their many benefits, the future of electric vehicles remains a topic of debate due to various challenges that must still be addressed.</p><p>On the one hand, the advantages of electric vehicles are clear. EVs produce zero tailpipe emissions, which means they do not release harmful exhaust fumes such as nitrogen oxides and particulate matter into the atmosphere. This significantly improves urban air quality and helps reduce respiratory illnesses in congested metropolitan areas. Furthermore, electric motors run almost silently, dramatically mitigating acoustic noise pollution in cities.</p><p>On the other hand, several critical bottlenecks persist. The production of lithium-ion batteries requires intensive mining of rare metals such as lithium, cobalt, and nickel, which often leads to environmental degradation and significant carbon footprints during manufacturing. Additionally, charging infrastructure remains unevenly distributed, particularly in rural regions, and the environmental benefit of EVs is diminished if the electricity grid powering them relies primarily on fossil fuels like coal.</p></div><p>According to the text, why are electric vehicles considered better for the environment?</p>",
        "options": [
            {"key": "A", "text": "They produce zero tailpipe emissions and help reduce urban air and noise pollution"},
            {"key": "B", "text": "They require absolutely zero energy during the battery manufacturing stage"},
            {"key": "C", "text": "Their batteries decompose naturally without leaving chemical traces"},
            {"key": "D", "text": "They can be charged in minutes anywhere without relying on electricity grids"},
            {"key": "E", "text": "They eliminate all tire wear and road friction completely"}
        ],
        "kunci": "A",
        "pembahasan": "Paragraf kedua menjelaskan keunggulan utama: 'EVs produce zero tailpipe emissions... improves urban air quality... dramatically mitigating acoustic noise pollution' (Jawaban A).",
        "gambar": "tka/img/inggris-pilihan/soal_11.png"
    },
    {
        "id": 12,
        "nomor": 12,
        "kode": "25BIGLANPTX118SL-250077-0757",
        "elemen": "Reading and Viewing",
        "subelemen": "Evaluating true/false statements regarding discussion text",
        "indikator": "Menentukan kebenaran pernyataan topik kendaraan listrik (12)",
        "tipe": "kompleks_bs",
        "soalHtml": "<p>What is mainly discussed in the text? Decide whether each statement is <strong>True</strong> or <strong>False</strong>!</p>",
        "items": [
            {"pernyataan": "Electric vehicles do not produce harmful exhaust gases from tailpipes during operation.", "kunci": "True"},
            {"pernyataan": "The environmental benefits of electric vehicles are completely independent of how the electrical grid generates power.", "kunci": "False"},
            {"pernyataan": "Electric vehicles offer vital ecological solutions, but widespread sustainability depends on overcoming battery supply chain and grid challenges.", "kunci": "True"}
        ],
        "kunci": ["True", "False", "True"],
        "pembahasan": "Pernyataan 1 Benar (zero tailpipe emissions). Pernyataan 2 Salah (teks menegaskan manfaat EV berkurang jika listrik berasal dari PLTU batu bara). Pernyataan 3 Benar (kesimpulan berimbang teks).",
        "gambar": "tka/img/inggris-pilihan/soal_12.png"
    },
    {
        "id": 13,
        "nomor": 13,
        "kode": "25BIGLANPIN123SL-250077-0741",
        "elemen": "Reading and Viewing",
        "subelemen": "Identifying supporting facts in discussion text",
        "indikator": "Mengidentifikasi faktor pendukung masa depan kendaraan listrik (13)",
        "tipe": "mcma",
        "soalHtml": "<p>Which of the following factors explain why electric vehicles remain a central focus in environmental policy despite existing challenges?<br><em>(Choose all correct answers!)</em></p>",
        "options": [
            {"key": "A", "text": "Global commitment to reducing greenhouse gas emissions and fossil fuel dependence"},
            {"key": "B", "text": "Significant improvements in urban air quality and public respiratory health"},
            {"key": "C", "text": "Immediate availability of zero-emission electricity everywhere across developing nations"},
            {"key": "D", "text": "Technological advancements that continue to enhance battery energy density and recycling"},
            {"key": "E", "text": "Total ban on all public transport systems worldwide"}
        ],
        "kunci": ["A", "B", "D"],
        "pembahasan": "EV menjadi pilar kebijakan karena komitmen dekarbonisasi global (A), penurunan polusi udara perkotaan (B), dan pesatnya riset inovasi baterai (D). Pilihan C salah karena grid listrik belum sepenuhnya bersih.",
        "gambar": "tka/img/inggris-pilihan/soal_13.png"
    },
    {
        "id": 14,
        "nomor": 14,
        "kode": "25BIGLANPIN124SL-250077-0753",
        "elemen": "Reading and Viewing",
        "subelemen": "Determining text communicative purpose",
        "indikator": "Menyimpulkan tujuan komunikatif teks diskusi kendaraan listrik (14)",
        "tipe": "mcma",
        "soalHtml": "<p>What is the overall purpose of the text?<br><em>(Click on every correct answer!)</em></p>",
        "options": [
            {"key": "A", "text": "To inform readers about both the advantages and obstacles associated with electric vehicles"},
            {"key": "B", "text": "To encourage critical and balanced thinking about the transition toward sustainable transport"},
            {"key": "C", "text": "To persuade people to never purchase traditional or electric automobiles again"},
            {"key": "D", "text": "To highlight that technological adoption requires addressing upstream supply chains and energy sources"},
            {"key": "E", "text": "To attack automotive companies for inventing new technologies"}
        ],
        "kunci": ["A", "B", "D"],
        "pembahasan": "Sebagai discussion text, teks bertujuan menyajikan sudut pandang berimbang pro dan kontra EV (A), mengajak pembaca berpikir kritis objektif (B), serta mengingatkan pentingnya menuntaskan rantai pasok dan sumber energi bersih (D).",
        "gambar": "tka/img/inggris-pilihan/soal_14.png"
    },
    {
        "id": 15,
        "nomor": 15,
        "kode": "25BIGLANPIN125SL-250077-0734",
        "elemen": "Evaluating and Appreciating",
        "subelemen": "Cause and effect evaluation",
        "indikator": "Mengidentifikasi hubungan sebab-akibat kebijakan insentif kendaraan listrik (15)",
        "tipe": "kompleks_bs",
        "soalHtml": "<p>Determine whether each statement presents a <strong>CAUSE</strong> or an <strong>EFFECT</strong> based on the text!</p>",
        "items": [
            {"pernyataan": "Governments worldwide implement subsidies, tax credits, and purchase rebates for green vehicles.", "kunci": "Cause"},
            {"pernyataan": "Consumers find EV purchase prices more accessible and investment in clean transport accelerates.", "kunci": "Effect"},
            {"pernyataan": "Rapid growth of EV fleets creates high demand for expanded public fast-charging stations.", "kunci": "Effect"}
        ],
        "kunci": ["Cause", "Effect", "Effect"],
        "pembahasan": "Kebijakan subsidi fiskal pemerintah merupakan aksi pemicu (Cause). Keterjangkauan harga bagi konsumen dan lonjakan kebutuhan stasiun pengisian daya (SPKLU) adalah dampak lanjutan (Effect).",
        "gambar": "tka/img/inggris-pilihan/soal_15.png"
    },

    # 16 - 20: Finfluencers & Financial Literacy (The Plain Bagel)
    {
        "id": 16,
        "nomor": 16,
        "kode": "25BIGLANPTX122SL-250059-0655",
        "elemen": "Reading and Viewing",
        "subelemen": "Explicit understanding of social media influencers",
        "indikator": "Menemukan alasan masyarakat mempercayai finfluencer secara eksplisit (16)",
        "tipe": "pg",
        "soalHtml": "<div class='stimulus-box mb-3'><span class='badge bg-primary mb-2'>Reading Passage (Questions 16 to 20)</span><p><strong>The Rise of Finfluencers: Redefining Financial Advice</strong></p><p>In recent years, the landscape of personal finance education has undergone a massive transformation with the emergence of \"finfluencers\"—financial influencers who use social media platforms like YouTube, TikTok, and Instagram to share money management advice. Unlike traditional financial advisors who often communicate through formal jargon and charge expensive consulting fees, finfluencers present complex financial concepts in short, bite-sized, and entertaining videos.</p><p>Young audiences find finfluencers highly relatable because they often share their own financial struggles, budgeting tips, and real-life investment experiences. However, financial experts caution that the lack of regulation in online financial content poses significant hazards. Many content creators lack formal financial certifications and may promote high-risk assets, volatile cryptocurrencies, or sponsored financial apps without transparently disclosing conflicts of interest.</p></div><p>People learn more easily from finfluencers and place trust in them because ....</p>",
        "options": [
            {"key": "A", "text": "They enjoy finfluencers' short, engaging content and feel they have relatable experiences in common"},
            {"key": "B", "text": "Finfluencers guarantee 100% risk-free returns on all investments"},
            {"key": "C", "text": "Traditional licensed advisors have been legally prohibited from giving personal advice"},
            {"key": "D", "text": "Finfluencers are funded directly by national central banks"},
            {"key": "E", "text": "Government regulations mandate watching financial videos before opening a bank account"}
        ],
        "kunci": "A",
        "pembahasan": "Paragraf kedua menyebutkan alasan keterikatan audiens: 'finfluencers present complex financial concepts in short, bite-sized, and entertaining videos... highly relatable because they share real-life struggles' (Jawaban A).",
        "gambar": "tka/img/inggris-pilihan/soal_16.png"
    },
    {
        "id": 17,
        "nomor": 17,
        "kode": "25BIGLANPIN123SL-250059-0653",
        "elemen": "Reading and Viewing",
        "subelemen": "Evaluating external supporting evidence",
        "indikator": "Mengidentifikasi bukti tambahan yang memperkuat argumen teks (17)",
        "tipe": "pg",
        "soalHtml": "<p>What extra evidence could most effectively strengthen the point made in the text about the growing influence of finfluencers on the financial sector?</p>",
        "options": [
            {"key": "A", "text": "Mainstream television networks and financial institutions increasingly invite reputable finfluencers to educational panels and outreach campaigns"},
            {"key": "B", "text": "Financial topics never appear in trending search algorithms"},
            {"key": "C", "text": "Most internet users have deleted their social media apps"},
            {"key": "D", "text": "Young adults prefer visiting local bank branches in person during business hours"},
            {"key": "E", "text": "Financial literacy textbooks have seen record physical sales"}
        ],
        "kunci": "A",
        "pembahasan": "Keterlibatan finfluencer dalam program edukasi resmi lembaga keuangan dan media arus utama membuktikan secara empiris bahwa pengaruh finfluencer telah diakui secara luas dalam ekosistem finansial modern (Jawaban A).",
        "gambar": "tka/img/inggris-pilihan/soal_17.png"
    },
    {
        "id": 18,
        "nomor": 18,
        "kode": "25BIGLANPIN124SL-250059-0639",
        "elemen": "Reading and Viewing",
        "subelemen": "Inferring writer's intention",
        "indikator": "Menyimpulkan pesan dan tujuan penulis kepada pembaca (18)",
        "tipe": "pg",
        "soalHtml": "<p>From the text, what does the writer want to urge readers to do when consuming online financial content?</p>",
        "options": [
            {"key": "A", "text": "Invest all life savings into any cryptocurrency endorsed by a popular influencer"},
            {"key": "B", "text": "Quit their full-time jobs and immediately become financial content creators"},
            {"key": "C", "text": "Approach online financial advice with critical thinking, verify credentials, and remain mindful of undisclosed conflicts of interest"},
            {"key": "D", "text": "Completely ignore all forms of budgeting and personal accounting"},
            {"key": "E", "text": "Refuse to use digital banking apps"}
        ],
        "kunci": "C",
        "pembahasan": "Penulis mengapresiasi kemudahan belajar dari finfluencer namun memberikan peringatan keras ('caution that the lack of regulation poses significant hazards') agar pembaca bersikap kritis dan memverifikasi kredibilitas nasihat keuangan (Jawaban C).",
        "gambar": "tka/img/inggris-pilihan/soal_18.png"
    },
    {
        "id": 19,
        "nomor": 19,
        "kode": "25BIGLANPIN125SL-250059-0638",
        "elemen": "Reading and Viewing",
        "subelemen": "Identifying supporting arguments",
        "indikator": "Menemukan alasan-alasan yang mendukung opini utama penulis (19)",
        "tipe": "mcma",
        "soalHtml": "<p>What reasons does the writer give to explain why finfluencers have become so popular among digital generations?<br><em>(Choose all correct answers!)</em></p>",
        "options": [
            {"key": "A", "text": "Finfluencers' content is easy to digest, visually engaging, and free of heavy jargon"},
            {"key": "B", "text": "Finfluencers share authentic personal stories and everyday budgeting experiences"},
            {"key": "C", "text": "Finfluencers broaden their accessibility by actively utilizing modern social media algorithms"},
            {"key": "D", "text": "Finfluencers are legally responsible for all financial losses incurred by their viewers"},
            {"key": "E", "text": "Finfluencers have official power to cancel student debt"}
        ],
        "kunci": ["A", "B", "C"],
        "pembahasan": "Alasan popularitas yang dipaparkan dalam teks: konten mudah dipahami tanpa jargon rumit (A), cerita autentik yang dekat dengan realitas audiens (B), dan pemanfaatan platform media sosial secara masif (C).",
        "gambar": "tka/img/inggris-pilihan/soal_19.png"
    },
    {
        "id": 20,
        "nomor": 20,
        "kode": "25BIGLANEVA132SL-250059-0676",
        "elemen": "Evaluating and Appreciating",
        "subelemen": "Fact vs opinion in online advice",
        "indikator": "Mengevaluasi pernyataan ke dalam kategori Fakta atau Opini (20)",
        "tipe": "kompleks_bs",
        "soalHtml": "<p>Decide whether each statement from the discourse on finfluencers is a <strong>FACT</strong> or an <strong>OPINION</strong>!</p>",
        "items": [
            {"pernyataan": "Many online finfluencers lack certified financial planning licenses or professional credentials.", "kunci": "Fact"},
            {"pernyataan": "Watching five-minute TikTok videos is superior to consulting a certified financial planner.", "kunci": "Opinion"},
            {"pernyataan": "Finfluencers utilize social video platforms to distribute personal finance content.", "kunci": "Fact"}
        ],
        "kunci": ["Fact", "Opinion", "Fact"],
        "pembahasan": "Pernyataan 1 dan 3 merupakan fakta objektif (banyak kreator tidak berizin dan mereka memakai platform video). Pernyataan 2 adalah opini subjektif mengenai keunggulan relatif metode belajar.",
        "gambar": "tka/img/inggris-pilihan/soal_20.png"
    },

    # 21 - 25: Vertical Farming
    {
        "id": 21,
        "nomor": 21,
        "kode": "25BIGLANPTX118SL-250074-0419",
        "elemen": "Reading and Viewing",
        "subelemen": "Explicit challenges of vertical farming",
        "indikator": "Mengidentifikasi kendala utama pertanian vertikal secara eksplisit (21)",
        "tipe": "pg",
        "soalHtml": "<div class='stimulus-box mb-3'><span class='badge bg-primary mb-2'>Reading Passage (Questions 21 to 25)</span><p><strong>Is Vertical Farming the Future of Agriculture?</strong></p><p>As the global population approaches eight billion and climate change threatens conventional agricultural productivity, vertical farming has emerged as a promising solution. Vertical farming refers to the practice of cultivating crops in vertically stacked layers, often integrated within controlled indoor environments such as retrofitted warehouses or shipping containers. By utilizing hydroponic or aeroponic techniques and specialized LED grow lights, these facilities produce food year-round without soil and with up to 95% less water than traditional open-field agriculture.</p><p>Despite its remarkable efficiency, vertical farming faces economic and operational hurdles. The capital expenditure required to establish indoor farms is immense due to the cost of advanced automation, climate-control sensors, and specialized lighting systems. Furthermore, artificial illumination consumes substantial amounts of electricity, making operational viability heavily reliant on clean, inexpensive energy sources.</p></div><p>According to the text, which of the following is a major disadvantage of vertical farming?</p>",
        "options": [
            {"key": "A", "text": "It requires significantly higher land space than traditional horizontal farming"},
            {"key": "B", "text": "It has high initial capital costs and requires large amounts of electricity for artificial lighting"},
            {"key": "C", "text": "It consumes 95% more freshwater than traditional outdoor farming"},
            {"key": "D", "text": "It can only operate during the sunny summer months"},
            {"key": "E", "text": "It is completely incapable of growing leafy greens and herbs"}
        ],
        "kunci": "B",
        "pembahasan": "Teks secara eksplisit menguraikan kendala utama: 'capital expenditure required to establish indoor farms is immense... artificial illumination consumes substantial amounts of electricity' (Jawaban B).",
        "gambar": "tka/img/inggris-pilihan/soal_21.png"
    },
    {
        "id": 22,
        "nomor": 22,
        "kode": "25BIGLANPTX118SL-250074-0425",
        "elemen": "Reading and Viewing",
        "subelemen": "Main focus and topic identification",
        "indikator": "Menentukan fokus utama teks pertanian vertikal (22)",
        "tipe": "pg",
        "soalHtml": "<p>What is the main focus of the text above?</p>",
        "options": [
            {"key": "A", "text": "The history of ancient irrigation methods in Mediterranean cultures"},
            {"key": "B", "text": "The potentials, innovations, and economic challenges of vertical farming as an urban food solution"},
            {"key": "C", "text": "The complete replacement of all traditional rural farmers by robotic greenhouses"},
            {"key": "D", "text": "The harmful chemical fertilizers used in conventional monoculture"},
            {"key": "E", "text": "The decline of worldwide demand for fresh vegetables"}
        ],
        "kunci": "B",
        "pembahasan": "Teks mengulas secara komprehensif potensi revolusioner pertanian vertikal (hemat air, hemat lahan, produksi sepanjang tahun) sekaligus membedah kendala modal awal dan konsumsi energinya (Jawaban B).",
        "gambar": "tka/img/inggris-pilihan/soal_22.png"
    },
    {
        "id": 23,
        "nomor": 23,
        "kode": "25BIGLANPIN123SL-250074-0413",
        "elemen": "Reading and Viewing",
        "subelemen": "Supporting arguments for urban farming",
        "indikator": "Mengidentifikasi ide yang mendukung kelayakan pertanian vertikal (23)",
        "tipe": "mcma",
        "soalHtml": "<p>Which of the following ideas support the argument that vertical farming can revolutionize future urban agriculture?<br><em>(Choose all correct answers!)</em></p>",
        "options": [
            {"key": "A", "text": "It reduces water consumption by up to 95% compared to open-field farming"},
            {"key": "B", "text": "It eliminates vulnerability to extreme weather and seasonal climatic fluctuations"},
            {"key": "C", "text": "It allows local produce cultivation inside metropolitan areas, shortening food transport miles"},
            {"key": "D", "text": "It requires clearing vast forested areas outside cities"},
            {"key": "E", "text": "It relies entirely on heavy synthetic chemical pesticides"}
        ],
        "kunci": ["A", "B", "C"],
        "pembahasan": "Kelebihan pertanian vertikal yang diakui teks: efisiensi air drastis (A), tidak bergantung cuaca/musim (B), dan lokasinya di perkotaan memangkas jejak karbon rantai distribusi pangan (C).",
        "gambar": "tka/img/inggris-pilihan/soal_23.png"
    },
    {
        "id": 24,
        "nomor": 24,
        "kode": "25BIGLANPIN124SL-250074-0414",
        "elemen": "Reading and Viewing",
        "subelemen": "Implicit communicative purpose",
        "indikator": "Menyimpulkan tujuan implisit teks pertanian vertikal (24)",
        "tipe": "pg",
        "soalHtml": "<p>What is the implied purpose of the text?</p>",
        "options": [
            {"key": "A", "text": "To provide a balanced perspective on how vertical farming offers innovative food security while noting that technological and energy hurdles must be solved"},
            {"key": "B", "text": "To advise consumers to avoid eating greenhouse-grown vegetables"},
            {"key": "C", "text": "To celebrate vertical farming as an infallible system with zero downsides"},
            {"key": "D", "text": "To demand the immediate closure of all indoor farming research laboratories"},
            {"key": "E", "text": "To promote specific commercial LED lighting brands"}
        ],
        "kunci": "A",
        "pembahasan": "Tujuan implisit penulis adalah memberikan pandangan objektif dan seimbang (balanced perspective) mengenai harapan besar pertanian vertikal beserta tantangan teknis biaya dan energi yang perlu diatasi (Jawaban A).",
        "gambar": "tka/img/inggris-pilihan/soal_24.png"
    },
    {
        "id": 25,
        "nomor": 25,
        "kode": "25BIGLANPIN125SL-250074-0410",
        "elemen": "Evaluating and Appreciating",
        "subelemen": "Evaluating statements on future agriculture",
        "indikator": "Menilai kebenaran pernyataan seputar pertanian vertikal (25)",
        "tipe": "kompleks_bs",
        "soalHtml": "<p>Decide whether each statement is <strong>True</strong> or <strong>False</strong> based on the text on vertical farming!</p>",
        "items": [
            {"pernyataan": "Vertical farming can operate continuously throughout the year because crops are grown in climate-controlled indoor spaces.", "kunci": "True"},
            {"pernyataan": "The integration of renewable energy sources such as solar panels can help mitigate high operational electricity costs.", "kunci": "True"},
            {"pernyataan": "Vertical farming requires fertile soil enriched with natural humus to nurture plant roots.", "kunci": "False"}
        ],
        "kunci": ["True", "True", "False"],
        "pembahasan": "Pernyataan 1 Benar (indoor controlled environment). Pernyataan 2 Benar (energi terbarukan menekan biaya listrik). Pernyataan 3 Salah (pertanian vertikal bersifat 'soil-less' menggunakan hidroponik atau aeroponik tanpa tanah).",
        "gambar": "tka/img/inggris-pilihan/soal_25.png"
    },

    # 26 - 30: Fast Fashion & Circular Economy
    {
        "id": 26,
        "nomor": 26,
        "kode": "25BIGLANPTX118SL-250156-0783",
        "elemen": "Reading and Viewing",
        "subelemen": "Environmental impact of textile industry",
        "indikator": "Mengidentifikasi dampak lingkungan industri fast fashion secara eksplisit (26)",
        "tipe": "pg",
        "soalHtml": "<div class='stimulus-box mb-3'><span class='badge bg-primary mb-2'>Reading Passage (Questions 26 to 30)</span><p><strong>The Hidden Environmental Toll of Fast Fashion</strong></p><p>Fast fashion has revolutionized the global garment industry by transforming runway trends into inexpensive, mass-market apparel available at unprecedented speed. While this business model has democratized fashion by allowing consumers to refresh their wardrobes frequently on modest budgets, it has come at an alarming environmental cost. The fashion sector is currently responsible for approximately 10% of global greenhouse gas emissions—exceeding the combined footprint of international aviation and maritime shipping.</p><p>Beyond atmospheric emissions, textile manufacturing is notoriously water-intensive. Producing a single conventional cotton shirt requires around 2,700 liters of freshwater. Moreover, the prevalence of synthetic non-biodegradable fibers like polyester causes millions of microplastics to be shed into waterways during laundry cycles. Compounding the crisis is the culture of disposable consumerism: millions of tons of discarded clothing end up in landfills or are incinerated annually. To counteract this ecological threat, advocates urge a transition toward a \"circular economy\" emphasizing durable design, garment recycling, and the purchase of secondhand clothing.</p></div><p>According to the text, what is one major environmental impact directly caused by fast fashion?</p>",
        "options": [
            {"key": "A", "text": "It accounts for nearly 10% of global carbon emissions and generates massive microplastic pollution"},
            {"key": "B", "text": "It eliminates water usage in developing countries completely"},
            {"key": "C", "text": "It encourages people to wear the same garments for dozens of years"},
            {"key": "D", "text": "It biodegrades instantly when buried in municipal compost"},
            {"key": "E", "text": "It reduces the global amount of textile waste to zero"}
        ],
        "kunci": "A",
        "pembahasan": "Teks memaparkan dampak lingkungan secara gamblang: bertanggung jawab atas 10% emisi karbon global dan melepaskan jutaan serat mikroplastik sintetis ke saluran air (Jawaban A).",
        "gambar": "tka/img/inggris-pilihan/soal_26.png"
    },
    {
        "id": 27,
        "nomor": 27,
        "kode": "25BIGLANPTX118SL-250156-0666",
        "elemen": "Reading and Viewing",
        "subelemen": "Identifying explicit statements about fast fashion",
        "indikator": "Menemukan informasi eksplisit mengenai fenomena fast fashion (27)",
        "tipe": "mcma",
        "soalHtml": "<p>What does the text say about the fast fashion phenomenon?<br><em>(Choose all correct answers!)</em></p>",
        "options": [
            {"key": "A", "text": "The fashion industry generates up to 10% of global greenhouse gas emissions"},
            {"key": "B", "text": "Fast fashion gained immense popularity because it offers trendy clothing at low prices"},
            {"key": "C", "text": "A circular economy encourages repairing, reusing, or recycling textile materials to reduce waste"},
            {"key": "D", "text": "Synthetic fabrics like polyester decompose naturally within two to three weeks"},
            {"key": "E", "text": "Cotton production requires no water or land resources"}
        ],
        "kunci": ["A", "B", "C"],
        "pembahasan": "Pernyataan A, B, dan C bersumber langsung dari teks: emisi 10% (A), daya tarik harga murah dan tren cepat (B), serta solusi ekonomi sirkular (C). Pilihan D dan E bertentangan dengan sains teks.",
        "gambar": "tka/img/inggris-pilihan/soal_27.png"
    },
    {
        "id": 28,
        "nomor": 28,
        "kode": "25BIGLANPTX120SL-250156-0656",
        "elemen": "Reading and Viewing",
        "subelemen": "Synthesizing text structure into flowcharts",
        "indikator": "Menentukan diagram alir yang mencerminkan struktur penyajian teks fast fashion (28)",
        "tipe": "pg",
        "soalHtml": "<p>The text discusses the phenomenon of fast fashion. Which of the following flowchart progressions best reflects the organizational structure of the text?</p>",
        "options": [
            {"key": "A", "text": "Introduction to fast fashion and consumer appeal → Environmental consequences and overconsumption → Emergence of the circular economy → Call for consumer awareness and sustainable action"},
            {"key": "B", "text": "History of ancient textile weaving → Rise of internet shopping → Fashion models biography → Future astronaut spacesuits"},
            {"key": "C", "text": "Government bans on cheap imports → Collapse of global textile brands → Rise of cotton farming → Elimination of microplastics"},
            {"key": "D", "text": "Chemical analysis of synthetic polyester → Pricing models in fashion stores → Retail rent costs in Europe → Textile transport ships"},
            {"key": "E", "text": "Celebrity fashion endorsements → Expansion of secondhand thrift shops → Total ban on all new garment manufacturing"}
        ],
        "kunci": "A",
        "pembahasan": "Alur teks tersusun logis: pengenalan fenomena fast fashion dan daya tariknya (paragraf 1), dampak emisi, air, dan limbah sampah tekstil (paragraf 2), pengenalan solusi ekonomi sirkular, dan ajakan perubahan perilaku konsumen (Jawaban A).",
        "gambar": "tka/img/inggris-pilihan/soal_28.png"
    },
    {
        "id": 29,
        "nomor": 29,
        "kode": "25BIGLANPIN124SL-250156-0683",
        "elemen": "Reading and Viewing",
        "subelemen": "Ethical and environmental values",
        "indikator": "Menyimpulkan nilai-nilai etis konsumen yang ditekankan penulis (29)",
        "tipe": "mcma",
        "soalHtml": "<p>What important consumer values regarding fashion does the writer encourage readers to adopt?<br><em>(Click on every correct answer!)</em></p>",
        "options": [
            {"key": "A", "text": "Recognizing that fast-discard culture creates severe long-term environmental hazards"},
            {"key": "B", "text": "Buying fewer, higher-quality clothing items designed for longevity and durability"},
            {"key": "C", "text": "Supporting circular practices such as thrifting, donating, repairing, and recycling textiles"},
            {"key": "D", "text": "Buying weekly trendy fast-fashion items to discard them after a single use"},
            {"key": "E", "text": "Burning unwanted polyester garments in domestic backyard fires"}
        ],
        "kunci": ["A", "B", "C"],
        "pembahasan": "Penulis mengadvokasi kesadaran ekologis: menyadari bahaya overconsumption (A), memprioritaskan pakaian berkualitas tahan lama (slow fashion) (B), dan berpartisipasi dalam sirkularitas pakaian (thrifting, repair, recycle) (C).",
        "gambar": "tka/img/inggris-pilihan/soal_30.png"
    },
    {
        "id": 30,
        "nomor": 30,
        "kode": "25BIGLANEVA129SL-250156-0665",
        "elemen": "Evaluating and Appreciating",
        "subelemen": "Evaluating supporting factual evidence",
        "indikator": "Mengidentifikasi fakta yang paling kuat mendukung opini tentang pemborosan pakaian (30)",
        "tipe": "pg",
        "soalHtml": "<p>An environmentalist asserts: <em>\"Modern fashion culture has decoupled clothing acquisition from genuine functional necessity, creating rampant overconsumption.\"</em><br>Which fact in the text best supports this opinion?</p>",
        "options": [
            {"key": "A", "text": "Some businesses now promote vintage and secondhand garments"},
            {"key": "B", "text": "Clothing consumption has skyrocketed while the average number of times each item is worn before disposal has dramatically declined"},
            {"key": "C", "text": "Sewing machines can stitch shirts quickly in automated factories"},
            {"key": "D", "text": "Online stores provide tracking numbers for worldwide deliveries"},
            {"key": "E", "text": "Cotton plants grow best in warm tropical climates"}
        ],
        "kunci": "B",
        "pembahasan": "Fakta paling meyakinkan yang mendukung argumen overconsumption adalah lonjakan drastis volume pembelian pakaian yang berbanding terbalik dengan penurunan frekuensi pemakaian per pakaian sebelum dibuang (Jawaban B).",
        "gambar": "tka/img/inggris-pilihan/soal_31.png"
    }
]

def build():
    data_js = json.dumps(soal_list, indent=2, ensure_ascii=False)
    js_content = f"""// Data Soal TKA Bahasa Inggris SMA 2025 (Pilihan)
// Standar Pusmendik / BPPP Kemendikbudristek 2025

const DATA_INGGRIS_PILIHAN = {data_js};

// Registrasi global bundle
if (typeof window !== 'undefined') {{
  window.DATA_INGGRIS_PILIHAN = DATA_INGGRIS_PILIHAN;
  window.tkaInggrisPilihanPaket1Data = DATA_INGGRIS_PILIHAN;
  window.tkaInggrisPilihanPackages = window.tkaInggrisPilihanPackages || {{}};
  window.tkaInggrisPilihanPackages['paket1'] = {{
    title: "Paket 1: Soal Resmi TKA Bahasa Inggris (Pilihan) SMA 2025 (BPPP Kemendikbudristek)",
    shortTitle: "Paket 1 (Resmi 2025 - 30 Soal)",
    data: DATA_INGGRIS_PILIHAN
  }};
}}

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = DATA_INGGRIS_PILIHAN;
}}
"""
    
    # Save to tka/data/mapel-inggris-pilihan.js
    os.makedirs("tka/data", exist_ok=True)
    with open("tka/data/mapel-inggris-pilihan.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    print("Saved tka/data/mapel-inggris-pilihan.js")
    
    # Mirror to tka/js/data_inggris_pilihan.js
    os.makedirs("tka/js", exist_ok=True)
    with open("tka/js/data_inggris_pilihan.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    print("Saved tka/js/data_inggris_pilihan.js")

if __name__ == "__main__":
    build()
