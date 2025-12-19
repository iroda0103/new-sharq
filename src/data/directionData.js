export const directions = {
    'tarix': {
        name: 'Tarix',
        nameEn: 'History',
        degree: 'Bakalavr',
        img: '/img/faculty/tarix.png',
        description: `Mazkur yo'nalishning asosiy maqsadi - talabalarni tarix fanining nazariy asoslari hamda amaliy jihatlari bilan chuqur tanishtirish, ularga arxeologiya, etnografiya, O'zbekiston va jahon tarixiga oid muhim bilimlar hamda real kasbiy vaziyatlarda zarur bo'lgan kompetensiyalarni shakllantirish va rivojlantirishdir. Talabalar o'quv davomida tarixiy faktlarni tahlil qilish, ularni kontekstda baholash, dalillar bilan ishlash, tarixiy tafakkur yuritish va mustaqil ilmiy tadqiqot olib borish ko'nikmalarini egallab boradilar.`,
        structure: [
            { year: 1, subjects: ['Qadimgi dunyo tarixi', "O'zbekiston tarixi", 'Tarixshunoslik', 'Arxeologiya asoslari'] },
            { year: 2, subjects: ["O'rta asrlar tarixi", 'Etnografiya', 'Tarixiy manbalar', 'Muzeylar nazariyasi'] },
            { year: 3, subjects: ['Yangi davr tarixi', 'Tarixiy tadqiqot metodlari', 'Madaniyat tarixi', 'Diplomatika'] },
            { year: 4, subjects: ['Zamonaviy tarix', 'Tarixshunoslik metodologiyasi', 'Bitirruv malakaviy ishi', 'Diplom ishi'] }
        ],
        requirements: {
            entry: ["O'rta ta'lim", 'Kirish imtihoni', 'Tarix va Ona tili', 'IQ test'],
            graduation: ['240+ kredit', 'GPA 2.0+', 'Diplom loyihasi himoyasi']
        },
        fees: { local: "15,000,000 so'm/yil", international: '$3,500/yil' },
        jobs: ['Ilmiy xodim', 'Muzey mutaxassisi', "Tarix o'qituvchisi", 'Gid-ekskursovod', 'Arxivchi', 'Tarixiy kontent yaratuvchisi']
    },

    'psixologiya': {
        name: 'Psixologiya',
        nameEn: 'Psychology',
        img: '/img/faculty/tarix.png',
        degree: 'Bakalavr',
        description: `Psixologiya - bu inson ongining, xulq-atvorining, hissiyotlari va ruhiy jarayonlarining ilmiy asosda o'rganilishi bilan shug'ullanuvchi fan sohasi. Ushbu yo'nalishning asosiy maqsadi - talabalarni turli yoshdagi insonlarning psixologik holatini baholash, tahlil qilish, ularni tushunish va amaliy yechimlar ishlab chiqish bo'yicha chuqur nazariy bilimlar va amaliy ko'nikmalar bilan qurollantirishdan iborat.`,
        structure: [
            { year: 1, subjects: ['Umumiy psixologiya', 'Psixologiya tarixi', 'Fiziologiya asoslari', 'Statistika'] },
            { year: 2, subjects: ['Rivojlanish psixologiyasi', 'Shaxsiyat psixologiyasi', 'Ijtimoiy psixologiya', 'Psixodiagnostika'] },
            { year: 3, subjects: ['Klinik psixologiya', 'Pedagogik psixologiya', 'Maslahat berish', 'Psixoterapiya asoslari'] },
            { year: 4, subjects: ['Organizatsion psixologiya', 'Tadqiqot metodlari', 'Amaliy loyihalar', 'Diplom ishi'] }
        ],
        requirements: {
            entry: ["O'rta ta'lim", 'Kirish imtihoni', 'Biologiya va Ona tili', 'IQ test'],
            graduation: ['240+ kredit', 'GPA 2.0+', 'Diplom loyihasi himoyasi']
        },
        fees: { local: "15,000,000 so'm/yil", international: '$3,500/yil' },
        jobs: ['Maktab psixologi', 'Konsultativ psixolog', 'Tibbiy psixolog', 'Organizatsion psixolog', 'Ilmiy tadqiqotchi', 'Media psixologi']
    },

    'ingliz-tili': {
        name: "Filologiya va tillarni o'qitish: ingliz tili",
        nameEn: 'Philology and Language Teaching: English',
        degree: 'Bakalavr',
        img: '/img/faculty/english.png',
        description: `Mazkur yo'nalish talabalarga ingliz tilini nazariy va amaliy jihatdan chuqur o'rganish, uni o'rgatish metodikasi, til tizimi, madaniyatlararo muloqot, tarjima asoslari hamda tilshunoslik va adabiyotshunoslik kabi fanlarni puxta egallash imkonini beradi. Yo'nalishning asosiy maqsadi - zamonaviy ingliz tilini mukammal biladigan, uni o'rgata oladigan, xalqaro maydonda raqobatbardosh va yuksak saviyali mutaxassislar yetishtirishdir.`,
        structure: [
            { year: 1, subjects: ['English Grammar', 'Phonetics', 'Reading & Writing', 'Speaking & Listening'] },
            { year: 2, subjects: ['Advanced Grammar', 'Lexicology', 'English Literature', 'Teaching Methodology'] },
            { year: 3, subjects: ['Stylistics', 'Translation Theory', 'Applied Linguistics', 'Language Testing'] },
            { year: 4, subjects: ['Academic Writing', 'Research Methods', 'Pedagogy Practice', 'Thesis'] }
        ],
        requirements: {
            entry: ["O'rta ta'lim", 'Kirish imtihoni', 'Ingliz tili va Ona tili', 'IQ test'],
            graduation: ['240+ kredit', 'GPA 2.0+', 'Diplom loyihasi himoyasi']
        },
        fees: { local: "15,000,000 so'm/yil", international: '$3,500/yil' },
        jobs: ["Maktab o'qituvchisi", "Universitet o'qituvchisi", 'Til kurslari treneri', 'Tarjimon', 'Gid-ekskursovod', 'Kontent yaratuvchi']
    },

    'rus-tili': {
        name: "Filologiya va tillarni o'qitish: rus tili",
        nameEn: 'Philology and Language Teaching: Russian',
        degree: 'Bakalavr',
        img: '/img/faculty/filologiya.png',
        description: `Mazkur yo'nalish talabalarni rus tilining nazariy asoslari, amaliy qo'llanilishi, adabiyoti va o'qitish metodikasi bilan chuqur tanishtiradi. Yo'nalishning asosiy maqsadi - rus tilini puxta egallagan, uni o'rgatish bo'yicha zamonaviy metodik ko'nikmalarga ega, til va madaniyatlararo muloqotni rivojlantira oladigan filolog-pedagoglar tayyorlashdan iborat.`,
        structure: [
            { year: 1, subjects: ['Rus tili grammatikasi', 'Fonetika', 'Og\'zaki va yozma nutq', 'Til nazariyasi'] },
            { year: 2, subjects: ['Morfologiya va sintaksis', 'Leksikologiya', 'Rus adabiyoti', 'Til o\'qitish metodikasi'] },
            { year: 3, subjects: ['Stilistika', 'Tarjima nazariyasi', 'Amaliy tilshunoslik', 'Matn tahlili'] },
            { year: 4, subjects: ['Ilmiy tadqiqot', 'Pedagogik amaliyot', 'Kurs ishi', 'Diplom ishi'] }
        ],
        requirements: {
            entry: ["O'rta ta'lim", 'Kirish imtihoni', 'Rus tili va Ona tili', 'IQ test'],
            graduation: ['240+ kredit', 'GPA 2.0+', 'Diplom loyihasi himoyasi']
        },
        fees: { local: "15,000,000 so'm/yil", international: '$3,500/yil' },
        jobs: ["Maktab o'qituvchisi", "Universitet o'qituvchisi", 'Til markazlari treneri', 'Tarjimon', 'Muharrir', 'Gid']
    },

    'ozbek-tili': {
        name: "Filologiya va tillarni o'qitish: o'zbek tili",
        nameEn: 'Philology and Language Teaching: Uzbek',
        degree: 'Bakalavr',
        img: '/img/faculty/filologiya.png',
        description: `Ushbu yo'nalish talabalarga o'zbek tilining nazariy asoslari, fonetika, morfologiya, sintaksis, stilistika kabi tilshunoslik tarmoqlari hamda o'zbek adabiyoti, dars berish metodikasi va zamonaviy pedagogik texnologiyalar bo'yicha chuqur bilim va amaliy ko'nikmalarni beradi.`,
        structure: [
            { year: 1, subjects: ["O'zbek tili fonetikasi", 'Morfologiya', "O'zbek tili tarixi", 'Adabiyotshunoslik'] },
            { year: 2, subjects: ['Sintaksis', 'Leksikologiya', "O'zbek adabiyoti", 'Pedagogika asoslari'] },
            { year: 3, subjects: ['Stilistika', 'Matn lingvistikasi', 'Til o\'qitish metodikasi', 'Tarjima nazariyasi'] },
            { year: 4, subjects: ['Zamonaviy tilshunoslik', 'Ilmiy tadqiqot metodlari', 'Pedagogik amaliyot', 'Diplom ishi'] }
        ],
        requirements: {
            entry: ["O'rta ta'lim", 'Kirish imtihoni', 'Ona tili va Ingliz tili', 'IQ test'],
            graduation: ['240+ kredit', 'GPA 2.0+', 'Diplom loyihasi himoyasi']
        },
        fees: { local: "15,000,000 so'm/yil", international: '$3,500/yil' },
        jobs: ["O'zbek tili o'qituvchisi", 'Tilshunos olim', 'Darslik muallifi', 'Tahrirchi', 'Tarjimon', 'OAV mutaxassisi']
    },

    'iqtisodiyot': {
        name: 'Iqtisodiyot',
        nameEn: 'Economics',
        degree: 'Bakalavr',
        img: '/img/faculty/iqtisodiyot.png',
        description: `Iqtisodiyot - bu jamiyatda tovar va xizmatlar qanday yaratilishi, taqsimlanishi va iste'mol qilinishini o'rganadigan fan sohasidir. Bu yo'nalish resurslar tanqisligi sharoitida ularni oqilona ishlab chiqarish, boshqarish va ulardan foydalanish tizimlarini chuqur tahlil qiluvchi ijtimoiy-ilmiy sohaga kiradi.`,
        structure: [
            { year: 1, subjects: ['Mikroiqtisodiyot', 'Makroiqtisodiyot', 'Matematika', 'Statistika asoslari'] },
            { year: 2, subjects: ['Moliya', 'Buxgalteriya hisobi', 'Iqtisodiy tahlil', 'Marketing asoslari'] },
            { year: 3, subjects: ['Pul va kredit', 'Soliq va soliqqa tortish', 'Xalqaro iqtisodiyot', 'Boshqaruv iqtisodiyoti'] },
            { year: 4, subjects: ['Investitsiyalar', 'Innovatsiya iqtisodiyoti', 'Tadqiqot metodlari', 'Diplom ishi'] }
        ],
        requirements: {
            entry: ["O'rta ta'lim", 'Kirish imtihoni', 'Matematika va Ingliz tili', 'IQ test'],
            graduation: ['240+ kredit', 'GPA 2.0+', 'Diplom loyihasi himoyasi']
        },
        fees: { local: "15,000,000 so'm/yil", international: '$4,000/yil' },
        jobs: ['Iqtisodchi-tahlilchi', 'Moliya menejeri', 'Bank mutaxassisi', 'Marketing menejeri', 'Buxgalter', 'Auditor']
    },

    'moliya': {
        name: 'Moliya va moliyaviy texnologiyalar',
        nameEn: 'Finance and Financial Technologies',
        degree: 'Bakalavr',
        img: '/img/faculty/iqtisodiyot.png',
        description: `Mazkur yo'nalish sizni moliya sohasi bo'yicha yetuk mutaxassis bo'lishingiz uchun zarur bo'lgan muhim nazariy va amaliy bilimlar bilan ta'minlaydi. Bugungi kunda moliyaviy savodxonlik nafaqat moliya va iqtisodiyotga oid kasblarda, balki yuqori daromadli va mas'uliyatli lavozimlar uchun ham asosiy talablar qatoriga kiradi.`,
        structure: [
            { year: 1, subjects: ['Moliya asoslari', 'Iqtisodiyot nazariyasi', 'Matematik analiz', 'Buxgalteriya'] },
            { year: 2, subjects: ['Korporativ moliya', 'Moliyaviy bozorlar', 'Bank ishi', 'Investitsiyalar'] },
            { year: 3, subjects: ['Moliyaviy tahlil', 'Risklarni boshqarish', 'Fintech texnologiyalari', 'Qimmatli qog\'ozlar'] },
            { year: 4, subjects: ['Blockchain va kriptovalyuta', 'Moliyaviy rejalashtirish', 'Amaliy loyihalar', 'Diplom ishi'] }
        ],
        requirements: {
            entry: ["O'rta ta'lim", 'Kirish imtihoni', 'Matematika va Ingliz tili', 'IQ test'],
            graduation: ['240+ kredit', 'GPA 2.0+', 'Diplom loyihasi himoyasi']
        },
        fees: { local: "17,000,000 so'm/yil", international: '$4,500/yil' },
        jobs: ['Moliyachi-analitik', 'Investitsiya mutaxassisi', 'Bank xodimi', 'Risk menejer', 'Fintech ekspert', 'Treyder']
    },

    'marketing': {
        name: 'Marketing',
        nameEn: 'Marketing',
        degree: 'Bakalavr',
        img: '/img/faculty/biznes.png',
        description: `Marketing - bu tovar va xizmatlarni iste'molchilarga yetkazishning eng samarali yo'llarini izlaydigan, bozor ehtiyojlarini tahlil qiladigan va mijozlar bilan mustahkam aloqalarni yo'lga qo'yadigan amaliy va strategik fan sohasi hisoblanadi.`,
        structure: [
            { year: 1, subjects: ['Marketing asoslari', 'Iqtisodiyot', 'Psixologiya', 'Reklama asoslari'] },
            { year: 2, subjects: ['Raqamli marketing', 'Brending', 'Iste\'molchi xulqi', 'Bozor tadqiqoti'] },
            { year: 3, subjects: ['SMM va kontent marketing', 'SEO/SEM', 'PR va kommunikatsiya', 'Savdo menejmenti'] },
            { year: 4, subjects: ['Marketing strategiyasi', 'Mijozlar bilan munosabatlar', 'Amaliy loyiha', 'Diplom ishi'] }
        ],
        requirements: {
            entry: ["O'rta ta'lim", 'Kirish imtihoni', 'Matematika va Ingliz tili', 'IQ test'],
            graduation: ['240+ kredit', 'GPA 2.0+', 'Diplom loyihasi himoyasi']
        },
        fees: { local: "16,000,000 so'm/yil", international: '$4,000/yil' },
        jobs: ['Marketing menejeri', 'Brend menejer', 'SMM mutaxassisi', 'Bozor tahlilchisi', 'Reklama mutaxassisi', 'Kontent menejer']
    },

    'biznes': {
        name: 'Biznesni boshqarish',
        nameEn: 'Business Management',
        degree: 'Bakalavr',
        img: '/img/faculty/biznes.png',
        description: `Biznesni boshqarish - bu tashkilot va korxonalarni samarali boshqarish, ularning strategik rivojlanishi, moliyaviy barqarorligi va raqobatbardoshligini ta'minlashga qaratilgan ko'p tarmoqli fan sohasi hisoblanadi.`,
        structure: [
            { year: 1, subjects: ['Menejment asoslari', 'Iqtisodiyot', 'Biznes matematikasi', 'Biznes kommunikatsiya'] },
            { year: 2, subjects: ['Strategik menejment', 'HR menejment', 'Moliya menejmenti', 'Operatsion menejment'] },
            { year: 3, subjects: ['Loyihalarni boshqarish', 'Tadbirkorlik', 'Biznes-rejalashtirish', 'O\'zgarishlarni boshqarish'] },
            { year: 4, subjects: ['Xalqaro biznes', 'Innovatsion menejment', 'Biznes-loyiha', 'Diplom ishi'] }
        ],
        requirements: {
            entry: ["O'rta ta'lim", 'Kirish imtihoni', 'Matematika va Ingliz tili', 'IQ test'],
            graduation: ['240+ kredit', 'GPA 2.0+', 'Diplom loyihasi himoyasi']
        },
        fees: { local: "16,000,000 so'm/yil", international: '$4,000/yil' },
        jobs: ['Biznes-menejer', 'Tadbirkor', 'Loyiha menejeri', 'HR menejeri', 'Biznes-maslahatchi', 'Savdo menejeri']
    },

    'kiberxavfsizlik': {
        name: 'Kiberxavfsizlik injiniringi',
        nameEn: 'Cybersecurity Engineering',
        degree: 'Bakalavr',
        img: '/img/faculty/kiber.png',
        description: `Kiberxavfsizlik injiniringi - bu axborot tizimlarini, kompyuter tarmoqlarini, dasturiy ta'minot va foydalanuvchi ma'lumotlarini tashqi va ichki tahdidlardan himoya qilishga yo'naltirilgan ilg'or texnologik yo'nalishdir.`,
        structure: [
            { year: 1, subjects: ['Dasturlash asoslari', 'Kompyuter tizimlari', 'Tarmoqlar asoslari', 'Matematik mantiq'] },
            { year: 2, subjects: ['Axborot xavfsizligi', 'Operatsion tizimlar', 'Kriptografiya', 'Veb xavfsizligi'] },
            { year: 3, subjects: ['Tarmoq xavfsizligi', 'Hacking va Pentesting', 'Malware tahlili', 'Incident Response'] },
            { year: 4, subjects: ['Cloud xavfsizligi', 'Etik hacking', 'Bitiruvchi loyiha', 'Diplom ishi'] }
        ],
        requirements: {
            entry: ["O'rta ta'lim", 'Kirish imtihoni', 'Matematika va Ingliz tili', 'IQ test'],
            graduation: ['240+ kredit', 'GPA 2.0+', 'Diplom loyihasi himoyasi']
        },
        fees: { local: "18,000,000 so'm/yil", international: '$5,000/yil' },
        jobs: ['Kiberxavfsizlik muhandisi', 'Pentester', 'SOC analitik', 'Kriptograf', 'Tarmoq xavfsizligi mutaxassisi', 'IT xavfsizlik rahbari']
    },

    'dasturiy-injiniring': {
        name: 'Dasturiy injiniring',
        nameEn: 'Software Engineering',
        degree: 'Bakalavr',
        img: '/img/faculty/engineering.png',
        description: `Dasturiy injiniring - bu dasturiy mahsulotlarni tizimli loyihalash, ishlab chiqish, test qilish va qo'llab-quvvatlash bilan shug'ullanuvchi zamonaviy muhandislik yo'nalishidir. Talabalar algoritmlar, dasturlash tillari, ma'lumotlar tuzilmasi, AI, mobil va veb-ilovalar yaratish bo'yicha bilim egallaydi.`,
        structure: [
            { year: 1, subjects: ['Dasturlash asoslari', 'Matematik analiz', 'Diskret matematika', 'Web asoslari'] },
            { year: 2, subjects: ["Ma'lumotlar tuzilmasi", 'Algoritmlar', 'OOP', "Ma'lumotlar bazasi"] },
            { year: 3, subjects: ['Veb dasturlash', 'Mobil dasturlash', 'Dasturiy arxitektura', 'DevOps asoslari'] },
            { year: 4, subjects: ["Sun'iy intellekt", 'Loyiha boshqaruv', 'Bitiruvchi loyiha', 'Diplom ishi'] }
        ],
        requirements: {
            entry: ["O'rta ta'lim", 'Kirish imtihoni', 'Matematika va Ingliz tili', 'IQ test'],
            graduation: ['240+ kredit', 'GPA 2.0+', 'Diplom loyihasi himoyasi']
        },
        fees: { local: "18,000,000 so'm/yil", international: '$5,000/yil' },
        jobs: ['Backend dasturchi', 'Frontend dasturchi', 'Full-stack dasturchi', 'Mobil dasturchi', 'DevOps muhandis', 'Dasturiy arxitektor']
    },

    'suniy-intellekt': {
        name: "Sun'iy intellekt",
        nameEn: 'Artificial Intelligence',
        degree: 'Bakalavr',
        img: '/img/faculty/si.png',
        description: `Sun'iy intellekt - bu mashinalarni inson aql-idrokiga yaqin darajada fikrlashga, o'rganishga va muammolarni mustaqil hal qilishga o'rgatuvchi ilg'or texnologik yo'nalishdir. Talabalar mashinaviy o'rganish, neyron tarmoqlar, NLP, computer vision texnologiyalarini o'rganadilar.`,
        structure: [
            { year: 1, subjects: ['Python dasturlash', 'Matematik analiz', 'Chiziqli algebra', 'Ehtimollar nazariyasi'] },
            { year: 2, subjects: ['Mashinaviy o\'rganish', 'Chuqur o\'rganish', "Ma'lumotlar tahlili", 'Statistika'] },
            { year: 3, subjects: ['NLP', 'Computer Vision', 'Neyron tarmoqlar', 'Big Data'] },
            { year: 4, subjects: ['Reinforcement Learning', 'AI etikasi', 'AI loyiha', 'Diplom ishi'] }
        ],
        requirements: {
            entry: ["O'rta ta'lim", 'Kirish imtihoni', 'Matematika va Ingliz tili', 'IQ test'],
            graduation: ['240+ kredit', 'GPA 2.0+', 'Diplom loyihasi himoyasi']
        },
        fees: { local: "18,000,000 so'm/yil", international: '$5,000/yil' },
        jobs: ['ML Engineer', 'Data Scientist', 'AI Developer', 'Computer Vision mutaxassisi', 'NLP injiner', 'AI tadqiqotchi']
    }
};