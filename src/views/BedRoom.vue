<template>
    <section class="dormitory-page">
        <div class="container">
            <!-- <div class="breadcrumbs">
                <a href="/">Bosh sahifa</a> / <a href="#">Talabalar uchun</a> / <span>Yotoqxonalar</span>
            </div> -->

            <div class="hero-section">
                <div class="hero-content">
                    <h1 class="hero-title">Talabalar yotoqxonasi</h1>
                    <p class="hero-subtitle">Qulay va xavfsiz yashash sharoitlari</p>
                    <a href="#dormitories" class="cta-button">Yotoqxonalarni ko'rish <i
                            class="fas fa-arrow-down"></i></a>
                </div>
                <div class="hero-image">
                    <img loading="lazy"src="/img/bed-room/main.webp" alt="Yotoqxona binosi">
                    <!-- <img loading="lazy"src="https://new-sharq-vue.vercel.app/assets/main-C9gjlFc1.jpg" alt="Yotoqxona binosi"> -->
                </div>
            </div>

            <div class="stats-section">
                <div class="stat-card">
                    <font-awesome-icon :icon="['fas', 'bed']" />
                    <div>
                        <span class="stat-number">250+</span>
                        <span class="stat-label">Joylar</span>
                    </div>
                </div>
                <div class="stat-card">
                    <font-awesome-icon :icon="['fas', 'building']" />
                    <div>
                        <span class="stat-number">100+</span>
                        <span class="stat-label">Yotoqxona xonalari</span>
                    </div>
                </div>
                <div class="stat-card">
                    <font-awesome-icon :icon="['fas', 'wifi']" />
                    <div>
                        <span class="stat-number">100%</span>
                        <span class="stat-label">WiFi qamrovi</span>
                    </div>
                </div>
                <div class="stat-card">
                    <font-awesome-icon :icon="['fas', 'utensils']" />

                    <div>
                        <span class="stat-number">3</span>
                        <span class="stat-label">Oshxona</span>
                    </div>
                </div>
            </div>

            <!-- <div id="dormitories" class="dormitories-section">
                <h2 class="section-title">Yotoqxona turlari</h2>
                <p class="section-subtitle">Har qanday talaba uchun mos yotoqxonalar</p>

                <div class="dormitory-filters">
                    <div class="filter-group">
                        <label for="type-filter"><i class="fas fa-filter"></i> Turi bo'yicha:</label>
                        <select id="type-filter" v-model="selectedType">
                            <option value="all">Barchasi</option>
                            <option value="standard">Standart</option>
                            <option value="premium">Premium</option>
                            <option value="family">Oilaviy</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label for="gender-filter"><i class="fas fa-venus-mars"></i> Jins bo'yicha:</label>
                        <select id="gender-filter" v-model="selectedGender">
                            <option value="all">Barchasi</option>
                            <option value="male">Erkaklar</option>
                            <option value="female">Ayollar</option>
                        </select>
                    </div>
                </div>

                <div class="dormitory-grid">
                    <div v-for="(dormitory, index) in filteredDormitories" :key="index" class="dormitory-card"
                        :class="dormitory.type">
                        <div class="dormitory-image">
                            <img loading="lazy":src="dormitory.image" :alt="dormitory.name">
                            <div class="price-tag">{{ dormitory.price }}</div>
                        </div>
                        <div class="dormitory-content">
                            <div class="dormitory-header">
                                <h3>{{ dormitory.name }}</h3>
                                <span class="type-badge" :class="dormitory.type">{{ dormitory.typeLabel }}</span>
                            </div>
                            <div class="dormitory-meta">
                                <span><i class="fas fa-venus-mars"></i> {{ dormitory.gender }}</span>
                                <span><i class="fas fa-bed"></i> {{ dormitory.capacity }}</span>
                                <span><i class="fas fa-building"></i> {{ dormitory.building }}</span>
                            </div>
                            <p class="dormitory-description">{{ dormitory.description }}</p>
                            <div class="dormitory-features">
                                <span v-for="(feature, i) in dormitory.features" :key="i">
                                    <i :class="feature.icon"></i> {{ feature.text }}
                                </span>
                            </div>
                            <a :href="dormitory.link" class="view-button">
                                Batafsil <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div> -->

            <div class="gallery-section">
                <h2 class="section-title">Yotoqxona hayoti</h2>
                <p class="section-subtitle">Bizning yotoqxonalarimizdagi hayotdan lavhalar</p>
                <div class="gallery-grid">
                    <div class="gallery-item" v-for="(item, index) in gallery" :key="index">
                        <img loading="lazy":src="item.image" :alt="item.caption">
                        <div class="gallery-caption">{{ item.caption }}</div>
                    </div>
                </div>
            </div>

            <div class="faq-section">
                <h2 class="section-title">Ko'p beriladigan savollar</h2>
                <div class="faq-list">
                    <div class="faq-item" v-for="(faq, index) in faqs" :key="index" @click="toggleFaq(index)"
                        :class="{ active: faq.active }">
                        <div class="faq-question">
                            <h3>{{ faq.question }}</h3>
                            <i class="fas" :class="faq.active ? 'fa-minus' : 'fa-plus'"></i>
                        </div>
                        <div class="faq-answer" v-if="faq.active">
                            <p>{{ faq.answer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import img1 from '/img/bed-room/img1.webp'
import img2 from '/img/bed-room/img2.webp'
import img3 from '/img/bed-room/img3.webp'
import img4 from '/img/bed-room/img4.webp'
import img5 from '/img/bed-room/img5.webp'
import img6 from '/img/bed-room/img6.webp'
import img7 from '/img/bed-room/img7.webp'
export default {
    name: "DormitoryPage",
    data() {
        return {
            selectedType: "all",
            selectedGender: "all",
            dormitories: [
                {
                    name: "1-sonli yotoqxona",
                    type: "standard",
                    typeLabel: "Standart",
                    gender: "Erkaklar",
                    capacity: "2 kishilik xonalar",
                    building: "Bino 1",
                    price: "1 200 000 so'm/oy",
                    description: "Iqtisodiy variant bo'lib, barcha zarur sharoitlar bilan ta'minlangan.",
                    features: [
                        { icon: "fas fa-wifi", text: "Tezkor WiFi" },
                        { icon: "fas fa-utensils", text: "Oshxona" },
                        { icon: "fas fa-dumbbell", text: "Sport maydon" },
                        { icon: "fas fa-book", text: "O'qish xonasi" }
                    ],
                    image: img1,
                    link: "/dormitories/1"
                },
                {
                    name: "2-sonli yotoqxona",
                    type: "premium",
                    typeLabel: "Premium",
                    gender: "Ayollar",
                    capacity: "1 kishilik xonalar",
                    building: "Bino 2",
                    price: "2 500 000 so'm/oy",
                    description: "Qulaylik va shinamlik yuqori darajada ta'minlangan premium yotoqxona.",
                    features: [
                        { icon: "fas fa-wifi", text: "Tezkor WiFi" },
                        { icon: "fas fa-utensils", text: "Oshxona" },
                        { icon: "fas fa-dumbbell", text: "Fitness zal" },
                        { icon: "fas fa-swimming-pool", text: "Basseyn" }
                    ],
                    image: img2,
                    link: "/dormitories/2"
                },
                {
                    name: "3-sonli yotoqxona",
                    type: "family",
                    typeLabel: "Oilaviy",
                    gender: "Aralash",
                    capacity: "Oilaviy kvartiralar",
                    building: "Bino 3",
                    price: "3 800 000 so'm/oy",
                    description: "Oilaviy talabalar uchun mo'ljallangan alohida kvartiralar.",
                    features: [
                        { icon: "fas fa-wifi", text: "Tezkor WiFi" },
                        { icon: "fas fa-utensils", text: "Oshxona" },
                        { icon: "fas fa-child", text: "Bolalar maydoni" },
                        { icon: "fas fa-parking", text: "Avtoturargoh" }
                    ],
                    image: img3,
                    link: "/dormitories/3"
                }
            ],
            gallery: [
                { image: img4, caption: "Yotoqxona hovlisi" },
                { image: img5, caption: "O'qish xonasi" },
                { image: img6, caption: "Sport maydon" },
                { image: img7, caption: "Dam olish zonas" },
                { image: img2, caption: "Oshxona" },
                { image: img1, caption: "Yotoq xonasi" }
            ],
            faqs: [
                {
                    question: "Yotoqxonaga ro'yxatdan o'tish jarayoni qanday?",
                    answer: "Yotoqxonaga ro'yxatdan o'tish uchun universitetning talabalar ishlari bo'limiga murojaat qilishingiz kerak. Talab etiladigan hujjatlar ro'yxati universitet veb-saytida joylashtirilgan.",
                    active: false
                },
                {
                    question: "Yotoqxona uchun to'lovni qanday amalga oshirish mumkin?",
                    answer: "Yotoqxona to'lovlari bank orqali yoki universitetning moliya bo'limida naqd pulda amalga oshirilishi mumkin. To'lovlar har oyning 10-sanasigacha amalga oshirilishi kerak.",
                    active: false
                },
                {
                    question: "Yotoqxonada internet mavjudmi?",
                    answer: "Ha, barcha yotoqxonalarimizda tezkor WiFi internet tarmog'i mavjud. Internetdan foydalanish talabalar uchun bepul.",
                    active: false
                },
                {
                    question: "Yotoqxonaga mehmonlarni qabul qilish mumkinmi?",
                    answer: "Yotoqxonaga mehmonlarni qabul qilish mumkin, ammo ularni oldindan ro'yxatdan o'tkazish va ma'lum vaqt chegaralariga rioya qilish zarur.",
                    active: false
                }
            ]
        };
    },
    computed: {
        filteredDormitories() {
            return this.dormitories.filter(d => {
                const typeMatch = this.selectedType === "all" || d.type === this.selectedType;
                const genderMatch = this.selectedGender === "all" ||
                    (this.selectedGender === "male" && d.gender === "Erkaklar") ||
                    (this.selectedGender === "female" && d.gender === "Ayollar");
                return typeMatch && genderMatch;
            });
        }
    },
    methods: {
        toggleFaq(index) {
            this.faqs[index].active = !this.faqs[index].active;
        }
    }
};
</script>

<style lang="scss" scoped>
.dormitory-page {
    padding: 0;
    padding-top: 50px;
    // font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.breadcrumbs {
    padding: 20px 0;
    font-size: 14px;
    color: #666;

    a {
        color: #3498db;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
            color: #2980b9;
            text-decoration: underline;
        }
    }

    span {
        color: #444;
        font-weight: 500;
    }
}

/* Hero section */
.hero-section {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 60px;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.hero-content {
    flex: 1;
    padding: 40px;
}

.hero-title {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 15px;
    font-weight: 700;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: #7f8c8d;
    margin-bottom: 25px;
    max-width: 500px;
}

.cta-button {
    display: inline-block;
    padding: 12px 25px;
    background: linear-gradient(90deg, #3498db, #2ecc71);
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    transition: all 0.3s;
    box-shadow: 0 4px 10px rgba(52, 152, 219, 0.3);

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(52, 152, 219, 0.4);
    }

    i {
        margin-left: 8px;
        font-size: 0.9rem;
    }
}

.hero-image {
    flex: 1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
}

/* Stats section */
.stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 60px;
}

.stat-card {
    background: white;
    padding: 25px 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    gap: 15px;
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-5px);
    }

    svg {
        font-size: 2rem;
        color: #3498db;
        width: 60px;
        height: 60px;
        background: #f1f9fe;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.stat-number {
    display: block;
    font-size: 1.8rem;
    font-weight: 700;
    color: #2c3e50;
    line-height: 1.2;
}

.stat-label {
    font-size: 0.9rem;
    color: #7f8c8d;
}

/* Dormitories section */
.section-title {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 10px;
    text-align: center;
    position: relative;
    padding-bottom: 15px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: linear-gradient(90deg, #3498db, #2ecc71);
    }
}

.section-subtitle {
    font-size: 1.1rem;
    color: #7f8c8d;
    text-align: center;
    margin-bottom: 40px;
}

.dormitory-filters {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 40px;
    flex-wrap: wrap;

    .filter-group {
        flex: 1;
        min-width: 250px;
        max-width: 300px;

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #34495e;
            font-size: 0.95rem;

            i {
                margin-right: 8px;
                color: #3498db;
            }
        }

        select {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            background-color: #f9f9f9;
            cursor: pointer;
            transition: all 0.3s;

            &:focus {
                outline: none;
                border-color: #3498db;
                box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
            }
        }
    }
}

.dormitory-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

.dormitory-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }

    &.premium {
        border-top: 4px solid #f39c12;
    }

    &.standard {
        border-top: 4px solid #3498db;
    }

    &.family {
        border-top: 4px solid #2ecc71;
    }
}

.dormitory-image {
    position: relative;
    height: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .price-tag {
        position: absolute;
        bottom: 15px;
        right: 15px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 6px 12px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 0.9rem;
    }
}

.dormitory-content {
    padding: 20px;
}

.dormitory-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    h3 {
        margin: 0;
        font-size: 1.3rem;
        color: #2c3e50;
    }

    .type-badge {
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;

        &.premium {
            background: #fef6e6;
            color: #f39c12;
        }

        &.standard {
            background: #e8f4fc;
            color: #3498db;
        }

        &.family {
            background: #e8f8f0;
            color: #2ecc71;
        }
    }
}

.dormitory-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 15px;
    font-size: 0.9rem;
    color: #7f8c8d;

    span {
        display: flex;
        align-items: center;
        gap: 5px;

        i {
            color: #3498db;
        }
    }
}

.dormitory-description {
    color: #555;
    margin-bottom: 20px;
    line-height: 1.7;
}

.dormitory-features {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 0.85rem;
        background: #f8f9fa;
        padding: 5px 10px;
        border-radius: 20px;
        color: #555;

        i {
            color: #3498db;
            font-size: 0.8rem;
        }
    }
}

.view-button {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 8px 20px;
    background: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s;

    &:hover {
        background: #2980b9;

        i {
            transform: translateX(3px);
        }
    }

    i {
        transition: transform 0.3s;
        font-size: 0.8rem;
    }
}

/* Gallery section */
.gallery-section {
    margin-bottom: 60px;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.gallery-item {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    height: 200px;

    &:hover {
        transform: scale(1.03);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .gallery-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px;
        text-align: center;
        font-size: 0.9rem;
    }
}

/* FAQ section */
.faq-section {
    margin-bottom: 60px;
}

.faq-list {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    background: white;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 15px;
    overflow: hidden;
    transition: all 0.3s;

    &.active {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
}

.faq-question {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    h3 {
        margin: 0;
        font-size: 1.1rem;
        color: #2c3e50;
        font-weight: 600;
    }

    i {
        color: #3498db;
        transition: transform 0.3s;
    }
}

.faq-answer {
    padding: 0 20px 20px;
    color: #555;
    line-height: 1.7;
    border-top: 1px solid #eee;
}

/* Responsive styles */
@media (max-width: 992px) {
    .hero-section {
        flex-direction: column;
    }

    .hero-content,
    .hero-image {
        width: 100%;
    }

    .hero-content {
        padding: 30px;
    }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .section-title {
        font-size: 1.7rem;
    }

    .dormitory-grid {
        grid-template-columns: 1fr;
    }

    .dormitory-filters {
        flex-direction: column;
        align-items: center;

        .filter-group {
            width: 100%;
            max-width: 100%;
        }
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 1.8rem;
    }

    .stats-section {
        grid-template-columns: 1fr 1fr;
    }

    .gallery-grid {
        grid-template-columns: 1fr;
    }
}
</style>