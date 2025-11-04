<template>
    <section class="about">
        <div class="container">
            <div class="row">
                <div class="content">
                    <h2 class="title">
                        O'z sohangizni yetuk mutaxassisi bo'lib,
                        <span class="highlight">Kelajakingizni shakllantiring</span>
                    </h2>
                    <p class="subtitle">
                        📢 Sizni zamonaviy kelajak sari yetaklovchi, innovatsion universitetda oʻqish imkoniyati
                        kutmoqda!
                    </p>
                    <div class="stats">
                        <StatItem :count="12" label="Zamonaviy ta’lim dasturlari" :stepCount="1" />
                        <StatItem :count="2500" label="Talabalar" :stepCount="20" />
                        <StatItem :count="4" label="Fakultetlar" :stepCount="1" />
                    </div>
                </div>

                <div class="images">
<<<<<<< HEAD
                    <img loading="lazy"class="top-img" src="/img/education/sharq1.webp" alt="Campus" />
                    <img loading="lazy"class="bottom-img" src="/img/education/sharq2.webp" alt="Students" />
=======
                    <img loading="lazy"class="top-img" src="../../../public/img/education/sharq1.webp" alt="Campus" />
                    <img loading="lazy"class="bottom-img" src="../../../public/img/education/sharq2.webp" alt="Students" />
>>>>>>> dad943b (update)
                </div>
            </div>

            <div class="cards">
                <InfoCard title="Bizning maqsadimiz"
                    text="Ilm-fan, ta'lim va innovatsiya jarayonlarni uyg'unlashtirgan holda, milliy va xalqaro standartlarga mos yuqori malakali mutaxassislarni tayyorlashdir.">
                    <template #icon>
                        <font-awesome-icon :icon="['fa', 'rocket']" />
                    </template>
                </InfoCard>
                <InfoCard title="Bizning imkoniyatimiz" :text="imkoniyatlar">
                    <!-- icon="👁️"  -->
                    <template #icon>
                        <font-awesome-icon :icon="['fa', 'eye']" />
                    </template>
                </InfoCard>
                <InfoCard title="Bizning qadriyatimiz" :text="qadriyat">
                    <!-- icon="⭐" -->
                    <template #icon>
                        <font-awesome-icon :icon="['fa', 'star']" />
                    </template>
                </InfoCard>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import InfoCard from './InfoCard.vue'
import StatItem from './StatItem.vue'

const imkoniyatlar = `🔹 Har bir talaba uchun individual yondashuv
🔹 Faol talabalar klublari va tashabbuslarga ochiq platforma
🔹 Mentorlik dasturlari va ustozlar bilan bevosita aloqa
🔹 Shaxsiy va kasbiy rivojlanish uchun treninglar, seminarlar va loyihalar
🔹 Har tomonlama zamonaviy va qulay kampus hayoti`

const qadriyat = `Sharqona ma'daniyat bilan zamonaviy bilimlarni uyg'unlashtirish.
"Sharq madaniyati Yevropaga nafaqat ilm-fan, balki yangi ruh va izlanish usullarini ham olib keldi. Bu G‘arb uyg‘onishining asosi bo‘ldi."
— Robert Briffault, g‘arb tarixchisi`
</script>

<style scoped lang="scss">
.about {
    padding: 60px 20px;
    background: #fff;

    .container {
        max-width: 1200px;
        margin: auto;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        align-items: center;
        justify-content: space-between;
    }

    .content {
        flex: 1 1 500px;
    }

    .title {
        font-size: 2.5rem;
        font-weight: 700;
        color: gold;

        .highlight {
            display: block;
            color: #3d5d92;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 10px;
                background: rgba(0, 186, 252, 0.15);
                bottom: 5px;
                left: 0;
                z-index: -1;
            }
        }
    }

    .subtitle {
        margin: 1rem 0;
        font-size: 1.125rem;
        color: #555;
    }

    .stats {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .images {
        position: relative;
        flex: 1 1 400px;
        height: 500px;

        .top-img,
        .bottom-img {
            position: absolute;
            width: 80%;
            border-radius: 10px;
            object-fit: cover;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;

            &:hover {
                transform: translateY(-10px);
            }
        }

        .top-img {
            top: 0;
            left: 0;
            z-index: 2;
        }

        .bottom-img {
            bottom: 0;
            right: 0;
            z-index: 1;
        }
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin-top: 3rem;
    }

    @media (max-width: 992px) {
        .row {
            flex-direction: column;
        }

        .title {
            font-size: 1.8rem;
        }

        .subtitle {
            font-size: 1rem;
        }

        .content {
            flex: 0;
        }

        .images {
            // height: 400px;
            width: 100%;
            margin-top: 2rem;
            position: relative;
        }
    }

    @media (max-width: 576px) {
        .images {
            height: 300px;
        }
    }
}
</style>
