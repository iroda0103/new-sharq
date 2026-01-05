export const menuItems = [
  {
    title: "Universitet",
    sidebarKey: "universitet",
    children: [
      { title: "Rektor", to: "/rektor" },
      { title: "Universitet haqida", to: "/history" },
      { title: "Hamkorlar", to: "/partners" },
      { title: "Asosiy meʼyoriy hujjatlar", to: "/document" },
      { title: "Litsenziya va sertifikatlar", to: "/sertificat" },
      { title: "360° Virtual sayohat", to: "/campus" },
    ],
  },

  {
    title: "Tuzilma",
    sidebarKey: "tuzilma",
    children: [{ title: "Rahbariyat", to: "/leadership" },
    {
      title: "Fakultetlar",
      sidebarKey: "fakultetlar",
      showInSidebar: true,
      to: "/faculty",
      children: [
        // { title: "Iqtisodiyot va axborot texnologiyalari fakulteti", to: "/directions?faculty=texnika" },
        { title: "Iqtisodiyot va axborot texnologiyalari fakulteti", to: "/directions?faculty=iqtisod" },
        { title: "Ijtimoiy - gumanitar fanlar fakulteti", to: "/directions?faculty=gumanitar" },
      ],
    },
    {
      title: "Kafedralar",
      to: "/kafedra",
      sidebarKey: "kafedralar",
      showInSidebar: true,
      children: [
        { title: "Iqtisodiyot va axborot texnologiyalari kafedrasi", to: "/kafedra?id=iqtisodiyot" },
        { title: "Ijtimoiy - gumanitar fanlar kafedrasi", to: "/kafedra?id=gumanitar" },
        // { title: "Axborot texnologiyalari kafedrasi", to: "/kafedra?id=it" },
      ],
    },
    {
      title: "Bo‘limlar",
      to: "/department",
      sidebarKey: "bolimlar",
      showInSidebar: true,
      children: [
        {
          title: "Axborot texnologiyalari markazi",
          to: "/department/staffs?department_id=1"
        },
        {
          title: "Yoshlar bilan ishlash, maʼnaviyat va maʼrifat bo‘limi",
          to: "/department/staffs?department_id=2"
        },
        {
          title: "Talabalarga xizmat ko‘rsatish bo‘limi",
          to: "/department/staffs?department_id=3"
        },
        {
          title: "Akademik faoliyat boshqarmasi",
          to: "/department/staffs?department_id=4"
        },
        {
          title: "Nazorat va sifat monitoringi bo‘limi",
          to: "/department/staffs?department_id=5"
        },
        {
          title: "Texnik foydalanish va xo‘jalik bo‘limi",
          to: "/department/staffs?department_id=6"
        },
        {
          title: "Inson resurslarini boshqarish bo‘limi",
          to: "/department/staffs?department_id=7"
        }
      ]
    },
    {
      title: "Faoliyatlar",
      // to: "/activity",
      sidebarKey: "faoliyatlar",
      showInSidebar: true,
      children: [
        { title: "Yoshlar ittifoqi", to: "/activity/yoshlar" },
        { title: "Xotin-qizlar kengashi", to: "/activity/women" },
        { title: "Kasaba uyushmasi", to: "/activity/kasaba" },
        { title: "Tyutorlar faoliyati", to: "/activity/tutoring" },
        { title: "Psixologlar faoliyati", to: "/activity/psychology" },
      ],
    },
    ],
  },

  {
    title: "Taʼlim",
    sidebarKey: "talim",
    children: [
      {
        title: "Taʼlim yo‘nalishlari", to: "/directions",
        sidebarKey: "education-direction",
        showInSidebar: true,
        children: [
          { title: 'Tarix', to: '/direction/tarix' },
          { title: 'Psixologiya', to: '/direction/psixologiya' },
          { title: 'Ingliz tili', to: '/direction/ingliz-tili' },
          { title: 'Rus tili', to: '/direction/rus-tili' },
          { title: 'O‘zbek tili', to: '/direction/ozbek-tili' },
          { title: 'Iqtisodiyot', to: '/direction/iqtisodiyot' },
          { title: 'Moliya va moliyaviy texnologiyalar', to: '/direction/moliya' },
          { title: 'Marketing', to: '/direction/marketing' },
          { title: 'Biznesni boshqarish', to: '/direction/biznes' },
          { title: 'Kiberxavfsizlik injiniringi', to: '/direction/kiberxavfsizlik' },
          { title: 'Dasturiy injiniring', to: '/direction/dasturiy-injiniring' },
          { title: 'Sunʼiy intellekt', to: '/direction/suniy-intellekt' }
        ]
      },
      { title: "Taʼlim portali", to: "/education-portal" },
      { title: "Axborot-resurslar markazi", to: "/library" },
      { title: "Dars jadvali", to: "/academic-calendar" },
      { title: "Kelajakka qadam", to: "/kelajakkaqadam" },
    ],
  },

  {
    title: "Qabul",
    sidebarKey: "qabul",
    children: [
      { title: "Bakalavr", to: "/directions" },
      { title: "Grantlar", to: "/grant" },
      { title: "O‘qishni ko‘chirish", to: "/academic-change" },
      { title: "To‘lov turlari", to: "/payment" },
    ],
  },

  {
    title: "Axborot xizmati",
    sidebarKey: "axborot",
    children: [
      { title: "Media bo‘limi", to: "/press-service" },
      { title: "Yangiliklar", to: "/news" },
      // { title: "Postlar", to: "/posts" },
      { title: "Galeriya", to: "/gallery" },
    ],
  },

  {
    title: "Talabalar hayoti",
    sidebarKey: "studentlife",
    children: [
      { title: "Yotoqxona", to: "/bed-room" },
      // { title: "Tadbirlar", to: "/events" },
      { title: "Klublar", to: "/club" },
    ],
  },
  {
    title: "Vakansiyalar",
    to: "/vacancy"
  },
];
