<template>
  <div class="departments">
    <!-- Kafedralar ro'yxati -->
    <aside class="departments__sidebar">
      <h2 class="departments__sidebar-title">Kafedralar</h2>
      <ul class="departments__list">
        <li
          v-for="dept in departments"
          :key="dept.slug"
          class="departments__item"
          :class="{'departments__item--active': selectedDepartment?.slug === dept.slug}"
          @click="selectDepartment(dept)"
        >
          <span class="departments__item-icon">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="departments__item-text">{{ dept.name }}</span>
        </li>
      </ul>
    </aside>

    <!-- Tanlangan kafedra haqida ma'lumot -->
    <main class="departments__content">
      <div v-if="selectedDepartment" class="department">
        <header class="department__header">
          <h1 class="department__title">{{ selectedDepartment.name }}</h1>
          <p class="department__description">{{ selectedDepartment.description }}</p>
          <div class="department__motto">
            <svg class="department__motto-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14 2C14 2 9.2 2.8 9.2 7.2C9.2 11 13 11.8 14 11.8C15 11.8 18.8 11 18.8 7.2C18.8 2.8 14 2 14 2Z" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M9.2 7.2C9.2 5.2 7 4 7 4C7 4 4.8 5.2 4.8 7.2C4.8 9.2 7 10 7 10" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M18.8 7.2C18.8 5.2 21 4 21 4C21 4 23.2 5.2 23.2 7.2C23.2 9.2 21 10 21 10" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M14 11.8V22" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M10 16H18" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
            <blockquote class="department__motto-text">"{{ selectedDepartment.motto }}"</blockquote>
          </div>
        </header>

        <div class="department__sections">
          <section class="department__section">
            <h3 class="department__section-title">
              <svg class="department__section-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M10 15V10" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M10 5V6" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
              Kafedra haqida
            </h3>
            <div class="department__section-content">
              <p>{{ selectedDepartment.about }}</p>
              <div class="department__stats">
                <div class="department__stat">
                  <span class="department__stat-number">{{ selectedDepartment.stats.years }}+</span>
                  <span class="department__stat-label">Yillik tajriba</span>
                </div>
                <div class="department__stat">
                  <span class="department__stat-number">{{ selectedDepartment.stats.graduates }}+</span>
                  <span class="department__stat-label">Bitiruvchilar</span>
                </div>
                <div class="department__stat">
                  <span class="department__stat-number">{{ selectedDepartment.stats.projects }}+</span>
                  <span class="department__stat-label">Loyihalar</span>
                </div>
              </div>
            </div>
          </section>

          <section class="department__section">
            <h3 class="department__section-title">
              <svg class="department__section-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M15 10C15 10 17 8 17 6C17 4 15 3 10 3C5 3 3 4 3 6C3 8 5 10 5 10" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M5 10C5 10 3 12 3 14C3 16 5 17 10 17C15 17 17 16 17 14C17 12 15 10 15 10" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
              Kafedra jamoasi
            </h3>
            <div class="department__section-content">
              <p>{{ selectedDepartment.team }}</p>
              <div class="department__team">
                <div v-for="(member, index) in selectedDepartment.teamMembers" :key="index" class="department__member">

                  <img loading="lazy"src="../../public/img/person/sherzod_atamuradov.jpg" :alt="member.name" class="department__member-photo">
                  <div class="department__member-info">
                    <h4 class="department__member-name">{{ member.name }}</h4>
                    <p class="department__member-position">{{ member.position }}</p>
                    <a :href="`mailto:${member.email}`" class="department__member-email">{{ member.email }}</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- <section class="department__section">
            <h3 class="department__section-title">
              <svg class="department__section-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M10 5V10L13 13" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
              Ta'lim yo'nalishlari
            </h3>
            <div class="department__section-content">
              <p>{{ selectedDepartment.programs }}</p>
              <div class="department__programs">
                <div v-for="(program, index) in selectedDepartment.programList" :key="index" class="department__program">
                  <h4 class="department__program-title">{{ program.title }}</h4>
                  <p class="department__program-degree">{{ program.degree }}</p>
                  <p class="department__program-duration">{{ program.duration }}</p>
                  <a :href="program.link" class="department__program-link">Batafsil</a>
                </div>
              </div>
            </div>
          </section> -->

          <section class="department__section">
            <h3 class="department__section-title">
              <svg class="department__section-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
              Ilmiy faoliyat
            </h3>
            <div class="department__section-content">
              <p>{{ selectedDepartment.research }}</p>
              <div class="department__research">
                <div v-for="(project, index) in selectedDepartment.researchProjects" :key="index" class="department__project">
                  <h4 class="department__project-title">{{ project.title }}</h4>
                  <p class="department__project-description">{{ project.description }}</p>
                  <div class="department__project-meta">
                    <span class="department__project-year">{{ project.year }}</span>
                    <span class="department__project-partners">{{ project.partners }}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="department__section">
            <h3 class="department__section-title">
              <svg class="department__section-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M1 10H19" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M10 19V1" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M17 3L3 17" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M17 17L3 3" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
              Xalqaro hamkorlik
            </h3>
            <div class="department__section-content">
              <p>{{ selectedDepartment.cooperation }}</p>
              <div class="department__partners">
                <div v-for="(partner, index) in selectedDepartment.partnerList" :key="index" class="department__partner">
                  <img loading="lazy":src="partner.logo" :alt="partner.name" class="department__partner-logo">
                  <h4 class="department__partner-name">{{ partner.name }}</h4>
                  <p class="department__partner-country">{{ partner.country }}</p>
                </div>
              </div>
            </div>
          </section>

          <section class="department__section">
            <h3 class="department__section-title">
              <svg class="department__section-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M10 6V10L13 13" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
              Talabalar uchun resurslar
            </h3>
            <div class="department__section-content">
              <p>{{ selectedDepartment.resources }}</p>
              <div class="department__resources">
                <a v-for="(resource, index) in selectedDepartment.resourceList" :key="index" :href="resource.link" class="department__resource">
                  <span class="department__resource-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14 11V14H2V11" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                      <path d="M8 12V1" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                      <path d="M11 9L8 12L5 9" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span class="department__resource-text">{{ resource.title }}</span>
                </a>
              </div>
            </div>
          </section>

          <section class="department__section department__section--contact">
            <h3 class="department__section-title">
              <svg class="department__section-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17 3H3C1.89543 3 1 3.89543 1 5V15C1 16.1046 1.89543 17 3 17H17C18.1046 17 19 16.1046 19 15V5C19 3.89543 18.1046 3 17 3Z" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M1 5L10 10L19 5" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
              Aloqa
            </h3>
            <div class="department__section-content">
              <div class="department__contacts">
                <div class="department__contact">
                  <svg class="department__contact-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17 3H3C1.89543 3 1 3.89543 1 5V15C1 16.1046 1.89543 17 3 17H17C18.1046 17 19 16.1046 19 15V5C19 3.89543 18.1046 3 17 3Z" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M1 5L10 10L19 5" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                  <a :href="`mailto:${selectedDepartment.email}`" class="department__contact-link">{{ selectedDepartment.email }}</a>
                </div>
                <div class="department__contact">
                  <svg class="department__contact-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18 14V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V4C2 2.89543 2.89543 2 4 2H16C17.1046 2 18 2.89543 18 4V6" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M18 8L14 8C12.8954 8 12 7.10457 12 6V2" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M7 5H13" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M7 9H13" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M7 13H10" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                  <a :href="`tel:${selectedDepartment.phone.replace(/ /g, '')}`" class="department__contact-link">{{ selectedDepartment.phone }}</a>
                </div>
                <div class="department__contact">
                  <svg class="department__contact-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M8 5V8H11" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M19 12L15 16" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M13 19H19V13" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                  <span class="department__contact-text">{{ selectedDepartment.address }}</span>
                </div>
                <div class="department__contact">
                  <svg class="department__contact-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M10 6V10L13 13" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                  <span class="department__contact-text">Dushanba-Juma, 9:00-18:00</span>
                </div>
              </div>
              <div class="department__social">
                <a v-for="(social, index) in selectedDepartment.socialLinks" :key="index" :href="social.link" class="department__social-link">
                  <svg class="department__social-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M13 7H15" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10Z" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                  <span class="department__social-text">{{ social.name }}</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div v-else class="department__empty">
        <svg class="department__empty-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#004AAD" stroke-width="2" stroke-linejoin="round"/>
          <path d="M24 16V24L30 28" stroke="#004AAD" stroke-width="2" stroke-linejoin="round"/>
        </svg>
        <h3 class="department__empty-title">Kafedrani tanlang</h3>
        <p class="department__empty-text">Chap tomondagi ro'yxatdan kafedralardan birini tanlang yoki qidiruvdan foydalaning</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const departments = [
  {
    slug: "iqtisod",
    name: "Iqtisodiyot va menejment kafedrasi",
    description: "Zamonaviy iqtisodiy bilimlar va boshqaruv texnologiyalarini o'rgatuvchi yetakchi kafedra",
    motto: "Yaxshi boshqaruv — taraqqiyot garovi",
    about: "Kafedra 2001-yilda tashkil etilgan bo'lib, iqtisodiyot, menejment va moliyaviy tahlil sohalarida faoliyat yuritadi. Bizning kafedramizda 10 dan ortiq professor-o'qituvchilar faoliyat ko'rsatadi, jumladan 2 nafar fan doktori, 4 nafar fan nomzodi. Kafedramizda zamonaviy ta'lim texnologiyalari joriy etilgan bo'lib, talabalar amaliy ko'nikmalarga ega bo'lishlari uchun barcha shart-sharoitlar yaratilgan.",
    team: "Kafedramizda yuqori malakali professor-o'qituvchilar faoliyat ko'rsatadi. Har bir o'qituvchimiz o'z sohasining yetakchi mutaxassisi hisoblanadi va xalqaro miqyosdagi ilmiy ishlar olib boradi.",
    programs: "Kafedramiz bakalavriat, magistratura va doktorantura bosqichlarida ta'lim beradi. Asosiy yo'nalishlar: Iqtisodiyot (bakalavr), Menejment (bakalavr), Moliya (magistratura), Biznes boshqaruvi (DBA).",
    research: "Kafedramiz bozor iqtisodiyoti, investitsiya tahlili, innovatsion menejment yo'nalishlarida ilmiy izlanishlar olib boradi. Har yili 50 dan ortiq ilmiy maqolalar nashr etiladi, xalqaro konferensiyalarda ishtirok etiladi.",
    cooperation: "Kafedramiz Rossiya, Qozog'iston, Janubiy Koreya universitetlari bilan hamkorlikda loyihalar olib boradi. Erasmus+, Mevlana va boshqa xalqaro almashinuv dasturlari ishlab chiqilgan.",
    resources: "Talabalar uchun elektron darsliklar, statistik ma'lumotlar bazasi, treninglar tayyorlangan. Har bir talaba Moodle platformasidan foydalanish imkoniyatiga ega.",
    email: "iqtisod@universitet.uz",
    phone: "+998 71 200 10 01",
    address: "1-bino, 4-qavat, 410-xona",
    stats: {
      years: 22,
      graduates: 1500,
      projects: 45
    },
    teamMembers: [
      {
        name: "Prof. Xodjayev Alisher Baxodirovich",
        position: "Kafedra mudiri, Iqtisod fanlari doktori",
        email: "a.xodjayev@universitet.uz",
        photo: "https://via.placeholder.com/100"
      },
      {
        name: "Dotsent Karimova Dilfuza Abduvaliyevna",
        position: "Menejment kafedrasi dotsenti",
        email: "d.karimova@universitet.uz",
        photo: "https://via.placeholder.com/100"
      },
      {
        name: "Dotsent Yusupov Jamoliddin Xasanovich",
        position: "Moliya va kredit kafedrasi dotsenti",
        email: "j.yusupov@universitet.uz",
        photo: "https://via.placeholder.com/100"
      }
    ],
    programList: [
      {
        title: "Iqtisodiyot (tarmoqlar va sohalar bo'yicha)",
        degree: "Bakalavr",
        duration: "4 yil",
        link: "#"
      },
      {
        title: "Biznes boshqaruvi va marketing",
        degree: "Bakalavr",
        duration: "4 yil",
        link: "#"
      },
      {
        title: "Moliya va bank ishi",
        degree: "Magistr",
        duration: "2 yil",
        link: "#"
      }
    ],
    researchProjects: [
      {
        title: "O'zbekistonda yashil iqtisodiyotni rivojlantirish",
        description: "Atrof-muhitni muhofaza qilish bilan iqtisodiy o'sishni uyg'unlashtirish mexanizmlari",
        year: "2022-2024",
        partners: "Toshkent davlat iqtisodiyot universiteti, Berlin iqtisodiyot maktabi"
      },
      {
        title: "Kichik biznes va tadbirkorlikni moliyalashtirish",
        description: "Kichik va o'rta biznes subyektlariga moliyaviy xizmatlarni takomillashtirish",
        year: "2021-2023",
        partners: "O'zbekiston Respublikasi Moliya vazirligi"
      }
    ],
    partnerList: [
      {
        name: "Berlin Iqtisodiyot Universiteti",
        country: "Germaniya",
        logo: "https://via.placeholder.com/80"
      },
      {
        name: "Qozon Federal Universiteti",
        country: "Rossiya",
        logo: "https://via.placeholder.com/80"
      },
      {
        name: "Seul Milliy Universiteti",
        country: "Janubiy Koreya",
        logo: "https://via.placeholder.com/80"
      }
    ],
    resourceList: [
      {
        title: "Dars jadvallari",
        link: "#"
      },
      {
        title: "O'quv qo'llanmalar",
        link: "#"
      },
      {
        title: "Imtihonlar grafigi",
        link: "#"
      },
      {
        title: "Kurs ishlari talablari",
        link: "#"
      }
    ],
    socialLinks: [
      {
        name: "Telegram",
        link: "https://t.me/iqtisod_kafedra"
      },
      {
        name: "Facebook",
        link: "#"
      },
      {
        name: "Instagram",
        link: "#"
      }
    ]
  },
  {
    slug: "filologiya",
    name: "Filologiya va tillarni o'qitish kafedrasi",
    description: "Chet tillarini chuqur o'rgatish, til va adabiyot bo'yicha tadqiqot olib boruvchi kafedra",
    motto: "Tilni bilgan — dunyoni biladi",
    about: "Kafedra 1998-yilda tashkil etilgan bo'lib, ingliz, rus va boshqa tillar bo'yicha o'quv dasturlarni ishlab chiqadi. Kafedramizda 15 nafar pedagog, 3 nafar fan nomzodi, 2 nafar chet ellik mutaxassis faoliyat ko'rsatadi.",
    team: "Kafedramiz tarkibida turli tillar bo'yicha mutaxassislar ishlaydi. Har bir o'qituvchimiz xalqaro sertifikatlarga ega bo'lib, zamonaviy pedagogik usullardan foydalanadi.",
    programs: "Filologiya, Chet tili o'qitish (ingliz), Rus tili va adabiyoti, Sharq tillari kabi yo'nalishlarda ta'lim beriladi.",
    research: "Tilshunoslik, tarjima nazariyasi, adabiyotshunoslik yo'nalishlarida ilmiy izlanishlar olib boriladi. Har yili xalqaro konferensiyalar tashkil etiladi.",
    cooperation: "Britaniya Kengashi, Goethe Instituti, Fransuz madaniyat markazi bilan loyihalar olib boriladi.",
    resources: "Talabalar uchun audio-video darsliklar, interaktiv mashqlar, test banklar tayyorlangan. Til laboratoriyalari mavjud.",
    email: "filologiya@universitet.uz",
    phone: "+998 71 200 10 02",
    address: "2-bino, 2-qavat, 202-xona",
    stats: {
      years: 25,
      graduates: 1200,
      projects: 30
    },
    teamMembers: [
      {
        name: "Prof. Toshmatova Gulnora Xolmirzayevna",
        position: "Kafedra mudiri, Filologiya fanlari doktori",
        email: "g.toshmatova@universitet.uz",
        photo: "https://via.placeholder.com/100"
      },
      {
        name: "Dotsent Smith John",
        position: "Ingliz tili kafedrasi dotsenti",
        email: "j.smith@universitet.uz",
        photo: "https://via.placeholder.com/100"
      }
    ],
    programList: [
      {
        title: "Filologiya (ingliz tili)",
        degree: "Bakalavr",
        duration: "4 yil",
        link: "#"
      },
      {
        title: "Chet tillarini o'qitish metodikasi",
        degree: "Magistr",
        duration: "2 yil",
        link: "#"
      }
    ],
    researchProjects: [
      {
        title: "Zamonaviy til o'qitish metodlari",
        description: "Ingliz tilini chet til sifatida o'qitishning innovatsion usullari",
        year: "2021-2023",
        partners: "Britaniya Kengashi"
      }
    ],
    partnerList: [
      {
        name: "Britaniya Kengashi",
        country: "Birlashgan Qirollik",
        logo: "https://via.placeholder.com/80"
      },
      {
        name: "Goethe Instituti",
        country: "Germaniya",
        logo: "https://via.placeholder.com/80"
      }
    ],
    resourceList: [
      {
        title: "Audio darsliklar",
        link: "#"
      },
      {
        title: "Grammatika qo'llanmalari",
        link: "#"
      }
    ],
    socialLinks: [
      {
        name: "Telegram",
        link: "#"
      }
    ]
  }
];

const selectedDepartment = ref(null);

const selectDepartment = (dept) => {
  selectedDepartment.value = dept;
};

onMounted(() => {
  selectedDepartment.value = departments[0];
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.departments {
  display: flex;
  min-height: 100vh;
  background-color: #f8fafc;

  &__sidebar {
    width: 320px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    padding: 24px;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;

    &-title {
      font-size: 18px;
      font-weight: 600;
      color: #004AAD;
      margin-bottom: 24px;
      padding-bottom: 12px;
      border-bottom: 1px solid #e2e8f0;
    }
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    background-color: #f1f5f9;

    &:hover {
      background-color: #e2e8f0;
    }

    &--active {
      background-color: #004AAD;
      color: white;

      .departments__item-icon {
        color: white;
      }
    }

    &-icon {
      margin-right: 12px;
      color: #004AAD;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    &-text {
      font-size: 15px;
      font-weight: 500;
    }
  }

  &__content {
    flex: 1;
    padding: 32px;
    overflow-y: auto;
  }
}

.department {
  &__header {
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e2e8f0;
  }

  &__title {
    font-size: 28px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 12px;
  }

  &__description {
    font-size: 16px;
    line-height: 1.6;
    color: #475569;
    margin-bottom: 16px;
  }

  &__motto {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    background-color: #f8fafc;
    padding: 16px;
    border-radius: 8px;
    margin-top: 24px;

    &-icon {
      flex-shrink: 0;
    }

    &-text {
      font-size: 16px;
      font-style: italic;
      color: #004AAD;
      margin: 0;
      font-weight: 500;
    }
  }

  &__sections {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__section {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

    &--contact {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
    }
  }

  &__section-title {
    font-size: 18px;
    font-weight: 600;
    color: #004AAD;
    margin-top: 0;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__section-icon {
    flex-shrink: 0;
  }

  &__section-content {
    p {
      font-size: 15px;
      line-height: 1.7;
      color: #475569;
      margin-top: 0;
      margin-bottom: 16px;
    }
  }

  &__stats {
    display: flex;
    gap: 24px;
    margin-top: 24px;
  }

  &__stat {
    text-align: center;
    background-color: #f8fafc;
    padding: 16px;
    border-radius: 8px;
    flex: 1;

    &-number {
      font-size: 24px;
      font-weight: 700;
      color: #004AAD;
      display: block;
      margin-bottom: 4px;
    }

    &-label {
      font-size: 14px;
      color: #64748b;
    }
  }

  &__team {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
    margin-top: 24px;
  }

  &__member {
    display: flex;
    gap: 16px;
    align-items: center;
    background-color: #f8fafc;
    padding: 16px;
    border-radius: 8px;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    }

    &-photo {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }

    &-info {
      flex: 1;
    }

    &-name {
      font-size: 16px;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 4px;
    }

    &-position {
      font-size: 14px;
      color: #64748b;
      margin: 0 0 4px;
    }

    &-email {
      font-size: 13px;
      color: #004AAD;
      text-decoration: none;
      word-break: break-all;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__programs {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    margin-top: 24px;
  }

  &__program {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px;
    transition: all 0.2s ease;

    &:hover {
      border-color: #004AAD;
      transform: translateY(-2px);
    }

    &-title {
      font-size: 16px;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 8px;
    }

    &-degree {
      font-size: 14px;
      color: #64748b;
      margin: 0 0 8px;
    }

    &-duration {
      font-size: 13px;
      color: #94a3b8;
      margin: 0 0 12px;
    }

    &-link {
      font-size: 14px;
      font-weight: 500;
      color: #004AAD;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 4px;

      &:hover {
        text-decoration: underline;
      }

      &::after {
        content: '→';
        display: inline-block;
        transition: transform 0.2s ease;
      }

      &:hover::after {
        transform: translateX(2px);
      }
    }
  }

  &__research {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
  }

  &__project {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px;
    transition: all 0.2s ease;

    &:hover {
      border-color: #004AAD;
    }

    &-title {
      font-size: 16px;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 8px;
    }

    &-description {
      font-size: 14px;
      color: #475569;
      margin: 0 0 12px;
    }

    &-meta {
      display: flex;
      gap: 16px;
      font-size: 13px;
      color: #64748b;
    }
  }

  &__partners {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 24px;
    margin-top: 24px;
  }

  &__partner {
    text-align: center;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 16px;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    }

    &-logo {
      width: 80px;
      height: 80px;
      object-fit: contain;
      margin: 0 auto 12px;
      display: block;
    }

    &-name {
      font-size: 15px;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 4px;
    }

    &-country {
      font-size: 13px;
      color: #64748b;
      margin: 0;
    }
  }

  &__resources {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
    margin-top: 24px;
  }

  &__resource {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    text-decoration: none;
    color: #1e293b;
    transition: all 0.2s ease;
    font-size: 14px;

    &:hover {
      border-color: #004AAD;
      color: #004AAD;
      transform: translateY(-2px);
    }

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__contacts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
    margin-top: 24px;
  }

  &__contact {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;

    &-icon {
      flex-shrink: 0;
    }

    &-link {
      font-size: 14px;
      color: #1e293b;
      text-decoration: none;
      word-break: break-all;

      &:hover {
        color: #004AAD;
        text-decoration: underline;
      }
    }

    &-text {
      font-size: 14px;
      color: #1e293b;
      margin: 0;
    }
  }

  &__social {
    display: flex;
    gap: 12px;
    margin-top: 24px;
    flex-wrap: wrap;
  }

  &__social-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    text-decoration: none;
    color: #1e293b;
    transition: all 0.2s ease;
    font-size: 14px;

    &:hover {
      border-color: #004AAD;
      color: #004AAD;
    }
  }

  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 60vh;
    padding: 40px;

    &-icon {
      margin-bottom: 24px;
    }

    &-title {
      font-size: 20px;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 12px;
    }

    &-text {
      font-size: 15px;
      color: #64748b;
      margin: 0;
      max-width: 400px;
    }
  }
}

@media (max-width: 1024px) {
  .departments {
    flex-direction: column;

    &__sidebar {
      width: 100%;
      height: auto;
      position: static;
    }

    &__content {
      padding: 24px;
    }
  }
}

@media (max-width: 768px) {
  .department {
    &__stats {
      flex-direction: column;
      gap: 12px;
    }

    &__programs {
      grid-template-columns: 1fr;
    }

    &__partners {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
  }
}
</style>