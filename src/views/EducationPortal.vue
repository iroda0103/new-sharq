<template>
    <section class="edu-portal">
        <div class="container">
            <header class="portal-header">
                <div class="logo">
                    <!-- <img loading="lazy"src="../img/logo_sharq.png" alt="SHarq Universiteti"> -->
                    <h1 class="page-title">Ta'lim Portali</h1>
                </div>
                <!-- <p>Oliy ta'lim jarayonlarini boshqarish, shu jumladan o'quv, ilmiy va moliyaviy funksiyalar uchun yagona
                    axborot tizimi</p> -->
            </header>

            <div class="portal-features">
                <div class="feature-card" v-for="(feature, index) in features" :key="index">
                    <div class="feature-icon" :class="`feature-${index + 1}`">
                        <i :class="feature.icon"></i>
                    </div>
                    <h3>{{ feature.title }}</h3>
                    <p>{{ feature.description }}</p>
                    <a :href="feature.link" class="feature-link">Batafsil <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>

            <div class="portal-actions">
                <a href="https://hemis.uz" target="_blank" class="portal-button primary">
                    <i class="fas fa-sign-in-alt"></i> Portalgа kirish
                </a>
                <a href="#" class="portal-button secondary">
                    <i class="fas fa-question-circle"></i> Qo'llanma
                </a>
            </div>

            <div class="portal-news">
                <h2>Yangiliklar va e'lonlar</h2>
                <div class="news-container">
                    <div class="news-card" v-for="(news, index) in newsItems" :key="index">
                        <div class="news-date">
                            <span class="day">{{ news.day }}</span>
                            <span class="month">{{ news.month }}</span>
                        </div>
                        <div class="news-content">
                            <h4>{{ news.title }}</h4>
                            <p>{{ news.summary }}</p>
                            <a href="#" class="news-link">Batafsil o'qish</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="test-hemis--wrapper">
                <!-- <TestPortal></TestPortal> -->

            </div>
        </div>
    </section>
</template>

<script>
import TestPortal from './TestPortal.vue'
export default {
    name: "EducationPortal",
    components: {
        TestPortal
    },
    data() {
        return {
            features: [
                {
                    icon: "fas fa-user-graduate",
                    title: "Talaba kabineti",
                    description: "Shaxsiy kabinet orqali o'quv jarayonini kuzatish va boshqarish",
                    link: "#"
                },
                {
                    icon: "fas fa-calendar-alt",
                    title: "Dars jadvali",
                    description: "Kunlik, haftalik dars jadvali va o'zgarishlarni ko'rish",
                    link: "#"
                },
                {
                    icon: "fas fa-book",
                    title: "Elektron kutubxona",
                    description: "Darsliklar, qo'llanmalar va ilmiy adabiyotlarga kirish",
                    link: "#"
                },
                {
                    icon: "fas fa-chart-line",
                    title: "Akademik progress",
                    description: "Baholar, reytinglar va akademik natijalarni monitoring qilish",
                    link: "#"
                }
            ],
            newsItems: [
                {
                    day: "15",
                    month: "MAY",
                    title: "2025/2026 o'quv yili uchun qabul jarayoni",
                    summary: "Yangi o'quv yiliga qabul jarayoni boshlanganligi haqida ma'lumot"
                },
                {
                    day: "10",
                    month: "MAY",
                    title: "Stipendiyalar bo'yicha e'lon",
                    summary: "Davlat stipendiyalari bo'yicha natijalar e'lon qilindi"
                },
                {
                    day: "05",
                    month: "MAY",
                    title: "Ilmiy konferensiya",
                    summary: "Xalqaro ilmiy-amaliy konferensiya o'tkazilishi haqida"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.test-hemis--wrapper{
    // max-width: 600px;
}
.edu-portal {
    // padding: 60px 20px;
    // background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);

    .container {
        // max-width: 1200px;
        margin: 0 auto;
    }

    .portal-header {
        text-align: center;
        // margin-bottom: 50px;

        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 20px;

            img {
                height: 50px;
            }

            // h1 {
            //     font-size: 2.2rem;
            //     color: #1e3a8a;
            //     margin: 0;
            //     font-weight: 700;
            // }
        }

        p {
            font-size: 1.1rem;
            color: #4b5563;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
        }
    }

    .portal-features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 25px;
        margin-bottom: 50px;

        .feature-card {
            background: white;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s, box-shadow 0.3s;

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            }

            .feature-icon {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;
                color: white;
                font-size: 1.5rem;

                &.feature-1 {
                    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                }

                &.feature-2 {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                }

                &.feature-3 {
                    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                }

                &.feature-4 {
                    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
                }
            }

            h3 {
                font-size: 1.3rem;
                color: #111827;
                margin-bottom: 12px;
            }

            p {
                color: #6b7280;
                font-size: 0.95rem;
                line-height: 1.5;
                margin-bottom: 20px;
            }

            .feature-link {
                color: #3b82f6;
                text-decoration: none;
                font-weight: 500;
                display: inline-flex;
                align-items: center;
                gap: 5px;
                transition: color 0.3s;

                &:hover {
                    color: #1d4ed8;
                }

                i {
                    font-size: 0.8rem;
                    transition: transform 0.3s;
                }

                &:hover i {
                    transform: translateX(3px);
                }
            }
        }
    }

    .portal-actions {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 60px;

        .portal-button {
            padding: 12px 25px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s;

            &.primary {
                background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                color: white;

                &:hover {
                    box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
                }
            }

            &.secondary {
                background: white;
                color: #3b82f6;
                border: 1px solid #e5e7eb;

                &:hover {
                    background: #f9fafb;
                    border-color: #d1d5db;
                }
            }

            i {
                font-size: 0.9rem;
            }
        }
    }

    .portal-news {
        background: white;
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

        h2 {
            font-size: 1.5rem;
            color: #111827;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e5e7eb;
        }

        .news-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;

            .news-card {
                display: flex;
                gap: 15px;
                padding: 15px;
                border-radius: 8px;
                transition: background 0.3s;

                &:hover {
                    background: #f9fafb;
                }

                .news-date {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-width: 60px;
                    background: #f3f4f6;
                    border-radius: 6px;
                    padding: 10px;

                    .day {
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: #111827;
                    }

                    .month {
                        font-size: 0.8rem;
                        color: #6b7280;
                        text-transform: uppercase;
                    }
                }

                .news-content {
                    h4 {
                        font-size: 1.1rem;
                        color: #111827;
                        margin-bottom: 8px;
                    }

                    p {
                        font-size: 0.9rem;
                        color: #6b7280;
                        margin-bottom: 10px;
                        line-height: 1.5;
                    }

                    .news-link {
                        color: #3b82f6;
                        font-size: 0.85rem;
                        font-weight: 500;
                        text-decoration: none;
                        display: inline-flex;
                        align-items: center;
                        gap: 5px;
                        transition: color 0.3s;

                        &:hover {
                            color: #1d4ed8;
                        }

                        &::after {
                            content: '→';
                            transition: transform 0.3s;
                        }

                        &:hover::after {
                            transform: translateX(3px);
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .edu-portal {
        padding: 40px 15px;

        .portal-header {
            .logo {
                flex-direction: column;
                text-align: center;

                h1 {
                    font-size: 1.8rem;
                }
            }
        }

        .portal-actions {
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>