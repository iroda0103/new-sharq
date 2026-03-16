<template>
  <div class="vacancy-page">
    <h1 class="page-title">Vakansiyalar</h1>

    <!-- Search -->
    <div class="vacancy-search">
      <i class="fa-solid fa-magnifying-glass vacancy-search__icon"></i>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Vakansiya qidirish..."
        class="vacancy-search__input"
      />
    </div>

    <!-- Cards -->
    <div class="row">
      <div
        class="col-md-4"
        v-for="vacancy in filteredVacancies"
        :key="vacancy.id"
      >
        <router-link :to="'/vacancy/' + vacancy.slug" class="event-card">
          <div class="event-card__info">
            <h3 class="event-card__title">{{ vacancy.title }}</h3>
            <div class="event-card__divider"></div>
            <span class="event-card__place">
              <i class="fa-solid fa-location-dot"></i>
              {{ vacancy.location }}
            </span>
          </div>
          <div class="event-card__date">
            <span>{{ vacancy.workDays }}</span>
            <span>{{ vacancy.type === 'full-time' ? "To'liq stavka" : "Yarim stavka" }}</span>
            <span>{{ vacancy.schedule }}</span>
          </div>
        </router-link>
      </div>

      <!-- Empty state -->
      <div v-if="filteredVacancies.length === 0" class="col-12">
        <div class="vacancy-empty">
          <i class="fa-solid fa-briefcase"></i>
          <p>Vakansiya topilmadi</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VacancyList',
  data() {
    return {
      searchQuery: '',
      vacancies: [
        {
          id: 1,
          slug: 'katta-mutaxassis-karyera',
          title: "Katta mutaxassis: Karyera va bandlik bo'limi",
          location: "Sharq universiteti",
          type: "full-time",
          schedule: "9:00–18:00",
          workDays: "Dush–Jum",
          department: "Karyera va bandlik bo'limi",
          description: "Karyera va bandlik bo'limi uchun katta mutaxassis lavozimiga tajribali xodim qidirilmoqda. Talabalarning karyera yo'nalishlarini aniqlash va ish bilan ta'minlash jarayonida faol ishtirok etish talab etiladi.",
          requirements: [
            "Oliy ma'lumot (bakalavr yoki magistr)",
            "Kamida 2 yillik ish tajribasi",
            "O'zbek va ingliz tillarini bilish",
            "Kompyuter savodxonligi (MS Office)",
            "Kommunikativ qobiliyat va jamoaviy ishlash ko'nikmalari"
          ],
          responsibilities: [
            "Talabalarning karyera rejalarini tuzishga yordam berish",
            "Ish beruvchilar bilan hamkorlik o'rnatish",
            "Karyera tadbirlarini tashkil etish",
            "Bandlik bo'yicha ma'lumotlar bazasini yuritish",
            "Bitiruvchilarning ish bilan bandligini monitoring qilish"
          ],
          conditions: [
            "Rasmiy mehnat shartnomasi",
            "Raqobatbardosh maosh",
            "Ish vaqti: 9:00 – 18:00",
            "Dam olish kunlari: Shanba, Yakshanba",
            "Kasbiy o'sish imkoniyati"
          ]
        },
        {
          id: 2,
          slug: 'media-aloqalar-mutaxassisi',
          title: "Media aloqalar bo'limi katta mutaxassisi",
          location: "Sharq universiteti",
          type: "full-time",
          schedule: "9:00–18:00",
          workDays: "Dush–Jum",
          department: "Media aloqalar bo'limi",
          description: "Media aloqalar bo'limida universitet imijini shakllantirish va ommaviy axborot vositalari bilan samarali hamkorlik yuritish bo'yicha katta mutaxassis talab qilinmoqda.",
          requirements: [
            "Jurnalistika yoki ommaviy aloqalar bo'yicha oliy ma'lumot",
            "Media sohasida kamida 3 yillik tajriba",
            "Ijtimoiy tarmoqlarni boshqarish ko'nikmalari",
            "Yozma va og'zaki muloqot qobiliyati",
            "Foto va video materiallar bilan ishlash tajribasi"
          ],
          responsibilities: [
            "Universitet yangiliklari va press-relizlarni tayyorlash",
            "OAV vakillari bilan aloqa yuritish",
            "Ijtimoiy tarmoq kontentini yaratish",
            "Media monitoring va tahlil qilish",
            "Rasmiy veb-saytni yangilab borish"
          ],
          conditions: [
            "Rasmiy mehnat shartnomasi",
            "Raqobatbardosh maosh",
            "Ish vaqti: 9:00 – 18:00",
            "Dam olish kunlari: Shanba, Yakshanba",
            "Ijodiy muhit va professional jamoa"
          ]
        },
        {
          id: 3,
          slug: 'it-boshqarma-boshligi',
          title: "Axborot texnologiyalari boshqarmasi boshlig'i",
          location: "Sharq universiteti",
          type: "full-time",
          schedule: "9:00–18:00",
          workDays: "Dush–Jum",
          department: "Axborot texnologiyalari markazi",
          description: "Universitet axborot texnologiyalari boshqarmasiga rahbarlik qilish, IT infratuzilmasini rivojlantirish va zamonaviy texnologiyalarni joriy etish bo'yicha tajribali mutaxassis kerak.",
          requirements: [
            "IT sohasida oliy ma'lumot",
            "Kamida 5 yillik boshqaruv tajribasi",
            "Tarmoq infratuzilmasi va xavfsizlik bo'yicha bilim",
            "Loyiha boshqarish ko'nikmalari",
            "Jamoani boshqarish tajribasi"
          ],
          responsibilities: [
            "IT infratuzilmani rejalashtirish va boshqarish",
            "IT xodimlarni boshqarish va rivojlantirish",
            "Axborot xavfsizligini ta'minlash",
            "Yangi texnologiyalarni joriy etish",
            "IT byudjetni rejalashtirish va nazorat qilish"
          ],
          conditions: [
            "Rasmiy mehnat shartnomasi",
            "Yuqori darajadagi maosh",
            "Ish vaqti: 9:00 – 18:00",
            "Dam olish kunlari: Shanba, Yakshanba",
            "Professional rivojlanish dasturlari"
          ]
        },
        {
          id: 4,
          slug: 'institutsional-tahlil-mutaxassisi',
          title: "Institutsional tahlil bo'limi katta mutaxassisi",
          location: "Sharq universiteti",
          type: "full-time",
          schedule: "9:00–18:00",
          workDays: "Dush–Jum",
          department: "Institutsional tahlil bo'limi",
          description: "Universitet faoliyatini statistik jihatdan tahlil qilish, reyting ko'rsatkichlarini oshirish va sifat monitoringini amalga oshirish bo'yicha katta mutaxassis talab etilmoqda.",
          requirements: [
            "Statistika, iqtisodiyot yoki tahlil sohasida oliy ma'lumot",
            "Ma'lumotlar tahlili bo'yicha tajriba",
            "Excel, SPSS yoki boshqa tahlil dasturlarini bilish",
            "Analitik fikrlash qobiliyati",
            "Hisobotlar tayyorlash ko'nikmalari"
          ],
          responsibilities: [
            "Universitet faoliyati bo'yicha statistik ma'lumotlarni yig'ish",
            "Tahliliy hisobotlarni tayyorlash",
            "Reyting va akkreditatsiya jarayonlarida ishtirok etish",
            "Ma'lumotlar bazasini yuritish",
            "Sifat ko'rsatkichlarini monitoring qilish"
          ],
          conditions: [
            "Rasmiy mehnat shartnomasi",
            "Raqobatbardosh maosh",
            "Ish vaqti: 9:00 – 18:00",
            "Dam olish kunlari: Shanba, Yakshanba",
            "Malaka oshirish imkoniyati"
          ]
        },
        {
          id: 5,
          slug: 'sanoat-hamkorlik-boshligi',
          title: "Sanoat bilan hamkorlik bo'limi boshlig'i",
          location: "Sharq universiteti",
          type: "full-time",
          schedule: "9:00–18:00",
          workDays: "Dush–Jum",
          department: "Sanoat bilan hamkorlik bo'limi",
          description: "Sanoat korxonalari bilan hamkorlik o'rnatish, talabalar amaliyotini tashkil etish va birgalikdagi loyihalarni boshqarish bo'yicha bo'lim boshlig'i lavozimiga nomzod kerak.",
          requirements: [
            "Biznes yoki menejment sohasida oliy ma'lumot",
            "Kamida 3 yillik hamkorlik tajribasi",
            "Ingliz tilini bilish (IELTS 6.0+)",
            "Muzokara yuritish ko'nikmalari",
            "Loyiha boshqarish tajribasi"
          ],
          responsibilities: [
            "Sanoat korxonalari bilan shartnomalar tuzish",
            "Talabalar amaliyotini tashkil etish",
            "Birgalikdagi loyihalarni boshqarish",
            "Konferensiya va seminarlar o'tkazish",
            "Hamkorlik strategiyasini ishlab chiqish"
          ],
          conditions: [
            "Rasmiy mehnat shartnomasi",
            "Raqobatbardosh maosh",
            "Ish vaqti: 9:00 – 18:00",
            "Dam olish kunlari: Shanba, Yakshanba",
            "Xizmat safari imkoniyatlari"
          ]
        },
        {
          id: 6,
          slug: 'marketing-mutaxassisi',
          title: "Marketing mutaxassisi – Qabul bo'limi",
          location: "Sharq universiteti",
          type: "full-time",
          schedule: "9:00–18:00",
          workDays: "Dush–Jum",
          department: "Qabul bo'limi",
          description: "Qabul bo'limida marketing faoliyatini yuritish, universitetning raqamli marketing strategiyasini amalga oshirish va abituriyentlar jalb qilish bo'yicha mutaxassis talab etiladi.",
          requirements: [
            "Marketing yoki reklama sohasida oliy ma'lumot",
            "Raqamli marketing tajribasi",
            "Grafik dizayn dasturlarini bilish",
            "Ijodiy fikrlash qobiliyati",
            "SMM tajribasi"
          ],
          responsibilities: [
            "Universitet reklama kampaniyalarini rejalashtirish",
            "Ijtimoiy tarmoqlarda kontent yaratish",
            "Ochiq eshiklar kunlarini tashkil etish",
            "Maqsadli auditoriya bilan ishlash",
            "Marketing tahlil va hisobotlarni tayyorlash"
          ],
          conditions: [
            "Rasmiy mehnat shartnomasi",
            "Raqobatbardosh maosh",
            "Ish vaqti: 9:00 – 18:00",
            "Dam olish kunlari: Shanba, Yakshanba",
            "Ijodiy erkinlik"
          ]
        },
        {
          id: 7,
          slug: 'ilmiy-tadqiqot-orinbosar',
          title: "Ilmiy-tadqiqot bo'limi boshlig'i o'rinbosari",
          location: "Sharq universiteti",
          type: "full-time",
          schedule: "9:00–18:00",
          workDays: "Dush–Jum",
          department: "Ilmiy-tadqiqot bo'limi",
          description: "Ilmiy-tadqiqot bo'limi rahbari o'rinbosari sifatida ilmiy loyihalarni nazorat qilish, yosh olimlarni qo'llab-quvvatlash va xalqaro ilmiy hamkorlikni rivojlantirish.",
          requirements: [
            "PhD yoki DSc ilmiy darajasi",
            "Kamida 5 yillik ilmiy faoliyat tajribasi",
            "Xalqaro jurnallarda maqolalar chop etilgan",
            "Grant loyihalarini boshqarish tajribasi",
            "Ilmiy jamoani boshqarish ko'nikmalari"
          ],
          responsibilities: [
            "Ilmiy tadqiqot loyihalarini nazorat qilish",
            "Yosh olimlarni qo'llab-quvvatlash",
            "Xalqaro ilmiy hamkorlikni rivojlantirish",
            "Ilmiy konferensiyalarni tashkil etish",
            "Grant arizalarini tayyorlash"
          ],
          conditions: [
            "Rasmiy mehnat shartnomasi",
            "Yuqori darajadagi maosh",
            "Ish vaqti: 9:00 – 18:00",
            "Dam olish kunlari: Shanba, Yakshanba",
            "Ilmiy safari imkoniyatlari"
          ]
        },
        // {
        //   id: 8,
        //   slug: 'menejer-tibbiyot',
        //   title: "Menejer – Tibbiyot maktabi",
        //   location: "Sharq universiteti, Tibbiyot maktabi",
        //   type: "full-time",
        //   schedule: "9:00–18:00",
        //   workDays: "Dush–Jum",
        //   department: "Tibbiyot maktabi",
        //   description: "Tibbiyot maktabi faoliyatini muvofiqlashtirish, o'quv jarayonini nazorat qilish va xodimlar bilan samarali ishlash bo'yicha menejer lavozimiga nomzod kerak.",
        //   requirements: [
        //     "Menejment yoki tibbiyot sohasida oliy ma'lumot",
        //     "Kamida 2 yillik boshqaruv tajribasi",
        //     "O'zbek va rus tillarini bilish",
        //     "Tashkiliy qobiliyat",
        //     "Muloqot va muvofiqlashtirish ko'nikmalari"
        //   ],
        //   responsibilities: [
        //     "Tibbiyot maktabi faoliyatini muvofiqlashtirish",
        //     "O'quv jarayonini nazorat qilish",
        //     "Xodimlar bilan ishlash",
        //     "Hisobotlarni tayyorlash",
        //     "Jihozlar va resurslarni boshqarish"
        //   ],
        //   conditions: [
        //     "Rasmiy mehnat shartnomasi",
        //     "Raqobatbardosh maosh",
        //     "Ish vaqti: 9:00 – 18:00",
        //     "Dam olish kunlari: Shanba, Yakshanba",
        //     "Tibbiy sug'urta"
        //   ]
        // },
        {
          id: 9,
          slug: 'sport-murabbiy',
          title: "Sport murabbiyi mutaxassisi",
          location: "Sharq universiteti",
          type: "part-time",
          schedule: "14:00–20:00",
          workDays: "Dush–Shan",
          department: "Sport bo'limi",
          description: "Universitet sport bo'limida talabalar bilan mashg'ulotlar o'tkazish, sport jamoalarini tayyorlash va sport tadbirlarini tashkil etish bo'yicha murabbiy mutaxassis kerak.",
          requirements: [
            "Jismoniy tarbiya va sport sohasida oliy ma'lumot",
            "Sport bo'yicha murabbiylik guvohnomasi",
            "Kamida 2 yillik murabbiylik tajribasi",
            "Sport musobaqalarini tashkil etish tajribasi",
            "Jamoaviy sport turlarida tajriba"
          ],
          responsibilities: [
            "Sport mashg'ulotlarini o'tkazish",
            "Talabalar sport jamoalarini tayyorlash",
            "Sport tadbirlarini tashkil etish",
            "Sport inventarini nazorat qilish",
            "Talabalar sog'ligini monitoring qilish"
          ],
          conditions: [
            "Rasmiy mehnat shartnomasi",
            "Raqobatbardosh maosh",
            "Ish vaqti: 14:00 – 20:00",
            "Dam olish kuni: Yakshanba",
            "Sport zali va jihozlardan foydalanish"
          ]
        }
      ]
    }
  },
  computed: {
    filteredVacancies() {
      if (!this.searchQuery) return this.vacancies
      const q = this.searchQuery.toLowerCase()
      return this.vacancies.filter(v =>
        v.title.toLowerCase().includes(q) ||
        v.department.toLowerCase().includes(q) ||
        v.location.toLowerCase().includes(q)
      )
    }
  }
}
</script>

<style lang="scss">
.vacancy-page {
  padding-bottom: 40px;
}
.row{
  gap:0;
}
.vacancy-search {
  position: relative;
  margin-bottom: 24px;
  max-width: 400px;

  &__icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--black-4);
    font-size: 14px;
  }

  &__input {
    width: 100%;
    height: 44px;
    padding: 0 14px 0 40px;
    border: 1px solid var(--black-7);
    background: var(--black-9);
    border-radius: 12px;
    font-size: 15px;
    color: var(--black-1);
    font-family: "Montserrat", sans-serif;
    transition: all 0.3s ease;

    &::placeholder {
      color: var(--black-5);
    }

    &:focus {
      outline: none;
      border-color: var(--blue-4);
      background: #fff;
      box-shadow: 0 0 0 3px rgba(82, 148, 229, 0.15);
    }
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
}

.col-md-4 {
  width: 33.333%;
  padding: 0 12px;
  margin-bottom: 24px;
}

.event-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 220px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  border: 1px solid var(--black-8);
  box-shadow: 0px 0px 30px 0px rgba(7, 12, 28, 0.04);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    // background: linear-gradient(90deg, #3E7CB5, #39A589);
    background:linear-gradient(135deg, #00455e 0%, #1b6ae9 100%);
    transition: height 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
    border-color: transparent;

    &::before {
      height: 5px;
    }

    .event-card__title {
      color: var(--blue-3);
    }
  }

  &__info {
    padding: 22px 20px 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 16px;
    font-weight: 650;
    color: var(--blue-1);
    line-height: 1.45;
    margin-bottom: 12px;
    flex: 1;
    transition: color 0.3s ease;
  }

  &__divider {
    height: 1px;
    background: var(--black-8);
    margin-bottom: 12px;
  }

  &__place {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--black-3);
    line-height: 1.4;

    i {
      color: var(--blue-3);
      font-size: 13px;
      flex-shrink: 0;
    }
  }

  &__date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    background: var(--black-9);
    border-top: 1px solid var(--black-8);

    span {
      font-size: 13px;
      color: var(--black-3);
      font-weight: 500;
      position: relative;

      &:not(:last-child)::after {
        content: "";
        position: absolute;
        right: -1px;
        top: 50%;
        transform: translate(8px, -50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--black-6);
      }
    }
  }
}

.vacancy-empty {
  text-align: center;
  padding: 60px 20px;

  i {
    font-size: 48px;
    color: var(--black-7);
    margin-bottom: 16px;
    display: block;
  }

  p {
    font-size: 16px;
    color: var(--black-4);
  }
}

@media (max-width: 991px) {
  .col-md-4 {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .col-md-4 {
    width: 100%;
  }

  .vacancy-search {
    max-width: 100%;
  }
}
</style>
