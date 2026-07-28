// =================================================================
// js/spu.js — Data & Logika Sistem Periodik Unsur (Komponen Bersama)
// Dipakai di semua halaman materi. Elemen HTML target (#gridUnsur,
// #legendaUnsur, #detailUnsur, #spuModal) dimuat via partials/spu-modal.html
// oleh js/include.js, yang akan memanggil initSpu() setelah siap.
// =================================================================

// PETA KATEGORI UNSUR (label Indonesia + kelas warna Tailwind)
const kategoriInfo = {
    alkali:       { label: "Logam Alkali",        bg: "bg-red-50",     text: "text-red-700",     border: "border-red-300",     dot: "bg-red-500" },
    alkalitanah:  { label: "Logam Alkali Tanah",  bg: "bg-orange-50",  text: "text-orange-700",  border: "border-orange-300",  dot: "bg-orange-500" },
    transisi:     { label: "Logam Transisi",      bg: "bg-amber-50",   text: "text-amber-700",   border: "border-amber-300",   dot: "bg-amber-500" },
    pascatransisi:{ label: "Logam Pasca-Transisi",bg: "bg-cyan-50",    text: "text-cyan-700",    border: "border-cyan-300",    dot: "bg-cyan-500" },
    metaloid:     { label: "Metaloid",            bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-300", dot: "bg-emerald-500" },
    nonlogam:     { label: "Nonlogam",             bg: "bg-blue-50",    text: "text-blue-700",    border: "border-blue-300",    dot: "bg-blue-500" },
    gasmulia:     { label: "Gas Mulia",           bg: "bg-purple-50",  text: "text-purple-700",  border: "border-purple-300",  dot: "bg-purple-500" },
    lantanida:    { label: "Lantanida",           bg: "bg-pink-50",    text: "text-pink-700",    border: "border-pink-300",    dot: "bg-pink-500" },
    aktinida:     { label: "Aktinida",            bg: "bg-fuchsia-50", text: "text-fuchsia-700", border: "border-fuchsia-300", dot: "bg-fuchsia-500" },
    default:      { label: "Belum Diketahui",     bg: "bg-slate-50",   text: "text-slate-500",   border: "border-slate-300",   dot: "bg-slate-400" }
};

const ikonFase = { "Padat": "🧱", "Cair": "💧", "Gas": "💨" };

// DATA 118 UNSUR
const dataUnsur = [
    {z:1,s:"H",n:"Hidrogen",ar:1,kat:"nonlogam",fase:"Gas",konf:"1s1",blok:"s"},
    {z:2,s:"He",n:"Helium",ar:4,kat:"gasmulia",fase:"Gas",konf:"1s2",blok:"s"},
    {z:3,s:"Li",n:"Litium",ar:7,kat:"alkali",fase:"Padat",konf:"[He] 2s1",blok:"s"},
    {z:4,s:"Be",n:"Berilium",ar:9,kat:"alkalitanah",fase:"Padat",konf:"[He] 2s2",blok:"s"},
    {z:5,s:"B",n:"Boron",ar:10.8,kat:"metaloid",fase:"Padat",konf:"[He] 2s2 2p1",blok:"p"},
    {z:6,s:"C",n:"Karbon",ar:12,kat:"nonlogam",fase:"Padat",konf:"[He] 2s2 2p2",blok:"p"},
    {z:7,s:"N",n:"Nitrogen",ar:14,kat:"nonlogam",fase:"Gas",konf:"[He] 2s2 2p3",blok:"p"},
    {z:8,s:"O",n:"Oksigen",ar:16,kat:"nonlogam",fase:"Gas",konf:"[He] 2s2 2p4",blok:"p"},
    {z:9,s:"F",n:"Fluorin",ar:19,kat:"nonlogam",fase:"Gas",konf:"[He] 2s2 2p5",blok:"p"},
    {z:10,s:"Ne",n:"Neon",ar:20,kat:"gasmulia",fase:"Gas",konf:"[He] 2s2 2p6",blok:"p"},
    {z:11,s:"Na",n:"Natrium",ar:23,kat:"alkali",fase:"Padat",konf:"[Ne] 3s1",blok:"s"},
    {z:12,s:"Mg",n:"Magnesium",ar:24,kat:"alkalitanah",fase:"Padat",konf:"[Ne] 3s2",blok:"s"},
    {z:13,s:"Al",n:"Aluminium",ar:27,kat:"pascatransisi",fase:"Padat",konf:"[Ne] 3s2 3p1",blok:"p"},
    {z:14,s:"Si",n:"Silikon",ar:28,kat:"metaloid",fase:"Padat",konf:"[Ne] 3s2 3p2",blok:"p"},
    {z:15,s:"P",n:"Fosforus",ar:31,kat:"nonlogam",fase:"Padat",konf:"[Ne] 3s2 3p3",blok:"p"},
    {z:16,s:"S",n:"Belerang",ar:32,kat:"nonlogam",fase:"Padat",konf:"[Ne] 3s2 3p4",blok:"p"},
    {z:17,s:"Cl",n:"Klorin",ar:35.5,kat:"nonlogam",fase:"Gas",konf:"[Ne] 3s2 3p5",blok:"p"},
    {z:18,s:"Ar",n:"Argon",ar:40,kat:"gasmulia",fase:"Gas",konf:"[Ne] 3s2 3p6",blok:"p"},
    {z:19,s:"K",n:"Kalium",ar:39,kat:"alkali",fase:"Padat",konf:"[Ar] 4s1",blok:"s"},
    {z:20,s:"Ca",n:"Kalsium",ar:40,kat:"alkalitanah",fase:"Padat",konf:"[Ar] 4s2",blok:"s"},
    {z:21,s:"Sc",n:"Skandium",ar:45,kat:"transisi",fase:"Padat",konf:"[Ar] 3d1 4s2",blok:"d"},
    {z:22,s:"Ti",n:"Titanium",ar:48,kat:"transisi",fase:"Padat",konf:"[Ar] 3d2 4s2",blok:"d"},
    {z:23,s:"V",n:"Vanadium",ar:51,kat:"transisi",fase:"Padat",konf:"[Ar] 3d3 4s2",blok:"d"},
    {z:24,s:"Cr",n:"Kromium",ar:52,kat:"transisi",fase:"Padat",konf:"[Ar] 3d5 4s1",blok:"d"},
    {z:25,s:"Mn",n:"Mangan",ar:55,kat:"transisi",fase:"Padat",konf:"[Ar] 3d5 4s2",blok:"d"},
    {z:26,s:"Fe",n:"Besi",ar:56,kat:"transisi",fase:"Padat",konf:"[Ar] 3d6 4s2",blok:"d"},
    {z:27,s:"Co",n:"Kobalt",ar:59,kat:"transisi",fase:"Padat",konf:"[Ar] 3d7 4s2",blok:"d"},
    {z:28,s:"Ni",n:"Nikel",ar:58.7,kat:"transisi",fase:"Padat",konf:"[Ar] 3d8 4s2",blok:"d"},
    {z:29,s:"Cu",n:"Tembaga",ar:63.5,kat:"transisi",fase:"Padat",konf:"[Ar] 3d10 4s1",blok:"d"},
    {z:30,s:"Zn",n:"Seng",ar:65.4,kat:"transisi",fase:"Padat",konf:"[Ar] 3d10 4s2",blok:"d"},
    {z:31,s:"Ga",n:"Galium",ar:69.7,kat:"pascatransisi",fase:"Padat",konf:"[Ar] 3d10 4s2 4p1",blok:"p"},
    {z:32,s:"Ge",n:"Jermanium",ar:72.6,kat:"metaloid",fase:"Padat",konf:"[Ar] 3d10 4s2 4p2",blok:"p"},
    {z:33,s:"As",n:"Arsenik",ar:75,kat:"metaloid",fase:"Padat",konf:"[Ar] 3d10 4s2 4p3",blok:"p"},
    {z:34,s:"Se",n:"Selenum",ar:79,kat:"nonlogam",fase:"Padat",konf:"[Ar] 3d10 4s2 4p4",blok:"p"},
    {z:35,s:"Br",n:"Bromin",ar:80,kat:"nonlogam",fase:"Cair",konf:"[Ar] 3d10 4s2 4p5",blok:"p"},
    {z:36,s:"Kr",n:"Kripton",ar:83.8,kat:"gasmulia",fase:"Gas",konf:"[Ar] 3d10 4s2 4p6",blok:"p"},
    {z:37,s:"Rb",n:"Rubidium",ar:85.5,kat:"alkali",fase:"Padat",konf:"[Kr] 5s1",blok:"s"},
    {z:38,s:"Sr",n:"Stronsium",ar:87.6,kat:"alkalitanah",fase:"Padat",konf:"[Kr] 5s2",blok:"s"},
    {z:39,s:"Y",n:"Itrium",ar:88.9,kat:"transisi",fase:"Padat",konf:"[Kr] 4d1 5s2",blok:"d"},
    {z:40,s:"Zr",n:"Zirkonium",ar:91.2,kat:"transisi",fase:"Padat",konf:"[Kr] 4d2 5s2",blok:"d"},
    {z:41,s:"Nb",n:"Niobium",ar:92.9,kat:"transisi",fase:"Padat",konf:"[Kr] 4d4 5s1",blok:"d"},
    {z:42,s:"Mo",n:"Molibdenam",ar:95.9,kat:"transisi",fase:"Padat",konf:"[Kr] 4d5 5s1",blok:"d"},
    {z:43,s:"Tc",n:"Teknesium",ar:98,kat:"transisi",fase:"Padat",konf:"[Kr] 4d5 5s2",blok:"d"},
    {z:44,s:"Ru",n:"Rutenium",ar:101.1,kat:"transisi",fase:"Padat",konf:"[Kr] 4d7 5s1",blok:"d"},
    {z:45,s:"Rh",n:"Rodium",ar:102.9,kat:"transisi",fase:"Padat",konf:"[Kr] 4d8 5s1",blok:"d"},
    {z:46,s:"Pd",n:"Paladium",ar:106.4,kat:"transisi",fase:"Padat",konf:"[Kr] 4d10",blok:"d"},
    {z:47,s:"Ag",n:"Perak",ar:108,kat:"transisi",fase:"Padat",konf:"[Kr] 4d10 5s1",blok:"d"},
    {z:48,s:"Cd",n:"Kadmium",ar:112.4,kat:"transisi",fase:"Padat",konf:"[Kr] 4d10 5s2",blok:"d"},
    {z:49,s:"In",n:"Indium",ar:114.8,kat:"pascatransisi",fase:"Padat",konf:"[Kr] 4d10 5s2 5p1",blok:"p"},
    {z:50,s:"Sn",n:"Timah",ar:118.7,kat:"pascatransisi",fase:"Padat",konf:"[Kr] 4d10 5s2 5p2",blok:"p"},
    {z:51,s:"Sb",n:"Antimon",ar:121.8,kat:"metaloid",fase:"Padat",konf:"[Kr] 4d10 5s2 5p3",blok:"p"},
    {z:52,s:"Te",n:"Telurium",ar:127.6,kat:"metaloid",fase:"Padat",konf:"[Kr] 4d10 5s2 5p4",blok:"p"},
    {z:53,s:"I",n:"Iodin",ar:127,kat:"nonlogam",fase:"Padat",konf:"[Kr] 4d10 5s2 5p5",blok:"p"},
    {z:54,s:"Xe",n:"Xenon",ar:131.3,kat:"gasmulia",fase:"Gas",konf:"[Kr] 4d10 5s2 5p6",blok:"p"},
    {z:55,s:"Cs",n:"Sesium",ar:132.9,kat:"alkali",fase:"Padat",konf:"[Xe] 6s1",blok:"s"},
    {z:56,s:"Ba",n:"Barium",ar:137.3,kat:"alkalitanah",fase:"Padat",konf:"[Xe] 6s2",blok:"s"},
    {z:57,s:"La",n:"Lantanum",ar:138.9,kat:"lantanida",fase:"Padat",konf:"[Xe] 5d1 6s2",blok:"f"},
    {z:58,s:"Ce",n:"Serium",ar:140.1,kat:"lantanida",fase:"Padat",konf:"[Xe] 4f1 5d1 6s2",blok:"f"},
    {z:59,s:"Pr",n:"Praseodimium",ar:140.9,kat:"lantanida",fase:"Padat",konf:"[Xe] 4f3 6s2",blok:"f"},
    {z:60,s:"Nd",n:"Neodimium",ar:144.2,kat:"lantanida",fase:"Padat",konf:"[Xe] 4f4 6s2",blok:"f"},
    {z:61,s:"Pm",n:"Prometium",ar:145,kat:"lantanida",fase:"Padat",konf:"[Xe] 4f5 6s2",blok:"f"},
    {z:62,s:"Sm",n:"Samarium",ar:150.4,kat:"lantanida",fase:"Padat",konf:"[Xe] 4f6 6s2",blok:"f"},
    {z:63,s:"Eu",n:"Europium",ar:152,kat:"lantanida",fase:"Padat",konf:"[Xe] 4f7 6s2",blok:"f"},
    {z:64,s:"Gd",n:"Gadolinium",ar:157.3,kat:"lantanida",fase:"Padat",konf:"[Xe] 4f7 5d1 6s2",blok:"f"},
    {z:65,s:"Tb",n:"Terbium",ar:158.9,kat:"lantanida",fase:"Padat",konf:"[Xe] 4f9 6s2",blok:"f"},
    {z:66,s:"Dy",n:"Disprosium",ar:162.5,kat:"lantanida",fase:"Padat",konf:"[Xe] 4f10 6s2",blok:"f"},
    {z:67,s:"Ho",n:"Holmium",ar:164.9,kat:"lantanida",fase:"Padat",konf:"[Xe] 4f11 6s2",blok:"f"},
    {z:68,s:"Er",n:"Erbium",ar:167.3,kat:"lantanida",fase:"Padat",konf:"[Xe] 4f12 6s2",blok:"f"},
    {z:69,s:"Tm",n:"Tulium",ar:168.9,kat:"lantanida",fase:"Padat",konf:"[Xe] 4f13 6s2",blok:"f"},
    {z:70,s:"Yb",n:"Iterbium",ar:173.1,kat:"lantanida",fase:"Padat",konf:"[Xe] 4f14 6s2",blok:"f"},
    {z:71,s:"Lu",n:"Lutesium",ar:175,kat:"lantanida",fase:"Padat",konf:"[Xe] 4f14 5d1 6s2",blok:"d"},
    {z:72,s:"Hf",n:"Hafnium",ar:178.5,kat:"transisi",fase:"Padat",konf:"[Xe] 4f14 5d2 6s2",blok:"d"},
    {z:73,s:"Ta",n:"Tantalum",ar:180.9,kat:"transisi",fase:"Padat",konf:"[Xe] 4f14 5d3 6s2",blok:"d"},
    {z:74,s:"W",n:"Wolfram",ar:183.8,kat:"transisi",fase:"Padat",konf:"[Xe] 4f14 5d4 6s2",blok:"d"},
    {z:75,s:"Re",n:"Renium",ar:186.2,kat:"transisi",fase:"Padat",konf:"[Xe] 4f14 5d5 6s2",blok:"d"},
    {z:76,s:"Os",n:"Osmium",ar:190.2,kat:"transisi",fase:"Padat",konf:"[Xe] 4f14 5d6 6s2",blok:"d"},
    {z:77,s:"Ir",n:"Iridium",ar:192.2,kat:"transisi",fase:"Padat",konf:"[Xe] 4f14 5d7 6s2",blok:"d"},
    {z:78,s:"Pt",n:"Platina",ar:195.1,kat:"transisi",fase:"Padat",konf:"[Xe] 4f14 5d9 6s1",blok:"d"},
    {z:79,s:"Au",n:"Emas",ar:197,kat:"transisi",fase:"Padat",konf:"[Xe] 4f14 5d10 6s1",blok:"d"},
    {z:80,s:"Hg",n:"Raksa",ar:200.6,kat:"transisi",fase:"Cair",konf:"[Xe] 4f14 5d10 6s2",blok:"d"},
    {z:81,s:"Tl",n:"Talium",ar:204.4,kat:"pascatransisi",fase:"Padat",konf:"[Xe] 4f14 5d10 6s2 6p1",blok:"p"},
    {z:82,s:"Pb",n:"Timbal",ar:207.2,kat:"pascatransisi",fase:"Padat",konf:"[Xe] 4f14 5d10 6s2 6p2",blok:"p"},
    {z:83,s:"Bi",n:"Bismut",ar:209,kat:"pascatransisi",fase:"Padat",konf:"[Xe] 4f14 5d10 6s2 6p3",blok:"p"},
    {z:84,s:"Po",n:"Polonium",ar:209,kat:"pascatransisi",fase:"Padat",konf:"[Xe] 4f14 5d10 6s2 6p4",blok:"p"},
    {z:85,s:"At",n:"Astatin",ar:210,kat:"metaloid",fase:"Padat",konf:"[Xe] 4f14 5d10 6s2 6p5",blok:"p"},
    {z:86,s:"Rn",n:"Radon",ar:222,kat:"gasmulia",fase:"Gas",konf:"[Xe] 4f14 5d10 6s2 6p6",blok:"p"},
    {z:87,s:"Fr",n:"Fransium",ar:223,kat:"alkali",fase:"Padat",konf:"[Rn] 7s1",blok:"s"},
    {z:88,s:"Ra",n:"Radium",ar:226,kat:"alkalitanah",fase:"Padat",konf:"[Rn] 7s2",blok:"s"},
    {z:89,s:"Ac",n:"Aktinium",ar:227,kat:"aktinida",fase:"Padat",konf:"[Rn] 6d1 7s2",blok:"f"},
    {z:90,s:"Th",n:"Torium",ar:232,kat:"aktinida",fase:"Padat",konf:"[Rn] 6d2 7s2",blok:"f"},
    {z:91,s:"Pa",n:"Protaktinium",ar:231,kat:"aktinida",fase:"Padat",konf:"[Rn] 5f2 6d1 7s2",blok:"f"},
    {z:92,s:"U",n:"Uranium",ar:238,kat:"aktinida",fase:"Padat",konf:"[Rn] 5f3 6d1 7s2",blok:"f"},
    {z:93,s:"Np",n:"Neptunium",ar:237,kat:"aktinida",fase:"Padat",konf:"[Rn] 5f4 6d1 7s2",blok:"f"},
    {z:94,s:"Pu",n:"Plutonium",ar:244,kat:"aktinida",fase:"Padat",konf:"[Rn] 5f6 7s2",blok:"f"},
    {z:95,s:"Am",n:"Amerisium",ar:243,kat:"aktinida",fase:"Padat",konf:"[Rn] 5f7 7s2",blok:"f"},
    {z:96,s:"Cm",n:"Kurium",ar:247,kat:"aktinida",fase:"Padat",konf:"[Rn] 5f7 6d1 7s2",blok:"f"},
    {z:97,s:"Bk",n:"Berkelium",ar:247,kat:"aktinida",fase:"Padat",konf:"[Rn] 5f9 7s2",blok:"f"},
    {z:98,s:"Cf",n:"Kalifornium",ar:251,kat:"aktinida",fase:"Padat",konf:"[Rn] 5f10 7s2",blok:"f"},
    {z:99,s:"Es",n:"Einsteinium",ar:252,kat:"aktinida",fase:"Padat",konf:"[Rn] 5f11 7s2",blok:"f"},
    {z:100,s:"Fm",n:"Fermium",ar:257,kat:"aktinida",fase:"Padat",konf:"[Rn] 5f12 7s2",blok:"f"},
    {z:101,s:"Md",n:"Mendelevium",ar:258,kat:"aktinida",fase:"Padat",konf:"[Rn] 5f13 7s2",blok:"f"},
    {z:102,s:"No",n:"Nobelium",ar:259,kat:"aktinida",fase:"Padat",konf:"[Rn] 5f14 7s2",blok:"f"},
    {z:103,s:"Lr",n:"Lawrensium",ar:262,kat:"aktinida",fase:"Padat",konf:"[Rn] 5f14 7s2 7p1",blok:"d"},
    {z:104,s:"Rf",n:"Rutherfordium",ar:267,kat:"transisi",fase:"Padat",konf:"[Rn] 5f14 6d2 7s2",blok:"d"},
    {z:105,s:"Db",n:"Dubnium",ar:268,kat:"transisi",fase:"Padat",konf:"[Rn] 5f14 6d3 7s2",blok:"d"},
    {z:106,s:"Sg",n:"Seaborgium",ar:269,kat:"transisi",fase:"Padat",konf:"[Rn] 5f14 6d4 7s2",blok:"d"},
    {z:107,s:"Bh",n:"Bohrium",ar:270,kat:"transisi",fase:"Padat",konf:"[Rn] 5f14 6d5 7s2",blok:"d"},
    {z:108,s:"Hs",n:"Hassium",ar:270,kat:"transisi",fase:"Padat",konf:"[Rn] 5f14 6d6 7s2",blok:"d"},
    {z:109,s:"Mt",n:"Meitnerium",ar:278,kat:"transisi",fase:"Padat",konf:"[Rn] 5f14 6d7 7s2",blok:"d",prediksi:true},
    {z:110,s:"Ds",n:"Darmstadtium",ar:281,kat:"transisi",fase:"Padat",konf:"[Rn] 5f14 6d9 7s1",blok:"d",prediksi:true},
    {z:111,s:"Rg",n:"Roentgenium",ar:282,kat:"transisi",fase:"Padat",konf:"[Rn] 5f14 6d10 7s1",blok:"d",prediksi:true},
    {z:112,s:"Cn",n:"Kopernisium",ar:285,kat:"transisi",fase:"Cair",konf:"[Rn] 5f14 6d10 7s2",blok:"d"},
    {z:113,s:"Nh",n:"Nihonium",ar:286,kat:"pascatransisi",fase:"Padat",konf:"[Rn] 5f14 6d10 7s2 7p1",blok:"p",prediksi:true},
    {z:114,s:"Fl",n:"Flerovium",ar:289,kat:"pascatransisi",fase:"Padat",konf:"[Rn] 5f14 6d10 7s2 7p2",blok:"p"},
    {z:115,s:"Mc",n:"Moscovium",ar:290,kat:"pascatransisi",fase:"Padat",konf:"[Rn] 5f14 6d10 7s2 7p3",blok:"p",prediksi:true},
    {z:116,s:"Lv",n:"Livermorium",ar:293,kat:"pascatransisi",fase:"Padat",konf:"[Rn] 5f14 6d10 7s2 7p4",blok:"p",prediksi:true},
    {z:117,s:"Ts",n:"Tenesis",ar:294,kat:"metaloid",fase:"Padat",konf:"[Rn] 5f14 6d10 7s2 7p5",blok:"p",prediksi:true},
    {z:118,s:"Og",n:"Oganesson",ar:294,kat:"gasmulia",fase:"Padat",konf:"[Rn] 5f14 6d10 7s2 7p6",blok:"p",prediksi:true}
];

function formatKonfigurasi(k) {
    return k.replace(/([spdf])(\d+)/g, '$1<sup>$2</sup>');
}

function renderLegenda() {
    const legenda = document.getElementById('legendaUnsur');
    if (!legenda) return;
    legenda.innerHTML = Object.entries(kategoriInfo)
        .filter(([key]) => key !== 'default')
        .map(([key, k]) => `
            <span class="flex items-center gap-1.5 text-[11px] text-slate-600">
                <span class="w-2.5 h-2.5 rounded-full ${k.dot} inline-block"></span>${k.label}
            </span>
        `).join('');
}

function renderUnsur(items) {
    const grid = document.getElementById('gridUnsur');
    if (!grid) return;
    grid.innerHTML = '';

    if (items.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-sm text-slate-400 py-8">Unsur tidak ditemukan 🔍</p>`;
        return;
    }

    items.forEach(u => {
        const k = kategoriInfo[u.kat] || kategoriInfo.default;
        const card = document.createElement('div');
        card.className = `unsur-card ${k.bg} p-2.5 rounded-xl border ${k.border} ${u.prediksi ? 'border-dashed' : ''} shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition cursor-pointer`;
        card.innerHTML = `
            <span class="text-[10px] text-slate-400 font-mono block">Z = ${u.z}</span>
            <span class="text-lg font-bold ${k.text} block my-0.5">${u.s}</span>
            <span class="text-[11px] font-semibold text-slate-800 block truncate" title="${u.n}">${u.n}</span>
            <span class="text-[11px] text-slate-500 font-bold block mt-0.5">Ar = ${u.ar}</span>
        `;
        card.addEventListener('click', () => tampilkanDetail(u));
        grid.appendChild(card);
    });
}

function tampilkanDetail(u) {
    const k = kategoriInfo[u.kat] || kategoriInfo.default;
    const panel = document.getElementById('detailUnsur');
    if (!panel) return;
    panel.className = `${k.bg} border ${k.border} rounded-xl p-4 mb-4`;
    panel.innerHTML = `
        <div class="flex items-start justify-between gap-3">
            <div class="flex items-baseline gap-2">
                <span class="text-3xl font-bold ${k.text}">${u.s}</span>
                <span class="text-xs text-slate-400 font-mono">Z = ${u.z}</span>
            </div>
            <button onclick="document.getElementById('detailUnsur').classList.add('hidden')" class="text-slate-400 hover:text-slate-700 font-bold text-xl leading-none px-1">&times;</button>
        </div>
        <h4 class="text-base font-bold text-slate-900 mt-1 mb-3">${u.n}</h4>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div class="bg-white/70 rounded-lg p-2.5 border border-slate-200">
                <p class="text-slate-400 mb-0.5">Massa Atom (Ar)</p>
                <p class="font-bold text-slate-800">${u.ar} g/mol</p>
            </div>
            <div class="bg-white/70 rounded-lg p-2.5 border border-slate-200">
                <p class="text-slate-400 mb-0.5">Wujud (25°C)</p>
                <p class="font-bold text-slate-800">${ikonFase[u.fase] || ''} ${u.fase}</p>
            </div>
            <div class="bg-white/70 rounded-lg p-2.5 border border-slate-200">
                <p class="text-slate-400 mb-0.5">Kategori</p>
                <p class="font-bold ${k.text}">${k.label}</p>
            </div>
            <div class="bg-white/70 rounded-lg p-2.5 border border-slate-200">
                <p class="text-slate-400 mb-0.5">Blok Orbital</p>
                <p class="font-bold text-slate-800">Blok-${u.blok}</p>
            </div>
            <div class="bg-white/70 rounded-lg p-2.5 border border-slate-200 col-span-2 sm:col-span-4">
                <p class="text-slate-400 mb-0.5">Konfigurasi Elektron</p>
                <p class="font-bold text-slate-800 font-mono">${formatKonfigurasi(u.konf)}</p>
            </div>
        </div>

        ${u.prediksi ? `<p class="text-[11px] text-slate-500 italic mt-3">⚠️ Unsur sintetis super-berat: sifat kimianya masih berupa prediksi ilmiah, belum sepenuhnya terkonfirmasi eksperimen.</p>` : ''}
    `;
    panel.classList.remove('hidden');
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function toggleSpuModal(show) {
    const modal = document.getElementById('spuModal');
    if (!modal) return;
    if (show) {
        modal.classList.remove('hidden');
        const search = document.getElementById('searchUnsur');
        if (search) search.focus();
    } else {
        modal.classList.add('hidden');
    }
}

function filterUnsur() {
    const search = document.getElementById('searchUnsur');
    if (!search) return;
    const query = search.value.toLowerCase().trim();
    const filtered = dataUnsur.filter(u => {
        const k = kategoriInfo[u.kat] || kategoriInfo.default;
        return u.n.toLowerCase().includes(query) ||
               u.s.toLowerCase().includes(query) ||
               u.z.toString() === query ||
               u.ar.toString() === query ||
               k.label.toLowerCase().includes(query);
    });
    renderUnsur(filtered);
}

// Dipanggil oleh js/include.js setelah partials/spu-modal.html selesai dimuat
function initSpu() {
    renderLegenda();
    renderUnsur(dataUnsur);
}

// Tutup modal dengan tombol ESC (aman didaftarkan kapan saja, tidak butuh elemen DOM)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        toggleSpuModal(false);
    }
});
