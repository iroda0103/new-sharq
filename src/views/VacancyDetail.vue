<template>
  <div class="vacancy-detail" v-if="vacancy">
    <!-- Breadcrumb -->
    <div class="vacancy-detail__breadcrumb">
      <router-link to="/vacancy">Vakansiyalar</router-link>
      <i class="fa-solid fa-chevron-right"></i>
      <span>{{ vacancy.title }}</span>
    </div>

    <!-- Title -->
    <h1 class="vacancy-detail__title">{{ vacancy.title }}</h1>

    <!-- Meta info -->
    <div class="vacancy-detail__meta">
      <div class="vacancy-detail__meta-item">
        <i class="fa-solid fa-location-dot"></i>
        <span>{{ vacancy.location }}</span>
      </div>
      <div class="vacancy-detail__meta-item">
        <i class="fa-solid fa-briefcase"></i>
        <span>{{ vacancy.type === 'full-time' ? "To'liq stavka" : "Yarim stavka" }}</span>
      </div>
      <div class="vacancy-detail__meta-item">
        <i class="fa-regular fa-clock"></i>
        <span>{{ vacancy.schedule }}</span>
      </div>
      <div class="vacancy-detail__meta-item">
        <i class="fa-solid fa-calendar-days"></i>
        <span>{{ vacancy.workDays }}</span>
      </div>
      <div class="vacancy-detail__meta-item">
        <i class="fa-solid fa-building"></i>
        <span>{{ vacancy.department }}</span>
      </div>
    </div>

    <!-- Description -->
    <div class="vacancy-detail__section">
      <h2 class="vacancy-detail__section-title">Lavozim haqida</h2>
      <p class="vacancy-detail__text">{{ vacancy.description }}</p>
    </div>

    <!-- Requirements -->
    <div class="vacancy-detail__section">
      <h2 class="vacancy-detail__section-title">Talablar</h2>
      <ul class="vacancy-detail__list">
        <li v-for="(req, i) in vacancy.requirements" :key="i">{{ req }}</li>
      </ul>
    </div>

    <!-- Responsibilities -->
    <div class="vacancy-detail__section">
      <h2 class="vacancy-detail__section-title">Mas'uliyatlar</h2>
      <ul class="vacancy-detail__list">
        <li v-for="(resp, i) in vacancy.responsibilities" :key="i">{{ resp }}</li>
      </ul>
    </div>

    <!-- Conditions -->
    <div class="vacancy-detail__section">
      <h2 class="vacancy-detail__section-title">Ish sharoitlari</h2>
      <ul class="vacancy-detail__list vacancy-detail__list--check">
        <li v-for="(cond, i) in vacancy.conditions" :key="i">{{ cond }}</li>
      </ul>
    </div>

    <!-- Apply CTA -->
    <div class="vacancy-detail__cta">
      <div class="vacancy-detail__cta-content">
        <h3>Ushbu lavozimga qiziqyapsizmi?</h3>
        <p>Ariza topshiring va bizning jamoaga qo'shiling!</p>
      </div>
      <router-link
        :to="{ path: '/vacancy/apply', query: { position: vacancy.title } }"
        class="vacancy-detail__cta-btn"
      >
        <i class="fa-solid fa-paper-plane"></i>
        Ariza topshirish
      </router-link>
    </div>
  </div>

  <!-- Not found -->
  <div v-else class="vacancy-detail vacancy-detail--empty">
    <i class="fa-solid fa-circle-exclamation"></i>
    <h2>Vakansiya topilmadi</h2>
    <router-link to="/vacancy" class="vacancy-detail__back-link">
      <i class="fa-solid fa-arrow-left"></i>
      Vakansiyalar ro'yxatiga qaytish
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'VacancyDetail',
  data() {
    return {
      vacancy: null,
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
        {
          id: 8,
          slug: 'menejer-tibbiyot',
          title: "Menejer – Tibbiyot maktabi",
          location: "Sharq universiteti, Tibbiyot maktabi",
          type: "full-time",
          schedule: "9:00–18:00",
          workDays: "Dush–Jum",
          department: "Tibbiyot maktabi",
          description: "Tibbiyot maktabi faoliyatini muvofiqlashtirish, o'quv jarayonini nazorat qilish va xodimlar bilan samarali ishlash bo'yicha menejer lavozimiga nomzod kerak.",
          requirements: [
            "Menejment yoki tibbiyot sohasida oliy ma'lumot",
            "Kamida 2 yillik boshqaruv tajribasi",
            "O'zbek va rus tillarini bilish",
            "Tashkiliy qobiliyat",
            "Muloqot va muvofiqlashtirish ko'nikmalari"
          ],
          responsibilities: [
            "Tibbiyot maktabi faoliyatini muvofiqlashtirish",
            "O'quv jarayonini nazorat qilish",
            "Xodimlar bilan ishlash",
            "Hisobotlarni tayyorlash",
            "Jihozlar va resurslarni boshqarish"
          ],
          conditions: [
            "Rasmiy mehnat shartnomasi",
            "Raqobatbardosh maosh",
            "Ish vaqti: 9:00 – 18:00",
            "Dam olish kunlari: Shanba, Yakshanba",
            "Tibbiy sug'urta"
          ]
        },
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
  created() {
    const slug = this.$route.params.slug
    this.vacancy = this.vacancies.find(v => v.slug === slug) || null
  },
  watch: {
    '$route.params.slug'(newSlug) {
      this.vacancy = this.vacancies.find(v => v.slug === newSlug) || null
    }
  }
}
</script>

<style scoped lang="scss">
.vacancy-detail {
  padding-bottom: 40px;

  &--empty {
    text-align: center;
    padding: 80px 20px;

    i {
      font-size: 56px;
      color: var(--black-7);
      margin-bottom: 16px;
      display: block;
    }

    h2 {
      font-size: 22px;
      font-weight: 650;
      color: var(--black-3);
      margin-bottom: 20px;
    }
  }

  &__breadcrumb {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    font-size: 14px;

    a {
      color: var(--blue-3);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;

      &:hover {
        color: var(--blue-2);
      }
    }

    i {
      font-size: 10px;
      color: var(--black-5);
    }

    span {
      color: var(--black-4);
    }
  }

  &__title {
    font-size: 26px;
    font-weight: 700;
    color: var(--blue-1);
    line-height: 1.35;
    margin-bottom: 20px;
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 32px;
  }

  &__meta-item {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--black-9);
    border: 1px solid var(--black-8);
    border-radius: 10px;
    font-size: 14px;
    color: var(--black-2);
    font-weight: 500;

    i {
      color: var(--blue-3);
      font-size: 14px;
    }
  }

  &__section {
    margin-bottom: 28px;
  }

  &__section-title {
    font-size: 18px;
    font-weight: 650;
    color: var(--blue-2);
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--black-8);
    display: inline-block;
  }

  &__text {
    font-size: 15px;
    line-height: 1.7;
    color: var(--black-2);
  }

  &__list {
    padding-left: 20px;

    li {
      list-style: disc;
      font-size: 15px;
      line-height: 1.8;
      color: var(--black-2);
      padding-left: 4px;
      margin-bottom: 4px;
    }

    &--check {
      padding-left: 0;

      li {
        list-style: none;
        padding-left: 28px;
        position: relative;

        &::before {
          content: "\f00c";
          font-family: "Font Awesome 6 Free";
          font-weight: 900;
          position: absolute;
          left: 0;
          top: 3px;
          font-size: 13px;
          color: var(--green-1);
        }
      }
    }
  }

  &__cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-top: 36px;
    padding: 24px 28px;
    background: linear-gradient(135deg, rgba(42, 64, 122, 0.06), rgba(82, 148, 229, 0.08));
    border: 1px solid var(--black-8);
    border-radius: 14px;
  }

  &__cta-content {
    h3 {
      font-size: 18px;
      font-weight: 650;
      color: var(--blue-1);
      margin-bottom: 4px;
    }

    p {
      font-size: 14px;
      color: var(--black-3);
    }
  }

  &__cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 28px;
    background: linear-gradient(135deg, #0045DE, #1B6AE9);
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
      opacity: 0.9;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 69, 222, 0.3);
    }

    i {
      font-size: 14px;
    }
  }

  &__back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    color: var(--blue-2);
    border: 1px solid var(--blue-4);
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(82, 148, 229, 0.08);
    }
  }
}

@media (max-width: 768px) {
  .vacancy-detail {
    &__title {
      font-size: 20px;
    }

    &__meta {
      gap: 8px;
    }

    &__meta-item {
      font-size: 13px;
      padding: 6px 12px;
    }

    &__cta {
      flex-direction: column;
      text-align: center;
    }

    &__breadcrumb span {
      display: none;
    }
  }
}
</style>
