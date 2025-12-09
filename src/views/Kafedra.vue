<template>
    <!-- <div class="rektor__container rahbariyat-page department-page"> -->
    <div class="department-page">
        <!-- Chap: Tanlangan kafedra haqida ma'lumot -->
        <div class=" department-detail">
            <div class="rektor__info" v-if="selectedDepartment">
                <h2 class="department__title">{{ selectedDepartment.name }}</h2>
                <p class="department__description">{{ selectedDepartment.description }}</p>

                <div class="department__quote">
                    <em>"{{ selectedDepartment.motto }}"</em>
                </div>

                <div class="department-sections-wrapper">
                    <div class="department-section">
                        <h4 class="deparmtent-section--title"><font-awesome-icon
                                :icon="['fas', 'circle-info']" />Kafedra haqida</h4>
                        <p>{{ selectedDepartment.about }}</p>
                    </div>

                    <!-- <div class="department-section">
                            <h4>Kafedra jamoasi</h4>
                            <p>{{ selectedDepartment.about }}</p>
                            <div class="department__team">
                                <div v-for="(member, index) in selectedDepartment.teamMembers" :key="index"
                                    class="department__member">
                                    <img loading="lazy"src="../img/person/sherzod_atamuradov.jpg" :alt="member.name"
                                        class="department__member-photo">
                                    <div class="department__member-info">
                                        <h4 class="department__member-name">{{ member.name }}</h4>
                                        <p class="department__member-position">{{ member.position }}</p>
                                        <a :href="`mailto:${member.email}`" class="department__member-email">{{
                                            member.email }}</a>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                    <div class="department-section">
                        <h4>Taʼlim yoʻnalishlari</h4>
                        <p>{{ selectedDepartment.programs }}</p>
                    </div>
                    <!-- <div class="department-section">
                        <h4>Ilmiy faoliyat</h4>
                        <p>{{ selectedDepartment.research }}</p>
                    </div>
                    <div class="department-section">
                        <h4>Xalqaro hamkorlik</h4>
                        <p>{{ selectedDepartment.cooperation }}</p>
                    </div>
                    <div class="department-section">
                        <h4>Talabalar uchun resurslar</h4>
                        <p>{{ selectedDepartment.resources }}</p>
                    </div>
                    <div class="department-section">
                        <h4>Xalqaro hamkorlik</h4>
                        <p>{{ selectedDepartment.cooperation }}</p>
                    </div> -->

                    <div class="department-section">
                        <h3 class="department__section-title">
                            <svg class="department__section-icon" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path
                                    d="M17 3H3C1.89543 3 1 3.89543 1 5V15C1 16.1046 1.89543 17 3 17H17C18.1046 17 19 16.1046 19 15V5C19 3.89543 18.1046 3 17 3Z"
                                    stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round" />
                                <path d="M1 5L10 10L19 5" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                            Aloqa
                        </h3>

                        <div class="department__section-content">
                            <div class="department__contacts">
                                <div class="department__contact">
                                    <svg class="department__contact-icon" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M17 3H3C1.89543 3 1 3.89543 1 5V15C1 16.1046 1.89543 17 3 17H17C18.1046 17 19 16.1046 19 15V5C19 3.89543 18.1046 3 17 3Z"
                                            stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M1 5L10 10L19 5" stroke="#004AAD" stroke-width="1.5"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <a :href="`mailto:${selectedDepartment.email}`" class="department__contact-link">{{
                                        selectedDepartment.email }}</a>
                                </div>
                                <div class="department__contact">
                                    <svg class="department__contact-icon" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M18 14V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V4C2 2.89543 2.89543 2 4 2H16C17.1046 2 18 2.89543 18 4V6"
                                            stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M18 8L14 8C12.8954 8 12 7.10457 12 6V2" stroke="#004AAD"
                                            stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M7 5H13" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M7 9H13" stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M7 13H10" stroke="#004AAD" stroke-width="1.5"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <a :href="`tel:${selectedDepartment.phone.replace(/ /g, '')}`"
                                        class="department__contact-link">{{ selectedDepartment.phone }}</a>
                                </div>
                                <div class="department__contact">
                                    <svg class="department__contact-icon" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                                            stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M8 5V8H11" stroke="#004AAD" stroke-width="1.5"
                                            stroke-linejoin="round" />
                                        <path d="M19 12L15 16" stroke="#004AAD" stroke-width="1.5"
                                            stroke-linejoin="round" />
                                        <path d="M13 19H19V13" stroke="#004AAD" stroke-width="1.5"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <span class="department__contact-text">{{ selectedDepartment.address }}</span>
                                </div>
                                <div class="department__contact">
                                    <svg class="department__contact-icon" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                                            stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M10 6V10L13 13" stroke="#004AAD" stroke-width="1.5"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <span class="department__contact-text">Dushanba-Juma, 9:00-18:00</span>
                                </div>
                            </div>
                            <div class="department__social">
                                <a v-for="(social, index) in selectedDepartment.socialLinks" :key="index"
                                    :href="social.link" class="department__social-link">
                                    <svg class="department__social-icon" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                                            stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M13 7H15" stroke="#004AAD" stroke-width="1.5"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10Z"
                                            stroke="#004AAD" stroke-width="1.5" stroke-linejoin="round" />
                                    </svg>
                                    <span class="department__social-text">{{ social.name }}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div v-else>
                <p>Iltimos, kafedrani tanlang.</p>
            </div>
        </div>

        <!-- O‘ng: Kafedralar ro‘yxati -->
        <aside class="kafedra-list">
            <h4 class="department__title">KAFEDRALAR</h4>
            <ul>
                <li v-for="dept in departments" :key="dept.slug"
                    :class="{ active: selectedDepartment?.slug === dept.slug }" @click="selectDepartment(dept)">
                    <span class="arrow">»</span> {{ dept.name }}
                </li>
            </ul>
        </aside>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const departments = [
    {
        slug: "iqtisod",
        name: "Iqtisodiyot va menejment kafedrasi",
        description: "Iqtisodiy bilimlarni chuqurlashtirish va menejment bo‘yicha malakali kadrlar tayyorlovchi kafedra.",
        motto: "Yaxshi boshqaruv — taraqqiyot garovi.",
        about: "Kafedra 2025-yilda tashkil etilgan bo'lib, iqtisodiyot, menejment va moliyaviy tahlil sohalarida faoliyat yuritadi. Bizning kafedramizda  50 dan ortiq professor-o'qituvchilar faoliyat ko'rsatadi, jumladan 7 nafar fan doktori, 28 nafar fan nomzodi. Kafedramizda zamonaviy ta'lim texnologiyalari joriy etilgan bo'lib, talabalar amaliy ko'nikmalarga ega bo'lishlari uchun barcha shart-sharoitlar yaratilgan.",
        // about: 'Kafedramizda yuqori malakali professor-o\'qituvchilar faoliyat ko\'rsatadi. Har bir o\'qituvchimiz o\'z sohasining yetakchi mutaxassisi hisoblanadi va xalqaro miqyosdagi ilmiy ishlar olib boradi.Shulardan10 nafar professor-o‘qituvchilar, jumladan 2 nafar fan doktori, 4 nafar fan nomzodi.',
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
        programs: "Iqtisodiyot, Biznesni boshqarish, Marketing, Moliya va moliyaviy texnologiyalar",
        research: "Bozor iqtisodiyoti, investitsiya tahlili, innovatsion menejment yo‘nalishlarida ilmiy izlanishlar.",
        cooperation: "Rossiya, Qozog‘iston, Janubiy Koreya universitetlari bilan hamkorlikda loyihalar.",
        resources: "Elektron darsliklar, statistik ma’lumotlar bazasi, treninglar.",
        email: "info@sharqedu.uz",
        phone: "+998 79 222 07 00",
        address: "2-qavat, 201-xona"
    },
    // {
    //     slug: "filologiya",
    //     name: "Filologiya va tillarni o‘qitish kafedrasi",
    //     description: "Chet tillarini chuqur o‘rgatish, til va adabiyot bo‘yicha tadqiqot olib boruvchi kafedra.",
    //     motto: "Tilni bilgan — dunyoni biladi.",
    //     about: "Ingliz, rus va boshqa tillar bo‘yicha o‘quv dasturlarni ishlab chiqadi.",
    //     team: "15 nafar pedagog, 3 nafar fan nomzodi, 2 nafar chet ellik mutaxassis.",
    //     programs: "Filologiya, Chet tili o‘qitish (ingliz), Rus tili.",
    //     research: "Tilshunoslik, tarjima nazariyasi, adabiyotshunoslik yo‘nalishlari.",
    //     cooperation: "Britaniya Kengashi, Goethe Instituti bilan loyihalar.",
    //     resources: "Audio-video darsliklar, interaktiv mashqlar, test banklar.",
    //     email: "info@sharqedu.uz",
    //     phone: "+998 79 222 07 00",
    //     address: "3-qavat, 301-xona",
    //     teamMembers: [
    //         {
    //             name: "Prof. Xodjayev Alisher Baxodirovich",
    //             position: "Kafedra mudiri, Iqtisod fanlari doktori",
    //             email: "a.xodjayev@universitet.uz",
    //             photo: "https://via.placeholder.com/100"
    //         },
    //         {
    //             name: "Dotsent Karimova Dilfuza Abduvaliyevna",
    //             position: "Menejment kafedrasi dotsenti",
    //             email: "d.karimova@universitet.uz",
    //             photo: "https://via.placeholder.com/100"
    //         },
    //         {
    //             name: "Dotsent Yusupov Jamoliddin Xasanovich",
    //             position: "Moliya va kredit kafedrasi dotsenti",
    //             email: "j.yusupov@universitet.uz",
    //             photo: "https://via.placeholder.com/100"
    //         }
    //     ],
    // },
    {
        slug: "ijtimoiy",
        name: "Gumanitar fanlar kafedrasi",
        description: "Tarix, Psixologiya, Filologiya va till va boshqa gumanitar fanlar bo‘yicha ta’lim beruvchi kafedra.",
        motto: "Jamiyatni tushunish — uni boshqarish kalitidir.",
        about: "Ijtimoiy fanlar asoslari, milliy g‘oya va ma’naviyat asoslari bo‘yicha kurslar.",
        team: "8 nafar o‘qituvchi, 1 nafar falsafa doktori.",
        programs: "Siyosatshunoslik, Tarix, Falsafa.",
        research: "Jamiyat taraqqiyoti, ijtimoiy institutlar va qadriyatlar.",
        cooperation: "O‘zR FA, ijtimoiy fanlar institutlari bilan ilmiy hamkorlik.",
        resources: "Ma’naviy-ma’rifiy materiallar, interaktiv platformalar.",
        email: "info@sharqedu.uz",
        phone: "+998 79 222 07 00",
        address: "3-qavat, 301-xona",
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
    },
    {
        slug: "at",
        name: "Axborot texnologiyalari kafedrasi",
        description: "Dasturlash, tarmoq texnologiyalari va IT-innovatsiyalarni o‘rgatuvchi kafedra.",
        motto: "Texnologiya — kelajakning tili.",
        about: "Kompyuter fanlari, sun’iy intellekt, veb dasturlash yo‘nalishlarida ta’lim beradi.",
        team: "12 nafar o‘qituvchi, 4 nafar texnik mutaxassis.",
        programs: "Kompyuter injiniringi, IT Servis, Axborot xavfsizligi.",
        research: "Sun'iy intellekt, Kiberxavfsizlik injiniringi,Dasturiy injiniring",
        cooperation: "Huawei, EPAM, TUIT bilan texnik hamkorlik.",
        resources: "Laboratoriyalar, server xonalari, onlayn resurslar.",
        email: "info@sharqedu.uz",
        phone: "+998 79 222 07 00",
        address: "5-qavat, 501-xona",
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

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.department-page {
    background: #f9fbff;
    //   padding: 2rem;
    min-height: 100vh;
    display: flex;
    gap: 20px;
// padding-top: 170px;
    .rektor__info {
        text-align: start;
    }

    .department__quote {
        margin-top: 1rem;
        font-style: italic;
        color: #004aad;
        font-size: 16px;
        margin: 0;
        font-weight: 500;
        margin-bottom: 32px;
        margin-top: 50px;
        padding-left: 30px;
        padding-bottom: 24px;
        border-bottom: 1px solid #e2e8f0;
    }

    .department-sections-wrapper h4 {
        color: #004aad;
        margin-bottom: 1.2rem;
    }


    .contact-info p {
        margin: 4px 0;
    }

    .department__title {
        font-size: 18px;
        font-weight: 600;
        color: #004AAD;
        margin-bottom: 24px;
        padding-bottom: 12px;
        border-bottom: 1px solid #e2e8f0;
    }
}

.department-sections-wrapper {
    display: flex;
    gap: 30px;
    flex-direction: column;
}

.department-detail {
    flex: 1 1 70%;
    //   background: #fff;
    padding: 60px 70px;
    border-radius: 12px;
    //   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    height: 80vh;
    overflow-y: scroll;

    .department__title {
        margin: 0;
        // padding-top: 40px;
        border-bottom: none;
        font-size: 28px;
        font-weight: 700;
        color: #1e293b;
        // margin-bottom: 12px;
    }

    .department__description {
        font-size: 16px;
        line-height: 1.6;
        color: #475569;
        margin-bottom: 16px;
    }

    .department-section {
        background-color: #ffffff;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    }

    .deparmtent-section--title {
        font-size: 18px;
        font-weight: 600;
        color: #004AAD;
        margin-top: 0;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
}

.kafedra-list {
    flex: 1 1 25%;
    display: none;
    background: #fff;
    padding: 60px 30px;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

    h4 {
        color: #004aad;
        // margin-bottom: 1rem;
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            padding: 10px 15px;
            border-radius: 6px;
            margin-bottom: 8px;
            cursor: pointer;
            background-color: #f2f6ff;
            display: flex;
            align-items: center;
            transition: all 0.3s;

            .arrow {
                margin-right: 10px;
                color: #004aad;
            }

            &:hover {
                background-color: #dfeeff;
            }

            &.active {
                background-color: #004aad;
                color: white;

                .arrow {
                    color: white;
                }
            }
        }
    }
}

@media (max-width: 1068px) {
    .department-page {
        flex-direction: column-reverse;
    }

    .department-detail {
        padding: 20px;
    }

    .kafedra-list {
        padding: 30px;
        padding-top: 50px;
    }

    main {
        margin-top: 90px !important;
    }
}
</style>