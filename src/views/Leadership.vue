<!-- <template>
    <div class="rahbariyat-page">
        <div class="rahbariyat-container">
            <div class="rahbariyat-detail" v-if="selected">
                <h2>{{ selected.lavozim }}</h2>
                <img loading="lazy":src="selected.img" :alt="selected.ism" class="rahbariyat-photo" />
                <h3>{{ selected.ism }}</h3>
                <p>{{ selected.bio }}</p>
            </div>

            <aside class="rahbariyat-list ">
                <h4>RAHBARIYAT</h4>
                <ul>
                    <li v-for="rahbar in rahbarlar" :key="rahbar.id" :class="{ active: selected.id === rahbar.id }"
                        @click="selectRahbar(rahbar)">
                        <span class="arrow">»</span> {{ rahbar.lavozim }}
                    </li>
                </ul>
            </aside>
        </div>
    </div>
</template> -->
<template>
    <div class=" rektor__container rahbariyat-page ">
        <div class="rektor__content rahbariyat-detail">
            <!-- <div class="rahbariyat-container rektor__image-wrapper">
                <img loading="lazy"class="rektor__image" src="../img/person/sherzod_atamuradov.webp"
                    alt="Universitet rektori rasmi" />
            </div> -->
            <div class="rektor__info">
                <h2 class="rektor__title">Universitet {{ selected.lavozim }}</h2>
                <img loading="lazy"class="rektor__image" :src="selected.img" alt="Universitet rektori rasmi" />
                <!-- <img loading="lazy"class="rektor__image" src="../img/person/sherzod_atamuradov.webp" alt="Universitet rektori rasmi" /> -->
                <h3 class="rektor__name"> {{ selected.ism }}</h3>
                <p class="rektor__description">
                    {{ selected.bio }}
                    &nbsp;&nbsp;&nbsp;{{ selected.description }}
                </p>
                <p class="rektor__quote">
                    <em>"Yoshlar bizning kelajagimizdir. Ularning ilmli, vatanparvar va faol bo‘lishi uchun biz barcha
                        sharoitlarni yaratishga intilamiz."</em>
                </p>
            </div>

        </div>
        <!-- O‘ng ro‘yxat -->
        <aside class="rahbariyat-list ">
            <h4>RAHBARIYAT</h4>
            <ul>
                <li v-for="rahbar in rahbarlar" :key="rahbar.id" :class="{ active: selected.id === rahbar.id }"
                    @click="selectRahbar(rahbar)">
                    <span class="arrow">»</span> {{ rahbar.lavozim }}
                   
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
export default {
    name: "Rahbariyat",
    data() {
        return {
            rahbarlar: [
                {
                    id: 1,
                    ism: "Sherzod Atamurodov",
                    lavozim: "Rektor",
                    img: "/img/person/sherzod_atamuradov.webp",
                    description: `  `,
                    bio: " Sharq Universiteti rektori Phd. Sherzod Akramovich Atamurodov 20 yildan ortiq ta’lim sohasida faoliyat yuritib kelmoqda. O`z faoliyati davomida ko‘plab ilmiy maqolalar, darsliklar yozgan va bir necha xalqaro loyihalarga asos solgan. Uning boshqaruvi ostida universitet yangi rivojlanish bosqichiga chiqmoqda.",
                },
                {
                    id: 2,
                    ism: "Botirova Adiba",
                    lavozim: "O‘quv ishlari bo‘yicha prorektor",
                    img: "/img/person/not_found_user.webp",
                    bio: "",
                    description: `O’zbekiston Respublikasi qonunlari, Prezident farmonlari va farmoyishlari, Oliy Majlis va Vazirlar Mahkamasining ta’lim va kadrlar tayyorlash sohasidagi qarorlarini amalga oshirishni tashkil etish;
Davlat ta’lim standartlari asosida o’quv, ilmiy, moliyaviy va ma’naviy- tarbiya ishlarini tashkil etish va malakali kadrlar tayyorlashni ta’minlash;
Davlat ta’lim standartlariga muvofiq bilimlar mazmuni va tayyorgarlik darajasiga qo’yiladigan talablar majmuasini barcha dekanlar va bo’limlar, kafedra mudirlari va pedagog o’qituvchilarning to’liq bilishini ta’minlash;
Mutasaddi yuqori tashkilotlarning buyruqlarini, farmoyishlari va ko’rsatmalarini, o’quv-tarbiya jarayonlariga oid masalalar bo’yicha universitet Ilmiy kengashi qarorlari va rektor buyruqlarining bajarilishini tashkil qilish;
Ilg’or mamlakatlar ta’lim tizimining rivojlanish tendensiyalarini o’rganish, “Ta’lim to’g’risida”gi qonun, “Kadrlar tayyorlash Milliy dasturi” va boshqa ta’limga oid qonunlar ko’rsatilgan vazifalarni amalga oshirish borasidagi uslub va vositalarni ishlab chiqish va ularning amalga oshirilishini ta’minlash;
O’quv-tarbiya jarayonida o’qitishning ilg’or shakllarini, shu jumladan masofadan turib o’qitish, yangi pedagogik va axborot-kommunikatsiya texnologiyalarini joriy etish va ulardan samarali foydalanishni tashkil etish;
Faoliyat yo’nalishi bo’yicha takliflar tayyorlash va ishlarni tashkil etish;`,
                },
                {
                    id: 3,
                    ism: "Qodirov Bektosh",
                    lavozim: "Yoshlar va ma’naviy-ma’rifiy ishlar prorektori",
                    img: "/img/person/bektosh_qodirov.webp",
                    bio: "",
                    description: `   O’zbekiston Respublikasi qonunlari, Prezident farmonlari va farmoyishlari, Oliy Majlis va Vazirlar Mahkamasining ta’lim va kadrlar tayyorlash sohasidagi qarorlarini amalga oshirishni tashkil etish;
Davlat ta’lim standartlari asosida o’quv, ilmiy, moliyaviy va ma’naviy- tarbiya ishlarini tashkil etish va malakali kadrlar tayyorlashni ta’minlash;
Davlat ta’lim standartlariga muvofiq bilimlar mazmuni va tayyorgarlik darajasiga qo’yiladigan talablar majmuasini barcha dekanlar va bo’limlar, kafedra mudirlari va pedagog o’qituvchilarning to’liq bilishini ta’minlash;
Mutasaddi yuqori tashkilotlarning buyruqlarini, farmoyishlari va ko’rsatmalarini, o’quv-tarbiya jarayonlariga oid masalalar bo’yicha universitet Ilmiy kengashi qarorlari va rektor buyruqlarining bajarilishini tashkil qilish;`,
                },
                // Yana qo‘shishingiz mumkin
            ],
            selected: 1,
        };
    },
    mounted() {
        this.selected = this.rahbarlar[0]; // birinchisi default
    },
    methods: {
        selectRahbar(rahbar) {
            this.selected = rahbar;
        },
    },
};
</script>

<style scoped lang="scss">
.rahbariyat-page {
    background: #f9fbff;
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    gap: 20px;
    padding-top: 140px;

    .rektor__image {
        width: 300px;
        margin: 0 auto;
    }

    .rektor__info {
        text-align: center;
    }

    .rektor__quote,
    .rektor__description {
        text-align: start;
    }
}

.rahbariyat-container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
}

.rahbariyat-detail {
    flex: 1 1 60%;
    background: #fff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

    h2 {
        color: #004aad;
        margin-bottom: 1rem;
    }

    h3 {
        margin-top: 1rem;
        font-size: 1.2rem;
        color: #222;
    }

    p {
        margin-top: 1rem;
        line-height: 1.6;
        color: #444;
    }

    .rahbariyat-photo {
        width: 250px;
        height: auto;
        border-radius: 10px;
        margin-top: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
}

.rahbariyat-list {
    flex: 1 1 30%;
    background: #fff;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

    h4 {
        margin-bottom: 1rem;
        font-size: 1rem;
        color: #004aad;
        font-weight: bold;
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

@media (max-width: 768px) {
    .rahbariyat-page {
        flex-direction: column-reverse;
        // padding-top: 80px;
    }

    .rahbariyat-container {
        flex-direction: column;
    }

    .rahbariyat-detail,
    .rahbariyat-list {
        flex: 1 1 100%;
    }

    .rahbariyat-detail {
        text-align: center;

        .rahbariyat-photo {
            margin: 1rem auto;
        }
    }
}
</style>
