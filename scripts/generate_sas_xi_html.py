# -*- coding: utf-8 -*-
"""
Generator for kelas-11/ujian-sas-ganjil.html
Generates 45 isomorphic items (40 PG + 5 Esai), Matriks Kisi-Kisi (Tab 1),
Bank Soal & Pembahasan Konseptual (Tab 2), and Simulasi CBT Online Mandiri (Tab 3).
"""

import os
import json

# Define the 40 PG questions and 5 Esai questions
PG_DATA = [
    {
        "no": 1,
        "materi_key": "stoikiometri",
        "materi_label": "Konsep Mol & Stoikiometri",
        "indikator": "Menghitung jumlah partikel dari jumlah mol",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Dalam praktikum kimia di laboratorium madrasah, santri menimbang sampel glukosa murni ($C_6H_{12}O_6$) sebanyak $0,25\\text{ mol}$ untuk membuat larutan nutrisi. Jika tetapan Avogadro $L = 6,02 \\times 10^{23}\\text{ molekul/mol}$, jumlah molekul glukosa yang terdapat dalam sampel tersebut adalah ...",
        "pilihan": [
            "$1,505 \\times 10^{22}\\text{ molekul}$",
            "$3,010 \\times 10^{22}\\text{ molekul}$",
            "$1,505 \\times 10^{23}\\text{ molekul}$",
            "$3,010 \\times 10^{23}\\text{ molekul}$",
            "$6,020 \\times 10^{23}\\text{ molekul}$"
        ],
        "kunci": "C",
        "bahas": "Jumlah partikel ($N$) dihitung dengan mengalikan jumlah mol ($n$) dengan bilangan Avogadro ($L$):<br>$$N = n \\times L = 0,25\\text{ mol} \\times 6,02 \\times 10^{23}\\text{ partikel/mol} = 1,505 \\times 10^{23}\\text{ molekul}$$",
        "pengecoh": "Opsi A salah karena eksponen pangkat sepuluh berkurang ($10^{22}$). Opsi D merupakan hasil jika mol zat adalah $0,5\\text{ mol}$. Opsi E adalah jumlah molekul dalam $1\\text{ mol}$ penuh."
    },
    {
        "no": 2,
        "materi_key": "stoikiometri",
        "materi_label": "Konsep Mol & Stoikiometri",
        "indikator": "Menghitung massa zat dari jumlah mol dan M_r",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Santri asrama menyiapkan natrium bikarbonat ($NaHCO_3$, soda kue) untuk percobaan pengembangan adonan roti. Jika massa molar $NaHCO_3 = 84\\text{ g/mol}$ ($A_r\\text{ Na}=23, \\text{H}=1, \\text{C}=12, \\text{O}=16$), massa dari $0,25\\text{ mol}$ bubuk $NaHCO_3$ tersebut adalah ...",
        "pilihan": [
            "4,2 gram",
            "8,4 gram",
            "21,0 gram",
            "42,0 gram",
            "84,0 gram"
        ],
        "kunci": "C",
        "bahas": "Massa zat ($m$) dihitung dengan rumus hubungan mol dan massa molar ($M_r$):<br>$$m = n \\times M_r = 0,25\\text{ mol} \\times 84\\text{ g/mol} = \\frac{1}{4} \\times 84 = 21,0\\text{ gram}$$",
        "pengecoh": "Opsi A diperoleh jika salah mengalikan dengan $0,05$. Opsi B diperoleh jika jumlah mol adalah $0,1\\text{ mol}$. Opsi D diperoleh jika jumlah mol adalah $0,5\\text{ mol}$ ($84 / 2 = 42\\text{ g}$)."
    },
    {
        "no": 3,
        "materi_key": "stoikiometri",
        "materi_label": "Konsep Mol & Stoikiometri",
        "indikator": "Menghitung volume gas pada keadaan standar (STP)",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Instalasi pengolahan limbah organik pondok menghasilkan gas metana ($CH_4$, $M_r = 16\\text{ g/mol}$) sebagai bahan bakar ramah lingkungan. Jika gas metana yang tertampung dalam tangki penampung bermassa $8\\text{ gram}$, volume gas tersebut bila diukur pada keadaan standar (STP: $0^\\circ\\text{C}, 1\\text{ atm}$) adalah ...",
        "pilihan": [
            "2,8 Liter",
            "5,6 Liter",
            "11,2 Liter",
            "22,4 Liter",
            "44,8 Liter"
        ],
        "kunci": "C",
        "bahas": "Langkah penyelesaian:<br>1. Hitung jumlah mol gas metana ($CH_4$):<br>$$n = \\frac{\\text{massa}}{M_r} = \\frac{8\\text{ g}}{16\\text{ g/mol}} = 0,5\\text{ mol}$$<br>2. Hitung volume gas pada keadaan standar (STP, $V_m = 22,4\\text{ L/mol}$):<br>$$V_{\\text{STP}} = n \\times 22,4\\text{ L/mol} = 0,5\\text{ mol} \\times 22,4\\text{ L/mol} = 11,2\\text{ Liter}$$",
        "pengecoh": "Opsi B ($5,6\\text{ L}$) terjadi jika mol dihitung keliru sebagai $0,25\\text{ mol}$ ($8/32$). Opsi D ($22,4\\text{ L}$) adalah volume untuk $1\\text{ mol}$ gas ideal pada STP."
    },
    {
        "no": 4,
        "materi_key": "stoikiometri",
        "materi_label": "Konsep Mol & Stoikiometri",
        "indikator": "Menentukan rumus empiris dari persentase massa",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Suatu gas hidrokarbon hasil fermentasi limbah pertanian dianalisis di laboratorium dan memiliki persentase massa $85,7\\%$ karbon dan $14,3\\%$ hidrogen. Jika diketahui $A_r\\text{ C} = 12$ dan $A_r\\text{ H} = 1$, rumus empiris gas hidrokarbon tersebut adalah ...",
        "pilihan": [
            "$CH$",
            "$CH_2$",
            "$CH_3$",
            "$C_2H_3$",
            "$C_2H_5$"
        ],
        "kunci": "B",
        "bahas": "Asumsikan massa total senyawa $= 100\\text{ gram}$:<br>Massa C $= 85,7\\text{ g}$ dan Massa H $= 14,3\\text{ g}$.<br>1. Menghitung perbandingan mol atom pembentuk:<br>$$n_{\\text{C}} = \\frac{85,7}{12} \\approx 7,14\\text{ mol}$$<br>$$n_{\\text{H}} = \\frac{14,3}{1} = 14,3\\text{ mol}$$<br>2. Perbandingan paling sederhana mol C : H:<br>$$\\text{C} : \\text{H} = \\frac{7,14}{7,14} : \\frac{14,3}{7,14} = 1 : 2$$<br>Maka rumus empirisnya adalah $\\mathbf{CH_2}$.",
        "pengecoh": "Opsi A mengasumsikan rasio 1:1 tanpa membagi dengan Ar. Opsi C ($CH_3$) merupakan rumus empiris etana/propana jika persentase H sekitar 20-25%."
    },
    {
        "no": 5,
        "materi_key": "stoikiometri",
        "materi_label": "Konsep Mol & Stoikiometri",
        "indikator": "Menentukan rumus molekul dari rumus empiris dan M_r",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Gas alkena yang dimanfaatkan untuk mempercepat pematangan buah di kebun pesantren memiliki rumus empiris $CH_2$. Dari hasil uji spektrometri massa, diketahui massa molekul relatif ($M_r$) gas tersebut adalah $42$ ($A_r\\text{ C}=12, \\text{H}=1$). Rumus molekul senyawa gas tersebut adalah ...",
        "pilihan": [
            "$C_2H_4$",
            "$C_3H_6$",
            "$C_4H_8$",
            "$C_5H_{10}$",
            "$C_6H_{12}$"
        ],
        "kunci": "B",
        "bahas": "Hubungan rumus empiris dan rumus molekul dinyatakan dengan $(RE)_n = RM$:<br>$$(CH_2)_n = M_r \\implies (12 + 2 \\times 1)n = 42$$<br>$$14n = 42 \\implies n = \\frac{42}{14} = 3$$<br>Substitusikan nilai $n = 3$ ke rumus empiris:<br>$$\\text{Rumus Molekul} = (CH_2)_3 = \\mathbf{C_3H_6} \\quad (\\text{Propena})$$",
        "pengecoh": "Opsi A ($C_2H_4$) memiliki $M_r = 28$. Opsi C ($C_4H_8$) memiliki $M_r = 56$. Opsi E ($C_6H_{12}$) memiliki $M_r = 84$."
    },
    {
        "no": 6,
        "materi_key": "stoikiometri",
        "materi_label": "Konsep Mol & Stoikiometri",
        "indikator": "Menghitung massa zat hasil reaksi berdasarkan perbandingan koefisien",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Dalam percobaan pembersihan karat logam, santri mereaksikan $4,8\\text{ gram}$ pita magnesium ($A_r\\text{ Mg}=24$) dengan larutan asam klorida encer berlebih menurut reaksi:<br>$$Mg(s) + 2HCl(aq) \\to MgCl_2(aq) + H_2(g)$$<br>Jika $A_r\\text{ H}=1$, massa gas hidrogen ($H_2$) yang dihasilkan pada reaksi tersebut adalah ...",
        "pilihan": [
            "0,1 gram",
            "0,2 gram",
            "0,4 gram",
            "0,8 gram",
            "1,2 gram"
        ],
        "kunci": "C",
        "bahas": "Langkah penyelesaian:<br>1. Menghitung mol Mg yang bereaksi:<br>$$n_{Mg} = \\frac{4,8\\text{ g}}{24\\text{ g/mol}} = 0,2\\text{ mol}$$<br>2. Menentukan mol gas $H_2$ berdasarkan perbandingan koefisien reaksi setara:<br>$$n_{H_2} = \\frac{\\text{koef } H_2}{\\text{koef } Mg} \\times n_{Mg} = \\frac{1}{1} \\times 0,2\\text{ mol} = 0,2\\text{ mol}$$<br>3. Menghitung massa gas $H_2$ ($M_r\\text{ }H_2 = 2\\text{ g/mol}$):<br>$$\\text{massa } H_2 = n \\times M_r = 0,2\\text{ mol} \\times 2\\text{ g/mol} = \\mathbf{0,4\\text{ gram}}$$",
        "pengecoh": "Opsi B ($0,2\\text{ g}$) diperoleh jika lupa mengalikan mol dengan $M_r\\text{ }H_2 = 2$ (hanya menggunakan Ar H = 1). Opsi D ($0,8\\text{ g}$) diperoleh jika salah memperhitungkan koefisien reaksi."
    },
    {
        "no": 7,
        "materi_key": "stoikiometri",
        "materi_label": "Konsep Mol & Stoikiometri",
        "indikator": "Menentukan pereaksi pembatas dan mol produk",
        "level": "C4",
        "bobot": "1 Poin",
        "soal": "Dalam pembuatan belerang trioksida ($SO_3$) untuk industri asam sulfat, direaksikan $4\\text{ mol}$ gas $SO_2$ dan $3\\text{ mol}$ gas $O_2$ dalam reaktor tertutup menurut reaksi:<br>$$2SO_2(g) + O_2(g) \\to 2SO_3(g)$$<br>Jumlah mol gas $SO_3$ maksimum yang terbentuk dan zat yang bertindak sebagai pereaksi pembatas adalah ...",
        "pilihan": [
            "2 mol $SO_3$, pereaksi pembatas $O_2$",
            "3 mol $SO_3$, pereaksi pembatas $SO_2$",
            "4 mol $SO_3$, pereaksi pembatas $SO_2$",
            "4 mol $SO_3$, pereaksi pembatas $O_2$",
            "6 mol $SO_3$, pereaksi pembatas $O_2$"
        ],
        "kunci": "C",
        "bahas": "Langkah menentukan pereaksi pembatas:<br>Bagi jumlah mol masing-masing pereaksi dengan koefisien reaksinya:<br>* Untuk $SO_2$: $\\frac{4\\text{ mol}}{2} = 2$<br>* Untuk $O_2$: $\\frac{3\\text{ mol}}{1} = 3$<br>Karena hasil bagi $SO_2$ lebih kecil ($2 < 3$), maka $\\mathbf{SO_2}$ **habis bereaksi terlebih dahulu (pereaksi pembatas)**.<br><br>Menghitung mol produk $SO_3$ yang terbentuk:<br>$$n_{SO_3} = \\frac{\\text{koef } SO_3}{\\text{koef } SO_2} \\times n_{SO_2} = \\frac{2}{2} \\times 4\\text{ mol} = \\mathbf{4\\text{ mol}}$$",
        "pengecoh": "Opsi A mengira pereaksi pembatas adalah zat yang jumlah mol awalnya lebih sedikit ($O_2 = 3\\text{ mol}$), padahal koefisien reaksi wajib diperhitungkan."
    },
    {
        "no": 8,
        "materi_key": "stoikiometri",
        "materi_label": "Konsep Mol & Stoikiometri",
        "indikator": "Menghitung volume gas pereaksi berdasarkan hukum Gay-Lussac/Avogadro",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Pembakaran gas etana ($C_2H_6$) yang merupakan salah satu fraksi gas alam berlangsung menurut persamaan reaksi yang telah disetarakan:<br>$$2C_2H_6(g) + 7O_2(g) \\to 4CO_2(g) + 6H_2O(g)$$<br>Pada suhu dan tekanan yang sama ($P, T$ konstan), volume gas oksigen ($O_2$) yang diperlukan untuk membakar sempurna $4\\text{ liter}$ gas etana adalah ...",
        "pilihan": [
            "7 liter",
            "10 liter",
            "14 liter",
            "21 liter",
            "28 liter"
        ],
        "kunci": "C",
        "bahas": "Berdasarkan **Hukum Perbandingan Volume (Gay-Lussac)** dan **Hipotesis Avogadro**, pada suhu dan tekanan yang sama, perbandingan volume gas-gas yang bereaksi dan hasil reaksi berbanding lurus sebagai bilangan bulat sederhana yang sama dengan perbandingan koefisien reaksinya:<br>$$\\frac{V_{O_2}}{V_{C_2H_6}} = \\frac{\\text{koef } O_2}{\\text{koef } C_2H_6} = \\frac{7}{2}$$<br>$$V_{O_2} = \\frac{7}{2} \\times 4\\text{ liter} = \\mathbf{14\\text{ liter}}$$",
        "pengecoh": "Opsi A ($7\\text{ liter}$) diperoleh jika mengira rasio 1:7. Opsi E ($28\\text{ liter}$) diperoleh jika mengalikan koefisien tanpa membagi koefisien reaktan mula-mula ($7 \\times 4$)."
    },
    {
        "no": 9,
        "materi_key": "ikatan",
        "materi_label": "Ikatan Kimia & Gaya Antarmolekul",
        "indikator": "Menentukan jenis ikatan dari konfigurasi elektron unsur",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Diberikan dua unsur dengan nomor atom masing-masing: unsur A ($Z = 19$) dan unsur B ($Z = 16$). Jika unsur A dan B saling berikatan membentuk senyawa kimia yang stabil, jenis ikatan dan rumus kimia senyawa yang terbentuk adalah ...",
        "pilihan": [
            "Ikatan kovalen, rumus $AB_2$",
            "Ikatan kovalen, rumus $A_2B$",
            "Ikatan ion, rumus $AB$",
            "Ikatan ion, rumus $A_2B$",
            "Ikatan ion, rumus $AB_2$"
        ],
        "kunci": "D",
        "bahas": "Tuliskan konfigurasi elektron kedua unsur:<br>* Unsur A ($Z = 19$): $2, 8, 8, 1$ $\\implies$ elektron valensi $= 1$ (logam alkali golongan IA). Untuk stabil, atom A melepaskan 1 elektron membentuk kation $\\mathbf{A^+}$.<br>* Unsur B ($Z = 16$): $2, 8, 6$ $\\implies$ elektron valensi $= 6$ (nonlogam kalkogen golongan VIA). Untuk mencapai oktet, atom B menangkap 2 elektron membentuk anion $\\mathbf{B^{2-}}$.<br><br>Transfer elektron antara kation logam $A^+$ dan anion nonlogam $B^{2-}$ menghasilkan gaya elektrostatis yang kuat (**ikatan ion**) dengan rumus kimia netral: $\\mathbf{A_2B}$ (contoh senyawa: $K_2S$).",
        "pengecoh": "Opsi B keliru pada jenis ikatan (kovalen terbentuk antar-nonlogam). Opsi E terbalik dalam menyetarakan muatan kation-anion."
    },
    {
        "no": 10,
        "materi_key": "ikatan",
        "materi_label": "Ikatan Kimia & Gaya Antarmolekul",
        "indikator": "Menjelaskan terbentuknya ikatan kovalen koordinasi dari gambar struktur (soal bergambar)",
        "level": "C3",
        "bobot": "1 Poin",
        "has_svg": "svg_pg10",
        "soal": "Perhatikan diagram pembentukan ion hidronium ($H_3O^+$) dari molekul air ($H_2O$) dan ion hidrogen ($H^+$) berikut:<br><div class=\"my-3 flex justify-center\"><svg class=\"w-72 h-44 bg-slate-50 border border-slate-200 rounded-2xl p-2\" viewBox=\"0 0 280 170\"><rect width=\"280\" height=\"170\" rx=\"16\" fill=\"#f8fafc\"/><text x=\"140\" y=\"24\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f766e\">Pembentukan Ion Hidronium (H3O+)</text><circle cx=\"90\" cy=\"95\" r=\"22\" fill=\"#ccfbf1\" stroke=\"#0d9488\" stroke-width=\"2\"/><text x=\"90\" y=\"100\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"#0f766e\">O</text><circle cx=\"45\" cy=\"60\" r=\"13\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.5\"/><text x=\"45\" y=\"65\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0369a1\">H</text><circle cx=\"45\" cy=\"130\" r=\"13\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.5\"/><text x=\"45\" y=\"135\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0369a1\">H</text><line x1=\"68\" y1=\"84\" x2=\"56\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"2.5\"/><line x1=\"68\" y1=\"106\" x2=\"56\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"2.5\"/><circle cx=\"90\" cy=\"65\" r=\"3\" fill=\"#334155\"/><circle cx=\"98\" cy=\"65\" r=\"3\" fill=\"#334155\"/><circle cx=\"170\" cy=\"95\" r=\"13\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><text x=\"170\" y=\"100\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#b45309\">H+</text><defs><marker id=\"arrow-dative\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#7c3aed\"/></marker></defs><path d=\"M 114 95 L 150 95\" stroke=\"#7c3aed\" stroke-width=\"3\" stroke-dasharray=\"3,3\" marker-end=\"url(#arrow-dative)\"/><text x=\"132\" y=\"84\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#6d28d9\">PEB O</text><text x=\"140\" y=\"155\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"600\" fill=\"#475569\">[H3O]+ terbentuk via ikatan koordinasi</text></svg></div>Ikatan antara atom oksigen (O) dan ion $H^+$ yang ditandai dengan anak panah ungu terbentuk melalui ...",
        "pilihan": [
            "Ikatan ionik akibat transfer elektron penuh dari atom O ke ion $H^+$",
            "Ikatan kovalen polar biasa di mana atom O dan ion $H^+$ masing-masing menyumbangkan satu elektron",
            "Ikatan kovalen koordinasi, di mana pasangan elektron bebas (PEB) milik atom oksigen dipakai bersama dengan ion $H^+$",
            "Ikatan hidrogen antarmolekul yang terbentuk akibat gaya dipol",
            "Ikatan logam karena adanya disosiasi awan elektron valensi"
        ],
        "kunci": "C",
        "bahas": "Ion hidrogen ($H^+$) telah kehilangan elektron valensi tunggalnya sehingga memiliki orbital $1s$ yang kosong dan tidak mampu menyumbangkan elektron. Atom oksigen pada molekul $H_2O$ memiliki 2 Pasang Elektron Bebas (PEB). Salah satu PEB oksigen didonasikan untuk digunakan bersama dengan ion $H^+$. Ikatan kovalen di mana pasangan elektron ikatan hanya berasal dari salah satu pihak disebut **ikatan kovalen koordinasi (ikatan datif)**.",
        "pengecoh": "Opsi B salah karena ion $H^+$ tidak menyumbangkan elektron sama sekali. Opsi D salah karena ikatan ini adalah ikatan intramolekul, bukan gaya antarmolekul."
    },
    {
        "no": 11,
        "materi_key": "ikatan",
        "materi_label": "Ikatan Kimia & Gaya Antarmolekul",
        "indikator": "Menentukan jumlah PEI dan PEB serta bentuk molekul berdasarkan teori domain elektron",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Molekul air ($H_2O$) tersusun atas atom hidrogen ($Z = 1$) dan atom oksigen ($Z = 8$). Berdasarkan teori domain elektron (VSEPR), jumlah Pasangan Elektron Ikatan (PEI), Pasangan Elektron Bebas (PEB), serta bentuk geometri molekul $H_2O$ berturut-turut adalah ...",
        "pilihan": [
            "2 PEI, 0 PEB, bentuk linear",
            "2 PEI, 1 PEB, bentuk huruf V",
            "2 PEI, 2 PEB, bentuk huruf V (bengkok)",
            "3 PEI, 1 PEB, bentuk piramida trigonal",
            "4 PEI, 0 PEB, bentuk tetrahedral"
        ],
        "kunci": "C",
        "bahas": "Analisis atom pusat O ($Z=8$):<br>1. Konfigurasi elektron O: $2, 6$ $\\implies$ elektron valensi $(EV) = 6$.<br>2. Jumlah atom yang diikat: 2 atom H $\\implies PEI = 2$.<br>3. Menghitung PEB atom pusat:<br>$$PEB = \\frac{EV - PEI}{2} = \\frac{6 - 2}{2} = \\frac{4}{2} = 2$$<br>Tipe molekulnya adalah $\\mathbf{AX_2E_2}$. Bentuk dasar domain elektron adalah tetrahedral, namun tolakan kuat dari 2 PEB menekan sudut ikatan H–O–H menjadi sekitar $104,5^\\circ$ sehingga menghasilkan bentuk molekul **huruf V (bengkok/angular)**.",
        "pengecoh": "Opsi A keliru mengabaikan PEB (menganggap linear seperti $CO_2$). Opsi E adalah geometri domain elektron tanpa mempertimbangkan posisi atom terikat."
    },
    {
        "no": 12,
        "materi_key": "ikatan",
        "materi_label": "Ikatan Kimia & Gaya Antarmolekul",
        "indikator": "Menganalisis bentuk molekul dari gambar (soal bergambar)",
        "level": "C4",
        "bobot": "1 Poin",
        "has_svg": "svg_pg12",
        "soal": "Santri mengamati model tiga dimensi dari tiga molekul kovalen berikut:<br><div class=\"my-3 flex justify-center\"><svg class=\"w-full max-w-md h-36 bg-slate-50 border border-slate-200 rounded-2xl p-2\" viewBox=\"0 0 380 130\"><rect width=\"380\" height=\"130\" rx=\"16\" fill=\"#f8fafc\"/><g transform=\"translate(20, 10)\"><text x=\"45\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f766e\">(1) BeCl2</text><line x1=\"15\" y1=\"65\" x2=\"75\" y2=\"65\" stroke=\"#64748b\" stroke-width=\"3\"/><circle cx=\"15\" cy=\"65\" r=\"12\" fill=\"#86efac\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><text x=\"15\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#14532d\">Cl</text><circle cx=\"45\" cy=\"65\" r=\"10\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><text x=\"45\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#713f12\">Be</text><circle cx=\"75\" cy=\"65\" r=\"12\" fill=\"#86efac\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><text x=\"75\" y=\"69\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#14532d\">Cl</text><text x=\"45\" y=\"105\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"600\" fill=\"#475569\">Linear (180°)</text></g><g transform=\"translate(145, 10)\"><text x=\"50\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f766e\">(2) BF3</text><line x1=\"50\" y1=\"60\" x2=\"50\" y2=\"25\" stroke=\"#64748b\" stroke-width=\"2.5\"/><line x1=\"50\" y1=\"60\" x2=\"22\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"2.5\"/><line x1=\"50\" y1=\"60\" x2=\"78\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"2.5\"/><circle cx=\"50\" cy=\"60\" r=\"10\" fill=\"#fbcfe8\" stroke=\"#db2777\" stroke-width=\"1.5\"/><text x=\"50\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#831843\">B</text><circle cx=\"50\" cy=\"25\" r=\"9\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/><circle cx=\"22\" cy=\"80\" r=\"9\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/><circle cx=\"78\" cy=\"80\" r=\"9\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/><text x=\"50\" y=\"105\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"600\" fill=\"#475569\">Trigonal Planar (120°)</text></g><g transform=\"translate(270, 10)\"><text x=\"45\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f766e\">(3) CH4</text><line x1=\"45\" y1=\"60\" x2=\"45\" y2=\"25\" stroke=\"#64748b\" stroke-width=\"2.5\"/><line x1=\"45\" y1=\"60\" x2=\"20\" y2=\"82\" stroke=\"#64748b\" stroke-width=\"2.5\"/><line x1=\"45\" y1=\"60\" x2=\"65\" y2=\"82\" stroke=\"#64748b\" stroke-width=\"2.5\"/><line x1=\"45\" y1=\"60\" x2=\"55\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"2,2\"/><circle cx=\"45\" cy=\"60\" r=\"11\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"45\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#0f172a\">C</text><circle cx=\"45\" cy=\"25\" r=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1\"/><circle cx=\"20\" cy=\"82\" r=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1\"/><circle cx=\"65\" cy=\"82\" r=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1\"/><circle cx=\"55\" cy=\"50\" r=\"7\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1\"/><text x=\"45\" y=\"105\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"600\" fill=\"#475569\">Tetrahedral (109,5°)</text></g></svg></div>Pernyataan yang BENAR mengenai bentuk molekul dan besar sudut ikatan ketiga senyawa tersebut adalah ...",
        "pilihan": [
            "$BeCl_2$ berbentuk segitiga datar ($120^\\circ$) karena memiliki 2 domain elektron",
            "$BF_3$ berbentuk piramida trigonal ($107^\\circ$) karena atom pusat memiliki 1 pasang elektron bebas",
            "$CH_4$ berbentuk bujur sangkar datar ($90^\\circ$) karena memiliki 4 pasangan elektron ikatan",
            "$BeCl_2$ berbentuk linear ($180^\\circ$), $BF_3$ berbentuk segitiga datar ($120^\\circ$), dan $CH_4$ berbentuk tetrahedral ($109{,}5^\\circ$)",
            "Ketiga molekul memiliki bentuk geometri yang sama karena seluruh atom pusatnya tidak memiliki PEB"
        ],
        "kunci": "D",
        "bahas": "Analisis geometri molekul tanpa PEB:<br>* $BeCl_2$: Tipe $AX_2$ (2 PEI, 0 PEB) $\\implies$ bentuk **Linear**, sudut ikatan $180^\\circ$.<br>* $BF_3$: Tipe $AX_3$ (3 PEI, 0 PEB) $\\implies$ bentuk **Segitiga Datar (Trigonal Planar)**, sudut ikatan $120^\\circ$.<br>* $CH_4$: Tipe $AX_4$ (4 PEI, 0 PEB) $\\implies$ bentuk **Tetrahedral**, sudut ikatan $109,5^\\circ$.",
        "pengecoh": "Opsi B salah karena $BF_3$ tidak memiliki PEB (atom B hanya memiliki 3 elektron valensi yang semuanya berikatan). Opsi C keliru mengasumsikan 4 domain sebagai planar 2D padahal tolakan minimum terjadi dalam ruang 3D tetrahedral."
    },
    {
        "no": 13,
        "materi_key": "ikatan",
        "materi_label": "Ikatan Kimia & Gaya Antarmolekul",
        "indikator": "Menentukan kepolaran molekul berdasarkan bentuk molekul",
        "level": "C4",
        "bobot": "1 Poin",
        "soal": "Dalam pembelajaran kimia di asrama, Ustaz menjelaskan bahwa kepolaran suatu molekul ditentukan oleh perbedaan keelektronegatifan ikatan dan simetri bentuk geometrinya (resultan momen dipol $\\mu$). Di antara molekul-molekul kovalen berikut, molekul yang bersifat POLAR (momen dipol total $\\mu > 0$) adalah ...",
        "pilihan": [
            "$CH_4$ (metana)",
            "$CCl_4$ (karbon tetraklorida)",
            "$BF_3$ (boron trifluorida)",
            "$CO_2$ (karbon dioksida)",
            "$PCl_3$ (fosforus triklorida)"
        ],
        "kunci": "E",
        "bahas": "Suatu molekul bersifat polar jika memiliki ikatan polar dan bentuk molekulnya asimetris sehingga resultan momen dipol $\\mu \\neq 0$:<br>* $CH_4$ dan $CCl_4$: Bentuk tetrahedral simetris ($AX_4$), resultan dipol saling meniadakan ($\\mu = 0$, nonpolar).<br>* $BF_3$: Bentuk trigonal planar simetris ($AX_3$), $\\mu = 0$ (nonpolar).<br>* $CO_2$: Bentuk linear simetris ($AX_2$), tarikan dipol berlawanan arah saling meniadakan ($\\mu = 0$, nonpolar).<br>* $\\mathbf{PCl_3}$: Atom pusat P memiliki 5 elektron valensi, mengikat 3 atom Cl dan menyisakan **1 Pasang Elektron Bebas (PEB)**. Tipe molekul $AX_3E$ dengan bentuk **piramida trigonal asimetris**. Momen dipol ikatan P–Cl tidak saling meniadakan, sehingga molekul bersifat **POLAR** ($\\mu > 0$).",
        "pengecoh": "Siswa sering terkecoh mengira $CCl_4$ polar karena ikatan C–Cl polar. Namun karena 4 ikatan C–Cl mengarah ke sudut-sudut tetrahedral yang simetris sempurna, dipol totalnya nol."
    },
    {
        "no": 14,
        "materi_key": "ikatan",
        "materi_label": "Ikatan Kimia & Gaya Antarmolekul",
        "indikator": "Mengidentifikasi senyawa yang memiliki ikatan hidrogen antarmolekul",
        "level": "C2",
        "bobot": "1 Poin",
        "soal": "Cairan antiseptik yang digunakan di pos kesehatan pesantren mengandung senyawa berikatan hidrogen kuat. Di antara senyawa-senyawa berikut, senyawa yang antarmolekulnya mampu membentuk IKATAN HIDROGEN adalah ...",
        "pilihan": [
            "$CH_4$ (metana)",
            "$H_2S$ (hidrogen sulfida)",
            "$HF$ (hidrogen fluorida)",
            "$HCl$ (hidrogen klorida)",
            "$PH_3$ (fosfina)"
        ],
        "kunci": "C",
        "bahas": "**Ikatan hidrogen** adalah gaya tarik dipol-dipol khusus yang sangat kuat antarmolekul yang terbentuk apabila atom hidrogen (H) berikatan secara kovalen langsung dengan atom yang memiliki keelektronegatifan sangat tinggi dan ukuran jari-jari kecil, yaitu atom **F (Fluor), O (Oksigen), atau N (Nitrogen)** (disingkat *FON*).<br>Di antara pilihan di atas, hanya molekul $\\mathbf{HF}$ yang memiliki atom H terikat langsung pada atom F, sehingga antarmolekul HF terbentuk ikatan hidrogen yang kokoh.",
        "pengecoh": "Opsi B ($H_2S$), D ($HCl$), dan E ($PH_3$) tidak memiliki ikatan hidrogen karena keelektronegatifan atom S, Cl, dan P tidak cukup kuat serta ukuran atomnya relatif besar."
    },
    {
        "no": 15,
        "materi_key": "ikatan",
        "materi_label": "Ikatan Kimia & Gaya Antarmolekul",
        "indikator": "Membandingkan titik didih berdasarkan gaya antarmolekul",
        "level": "C4",
        "bobot": "1 Poin",
        "soal": "Amonia ($NH_3$) mendidih pada suhu $-33^\\circ\\text{C}$, sedangkan fosfina ($PH_3$) yang memiliki massa molekul relatif ($M_r$) dua kali lebih besar ($M_r\\text{ }PH_3 = 34\\text{ g/mol}$ dibandingkan $M_r\\text{ }NH_3 = 17\\text{ g/mol}$) justru mendidih pada suhu yang jauh lebih rendah, yaitu $-88^\\circ\\text{C}$. Penyebab utama titik didih $NH_3$ jauh lebih tinggi daripada $PH_3$ adalah ...",
        "pilihan": [
            "Molekul $PH_3$ bersifat nonpolar sedangkan $NH_3$ bersifat ionik",
            "Antarmolekul $NH_3$ membentuk ikatan hidrogen yang sangat kuat, sedangkan antarmolekul $PH_3$ hanya gaya dipol-dipol lemah dan gaya London",
            "Ikatan kovalen N–H di dalam molekul $NH_3$ lebih mudah putus dibandingkan ikatan P–H",
            "Gaya dispersi London pada $NH_3$ jauh lebih besar daripada $PH_3$ karena jumlah atomnya",
            "Atom nitrogen memiliki jari-jari atom yang lebih besar daripada atom fosforus"
        ],
        "kunci": "B",
        "bahas": "Titik didih suatu zat molekuler ditentukan oleh besarnya energi yang dibutuhkan untuk mengatasi **gaya tarik antarmolekul** saat berubah fasa dari cair menjadi gas:<br>* Pada molekul $NH_3$, atom N sangat elektronegatif sehingga terbentuk **ikatan hidrogen antarmolekul** yang sangat kuat.<br>* Pada molekul $PH_3$, perbedaan keelektronegatifan antara P dan H sangat kecil sehingga tidak dapat membentuk ikatan hidrogen. Antarmolekul $PH_3$ hanya ditarik oleh gaya dipol-dipol lemah dan gaya London.<br>Meskipun $M_r\\text{ }PH_3 > M_r\\text{ }NH_3$, kekuatan ikatan hidrogen pada $NH_3$ jauh mengungguli gaya London pada $PH_3$, sehingga titik didih $NH_3$ jauh lebih tinggi.",
        "pengecoh": "Opsi C keliru karena saat mendidih yang terputus adalah gaya antarmolekul, bukan ikatan kovalen intramolekul. Opsi D salah karena gaya London berbanding lurus dengan massa molekul ($M_r$)."
    },
    {
        "no": 16,
        "materi_key": "ikatan",
        "materi_label": "Ikatan Kimia & Gaya Antarmolekul",
        "indikator": "Menyimpulkan jenis ikatan dari sifat fisik zat (soal bertabel)",
        "level": "C4",
        "bobot": "1 Poin",
        "soal": "Santri menguji empat zat padat tidak dikenal (A, B, C, D) di laboratorium dan mencatat sifat fisiknya dalam tabel berikut:<br><div class=\"my-2 overflow-x-auto\"><table class=\"w-full text-xs text-left border-collapse border border-slate-300\"><thead class=\"bg-slate-100\"><tr><th class=\"border border-slate-300 p-2\">Zat</th><th class=\"border border-slate-300 p-2\">Titik Leleh (°C)</th><th class=\"border border-slate-300 p-2\">Kelarutan dalam Air</th><th class=\"border border-slate-300 p-2\">Daya Hantar Listrik Lelehan</th></tr></thead><tbody><tr><td class=\"border border-slate-300 p-2 font-bold\">A</td><td class=\"border border-slate-300 p-2\">772</td><td class=\"border border-slate-300 p-2\">Larut</td><td class=\"border border-slate-300 p-2 text-emerald-700 font-semibold\">Menghantarkan</td></tr><tr><td class=\"border border-slate-300 p-2 font-bold\">B</td><td class=\"border border-slate-300 p-2\">-97</td><td class=\"border border-slate-300 p-2\">Larut</td><td class=\"border border-slate-300 p-2 text-rose-600\">Tidak menghantarkan</td></tr><tr><td class=\"border border-slate-300 p-2 font-bold\">C</td><td class=\"border border-slate-300 p-2\">1.085</td><td class=\"border border-slate-300 p-2\">Tidak larut</td><td class=\"border border-slate-300 p-2 text-emerald-700 font-semibold\">Menghantarkan</td></tr><tr><td class=\"border border-slate-300 p-2 font-bold\">D</td><td class=\"border border-slate-300 p-2\">115</td><td class=\"border border-slate-300 p-2\">Tidak larut</td><td class=\"border border-slate-300 p-2 text-rose-600\">Tidak menghantarkan</td></tr></tbody></table></div>Berdasarkan data tabel tersebut, zat yang memiliki ikatan ION dan zat yang memiliki ikatan LOGAM berturut-turut adalah ...",
        "pilihan": [
            "A dan B",
            "A dan C",
            "B dan D",
            "C dan D",
            "B dan C"
        ],
        "kunci": "B",
        "bahas": "Analisis sifat fisik masing-masing zat:<br>* **Zat A:** Titik leleh tinggi ($772^\\circ\\text{C}$), larut dalam air, dan lelehannya menghantarkan listrik karena ion-ionnya terdisosiasi bebas bergerak $\\implies$ **Senyawa Ionik** (contoh: $CaCl_2$).<br>* **Zat B:** Titik leleh sangat rendah ($-97^\\circ\\text{C}$), larut dalam air, lelehan tidak menghantarkan listrik $\\implies$ **Kovalen Polar**.<br>* **Zat C:** Titik leleh sangat tinggi ($1.085^\\circ\\text{C}$), tidak larut dalam air, lelehannya menghantarkan listrik karena adanya lautan elektron valensi terdelokalisasi $\\implies$ **Logam** (contoh: Tembaga, Cu).<br>* **Zat D:** Titik leleh relatif rendah ($115^\\circ\\text{C}$), tidak larut air, tidak menghantarkan $\\implies$ **Kovalen Nonpolar**.<br>Maka zat berikatan ion dan logam berturut-turut adalah **A dan C**.",
        "pengecoh": "Opsi A keliru karena B adalah senyawa kovalen. Opsi D keliru karena D adalah padatan kovalen nonpolar molekuler."
    },
    {
        "no": 17,
        "materi_key": "ikatan",
        "materi_label": "Ikatan Kimia & Gaya Antarmolekul",
        "indikator": "Membandingkan titik didih zat berdasarkan gaya London",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Gas mulia golongan VIIIA (He, Ne, Ar, Kr, Xe) merupakan gas monoatomik yang hanya memiliki gaya tarik antarmolekul berupa gaya dispersi London. Urutan kenaikan titik didih gas mulia dari yang TERENDAH ke yang TERTINGGI adalah ...",
        "pilihan": [
            "$Xe < Kr < Ar < Ne < He$",
            "$He < Ne < Ar < Kr < Xe$",
            "$Ar < Ne < He < Kr < Xe$",
            "$He < Ar < Ne < Xe < Kr$",
            "$Kr < Xe < Ar < Ne < He$"
        ],
        "kunci": "B",
        "bahas": "Gaya dispersi London timbul akibat terbentuknya dipol sesaat dan dipol terimbas pada awan elektron atom. Faktor yang menentukan kekuatan gaya London:<br>1. **Ukuran atom dan jumlah elektron:** Dalam satu golongan dari atas ke bawah ($He \\to Ne \\to Ar \\to Kr \\to Xe$), nomor atom dan ukuran awan elektron semakin besar.<br>2. **Polarisabilitas awan elektron:** Semakin besar ukuran awan elektron, semakin mudah awan elektron mengalami distorsi (terpolarisasi), sehingga gaya dispersi London semakin kuat.<br>3. Semakin kuat gaya London, semakin besar kalor yang diperlukan untuk memisahkan atom-atom gas, sehingga titik didih meningkat: $\\mathbf{He < Ne < Ar < Kr < Xe}$.",
        "pengecoh": "Opsi A terbalik (urutan dari tertinggi ke terendah). Opsi C mengacak posisi gas mulia tanpa memperhatikan urutan nomor atom pada tabel periodik."
    },
    {
        "no": 18,
        "materi_key": "termokimia",
        "materi_label": "Termokimia",
        "indikator": "Membedakan reaksi eksoterm dan endoterm dari diagram tingkat energi (soal bergambar)",
        "level": "C3",
        "bobot": "1 Poin",
        "has_svg": "svg_pg18",
        "soal": "Perhatikan dua diagram tingkat energi reaksi kimia berikut:<br><div class=\"my-3 flex justify-center\"><svg class=\"w-full max-w-md h-40 bg-slate-50 border border-slate-200 rounded-2xl p-2\" viewBox=\"0 0 380 150\"><rect width=\"380\" height=\"150\" rx=\"16\" fill=\"#f8fafc\"/><g transform=\"translate(20, 10)\"><text x=\"70\" y=\"18\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f766e\">Diagram I (Reaksi A)</text><line x1=\"20\" y1=\"120\" x2=\"20\" y2=\"30\" stroke=\"#64748b\" stroke-width=\"1.5\"/><polygon points=\"20,25 16,33 24,33\" fill=\"#64748b\"/><text x=\"15\" y=\"28\" text-anchor=\"end\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748b\">H</text><line x1=\"30\" y1=\"50\" x2=\"80\" y2=\"50\" stroke=\"#0f766e\" stroke-width=\"3\"/><text x=\"55\" y=\"43\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#0f766e\">Reaktan</text><line x1=\"90\" y1=\"105\" x2=\"140\" y2=\"105\" stroke=\"#b91c1c\" stroke-width=\"3\"/><text x=\"115\" y=\"120\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#b91c1c\">Produk</text><line x1=\"85\" y1=\"55\" x2=\"85\" y2=\"100\" stroke=\"#b91c1c\" stroke-width=\"2\" marker-end=\"url(#arrow-down)\"/><text x=\"108\" y=\"80\" font-size=\"10\" font-weight=\"bold\" fill=\"#b91c1c\">ΔH < 0</text></g><g transform=\"translate(200, 10)\"><text x=\"70\" y=\"18\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f766e\">Diagram II (Reaksi B)</text><line x1=\"20\" y1=\"120\" x2=\"20\" y2=\"30\" stroke=\"#64748b\" stroke-width=\"1.5\"/><polygon points=\"20,25 16,33 24,33\" fill=\"#64748b\"/><text x=\"15\" y=\"28\" text-anchor=\"end\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748b\">H</text><line x1=\"30\" y1=\"105\" x2=\"80\" y2=\"105\" stroke=\"#0f766e\" stroke-width=\"3\"/><text x=\"55\" y=\"120\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#0f766e\">Reaktan</text><line x1=\"90\" y1=\"50\" x2=\"140\" y2=\"50\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"115\" y=\"43\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\">Produk</text><line x1=\"85\" y1=\"100\" x2=\"85\" y2=\"55\" stroke=\"#2563eb\" stroke-width=\"2\" marker-end=\"url(#arrow-up)\"/><text x=\"108\" y=\"80\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\">ΔH > 0</text></g><defs><marker id=\"arrow-down\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto\"><path d=\"M 2 2 L 5 8 L 8 2 z\" fill=\"#b91c1c\"/></marker><marker id=\"arrow-up\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto\"><path d=\"M 2 8 L 5 2 L 8 8 z\" fill=\"#2563eb\"/></marker></defs></svg></div>Berdasarkan diagram tersebut, kesimpulan yang BENAR mengenai jenis reaksi dan perubahan entalpi ($\\Delta H$) adalah ...",
        "pilihan": [
            "Diagram I adalah reaksi eksoterm ($\\Delta H < 0$) karena entalpi produk lebih rendah daripada reaktan",
            "Diagram I adalah reaksi endoterm ($\\Delta H > 0$) karena sistem melepaskan kalor ke lingkungan",
            "Diagram II adalah reaksi eksoterm ($\\Delta H < 0$) karena sistem menyerap kalor dari lingkungan",
            "Diagram II adalah reaksi endoterm ($\\Delta H > 0$) karena entalpi produk lebih tinggi daripada reaktan",
            "Pernyataan A dan D keduanya benar"
        ],
        "kunci": "E",
        "bahas": "Analisis perubahan entalpi ($\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}}$):<br>* **Diagram I:** Tingkat entalpi produk berada di bawah reaktan ($H_P < H_R$). Maka $\\Delta H = H_P - H_R < 0$ (bertanda negatif). Reaksi melepaskan kalor ke lingkungan $\\implies$ **Reaksi Eksoterm** (Pernyataan A benar).<br>* **Diagram II:** Tingkat entalpi produk berada di atas reaktan ($H_P > H_R$). Maka $\\Delta H = H_P - H_R > 0$ (bertanda positif). Reaksi menyerap kalor dari lingkungan $\\implies$ **Reaksi Endoterm** (Pernyataan D benar).<br>Oleh karena itu, kombinasi pernyataan yang tepat adalah **A dan D keduanya benar**.",
        "pengecoh": "Opsi B dan C keliru mendefinisikan tanda $\\Delta H$ dan arah perpindahan kalor."
    },
    {
        "no": 19,
        "materi_key": "termokimia",
        "materi_label": "Termokimia",
        "indikator": "Mengidentifikasi proses endoterm dalam kehidupan sehari-hari",
        "level": "C2",
        "bobot": "1 Poin",
        "soal": "Dalam fenomena alam dan kehidupan sehari-hari di lingkungan madrasah, proses berikut yang tergolong ke dalam peristiwa ENDOTERMIK ($\\Delta H > 0$, menyerap kalor dari lingkungan) adalah ...",
        "pilihan": [
            "Pembakaran gas elpiji di dapur umum asrama",
            "Fotosintesis pada daun tanaman herbal dengan bantuan sinar matahari",
            "Perkaratan pagar besi asrama akibat reaksi redoks dengan udara lembap",
            "Pencampuran kapur tohor (CaO) dengan air untuk adukan plester dinding",
            "Respirasi sel tubuh santri saat berolahraga pagi"
        ],
        "kunci": "B",
        "bahas": "Proses endotermik adalah proses yang memerlukan atau menyerap energi kalor dari lingkungan ke dalam sistem ($\\Delta H > 0$):<br>* **Fotosintesis** ($6CO_2 + 6H_2O + \\text{foton cahaya} \\to C_6H_{12}O_6 + 6O_2$) mutlak menyerap energi cahaya matahari untuk membentuk ikatan kimia glukosa $\\implies$ **Endotermik**.<br>* Pembakaran elpiji, perkaratan besi, reaksi pelarutan kapur tohor ($CaO + H_2O \\to Ca(OH)_2 + \\text{kalor}$), dan respirasi sel tubuh semuanya melepaskan kalor ke lingkungan $\\implies$ **Eksotermik**.",
        "pengecoh": "Siswa sering mengira reaksi kapur dengan air adalah endoterm karena air mendidih, padahal air mendidih membuktikan sistem memancarkan kalor ke lingkungan (eksoterm)."
    },
    {
        "no": 20,
        "materi_key": "termokimia",
        "materi_label": "Termokimia",
        "indikator": "Menuliskan persamaan termokimia dari data ΔH pembentukan standar",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Diketahui entalpi pembentukan standar gas metana ($\\Delta H_f^\\circ CH_4(g)$) adalah $-74,8\\text{ kJ/mol}$. Persamaan termokimia pembentukan standar yang BENAR untuk gas metana adalah ...",
        "pilihan": [
            "$C(s) + 4H(g) \\to CH_4(g) \\quad \\Delta H = -74{,}8\\text{ kJ}$",
            "$C(s) + 2H_2(g) \\to CH_4(g) \\quad \\Delta H = -74{,}8\\text{ kJ}$",
            "$CH_4(g) \\to C(s) + 2H_2(g) \\quad \\Delta H = +74{,}8\\text{ kJ}$",
            "$C(g) + 2H_2(g) \\to CH_4(g) \\quad \\Delta H = -74{,}8\\text{ kJ}$",
            "$2C(s) + 4H_2(g) \\to 2CH_4(g) \\quad \\Delta H = -149{,}6\\text{ kJ}$"
        ],
        "kunci": "B",
        "bahas": "**Entalpi pembentukan standar ($\\Delta H_f^\\circ$)** didefinisikan sebagai perubahan entalpi pada pembentukan **1 mol senyawa** langsung dari **unsur-unsur bebasnya dalam bentuk paling stabil pada keadaan standar ($25^\\circ\\text{C}, 1\\text{ atm}$)**:<br>* Unsur karbon paling stabil pada keadaan standar adalah padatan grafit: $C(s)$.<br>* Unsur hidrogen paling stabil adalah molekul gas diatomik: $H_2(g)$.<br>* Koefisien produk senyawa yang terbentuk ($CH_4$) harus tepat 1.<br>Maka persamaan termokimianya:<br>$$\\mathbf{C(s) + 2H_2(g) \\to CH_4(g) \\quad \\Delta H^\\circ = -74,8\\text{ kJ}}$$",
        "pengecoh": "Opsi A salah karena hidrogen tidak berada dalam wujud gas monoatomik $H(g)$. Opsi C adalah persamaan peruraian standar ($\\Delta H_d^\\circ$). Opsi E menghasilkan 2 mol zat sehingga bukan nilai standar per mol."
    },
    {
        "no": 21,
        "materi_key": "termokimia",
        "materi_label": "Termokimia",
        "indikator": "Menghitung kalor reaksi menggunakan q = m × c × ΔT",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Di dapur asrama, santri memanaskan $500\\text{ gram}$ air bersih dari suhu $25^\\circ\\text{C}$ hingga mencapai suhu $45^\\circ\\text{C}$ untuk menyeduh teh hangat. Jika kalor jenis air $c = 4,2\\text{ J/g}^\\circ\\text{C}$, jumlah kalor yang diserap oleh air tersebut adalah ...",
        "pilihan": [
            "4,2 kJ",
            "8,4 kJ",
            "21,0 kJ",
            "42,0 kJ",
            "84,0 kJ"
        ],
        "kunci": "D",
        "bahas": "Gunakan rumus azas Black untuk perubahan suhu fluida:<br>$$q = m \\times c \\times \\Delta T$$<br>Diketahui:<br>* $m = 500\\text{ gram}$<br>* $c = 4,2\\text{ J/g}^\\circ\\text{C}$<br>* $\\Delta T = 45^\\circ\\text{C} - 25^\\circ\\text{C} = 20^\\circ\\text{C}$<br><br>Perhitungan:<br>$$q = 500\\text{ g} \\times 4,2\\text{ J/g}^\\circ\\text{C} \\times 20^\\circ\\text{C} = 42.000\\text{ Joule} = \\mathbf{42,0\\text{ kJ}}$$",
        "pengecoh": "Opsi C ($21,0\\text{ kJ}$) diperoleh jika salah menghitung selisih suhu $\\Delta T = 10^\\circ\\text{C}$. Opsi B ($8,4\\text{ kJ}$) diperoleh jika massa hanya dihitung $100\\text{ gram}$."
    },
    {
        "no": 22,
        "materi_key": "termokimia",
        "materi_label": "Termokimia",
        "indikator": "Menentukan ΔH reaksi dari data percobaan kalorimeter (soal bergambar)",
        "level": "C4",
        "bobot": "1 Poin",
        "has_svg": "svg_pg22",
        "soal": "Santri mencampurkan $100\\text{ mL}$ larutan $HNO_3$ 1 M dan $100\\text{ mL}$ larutan $KOH$ 1 M ke dalam kalorimeter sederhana cangkir styrofoam:<br><div class=\"my-3 flex justify-center\"><svg class=\"w-72 h-44 bg-slate-50 border border-slate-200 rounded-2xl p-2\" viewBox=\"0 0 280 170\"><rect width=\"280\" height=\"170\" rx=\"16\" fill=\"#f8fafc\"/><text x=\"140\" y=\"22\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f766e\">Kalorimeter Cangkir Styrofoam</text><rect x=\"70\" y=\"45\" width=\"140\" height=\"105\" rx=\"10\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"2\"/><rect x=\"75\" y=\"80\" width=\"130\" height=\"65\" rx=\"6\" fill=\"#ccfbf1\" opacity=\"0.7\"/><rect x=\"110\" y=\"35\" width=\"10\" height=\"115\" fill=\"#e2e8f0\" stroke=\"#64748b\" stroke-width=\"1\"/><circle cx=\"115\" cy=\"145\" r=\"4\" fill=\"#ef4444\"/><rect x=\"113\" y=\"60\" width=\"4\" height=\"85\" fill=\"#ef4444\"/><line x1=\"160\" y1=\"35\" x2=\"160\" y2=\"135\" stroke=\"#475569\" stroke-width=\"2.5\"/><line x1=\"150\" y1=\"135\" x2=\"170\" y2=\"135\" stroke=\"#475569\" stroke-width=\"2.5\"/><text x=\"140\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f766e\">Campuran (200 mL)</text><text x=\"140\" y=\"162\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"600\" fill=\"#b91c1c\">ΔT = +6,0 °C (Eksoterm)</text></svg></div>Sebelum dicampur, suhu kedua larutan adalah $26,0^\\circ\\text{C}$, dan setelah dicampur merata suhu larutan naik menjadi $32,0^\\circ\\text{C}$ ($\\Delta T = 6,0^\\circ\\text{C}$). Jika massa jenis campuran dianggap $1\\text{ g/mL}$, kalor jenis larutan $4,2\\text{ J/g}^\\circ\\text{C}$, dan kalor wadah diabaikan, maka $\\Delta H$ reaksi penetralan per mol $H_2O$ yang terbentuk adalah ...",
        "pilihan": [
            "+50,4 kJ/mol",
            "-25,2 kJ/mol",
            "-50,4 kJ/mol",
            "-100,8 kJ/mol",
            "+100,8 kJ/mol"
        ],
        "kunci": "C",
        "bahas": "Langkah penyelesaian sistematis:<br>1. Menghitung massa total larutan:<br>$$V_{\\text{total}} = 100\\text{ mL} + 100\\text{ mL} = 200\\text{ mL} \\implies m = 200\\text{ gram}$$<br>2. Menghitung kalor larutan ($q_{\\text{larutan}}$):<br>$$q_{\\text{larutan}} = m \\times c \\times \\Delta T = 200\\text{ g} \\times 4,2\\text{ J/g}^\\circ\\text{C} \\times 6,0^\\circ\\text{C} = 5.040\\text{ J} = 5,04\\text{ kJ}$$<br>3. Kalor reaksi ($q_{\\text{reaksi}}$): Karena suhu naik, reaksi melepas kalor:<br>$$q_{\\text{reaksi}} = -q_{\\text{larutan}} = -5,04\\text{ kJ}$$<br>4. Menghitung mol reaksi dan $\\Delta H$ per mol $H_2O$:<br>$$n_{HNO_3} = 0,1\\text{ L} \\times 1\\text{ M} = 0,1\\text{ mol}; \\quad n_{KOH} = 0,1\\text{ L} \\times 1\\text{ M} = 0,1\\text{ mol}$$<br>Air ($H_2O$) yang terbentuk $= 0,1\\text{ mol}$.<br>$$\\Delta H = \\frac{q_{\\text{reaksi}}}{n_{H_2O}} = \\frac{-5,04\\text{ kJ}}{0,1\\text{ mol}} = \\mathbf{-50,4\\text{ kJ/mol}}$$",
        "pengecoh": "Opsi A keliru bertanda positif (+). Reaksi penetralan asam-basa selalu eksotermik ($\\Delta H < 0$). Opsi D terjadi jika lupa menjumlahkan volume larutan ($m = 100\\text{ g}$). Opsi B terjadi jika mol dianggap $0,2\\text{ mol}$."
    },
    {
        "no": 23,
        "materi_key": "termokimia",
        "materi_label": "Termokimia",
        "indikator": "Menghitung ΔH reaksi berdasarkan hukum Hess",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Diketahui data dua tahapan persamaan termokimia berikut:<br>(1) $2H_2(g) + O_2(g) \\to 2H_2O(l) \\quad \\Delta H = -572\\text{ kJ}$<br>(2) $H_2O(l) \\to H_2O(g) \\quad \\Delta H = +44\\text{ kJ}$<br>Berdasarkan hukum Hess, nilai perubahan entalpi untuk reaksi: $$2H_2(g) + O_2(g) \\to 2H_2O(g)$$ adalah ...",
        "pilihan": [
            "-616 kJ",
            "-528 kJ",
            "-484 kJ",
            "+484 kJ",
            "+528 kJ"
        ],
        "kunci": "C",
        "bahas": "Gunakan manipulasi aljabar termokimia:<br>Target reaksi: $2H_2(g) + O_2(g) \\to 2H_2O(g)$<br>* Reaksi (1) tetap: $2H_2(g) + O_2(g) \\to 2H_2O(l) \\quad \\Delta H_1 = -572\\text{ kJ}$<br>* Reaksi (2) dikalikan 2: $2H_2O(l) \\to 2H_2O(g) \\quad \\Delta H_2 = 2 \\times (+44\\text{ kJ}) = +88\\text{ kJ}$<br><br>Jumlahkan kedua reaksi (zat perantara $2H_2O(l)$ saling mengeliminasi):<br>$$2H_2(g) + O_2(g) \\to 2H_2O(g) \\quad \\Delta H = -572\\text{ kJ} + 88\\text{ kJ} = \\mathbf{-484\\text{ kJ}}$$",
        "pengecoh": "Opsi A ($-616\\text{ kJ}$) diperoleh jika reaksi (2) dikalikan 2 lalu dikurangkan alih-alih dijumlahkan. Opsi B ($-528\\text{ kJ}$) diperoleh jika lupa mengalikan reaksi (2) dengan koefisien 2."
    },
    {
        "no": 24,
        "materi_key": "termokimia",
        "materi_label": "Termokimia",
        "indikator": "Menghitung ΔH reaksi berdasarkan energi ikatan",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Gas hidrogen bromida ($HBr$) dapat disintesis dari unsur-unsurnya menurut persamaan:<br>$$H_2(g) + Br_2(g) \\to 2HBr(g)$$<br>Jika diketahui energi ikatan rata-rata:<br>* $D(H-H) = 436\\text{ kJ/mol}$<br>* $D(Br-Br) = 193\\text{ kJ/mol}$<br>* $D(H-Br) = 366\\text{ kJ/mol}$<br>Maka perubahan entalpi ($\\Delta H$) untuk reaksi pembentukan gas $HBr$ tersebut adalah ...",
        "pilihan": [
            "-103 kJ",
            "-51,5 kJ",
            "+51,5 kJ",
            "+103 kJ",
            "+263 kJ"
        ],
        "kunci": "A",
        "bahas": "Perhitungan $\\Delta H$ berdasarkan data energi ikatan rata-rata:<br>$$\\Delta H = \\Sigma D_{\\text{reaktan (pemutusan)}} - \\Sigma D_{\\text{produk (pembentukan)}}$$<br>1. Energi pemutusan ikatan (reaktan kiri):<br>* $1 \\times (H-H) = 436\\text{ kJ}$<br>* $1 \\times (Br-Br) = 193\\text{ kJ}$<br>$$\\Sigma D_{\\text{kiri}} = 436 + 193 = 629\\text{ kJ}$$<br>2. Energi pembentukan ikatan (produk kanan):<br>* $2 \\times (H-Br) = 2 \\times 366 = 732\\text{ kJ}$<br>$$\\Sigma D_{\\text{kanan}} = 732\\text{ kJ}$$<br>3. Menghitung $\\Delta H$:<br>$$\\Delta H = 629 - 732 = \\mathbf{-103\\text{ kJ}}$$",
        "pengecoh": "Opsi B ($-51,5\\text{ kJ}$) adalah $\\Delta H$ per mol $HBr$, sedangkan reaksi menghasilkan 2 mol $HBr$. Opsi D ($+103\\text{ kJ}$) terbalik rumus (mengurangkan produk dengan reaktan)."
    },
    {
        "no": 25,
        "materi_key": "termokimia",
        "materi_label": "Termokimia",
        "indikator": "Menghitung ΔH reaksi dari entalpi pembentukan standar",
        "level": "C4",
        "bobot": "1 Poin",
        "soal": "Gas alam yang dominan mengandung gas metana dibakar sempurna di dalam turbin pemanas menurut persamaan:<br>$$CH_4(g) + 2O_2(g) \\to CO_2(g) + 2H_2O(l)$$<br>Diketahui data entalpi pembentukan standar ($\\Delta H_f^\\circ$):<br>* $\\Delta H_f^\\circ CH_4(g) = -75\\text{ kJ/mol}$<br>* $\\Delta H_f^\\circ CO_2(g) = -394\\text{ kJ/mol}$<br>* $\\Delta H_f^\\circ H_2O(l) = -286\\text{ kJ/mol}$<br>Perubahan entalpi pembakaran 1 mol gas metana tersebut adalah ...",
        "pilihan": [
            "-1.041 kJ",
            "-891 kJ",
            "-605 kJ",
            "+891 kJ",
            "+1.041 kJ"
        ],
        "kunci": "B",
        "bahas": "Gunakan rumus entalpi pembentukan standar:<br>$$\\Delta H_{\\text{reaksi}} = \\Sigma \\Delta H_f^\\circ(\\text{produk}) - \\Sigma \\Delta H_f^\\circ(\\text{reaktan})$$<br>Catatan: $\\Delta H_f^\\circ O_2(g) = 0\\text{ kJ/mol}$ (unsur bebas stabil).<br><br>Perhitungan:<br>$$\\Delta H = [\\Delta H_f^\\circ(CO_2) + 2 \\times \\Delta H_f^\\circ(H_2O)] - [\\Delta H_f^\\circ(CH_4) + 2 \\times \\Delta H_f^\\circ(O_2)]$$<br>$$\\Delta H = [(-394) + 2(-286)] - [-75 + 0]$$<br>$$\\Delta H = [-394 - 572] - (-75) = -966 + 75 = \\mathbf{-891\\text{ kJ}}$$",
        "pengecoh": "Opsi A ($-1.041\\text{ kJ}$) terjadi jika tanda negatif dari reaktan $-(-75)$ salah dihitung menjadi $-75$ (menjumlahkan bukan mengurangkan). Opsi C terjadi jika koefisien $H_2O$ tidak dikalikan 2."
    },
    {
        "no": 26,
        "materi_key": "lajureaksi",
        "materi_label": "Laju Reaksi & Teori Tumbukan",
        "indikator": "Menjelaskan pengaruh luas permukaan terhadap laju reaksi",
        "level": "C2",
        "bobot": "1 Poin",
        "soal": "Santri mereaksikan dua sampel batu pualam ($CaCO_3$) bermassa identik (masing-masing 3 gram) ke dalam dua gelas kimia berisi larutan $HCl$ 1 M dengan volume dan suhu yang sama. Gelas A menggunakan bongkahan pualam kasar, sedangkan Gelas B menggunakan serbuk pualam halus. Hasil percobaan menunjukkan Gelas B menghasilkan gelembung gas $CO_2$ jauh lebih cepat dan reaksi selesai lebih awal. Faktor yang menjelaskan fenomena tersebut adalah ...",
        "pilihan": [
            "Konsentrasi pereaksi pada Gelas B lebih pekat dibandingkan Gelas A",
            "Energi aktivasi reaksi pada Gelas B menjadi lebih rendah",
            "Serbuk pualam memiliki luas permukaan bidang sentuh yang lebih besar sehingga frekuensi tumbukan efektif meningkat",
            "Suhu larutan pada Gelas B meningkat drastis akibat ukuran partikel serbuk",
            "Serbuk pualam bertindak sebagai katalis heterogen dalam larutan"
        ],
        "kunci": "C",
        "bahas": "Semakin kecil ukuran partikel suatu zat padat (bentuk serbuk), semakin luas total bidang permukaan yang bersentuhan langsung dengan zat pereaksi lain. **Luas permukaan bidang sentuh yang lebih besar** memperbanyak titik temu antarpartikel pereaksi, sehingga frekuensi terjadinya tumbukan antarpartikel meningkat. Akibatnya, frekuensi tumbukan efektif per satuan waktu meningkat dan laju reaksi menjadi lebih cepat.",
        "pengecoh": "Opsi B keliru karena ukuran partikel padatan TIDAK mengubah energi aktivasi ($E_a$); hanya katalis yang dapat menurunkan $E_a$. Opsi A keliru karena konsentrasi asam pada kedua gelas sama (1 M)."
    },
    {
        "no": 27,
        "materi_key": "lajureaksi",
        "materi_label": "Laju Reaksi & Teori Tumbukan",
        "indikator": "Menentukan persamaan laju reaksi dari data percobaan (soal bertabel)",
        "level": "C4",
        "bobot": "1 Poin",
        "soal": "Dalam praktikum kinetika kimia di madrasah, santri mereaksikan gas nitrogen monoksida dan gas bromin:<br>$$2NO(g) + Br_2(g) \\to 2NOBr(g)$$<br>Data laju reaksi awal yang diperoleh pada suhu tetap adalah sebagai berikut:<br><div class=\"my-2 overflow-x-auto\"><table class=\"w-full text-xs text-left border-collapse border border-slate-300\"><thead class=\"bg-slate-100\"><tr><th class=\"border border-slate-300 p-2\">Percobaan</th><th class=\"border border-slate-300 p-2\">[NO] (M)</th><th class=\"border border-slate-300 p-2\">$[Br_2]$ (M)</th><th class=\"border border-slate-300 p-2\">Laju Reaksi Awal (M/s)</th></tr></thead><tbody><tr><td class=\"border border-slate-300 p-2 font-bold\">1</td><td class=\"border border-slate-300 p-2\">0,1</td><td class=\"border border-slate-300 p-2\">0,1</td><td class=\"border border-slate-300 p-2\">12</td></tr><tr><td class=\"border border-slate-300 p-2 font-bold\">2</td><td class=\"border border-slate-300 p-2\">0,1</td><td class=\"border border-slate-300 p-2\">0,2</td><td class=\"border border-slate-300 p-2\">24</td></tr><tr><td class=\"border border-slate-300 p-2 font-bold\">3</td><td class=\"border border-slate-300 p-2\">0,2</td><td class=\"border border-slate-300 p-2\">0,1</td><td class=\"border border-slate-300 p-2\">48</td></tr></tbody></table></div>Persamaan laju reaksi yang tepat untuk reaksi tersebut adalah ...",
        "pilihan": [
            "$v = k [NO][Br_2]$",
            "$v = k [NO]^2[Br_2]$",
            "$v = k [NO][Br_2]^2$",
            "$v = k [NO]^2[Br_2]^2$",
            "$v = k [Br_2]$"
        ],
        "kunci": "B",
        "bahas": "Bentuk umum persamaan laju: $v = k [NO]^x [Br_2]^y$<br>1. **Menentukan orde terhadap $Br_2$ ($y$):** Bandingkan Percobaan 1 dan 2 ($[NO]$ tetap):<br>$$\\frac{v_2}{v_1} = \\left(\\frac{[Br_2]_2}{[Br_2]_1}\\right)^y \\implies \\frac{24}{12} = \\left(\\frac{0,2}{0,1}\\right)^y \\implies 2 = 2^y \\implies \\mathbf{y = 1}$$<br>2. **Menentukan orde terhadap $NO$ ($x$):** Bandingkan Percobaan 1 dan 3 ($[Br_2]$ tetap):<br>$$\\frac{v_3}{v_1} = \\left(\\frac{[NO]_3}{[NO]_1}\\right)^x \\implies \\frac{48}{12} = \\left(\\frac{0,2}{0,1}\\right)^x \\implies 4 = 2^x \\implies \\mathbf{x = 2}$$<br>Maka persamaan laju reaksinya adalah: $\\mathbf{v = k [NO]^2 [Br_2]}$.",
        "pengecoh": "Opsi A keliru menganggap semua orde bernilai satu ($x=1, y=1$). Opsi C terbalik menentukan nilai eksponen antara $NO$ dan $Br_2$."
    },
    {
        "no": 28,
        "materi_key": "lajureaksi",
        "materi_label": "Laju Reaksi & Teori Tumbukan",
        "indikator": "Menghitung tetapan laju reaksi (k)",
        "level": "C4",
        "bobot": "1 Poin",
        "soal": "Berdasarkan data eksperimen kinetika pada soal nomor 27 di atas (Percobaan 1: $[NO]=0,1\\text{ M}$, $[Br_2]=0,1\\text{ M}$, laju reaksi $v = 12\\text{ M/s}$ dengan persamaan laju $v = k [NO]^2 [Br_2]$), harga tetapan laju reaksi ($k$) beserta satuannya adalah ...",
        "pilihan": [
            "$120\\text{ M}^{-2}\\text{s}^{-1}$",
            "$1.200\\text{ M}^{-2}\\text{s}^{-1}$",
            "$12.000\\text{ M}^{-2}\\text{s}^{-1}$",
            "$120.000\\text{ M}^{-2}\\text{s}^{-1}$",
            "$1{,}2 \\times 10^6\\text{ M}^{-2}\\text{s}^{-1}$"
        ],
        "kunci": "C",
        "bahas": "Substitusikan data Percobaan 1 ke persamaan laju reaksi:<br>$$v = k [NO]^2 [Br_2]$$<br>$$12\\text{ M} \\cdot \\text{s}^{-1} = k \\times (0,1\\text{ M})^2 \\times (0,1\\text{ M})$$<br>$$12 = k \\times (0,01) \\times (0,1) = k \\times 10^{-3}\\text{ M}^3$$<br>$$k = \\frac{12}{10^{-3}} = \\mathbf{12.000\\text{ M}^{-2}\\text{s}^{-1}}$$<br>(Satuan untuk orde total 3 adalah $M^{1 - 3} s^{-1} = M^{-2}s^{-1}$).",
        "pengecoh": "Opsi B ($1.200$) terjadi jika salah memangkatkan $(0,1)^2$ sebagai $0,1$. Opsi A ($120$) terjadi jika menganggap orde total adalah 2."
    },
    {
        "no": 29,
        "materi_key": "lajureaksi",
        "materi_label": "Laju Reaksi & Teori Tumbukan",
        "indikator": "Menghitung waktu reaksi berdasarkan pengaruh suhu",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Suatu reaksi kimia pada suhu $25^\\circ\\text{C}$ berlangsung tuntas dalam waktu $64\\text{ detik}$. Berdasarkan kinetika reaksi, setiap kenaikan suhu sebesar $10^\\circ\\text{C}$ menyebabkan laju reaksi menjadi 2 kali lebih cepat. Waktu yang diperlukan agar reaksi tersebut selesai jika dilakukan pada suhu $55^\\circ\\text{C}$ adalah ...",
        "pilihan": [
            "4 detik",
            "8 detik",
            "16 detik",
            "32 detik",
            "128 detik"
        ],
        "kunci": "B",
        "bahas": "Kenaikan suhu: $\\Delta T = 55^\\circ\\text{C} - 25^\\circ\\text{C} = 30^\\circ\\text{C}$.<br>Kelipatan kenaikan suhu: $n = \\frac{\\Delta T}{10} = \\frac{30}{10} = 3$.<br>Laju reaksi meningkat sebesar $2^n = 2^3 = 8$ kali lebih cepat.<br>Karena waktu reaksi ($t$) berbanding terbalik dengan laju reaksi ($v$):<br>$$t_2 = t_1 \\times \\left(\\frac{1}{2}\\right)^n = 64\\text{ detik} \\times \\left(\\frac{1}{2}\\right)^3 = 64 \\times \\frac{1}{8} = \\mathbf{8\\text{ detik}}$$",
        "pengecoh": "Opsi C ($16\\text{ detik}$) diperoleh jika kelipatan kenaikan suhu hanya dihitung 2 kali ($2^2=4$). Opsi E ($128\\text{ detik}$) keliru mengalikan waktu dengan laju alih-alih membaginya."
    },
    {
        "no": 30,
        "materi_key": "lajureaksi",
        "materi_label": "Laju Reaksi & Teori Tumbukan",
        "indikator": "Menafsirkan diagram energi reaksi dengan dan tanpa katalis (soal bergambar)",
        "level": "C4",
        "bobot": "1 Poin",
        "has_svg": "svg_pg30",
        "soal": "Perhatikan diagram profil koordinat energi potensial untuk reaksi tanpa katalis (jalur 1) dan reaksi dengan penambahan katalis (jalur 2) berikut:<br><div class=\"my-3 flex justify-center\"><svg class=\"w-72 h-44 bg-slate-50 border border-slate-200 rounded-2xl p-2\" viewBox=\"0 0 280 170\"><rect width=\"280\" height=\"170\" rx=\"16\" fill=\"#f8fafc\"/><text x=\"140\" y=\"20\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f766e\">Profil Koordinat Reaksi dengan Katalis</text><line x1=\"30\" y1=\"140\" x2=\"30\" y2=\"30\" stroke=\"#64748b\" stroke-width=\"1.5\"/><polygon points=\"30,25 26,33 34,33\" fill=\"#64748b\"/><text x=\"24\" y=\"28\" text-anchor=\"end\" font-size=\"9\" font-weight=\"bold\" fill=\"#64748b\">E</text><line x1=\"30\" y1=\"140\" x2=\"260\" y2=\"140\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"155\" text-anchor=\"end\" font-size=\"9\" font-weight=\"bold\" fill=\"#64748b\">Koordinat Reaksi</text><line x1=\"35\" y1=\"100\" x2=\"70\" y2=\"100\" stroke=\"#0f766e\" stroke-width=\"2.5\"/><text x=\"52\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#0f766e\">Reaktan</text><path d=\"M 70 100 Q 140 10 210 120\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\"/><text x=\"140\" y=\"32\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#ef4444\">Jalur (1) Tanpa Katalis (Ea1)</text><path d=\"M 70 100 Q 140 55 210 120\" fill=\"none\" stroke=\"#8b5cf6\" stroke-width=\"2.5\" stroke-dasharray=\"4,3\"/><text x=\"140\" y=\"72\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#8b5cf6\">Jalur (2) Pakai Katalis (Ea2)</text><line x1=\"210\" y1=\"120\" x2=\"250\" y2=\"120\" stroke=\"#0369a1\" stroke-width=\"2.5\"/><text x=\"230\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#0369a1\">Produk</text></svg></div>Berdasarkan diagram tersebut, pernyataan yang PALING TEPAT mengenai mekanisme kerja katalis adalah ...",
        "pilihan": [
            "Katalis menaikkan energi aktivasi agar tumbukan partikel lebih kuat",
            "Katalis menurunkan energi aktivasi reaksi dari jalur (1) ke jalur (2) tanpa mengubah nilai perubahan entalpi ($\\Delta H$) reaksi",
            "Katalis mengubah reaktan dan produk menjadi spesi baru yang lebih stabil",
            "Katalis membuat reaksi endoterm berubah menjadi eksoterm dengan memperbesar nilai $\\Delta H$",
            "Katalis bereaksi secara permanen dan habis menjadi produk akhir"
        ],
        "kunci": "B",
        "bahas": "**Katalis** mempercepat laju reaksi dengan menyediakan rute / mekanisme tahapan reaksi alternatif yang memiliki **energi aktivasi ($E_a$) lebih rendah** dibandingkan reaksi tanpa katalis. Karena tingkat energi awal reaktan dan tingkat energi akhir produk tidak berubah, penambahan katalis **sama sekali tidak mengubah nilai perubahan entalpi ($\\Delta H$) reaksi**.",
        "pengecoh": "Opsi A salah karena katalis menurunkan energi aktivasi. Opsi D salah karena katalis tidak mengubah termodinamika reaksi ($\\Delta H$ tetap konstan). Opsi E keliru karena katalis diregenerasi kembali di akhir reaksi."
    },
    {
        "no": 31,
        "materi_key": "lajureaksi",
        "materi_label": "Laju Reaksi & Teori Tumbukan",
        "indikator": "Menjelaskan syarat tumbukan efektif menurut teori tumbukan",
        "level": "C2",
        "bobot": "1 Poin",
        "soal": "Dalam teori kinetika gas dan teori tumbukan, partikel-partikel zat pereaksi senantiasa bergerak dinamis dan saling bertumbukan. Namun, tidak semua tumbukan dapat menghasilkan reaksi kimia. Suatu tumbukan antarpartikel pereaksi akan menghasilkan reaksi (tumbukan efektif) jika memenuhi syarat ...",
        "pilihan": [
            "Partikel bergerak sangat lambat sehingga waktu kontak antarpartikel lebih lama",
            "Tumbukan terjadi dengan orientasi posisi yang tepat dan energi kinetik partikel mencapai atau melampaui energi aktivasi ($E \\ge E_a$)",
            "Semua tumbukan pasti menghasilkan reaksi kimia asalkan konsentrasi zat pereaksi cukup banyak",
            "Energi kinetik partikel harus lebih rendah daripada energi aktivasi agar ikatan molekul tidak hancur",
            "Partikel bertumbukan hanya pada fase gas tanpa dipengaruhi oleh geometri ruang"
        ],
        "kunci": "B",
        "bahas": "Dua syarat mutlak terjadinya **tumbukan efektif** menurut Teori Tumbukan:<br>1. **Orientasi yang tepat:** Partikel pereaksi harus bertabrakan dengan arah posisi spasial yang menguntungkan sehingga gugus-gugus reaktif dapat saling berikatan.<br>2. **Energi yang cukup ($E \\ge E_a$):** Partikel harus memiliki energi kinetik minimum yang sama atau melampaui **energi aktivasi ($E_a$)** agar mampu memutuskan ikatan kimia lama dalam molekul reaktan.",
        "pengecoh": "Opsi A keliru karena partikel lambat justru energinya rendah ($E < E_a$). Opsi C keliru karena mayoritas tabrakan antarpartikel hanya bersifat lenting sempurna tanpa menghasilkan reaksi."
    },
    {
        "no": 32,
        "materi_key": "lajureaksi",
        "materi_label": "Laju Reaksi & Teori Tumbukan",
        "indikator": "Menjelaskan pengaruh konsentrasi terhadap laju reaksi berdasarkan teori tumbukan",
        "level": "C2",
        "bobot": "1 Poin",
        "soal": "Mengapa reaksi antara pita magnesium dengan larutan asam klorida pekat (2 M) berlangsung jauh lebih cepat dan menghasilkan gelembung gas hidrogen lebih rapat dibandingkan jika menggunakan asam klorida encer (0,5 M)? Penjelasan yang paling tepat berdasarkan teori tumbukan adalah ...",
        "pilihan": [
            "Konsentrasi yang lebih tinggi menurunkan bukit energi aktivasi reaksi",
            "Konsentrasi yang lebih tinggi memperluas bidang permukaan pita magnesium",
            "Pada konsentrasi yang lebih pekat, jumlah partikel per satuan volume lebih banyak sehingga frekuensi tumbukan antarpartikel pereaksi meningkat",
            "Partikel asam klorida pada konsentrasi pekat bergerak dengan kelajuan yang jauh lebih tinggi",
            "Partikel pelarut air mendesak molekul asam agar bereaksi secara paksa"
        ],
        "kunci": "C",
        "bahas": "Konsentrasi larutan menyatakan kerapatan jumlah partikel zat terlarut dalam satuan volume tertentu. Pada konsentrasi yang lebih tinggi, **jumlah partikel per satuan volume menjadi lebih banyak (jarak antarpartikel lebih rapat)**. Hal ini menyebabkan frekuensi tabrakan/tumbukan antarpartikel pereaksi per satuan waktu meningkat tajam. Dengan meningkatnya frekuensi tumbukan total, frekuensi tumbukan efektif juga bertambah besar sehingga laju reaksi menjadi jauh lebih cepat.",
        "pengecoh": "Opsi A salah karena konsentrasi tidak mengubah energi aktivasi ($E_a$). Opsi D salah karena kelajuan partikel dipengaruhi oleh suhu (energi termal kinetik), bukan konsentrasi."
    },
    {
        "no": 33,
        "materi_key": "lajureaksi",
        "materi_label": "Laju Reaksi & Teori Tumbukan",
        "indikator": "Menentukan persamaan laju dari mekanisme reaksi (tahap penentu laju)",
        "level": "C4",
        "bobot": "1 Poin",
        "soal": "Reaksi gas nitrogen dioksida dengan karbon monoksida:<br>$$NO_2(g) + CO(g) \\to NO(g) + CO_2(g)$$<br>diketahui berlangsung melalui mekanisme dua tahap reaksi elementer berikut:<br>* Tahap 1 (lambat): $NO_2 + NO_2 \\to NO_3 + NO$<br>* Tahap 2 (cepat): $NO_3 + CO \\to NO_2 + CO_2$<br>Persamaan laju reaksi keseluruhan untuk proses tersebut adalah ...",
        "pilihan": [
            "$v = k [NO_2][CO]$",
            "$v = k [NO_2]^2$",
            "$v = k [NO_3][CO]$",
            "$v = k [NO_2]^2[CO]$",
            "$v = k [CO]$"
        ],
        "kunci": "B",
        "bahas": "Dalam mekanisme reaksi bertahap, laju reaksi keseluruhan selalu ditentukan oleh tahap reaksi yang berlangsung **paling lambat (Rate Determining Step / RDS)**.<br>Tahap 1 adalah tahap lambat: $$NO_2 + NO_2 \\to NO_3 + NO$$<br>Karena merupakan tahap reaksi elementer, koefisien reaktan pada tahap lambat ini langsung menjadi pangkat/orde reaksi:<br>$$v = k [NO_2][NO_2] = \\mathbf{k [NO_2]^2}$$<br>Gas $CO$ baru bereaksi pada Tahap 2 yang berlangsung cepat, sehingga konsentrasi $CO$ tidak mempengaruhi laju reaksi (orde nol terhadap $CO$).",
        "pengecoh": "Opsi A terkecoh menggunakan koefisien reaksi stoikiometri keseluruhan. Opsi C salah karena $NO_3$ adalah zat perantara (intermediat) yang tidak boleh muncul dalam persamaan laju reaksi akhir."
    },
    {
        "no": 34,
        "materi_key": "kesetimbangan",
        "materi_label": "Kesetimbangan Kimia",
        "indikator": "Menafsirkan grafik konsentrasi terhadap waktu untuk menentukan kondisi kesetimbangan (soal bergambar)",
        "level": "C4",
        "bobot": "1 Poin",
        "has_svg": "svg_pg34",
        "soal": "Perhatikan grafik perubahan konsentrasi terhadap waktu pada reaksi kesetimbangan fasa gas dalam bejana tertutup berikut:<br>$$2NO_2(g) \\rightleftharpoons N_2O_4(g)$$<br><div class=\"my-3 flex justify-center\"><svg class=\"w-72 h-44 bg-slate-50 border border-slate-200 rounded-2xl p-2\" viewBox=\"0 0 280 170\"><rect width=\"280\" height=\"170\" rx=\"16\" fill=\"#f8fafc\"/><text x=\"140\" y=\"20\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f766e\">Grafik Konsentrasi vs Waktu Kesetimbangan</text><line x1=\"35\" y1=\"140\" x2=\"35\" y2=\"30\" stroke=\"#64748b\" stroke-width=\"1.5\"/><polygon points=\"35,25 31,33 39,33\" fill=\"#64748b\"/><text x=\"30\" y=\"28\" text-anchor=\"end\" font-size=\"9\" font-weight=\"bold\" fill=\"#64748b\">[Zat] (M)</text><line x1=\"35\" y1=\"140\" x2=\"265\" y2=\"140\" stroke=\"#64748b\" stroke-width=\"1.5\"/><text x=\"260\" y=\"155\" text-anchor=\"end\" font-size=\"9\" font-weight=\"bold\" fill=\"#64748b\">Waktu (menit)</text><path d=\"M 35 45 Q 90 90 140 100 L 260 100\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\"/><text x=\"215\" y=\"94\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\">[NO2]</text><path d=\"M 35 140 Q 90 70 140 60 L 260 60\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2.5\"/><text x=\"215\" y=\"54\" font-size=\"10\" font-weight=\"bold\" fill=\"#0284c7\">[N2O4]</text><line x1=\"140\" y1=\"35\" x2=\"140\" y2=\"140\" stroke=\"#6d28d9\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/><text x=\"140\" y=\"152\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#6d28d9\">t = 15 mnt</text><rect x=\"150\" y=\"115\" width=\"100\" height=\"20\" rx=\"4\" fill=\"#f5f3ff\" stroke=\"#8b5cf6\" stroke-width=\"1\"/><text x=\"200\" y=\"128\" text-anchor=\"middle\" font-size=\"8.5\" font-weight=\"bold\" fill=\"#6d28d9\">Setimbang Dinamis</text></svg></div>Berdasarkan grafik tersebut, pernyataan yang PALING BENAR mengenai kondisi kesetimbangan dinamis sistem adalah ...",
        "pilihan": [
            "Kesetimbangan tercapai saat kurva konsentrasi $NO_2$ berpotongan dengan kurva $N_2O_4$",
            "Kesetimbangan dinamis tercapai mulai menit ke-15 karena garis konsentrasi seluruh komponen mendatar (konstan) dan laju reaksi maju sama dengan laju reaksi balik",
            "Setelah menit ke-15 reaksi berhenti total dan tidak ada lagi molekul yang bertumbukan",
            "Konsentrasi produk harus selalu bernilai sama dengan konsentrasi reaktan agar sistem dikatakan setimbang",
            "Pada menit ke-0 sistem sudah langsung berada dalam keadaan setimbang"
        ],
        "kunci": "B",
        "bahas": "Ciri khas utama tercapainya **kesetimbangan dinamis kimia**:<br>1. Secara makroskopis, **konsentrasi masing-masing zat reaktan dan produk tidak berubah lagi terhadap waktu (konstan)**, yang ditandai dengan garis kurva mendatar sejajar sumbu waktu (terjadi mulai menit ke-15).<br>2. Secara mikroskopis, reaksi tetap berlangsung terus-menerus dua arah dengan **laju reaksi maju sama dengan laju reaksi balik ($v_{\\text{maju}} = v_{\\text{balik}}$)**.<br>Kesetimbangan BUKAN berarti konsentrasi reaktan sama dengan produk, dan BUKAN saat kurva berpotongan.",
        "pengecoh": "Opsi A salah karena titik potong kurva hanya menunjukkan konsentrasi sesaat bernilai sama, namun reaksinya masih terus berubah. Opsi C salah karena kesetimbangan kimia bersifat dinamis, bukan statis."
    },
    {
        "no": 35,
        "materi_key": "kesetimbangan",
        "materi_label": "Kesetimbangan Kimia",
        "indikator": "Menuliskan tetapan kesetimbangan (Kc) untuk sistem heterogen",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Pemanasan bubuk natrium bikarbonat (soda kue) dalam tabung tertutup menghasilkan kesetimbangan heterogen berikut:<br>$$2NaHCO_3(s) \\rightleftharpoons Na_2CO_3(s) + H_2O(g) + CO_2(g)$$<br>Rumus tetapan kesetimbangan ($K_c$) yang benar untuk sistem reaksi tersebut adalah ...",
        "pilihan": [
            "$K_c = \\frac{[Na_2CO_3][H_2O][CO_2]}{[NaHCO_3]^2}$",
            "$K_c = \\frac{[H_2O][CO_2]}{[NaHCO_3]^2}$",
            "$K_c = [H_2O][CO_2]$",
            "$K_c = \\frac{1}{[H_2O][CO_2]}$",
            "$K_c = [CO_2]$"
        ],
        "kunci": "C",
        "bahas": "Aturan penulisan tetapan kesetimbangan konsentrasi ($K_c$):<br>* Zat berwujud padat murni (solid / $s$) dan cairan murni (liquid / $l$) memiliki kerapatan yang konstan sehingga konsentrasinya tidak disertakan dalam rumus $K_c$.<br>* Hanya spesi berfasa **gas ($g$) dan larutan ($aq$)** yang dimasukkan ke dalam ekspresi $K_c$.<br>Pada reaksi ini, $NaHCO_3$ dan $Na_2CO_3$ berwujud padat ($s$), sedangkan $H_2O$ dan $CO_2$ berwujud gas ($g$). Maka:<br>$$\\mathbf{K_c = [H_2O][CO_2]}$$",
        "pengecoh": "Opsi A keliru karena menyertakan fasa padat ($s$). Opsi E keliru melupakan gas $H_2O$ yang juga berada dalam fasa uap gas."
    },
    {
        "no": 36,
        "materi_key": "kesetimbangan",
        "materi_label": "Kesetimbangan Kimia",
        "indikator": "Menghitung harga Kc dari konsentrasi saat setimbang",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Pada suhu tertentu, gas fosforus triklorida direaksikan dengan gas klorin hingga mencapai kesetimbangan dalam bejana tertutup menurut reaksi:<br>$$PCl_3(g) + Cl_2(g) \\rightleftharpoons PCl_5(g)$$<br>Pada keadaan setimbang diperoleh konsentrasi: $[PCl_3] = 0,2\\text{ M}$, $[Cl_2] = 0,1\\text{ M}$, dan $[PCl_5] = 0,4\\text{ M}$. Nilai tetapan kesetimbangan ($K_c$) reaksi tersebut adalah ...",
        "pilihan": [
            "2",
            "8",
            "20",
            "40",
            "50"
        ],
        "kunci": "C",
        "bahas": "Tuliskan ekspresi tetapan kesetimbangan $K_c$ untuk sistem gas homogen:<br>$$K_c = \\frac{[PCl_5]}{[PCl_3][Cl_2]}$$<br>Substitusikan data konsentrasi saat setimbang:<br>$$K_c = \\frac{0,4\\text{ M}}{(0,2\\text{ M}) \\times (0,1\\text{ M})} = \\frac{0,4}{0,02} = \\mathbf{20}$$",
        "pengecoh": "Opsi A (2) diperoleh jika salah membagi $0,4 / 0,2$. Opsi D (40) diperoleh jika salah menghitung penyebut sebagai $0,01$."
    },
    {
        "no": 37,
        "materi_key": "kesetimbangan",
        "materi_label": "Kesetimbangan Kimia",
        "indikator": "Menganalisis pengaruh suhu pada pergeseran kesetimbangan dari gambar percobaan (soal bergambar)",
        "level": "C4",
        "bobot": "1 Poin",
        "has_svg": "svg_pg37",
        "soal": "Santri mengamati dua tabung reaksi tertutup berisi sistem kesetimbangan gas nitrogen oksida:<br>$$2NO_2(g)\\text{ (cokelat kemerahan)} \\rightleftharpoons N_2O_4(g)\\text{ (tidak berwarna)} \\quad \\Delta H = -58\\text{ kJ}$$<br><div class=\"my-3 flex justify-center\"><svg class=\"w-full max-w-sm h-40 bg-slate-50 border border-slate-200 rounded-2xl p-2\" viewBox=\"0 0 340 150\"><rect width=\"340\" height=\"150\" rx=\"16\" fill=\"#f8fafc\"/><g transform=\"translate(25, 15)\"><rect x=\"25\" y=\"10\" width=\"35\" height=\"95\" rx=\"15\" fill=\"#f0fdf4\" stroke=\"#16a34a\" stroke-width=\"2\"/><rect x=\"27\" y=\"45\" width=\"31\" height=\"58\" rx=\"10\" fill=\"#e0f2fe\" opacity=\"0.5\"/><text x=\"42\" y=\"78\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#0369a1\">Bening</text><path d=\"M 10 90 L 75 90 L 70 120 L 15 120 Z\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"1.5\"/><text x=\"42\" y=\"110\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#0c4a6e\">Air Es (0°C)</text><text x=\"42\" y=\"135\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#16a34a\">Tabung 1: Bening</text></g><g transform=\"translate(195, 15)\"><rect x=\"25\" y=\"10\" width=\"35\" height=\"95\" rx=\"15\" fill=\"#fff1f2\" stroke=\"#e11d48\" stroke-width=\"2\"/><rect x=\"27\" y=\"45\" width=\"31\" height=\"58\" rx=\"10\" fill=\"#b45309\" opacity=\"0.85\"/><text x=\"42\" y=\"78\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#ffffff\">Cokelat</text><path d=\"M 10 90 L 75 90 L 70 120 L 15 120 Z\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/><text x=\"42\" y=\"110\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#7c2d12\">Air Panas (80°C)</text><text x=\"42\" y=\"135\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#b91c1c\">Tabung 2: Cokelat Pekat</text></g></svg></div>Ketika tabung 1 dimasukkan ke dalam air es ($0^\\circ\\text{C}$), warna gas memudar menjadi tidak berwarna. Sedangkan ketika tabung 2 dimasukkan ke dalam air panas ($80^\\circ\\text{C}$), warna gas berubah menjadi cokelat sangat pekat. Kesimpulan yang PALING TEPAT berdasarkan Asas Le Chatelier adalah ...",
        "pilihan": [
            "Reaksi pembentukan gas $N_2O_4$ bersifat endotermik sehingga disukai pada suhu tinggi",
            "Penurunan suhu menggeser kesetimbangan ke arah reaksi endoterm (kiri)",
            "Kenaikan suhu menggeser kesetimbangan ke arah reaksi endoterm (ke arah kiri / gas $NO_2$) sehingga warna cokelat makin pekat",
            "Perubahan suhu lingkungan sama sekali tidak mempengaruhi posisi kesetimbangan gas",
            "Kenaikan suhu selalu menambah jumlah mol zat yang memiliki koefisien reaksi lebih kecil"
        ],
        "kunci": "C",
        "bahas": "Analisis termodinamika kesetimbangan:<br>$$2NO_2(g)\\text{ (cokelat)} \\rightleftharpoons N_2O_4(g)\\text{ (tidak berwarna)} \\quad \\Delta H = -58\\text{ kJ}$$<br>* Reaksi maju (ke kanan) melepaskan kalor ($\\Delta H < 0$, **eksoterm**).<br>* Reaksi balik (ke kiri) menyerap kalor ($\\Delta H > 0$, **endoterm**).<br><br>Menurut **Asas Le Chatelier**:<br>* Jika suhu dinaikkan (air panas), sistem merespons dengan menyerap kelebihan kalor tersebut, yaitu bergeser ke **arah endoterm (ke kiri)**. Akibatnya, konsentrasi gas $NO_2$ bertambah banyak dan warna tabung menjadi **cokelat pekat**.<br>* Sebaliknya, jika suhu diturunkan (air es), sistem melepaskan kalor dengan bergeser ke **arah eksoterm (ke kanan)** membentuk $N_2O_4$ yang **tidak berwarna (memudar)**.",
        "pengecoh": "Opsi A keliru karena pembentukan $N_2O_4$ bertanda $\\Delta H = -58\\text{ kJ}$ (eksoterm). Opsi B keliru karena penurunan suhu menggeser kesetimbangan ke arah eksoterm."
    },
    {
        "no": 38,
        "materi_key": "kesetimbangan",
        "materi_label": "Kesetimbangan Kimia",
        "indikator": "Menentukan arah pergeseran kesetimbangan akibat perubahan tekanan/volume",
        "level": "C3",
        "bobot": "1 Poin",
        "soal": "Reaksi pembuatan belerang trioksida dalam proses kontak berlangsung menurut reaksi kesetimbangan fasa gas:<br>$$2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g) \\quad \\Delta H = -198\\text{ kJ}$$<br>Jika volume wadah reaktor diperbesar pada suhu tetap (yang berarti tekanan total sistem diperkecil), arah pergeseran kesetimbangan yang terjadi adalah ...",
        "pilihan": [
            "Bergeser ke arah kanan karena reaksi bersifat eksoterm",
            "Bergeser ke arah kiri (reaktan) karena jumlah koefisien mol gas di sebelah kiri lebih besar",
            "Bergeser ke arah kanan (produk) karena jumlah koefisien mol gas di sebelah kanan lebih kecil",
            "Tidak mengalami pergeseran karena semua zat pereaksi dan produk berfasa gas",
            "Bergeser ke arah kanan karena nilai $K_c$ reaksi bertambah besar"
        ],
        "kunci": "B",
        "bahas": "Pengaruh perubahan volume dan tekanan pada kesetimbangan gas menurut Asas Le Chatelier:<br>* Jika **volume diperbesar (tekanan diperkecil)**, sistem akan mengkompensasi penurunan tekanan tersebut dengan bergeser ke arah sisi yang memiliki **jumlah koefisien (mol) gas lebih banyak**.<br>Hitung koefisien gas di kedua sisi:<br>* Sisi kiri (reaktan): $2 + 1 = 3\\text{ mol gas}$<br>* Sisi kanan (produk): $2\\text{ mol gas}$<br>Karena sisi kiri memiliki koefisien lebih banyak ($3 > 2$), maka kesetimbangan akan **bergeser ke arah kiri (ke arah pembentukan kembali $SO_2$ dan $O_2$)**.",
        "pengecoh": "Opsi A keliru menghubungkan volume dengan sifat eksoterm (suhu). Opsi C adalah dampak jika volume diperkecil (tekanan dinaikkan)."
    },
    {
        "no": 39,
        "materi_key": "kesetimbangan",
        "materi_label": "Kesetimbangan Kimia",
        "indikator": "Menentukan kondisi yang memaksimalkan hasil reaksi menggunakan asas Le Chatelier",
        "level": "C4",
        "bobot": "1 Poin",
        "soal": "Dalam industri sintesis gas fosgen ($COCl_2$) yang digunakan dalam pembuatan polimer polikarbonat, reaksi berlangsung reversibel dan eksotermik:<br>$$CO(g) + Cl_2(g) \\rightleftharpoons COCl_2(g) \\quad \\Delta H = -108\\text{ kJ}$$<br>Agar diperoleh persentase hasil gas fosgen ($COCl_2$) sebanyak-banyaknya pada kondisi optimum, perlakuan operasional pabrik yang PALING TEPAT adalah ...",
        "pilihan": [
            "Menaikkan suhu reaksi dan memperbesar volume reaktor",
            "Menurunkan suhu reaksi dan memperbesar tekanan sistem (memperkecil volume wadah)",
            "Mengurangi konsentrasi gas $CO$ dan menaikkan suhu reaksi",
            "Menambahkan katalis dan menaikkan suhu setinggi-tingginya",
            "Menurunkan tekanan sistem dan membiarkan gas $COCl_2$ menumpuk dalam reaktor"
        ],
        "kunci": "B",
        "bahas": "Tujuan optimasi adalah menggeser kesetimbangan ke arah KANAN (pembentukan $COCl_2$):<br>1. **Faktor Suhu:** Karena reaksi pembentukan bersifat eksotermik ($\\Delta H < 0$), maka untuk menggeser kesetimbangan ke kanan, **suhu reaksi harus diturunkan**.<br>2. **Faktor Tekanan/Volume:** Jumlah koefisien gas di kiri $= 1 + 1 = 2$, sedangkan koefisien gas di kanan $= 1$. Untuk menggeser kesetimbangan ke arah koefisien lebih sedikit (kanan), **tekanan sistem harus diperbesar (volume diperkecil)**.<br>Maka kombinasi operasional optimum adalah **menurunkan suhu dan memperbesar tekanan**.",
        "pengecoh": "Opsi A salah karena menaikkan suhu justru menggeser kesetimbangan ke arah kiri (menguraikan kembali fosgen). Opsi D salah karena katalis tidak mengubah yield kesetimbangan."
    },
    {
        "no": 40,
        "materi_key": "kesetimbangan",
        "materi_label": "Kesetimbangan Kimia",
        "indikator": "Menjelaskan pengaruh katalis terhadap kesetimbangan",
        "level": "C2",
        "bobot": "1 Poin",
        "soal": "Pada industri pembuatan amonia dengan proses Haber-Bosch, serbuk besi ($Fe$) dengan promotor oksida logam ditambahkan ke dalam reaktor kesetimbangan:<br>$$N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g) \\quad \\Delta H = -92\\text{ kJ}$$<br>Peran utama dari penambahan katalis besi tersebut terhadap sistem kesetimbangan adalah ...",
        "pilihan": [
            "Menggeser posisi kesetimbangan ke arah produk sehingga jumlah $NH_3$ bertambah banyak",
            "Menaikkan nilai tetapan kesetimbangan $K_c$ dan $K_p$ reaksi",
            "Mempercepat laju reaksi maju dan laju reaksi balik sama besar, sehingga kesetimbangan tercapai lebih cepat tanpa mengubah komposisi kesetimbangan dan tanpa mengubah nilai $K_c$",
            "Menurunkan jumlah kalor yang dilepaskan reaksi agar reaktor tidak mengalami kenaikan temperatur",
            "Menggeser kesetimbangan ke arah pereaksi untuk mencegah penguraian amonia"
        ],
        "kunci": "C",
        "bahas": "Prinsip pengaruh katalis pada kesetimbangan kimia:<br>1. Katalis menurunkan energi aktivasi ($E_a$) untuk reaksi pembentukan (maju) dan reaksi penguraian (balik) **secara seimbang**.<br>2. Katalis hanya berfungsi **mempercepat laju tercapainya keadaan setimbang**.<br>3. Katalis **TIDAK menggeser posisi kesetimbangan**, **TIDAK menambah jumlah produk akhir**, dan **TIDAK mengubah harga tetapan kesetimbangan ($K_c$)**.",
        "pengecoh": "Opsi A dan B adalah miskonsepsi umum yang sering terjadi di kalangan pelajar. Katalis tidak pernah menggeser kesetimbangan atau menaikkan harga $K_c$."
    }
]

ESAI_DATA = [
    {
        "no": 1,
        "materi_key": "stoikiometri",
        "materi_label": "Konsep Mol & Stoikiometri",
        "indikator": "Menghitung volume gas STP dan jumlah partikel hasil reaksi dengan stoikiometri larutan/padatan tidak murni",
        "level": "C4",
        "bobot": "12 Poin",
        "soal": "Dalam praktikum analisis kimia madrasah, santri mereaksikan $20\\text{ gram}$ sampel batuan dolomit yang mengandung $75\\%$ kalsium karbonat murni ($CaCO_3$, $M_r = 100\\text{ g/mol}$) dengan larutan asam klorida berlebih menurut persamaan reaksi:<br>$$CaCO_3(s) + 2HCl(aq) \\to CaCl_2(aq) + H_2O(l) + CO_2(g)$$<br>Diketahui data: $A_r\\text{ Ca}=40, \\text{C}=12, \\text{O}=16, \\text{H}=1, \\text{Cl}=35,5$; tetapan Avogadro $L = 6,02 \\times 10^{23}\\text{ partikel/mol}$; dan volume molar gas pada keadaan standar (STP) $= 22,4\\text{ L/mol}$.<br><br><b>Pertanyaan:</b><br>a. Hitunglah massa murni $CaCO_3$ dalam sampel serta tentukan volume gas $CO_2$ yang dihasilkan jika diukur pada keadaan standar (STP)! <i>(skor 6)</i><br>b. Hitunglah jumlah molekul gas $CO_2$ yang terbentuk dari reaksi tersebut! <i>(skor 6)</i>",
        "rubrik": {
            "judul": "Esai 1: Stoikiometri Sampel Tidak Murni & Volume Gas STP",
            "max": 12,
            "poin": [
                "Menghitung massa murni CaCO3 = 75% × 20 g = 15 gram secara benar (2 poin)",
                "Menghitung mol CaCO3 = 15 g / 100 g/mol = 0,15 mol dengan tepat (2 poin)",
                "Menentukan volume gas CO2 STP = 0,15 mol × 22,4 L/mol = 3,36 Liter (2 poin)",
                "Menentukan mol CO2 yang terbentuk = 0,15 mol berdasarkan koefisien reaksi 1:1 (2 poin)",
                "Menuliskan rumus jumlah partikel N = n × L dengan benar (2 poin)",
                "Menghasilkan jumlah molekul CO2 = 0,15 × 6,02 × 10^23 = 9,03 × 10^22 molekul beserta satuan (2 poin)"
            ]
        },
        "bahas": "<b>Penyelesaian Lengkap:</b><br><br><b>a. Menghitung Massa Murni dan Volume Gas $CO_2$ STP (Skor 6):</b><br>1. Menghitung massa murni $CaCO_3$:<br>$$\\text{Massa murni } CaCO_3 = 75\\% \\times 20\\text{ gram} = \\frac{75}{100} \\times 20 = \\mathbf{15\\text{ gram}}$$<br>2. Menghitung jumlah mol $CaCO_3$:<br>$$n_{CaCO_3} = \\frac{\\text{massa}}{M_r} = \\frac{15\\text{ g}}{100\\text{ g/mol}} = \\mathbf{0,15\\text{ mol}}$$<br>3. Menghitung mol gas $CO_2$ berdasarkan koefisien reaksi:<br>Koefisien $CaCO_3 : CO_2 = 1 : 1$, maka:<br>$$n_{CO_2} = 0,15\\text{ mol}$$<br>4. Menghitung volume gas $CO_2$ pada STP ($0^\\circ\\text{C}, 1\\text{ atm}$):<br>$$V_{\\text{STP}} = n \\times 22,4\\text{ L/mol} = 0,15\\text{ mol} \\times 22,4\\text{ L/mol} = \\mathbf{3,36\\text{ Liter}}$$<br><br><b>b. Menghitung Jumlah Molekul Gas $CO_2$ (Skor 6):</b><br>Gunakan hubungan mol dengan bilangan Avogadro ($L = 6,02 \\times 10^{23}\\text{ partikel/mol}$):<br>$$N = n \\times L$$<br>$$N = 0,15\\text{ mol} \\times 6,02 \\times 10^{23}\\text{ molekul/mol} = \\mathbf{9,03 \\times 10^{22}\\text{ molekul } CO_2}$$"
    },
    {
        "no": 2,
        "materi_key": "ikatan",
        "materi_label": "Ikatan Kimia & Gaya Antarmolekul",
        "indikator": "Menggambarkan struktur Lewis, tipe dan bentuk molekul (soal bergambar)",
        "level": "C4",
        "bobot": "12 Poin",
        "soal": "Gas amonia ($NH_3$) dan gas metana ($CH_4$) adalah dua senyawa kovalen penting yang tersusun atas unsur-unsur nonlogam. Diketahui nomor atom: $H = 1, C = 6$, dan $N = 7$.<br><br><b>Pertanyaan:</b><br>a. Gambarkan struktur Lewis untuk molekul $NH_3$ dan molekul $CH_4$, serta tunjukkan dengan jelas Pasangan Elektron Ikatan (PEI) dan Pasangan Elektron Bebas (PEB) pada masing-masing atom pusatnya! <i>(skor 6)</i><br>b. Berdasarkan teori domain elektron (VSEPR), tentukan tipe molekul ($AX_mE_n$), bentuk geometri molekul, serta jelaskan sifat kepolaran (polar atau nonpolar) dari kedua molekul tersebut! <i>(skor 6)</i>",
        "rubrik": {
            "judul": "Esai 2: Struktur Lewis, Teori VSEPR & Kepolaran NH3 vs CH4",
            "max": 12,
            "poin": [
                "Menggambarkan struktur Lewis NH3 secara benar dengan 3 ikatan tunggal N-H dan 1 PEB pada atom N (3 poin)",
                "Menggambarkan struktur Lewis CH4 secara benar dengan 4 ikatan tunggal C-H tanpa PEB pada atom C (3 poin)",
                "Menentukan tipe VSEPR NH3 = AX3E, bentuk Piramida Trigonal, dan kepolaran POLAR karena dipol asimetris (3 poin)",
                "Menentukan tipe VSEPR CH4 = AX4, bentuk Tetrahedral, dan kepolaran NONPOLAR karena momen dipol saling meniadakan (3 poin)"
            ]
        },
        "bahas": "<b>Penyelesaian Lengkap:</b><br><br><b>a. Gambar Struktur Lewis (Skor 6):</b><br>* **Molekul $NH_3$:** Atom pusat N ($EV = 5$) mengikat 3 atom H ($EV = 1$). Terbentuk 3 Pasang Elektron Ikatan (PEI) kovalen tunggal dan tersisa **1 Pasang Elektron Bebas (PEB)** pada atom nitrogen:<br>$$H - \\underset{\\text{..}}{\\overset{\\text{N}}{\\text{|}}} - H \\quad \\text{atau} \\quad H-\\ddot{N}-H$$<br>* **Molekul $CH_4$:** Atom pusat C ($EV = 4$) mengikat 4 atom H ($EV = 1$). Seluruh elektron valensi karbon terpakai membentuk 4 Pasang Elektron Ikatan (PEI) dan **0 Pasang Elektron Bebas (PEB)**:<br>$$H - \\overset{\\overset{\\text{H}}{\\text{|}}}{\\underset{\\underset{\\text{H}}{\\text{|}}}{\\text{C}}} - H$$<br><br><b>b. Tipe VSEPR, Bentuk Geometri, dan Kepolaran (Skor 6):</b><br>* **Molekul $NH_3$:**<br>  - Tipe VSEPR: $\\mathbf{AX_3E}$ (3 PEI, 1 PEB)<br>  - Bentuk Geometri: **Piramida Trigonal (Trigonal Pyramidal)** dengan sudut ikatan $\\approx 107^\\circ$<br>  - Kepolaran: **POLAR** ($\\mu > 0$), karena adanya 1 PEB menyebabkan bentuk molekul asimetris sehingga momen dipol ikatan N–H tidak saling meniadakan.<br>* **Molekul $CH_4$:**<br>  - Tipe VSEPR: $\\mathbf{AX_4}$ (4 PEI, 0 PEB)<br>  - Bentuk Geometri: **Tetrahedral** dengan sudut ikatan $109,5^\\circ$<br>  - Kepolaran: **NONPOLAR** ($\\mu = 0$), karena bentuk tetrahedral simetris sempurna membuat resultan momen dipol ikatan C–H saling meniadakan."
    },
    {
        "no": 3,
        "materi_key": "termokimia",
        "materi_label": "Termokimia",
        "indikator": "Menentukan ΔH reaksi menggunakan siklus Hess, menuliskan persamaan termokimia (soal bergambar)",
        "level": "C4",
        "bobot": "12 Poin",
        "has_svg": "svg_es3",
        "soal": "Gas belerang trioksida ($SO_3$) dapat dibentuk dari belerang padat ($S$) dan gas oksigen ($O_2$) baik secara langsung maupun melalui pembentukan gas belerang dioksida ($SO_2$) terlebih dahulu. Hubungan termokimia kedua jalur tersebut digambarkan dalam diagram siklus Hess berikut:<br><div class=\"my-3 flex justify-center\"><svg class=\"w-full max-w-md h-44 bg-slate-50 border border-slate-200 rounded-2xl p-2\" viewBox=\"0 0 380 160\"><rect width=\"380\" height=\"160\" rx=\"16\" fill=\"#f8fafc\"/><text x=\"190\" y=\"22\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f766e\">Diagram Siklus Hess Pembentukan SO3</text><rect x=\"20\" y=\"45\" width=\"120\" height=\"35\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.5\"/><text x=\"80\" y=\"67\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0369a1\">S(s) + 3/2 O2(g)</text><rect x=\"240\" y=\"45\" width=\"120\" height=\"35\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><text x=\"300\" y=\"67\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#15803d\">SO3(g)</text><rect x=\"130\" y=\"115\" width=\"120\" height=\"35\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/><text x=\"190\" y=\"137\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#b45309\">SO2(g) + 1/2 O2(g)</text><path d=\"M 142 62 L 235 62\" stroke=\"#0f766e\" stroke-width=\"2.5\" marker-end=\"url(#arrow-h1)\"/><text x=\"188\" y=\"54\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#0f766e\">ΔH1 = -396 kJ</text><path d=\"M 70 82 L 130 118\" stroke=\"#2563eb\" stroke-width=\"2\" marker-end=\"url(#arrow-h2)\"/><text x=\"85\" y=\"112\" font-size=\"10\" font-weight=\"bold\" fill=\"#2563eb\">ΔH2 = -297 kJ</text><path d=\"M 252 118 L 305 82\" stroke=\"#dc2626\" stroke-width=\"2\" marker-end=\"url(#arrow-h3)\"/><text x=\"295\" y=\"112\" font-size=\"10\" font-weight=\"bold\" fill=\"#dc2626\">ΔH3 = ?</text><defs><marker id=\"arrow-h1\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#0f766e\"/></marker><marker id=\"arrow-h2\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#2563eb\"/></marker><marker id=\"arrow-h3\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#dc2626\"/></marker></defs></svg></div><b>Pertanyaan:</b><br>a. Berdasarkan siklus Hess tersebut, tentukan nilai perubahan entalpi $\\Delta H_3$ untuk reaksi oksidasi $1\\text{ mol}$ gas $SO_2$ menjadi gas $SO_3$! <i>(skor 6)</i><br>b. Tuliskan persamaan termokimia lengkap untuk reaksi pembentukan gas $SO_3$ dari gas $SO_2$, dan jelaskan apakah reaksi tersebut tergolong eksotermik atau endotermik! <i>(skor 6)</i>",
        "rubrik": {
            "judul": "Esai 3: Siklus Hess Pembentukan SO3 & Persamaan Termokimia",
            "max": 12,
            "poin": [
                "Menuliskan hubungan aljabar siklus Hess: ΔH1 = ΔH2 + ΔH3 secara benar (2 poin)",
                "Mensubstitusikan nilai: -396 kJ = -297 kJ + ΔH3 secara sistematis (2 poin)",
                "Menghitung hasil akhir ΔH3 = -396 - (-297) = -99 kJ dengan tepat (2 poin)",
                "Menuliskan persamaan termokimia lengkap: SO2(g) + 1/2 O2(g) -> SO3(g)  ΔH = -99 kJ (3 poin)",
                "Menyatakan reaksi bersifat EKSOTERMIK karena ΔH bertanda negatif / melepas kalor (3 poin)"
            ]
        },
        "bahas": "<b>Penyelesaian Lengkap:</b><br><br><b>a. Menghitung Nilai $\\Delta H_3$ dari Siklus Hess (Skor 6):</b><br>Berdasarkan Hukum Hess, kalor reaksi hanya bergantung pada keadaan awal dan akhir sistem, bukan pada jalannya tahapan reaksi.<br>Dari diagram siklus di atas:<br>$$\\text{Jalur Langsung (1)} = \\text{Jalur Bertahap (2 + 3)}$$<br>$$\\Delta H_1 = \\Delta H_2 + \\Delta H_3$$<br>Masukkan nilai yang diketahui:<br>$$-396\\text{ kJ} = -297\\text{ kJ} + \\Delta H_3$$<br>$$\\Delta H_3 = -396\\text{ kJ} - (-297\\text{ kJ})$$<br>$$\\Delta H_3 = -396\\text{ kJ} + 297\\text{ kJ} = \\mathbf{-99\\text{ kJ}}$$<br><br><b>b. Persamaan Termokimia dan Sifat Termalnya (Skor 6):</b><br>Persamaan termokimia lengkap untuk oksidasi 1 mol $SO_2$ menjadi $SO_3$ adalah:<br>$$\\mathbf{SO_2(g) + \\frac{1}{2}O_2(g) \\to SO_3(g) \\quad \\Delta H = -99\\text{ kJ}}$$<br>Reaksi tersebut tergolong **EKSOTERMIK** karena nilai perubahan entalpi bertanda negatif ($\\Delta H < 0$), yang menandakan bahwa sistem reaksi melepaskan energi kalor sebesar $99\\text{ kJ}$ ke lingkungan sekitar."
    },
    {
        "no": 4,
        "materi_key": "lajureaksi",
        "materi_label": "Laju Reaksi & Teori Tumbukan",
        "indikator": "Menentukan orde reaksi dan orde reaksi total, harga tetapan laju reaksi",
        "level": "C4",
        "bobot": "12 Poin",
        "soal": "Santri meneliti kinetika reaksi gas nitrogen monoksida dengan gas hidrogen pada suhu konstan $800^\\circ\\text{C}$ menurut persamaan reaksi:<br>$$2NO(g) + 2H_2(g) \\to N_2(g) + 2H_2O(g)$$<br>Data laju reaksi awal yang diperoleh dari tiga percobaan laboratorium adalah sebagai berikut:<br><div class=\"my-2 overflow-x-auto\"><table class=\"w-full text-xs text-left border-collapse border border-slate-300\"><thead class=\"bg-slate-100\"><tr><th class=\"border border-slate-300 p-2\">Percobaan</th><th class=\"border border-slate-300 p-2\">[NO] (M)</th><th class=\"border border-slate-300 p-2\">$[H_2]$ (M)</th><th class=\"border border-slate-300 p-2\">Laju Reaksi Awal (M/s)</th></tr></thead><tbody><tr><td class=\"border border-slate-300 p-2 font-bold\">1</td><td class=\"border border-slate-300 p-2\">0,1</td><td class=\"border border-slate-300 p-2\">0,1</td><td class=\"border border-slate-300 p-2\">$1{,}2 \\times 10^{-3}$</td></tr><tr><td class=\"border border-slate-300 p-2 font-bold\">2</td><td class=\"border border-slate-300 p-2\">0,2</td><td class=\"border border-slate-300 p-2\">0,1</td><td class=\"border border-slate-300 p-2\">$4{,}8 \\times 10^{-3}$</td></tr><tr><td class=\"border border-slate-300 p-2 font-bold\">3</td><td class=\"border border-slate-300 p-2\">0,1</td><td class=\"border border-slate-300 p-2\">0,3</td><td class=\"border border-slate-300 p-2\">$3{,}6 \\times 10^{-3}$</td></tr></tbody></table></div><b>Pertanyaan:</b><br>a. Tentukan orde reaksi terhadap $NO$, orde reaksi terhadap $H_2$, serta orde reaksi total! <i>(skor 6)</i><br>b. Tuliskan rumus persamaan laju reaksinya dan hitunglah nilai tetapan laju reaksi ($k$) lengkap beserta satuannya! <i>(skor 6)</i>",
        "rubrik": {
            "judul": "Esai 4: Orde Reaksi Kinetika Kimia & Perhitungan Tetapan Laju (k)",
            "max": 12,
            "poin": [
                "Menghitung orde reaksi terhadap NO = 2 melalui perbandingan percobaan 1 dan 2 (2 poin)",
                "Menghitung orde reaksi terhadap H2 = 1 melalui perbandingan percobaan 1 dan 3 (2 poin)",
                "Menentukan orde reaksi total = 2 + 1 = 3 secara tepat (2 poin)",
                "Menuliskan rumus persamaan laju reaksi v = k [NO]^2 [H2] dengan benar (2 poin)",
                "Menghitung nilai tetapan laju k = 1,2 secara runtut (2 poin)",
                "Menentukan satuan k = M^-2 s^-1 atau L^2 mol^-2 s^-1 secara tepat (2 poin)"
            ]
        },
        "bahas": "<b>Penyelesaian Lengkap:</b><br><br><b>a. Menentukan Orde Reaksi (Skor 6):</b><br>Bentuk umum persamaan laju reaksi: $$v = k [NO]^x [H_2]^y$$<br>1. **Orde terhadap $NO$ ($x$):** Gunakan Percobaan 1 dan 2 ($[H_2]$ tetap $= 0,1\\text{ M}$):<br>$$\\frac{v_2}{v_1} = \\left(\\frac{[NO]_2}{[NO]_1}\\right)^x \\implies \\frac{4,8 \\times 10^{-3}}{1,2 \\times 10^{-3}} = \\left(\\frac{0,2}{0,1}\\right)^x$$<br>$$4 = 2^x \\implies \\mathbf{x = 2} \\quad (\\text{Orde terhadap } NO = 2)$$<br>2. **Orde terhadap $H_2$ ($y$):** Gunakan Percobaan 1 dan 3 ($[NO]$ tetap $= 0,1\\text{ M}$):<br>$$\\frac{v_3}{v_1} = \\left(\\frac{[H_2]_3}{[H_2]_1}\\right)^y \\implies \\frac{3,6 \\times 10^{-3}}{1,2 \\times 10^{-3}} = \\left(\\frac{0,3}{0,1}\\right)^y$$<br>$$3 = 3^y \\implies \\mathbf{y = 1} \\quad (\\text{Orde terhadap } H_2 = 1)$$<br>3. **Orde Reaksi Total:**<br>$$\\text{Orde Total} = x + y = 2 + 1 = \\mathbf{3}$$<br><br><b>b. Persamaan Laju dan Nilai Tetapan $k$ (Skor 6):</b><br>1. Persamaan Laju Reaksi:<br>$$\\mathbf{v = k [NO]^2 [H_2]}$$<br>2. Menghitung nilai tetapan laju reaksi ($k$) menggunakan data Percobaan 1:<br>$$1,2 \\times 10^{-3}\\text{ M} \\cdot \\text{s}^{-1} = k \\times (0,1\\text{ M})^2 \\times (0,1\\text{ M})$$<br>$$1,2 \\times 10^{-3} = k \\times 10^{-3}\\text{ M}^3$$<br>$$k = \\frac{1,2 \\times 10^{-3}}{10^{-3}} = \\mathbf{1,2}$$<br>3. Menentukan satuan tetapan laju ($k$):<br>$$\\text{Satuan } k = \\frac{M \\cdot s^{-1}}{M^2 \\cdot M} = \\mathbf{M^{-2}\\text{s}^{-1}} \\quad \\text{atau} \\quad \\mathbf{L^2 \\cdot \\text{mol}^{-2} \\cdot \\text{s}^{-1}}$$"
    },
    {
        "no": 5,
        "materi_key": "kesetimbangan",
        "materi_label": "Kesetimbangan Kimia",
        "indikator": "Menghitung Kc, menentukan arah pergeseran kesetimbangan akibat berbagai perubahan (suhu, volume, konsentrasi zat)",
        "level": "C4",
        "bobot": "12 Poin",
        "soal": "Gas nitrogen monoksida bereaksi dengan gas oksigen membentuk gas nitrogen dioksida menurut reaksi kesetimbangan fasa gas:<br>$$2NO(g) + O_2(g) \\rightleftharpoons 2NO_2(g) \\quad \\Delta H = -114\\text{ kJ}$$<br>Dalam wadah tertutup bervolume $4\\text{ liter}$ pada suhu tertentu, saat tercapai keadaan setimbang ditemukan terdapat $0,8\\text{ mol}$ gas $NO$, $0,4\\text{ mol}$ gas $O_2$, dan $1,6\\text{ mol}$ gas $NO_2$.<br><br><b>Pertanyaan:</b><br>a. Tuliskan ekspresi tetapan kesetimbangan $K_c$ dan hitunglah harga $K_c$ untuk reaksi tersebut pada kondisi tersebut! <i>(skor 6)</i><br>b. Tentukan arah pergeseran kesetimbangan (ke kanan/produk, ke kiri/reaktan, atau tidak bergeser) disertai alasan ilmiah berdasarkan Asas Le Chatelier jika:<br>   (1) Suhu sistem kesetimbangan dinaikkan<br>   (2) Volume wadah diperkecil menjadi 2 liter (tekanan sistem diperbesar)<br>   (3) Ke dalam wadah ditambahkan gas $O_2$ murni! <i>(skor 6)</i>",
        "rubrik": {
            "judul": "Esai 5: Perhitungan Nilai Kc & Asas Le Chatelier Reaksi Gas",
            "max": 12,
            "poin": [
                "Menghitung konsentrasi saat setimbang: [NO]=0,2 M, [O2]=0,1 M, [NO2]=0,4 M dengan benar (2 poin)",
                "Menuliskan ekspresi tetapan kesetimbangan Kc = [NO2]^2 / ([NO]^2 [O2]) (2 poin)",
                "Menghitung nilai Kc = (0,4)^2 / ((0,2)^2 × 0,1) = 0,16 / 0,004 = 40 secara tepat (2 poin)",
                "Menjelaskan (1) Suhu dinaikkan -> bergeser ke KIRI (arah endoterm) untuk menyerap kelebihan kalor (2 poin)",
                "Menjelaskan (2) Volume diperkecil -> bergeser ke KANAN (produk) karena koefisien gas lebih sedikit (2 < 3) (2 poin)",
                "Menjelaskan (3) Konsentrasi O2 ditambah -> bergeser ke KANAN (menjauhi zat yang ditambah) (2 poin)"
            ]
        },
        "bahas": "<b>Penyelesaian Lengkap:</b><br><br><b>a. Ekspresi dan Perhitungan Harga $K_c$ (Skor 6):</b><br>1. Menghitung konsentrasi molaritas masing-masing gas pada saat setimbang (Volume wadah $V = 4\\text{ Liter}$):<br>* $[NO] = \\frac{n}{V} = \\frac{0,8\\text{ mol}}{4\\text{ L}} = \\mathbf{0,2\\text{ M}}$<br>* $[O_2] = \\frac{n}{V} = \\frac{0,4\\text{ mol}}{4\\text{ L}} = \\mathbf{0,1\\text{ M}}$<br>* $[NO_2] = \\frac{n}{V} = \\frac{1,6\\text{ mol}}{4\\text{ L}} = \\mathbf{0,4\\text{ M}}$<br>2. Menuliskan rumus tetapan kesetimbangan $K_c$:<br>$$K_c = \\frac{[NO_2]^2}{[NO]^2 [O_2]}$$<br>3. Menghitung harga $K_c$:<br>$$K_c = \\frac{(0,4)^2}{(0,2)^2 \\times 0,1} = \\frac{0,16}{0,04 \\times 0,1} = \\frac{0,16}{0,004} = \\mathbf{40}$$<br><br><b>b. Arah Pergeseran Kesetimbangan (Asas Le Chatelier) (Skor 6):</b><br>1. **Suhu dinaikkan:** Reaksi maju bersifat eksotermik ($\\Delta H = -114\\text{ kJ}$). Jika suhu dinaikkan, sistem akan bergeser ke arah yang menyerap kalor (**ke arah endoterm / ke arah KIRI**). Akibatnya, gas $NO_2$ terurai kembali menjadi $NO$ dan $O_2$.<br>2. **Volume diperkecil (tekanan diperbesar):** Jumlah koefisien gas di sisi kiri $= 2 + 1 = 3\\text{ mol}$, sedangkan koefisien gas di sisi kanan $= 2\\text{ mol}$. Jika volume diperkecil, kesetimbangan bergeser ke arah yang memiliki **jumlah koefisien gas lebih kecil, yaitu ke arah KANAN** (pembentukan $NO_2$).<br>3. **Ditambahkan gas $O_2$ murni:** Penambahan konsentrasi pereaksi akan direspons sistem dengan mengonsumsi zat tersebut, sehingga kesetimbangan **bergeser ke arah KANAN** (menjauhi zat yang ditambahkan untuk menghasilkan lebih banyak $NO_2$)."
    }
]

print("Loaded questions successfully:")
print("PG count:", len(PG_DATA))
print("Esai count:", len(ESAI_DATA))

def build_html():
    pass
