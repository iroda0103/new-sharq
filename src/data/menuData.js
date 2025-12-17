export const menuItems = [
  {
    title: "Universitet",
    children: [
      { title: "Rektor haqida", to: "/rektor" },
      { title: "Tarixi", to: "/history" },
      { title: "Hamkorlar", to: "/partners" },
      { title: "Asosiy me'yoriy hujjatlar", to: "/document" },
      { title: "Litsenziya va sertifikatlar", to: "/sertificat" },
      { title: "360 gradusda binolar tuzilishi", to: "/campus" },
    ],
  },

  {
    title: "Tuzilma",
    children: [      { title: "Rahbariyat", to: "/leadership" },
      {
        title: "Fakultetlar",
        to: "/faculty",
        children: [
          { title: "Texnik va raqamli texnologiyalar fakulteti", to: "/directions?faculty=texnika" },
          { title: "Iqtisod va biznes fakulteti", to: "/directions?faculty=iqtisod" },
          { title: "Gumanitar fanlar fakulteti", to: "/directions?faculty=gumanitar" },
        ],
      },
      {
        title: "Kafedralar",
        to: "/kafedra",
        children: [
          { title: "Iqtisodiyot va menejment kafedrasi", to: "/kafedra?id=iqtisodiyot" },
          { title: "Gumanitar fanlar kafedrasi", to: "/kafedra?id=gumanitar" },
          { title: "Axborot texnologiyalari kafedrasi", to: "/kafedra?id=it" },
        ],
      },
      {
        title: "Bo'limlar",
        to: "/department",
        children: [
          { title: "Moliya-iqtisod bo‘limi", to: "/department/staffs?department_id=1" },
          { title: "Xo‘jalik bo‘limi", to: "/department/staffs?department_id=2" },
          { title: "Axborot texnologiyalari markazi", to: "/department/staffs?department_id=3" },
          { title: "Axborot-resurslar markazi", to: "/department/staffs?department_id=4" },
          { title: "Xodimlar bo‘limi", to: "/department/staffs?department_id=5" },
          { title: "O‘quv-uslubiy bo‘lim", to: "/department/staffs?department_id=6" },
          { title: "Marketing va shartnomalar bo‘limi", to: "/department/staffs?department_id=7" },
          { title: "Talabalarga xizmat ko‘rsatish bo‘limi", to: "/department/staffs?department_id=8" },
        ],
      },
      {
        title: "Faoliyatlar",
        to: "/activity",
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
    title: "Ta'lim",
    children: [
      { title: "Ta'lim yo‘nalishlari", to: "/directions" },
      { title: "Ta'lim portali", to: "/education-portal" },
      { title: "Axborot-resurslar markazi", to: "/library" },
      { title: "Dars jadvali", to: "/academic-calendar" },
    ],
  },

  {
    title: "Qabul",
    children: [
      { title: "Bakalavr", to: "/directions" },
      { title: "Grantlar", to: "/grant" },
      { title: "O‘qishni ko‘chirish", to: "/academic-change" },
      { title: "To‘lov turlari", to: "/payment" },
    ],
  },

  {
    title: "Axborot xizmati",
    children: [
      { title: "Media bo‘limi", to: "/press-service" },
      { title: "Yangiliklar", to: "/news" },
      // { title: "Postlar", to: "/posts" },
      { title: "Galeriya", to: "/gallery" },
    ],
  },

  {
    title: "Talabalar hayoti",
    children: [
      { title: "Yotoqxona", to: "/bed-room" },
      // { title: "Tadbirlar", to: "/events" },
      { title: "Klublar", to: "/club" },
    ],
  },
];
