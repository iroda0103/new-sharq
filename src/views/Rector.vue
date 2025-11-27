<template>
    <div class="rector-page">
        <div class="container">
            <div class="rector-card">
                <!-- Header -->
                <div class="rector-header">
                    <img src="../../public/img/person/sherzod_atamuradov.webp" alt="PhD. Sherzod Atamurodov" class="rector-image" />
                    <div class="rector-main">
                        <h1>PhD. Sherzod Atamurodov</h1>
                        <p class="position">Sharq universiteti rektori</p>
                        <div class="contacts">
                            <a href="mailto:info@uzedu.uz"><i class="fas fa-envelope"></i> info@uzedu.uz</a>
                            <a href="tel:+998712410115"><i class="fas fa-phone"></i> +998 (71) 241-01-15</a>
                        </div>
                        <!-- <div class="socials">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-telegram"></i></a>
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div> -->
                        
                    </div>
                </div>

                <!-- About -->
                <div class="rector-section">
                    <h2>Tarjimai hol</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>Tug'ilgan:</strong> 26.09.1983, Navoiy viloyati
                        </div>
                        <div class="info-item">
                            <strong>Ilmiy daraja:</strong> Iqtisodiyot fanlari bo'yicha PhD, dotsent
                        </div>
                        <div class="info-item">
                            <strong>Millati:</strong> O'zbek
                        </div>
                        <div class="info-item">
                            <strong>Tillar:</strong> Rus, Turk, Ingliz
                        </div>
                    </div>
                    <p class="bio">20 yildan ortiq ta'lim sohasida faoliyat yuritib kelmoqda. Ko'plab ilmiy maqolalar, darsliklar yozgan va xalqaro loyihalarga asos solgan.</p>
                </div>

                <!-- Education -->
                <div class="rector-section">
                    <h2>Ma'lumoti</h2>
                    <ul class="list">
                        <li>2004 y. - Navoiy davlat konchilik instituti</li>
                        <li>2006 y. - Samarqand iqtisodiyot va servis instituti (Magistratura)</li>
                    </ul>
                </div>

                <!-- Experience -->
                <div class="rector-section">
                    <h2>Mehnat faoliyati</h2>
                    <ul class="list timeline">
                        <li><strong>2025 - h.v.</strong> Sharq universiteti rektori</li>
                        <li><strong>2024-2025</strong> Navoiy DKvTU, "Iqtisodiyot va menejmеnt" kafedrasi dotsenti</li>
                        <li><strong>2023-2024</strong> Navoiy innovatsiyalar universiteti, prorektor</li>
                        <li><strong>2022-2023</strong> Navoiy DKvTU, dekan o'rinbosari</li>
                        <li><strong>2018-2022</strong> Navoiy DKI, dekan o'rinbosari</li>
                        <li><strong>2009-2018</strong> Navoiy DKI, katta o'qituvchi</li>
                        <li><strong>2006-2009</strong> Navoiy DKI, assistent</li>
                        <li><strong>2004-2006</strong> Samarqand IvSI, magistrant</li>
                        <li><strong>2000-2004</strong> Navoiy DKI, talaba</li>
                    </ul>
                </div>
            </div>
            <aside>test</aside>
        </div>
    </div>
</template>

<style scoped lang="scss">
.rector-page {
    padding: 140px 20px 60px;
    background: linear-gradient(135deg, #f5f7fa, #e8eef5);
    min-height: 100vh;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
}

.rector-card {
    background: white;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.rector-header {
    display: flex;
    gap: 24px;
    padding-bottom: 24px;
    border-bottom: 2px solid #e8eef5;
    margin-bottom: 24px;

    .rector-image {
        width: 180px;
        height: 180px;
        border-radius: 12px;
        object-fit: cover;
        box-shadow: 0 4px 12px rgba(0, 69, 94, 0.15);
    }

    .rector-main {
        flex: 1;

        h1 {
            font-size: 26px;
            font-weight: 700;
            color: #00455e;
            margin: 0 0 4px;
        }

        .position {
            font-size: 16px;
            color: #1b6ae9;
            font-weight: 500;
            margin: 0 0 16px;
        }

        .contacts {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            margin-bottom: 12px;

            a {
                display: flex;
                align-items: center;
                gap: 6px;
                color: #475262;
                text-decoration: none;
                font-size: 13px;
                transition: color 0.3s;

                i { color: #1b6ae9; }
                &:hover { color: #1b6ae9; }
            }
        }

        .socials {
            display: flex;
            gap: 8px;

            a {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: linear-gradient(135deg, #00455e, #1b6ae9);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 14px;
                transition: transform 0.3s;

                &:hover { transform: translateY(-2px); }
            }
        }
    }
}

.rector-section {
    margin-bottom: 24px;

    &:last-child { margin-bottom: 0; }

    h2 {
        font-size: 18px;
        font-weight: 700;
        color: #00455e;
        margin: 0 0 12px;
        padding-left: 12px;
        border-left: 3px solid #1b6ae9;
    }

    .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 12px;
        margin-bottom: 12px;
    }

    .info-item {
        font-size: 13px;
        color: #475262;
        
        strong {
            color: #00455e;
            font-weight: 600;
        }
    }

    .bio {
        font-size: 14px;
        line-height: 1.6;
        color: #475262;
        margin: 12px 0 0;
    }

    .list {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            font-size: 13px;
            line-height: 1.8;
            color: #475262;
            padding: 6px 0;

            strong {
                color: #00455e;
                font-weight: 600;
                min-width: 90px;
                display: inline-block;
            }
        }

        &.timeline li {
            position: relative;
            padding-left: 16px;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 12px;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #1b6ae9;
            }
        }
    }
}

@media (max-width: 768px) {
    .rector-page { padding: 100px 15px 40px; }
    
    .rector-card { padding: 20px; }

    .rector-header {
        flex-direction: column;
        align-items: center;
        text-align: center;

        .rector-image {
            width: 150px;
            height: 150px;
        }

        .rector-main {
            h1 { font-size: 22px; }
            .position { font-size: 14px; }

            .contacts {
                justify-content: center;
                
                a { font-size: 12px; }
            }

            .socials { justify-content: center; }
        }
    }

    .rector-section {
        h2 { font-size: 16px; }
        
        .info-grid { grid-template-columns: 1fr; }
        .info-item, .list li, .bio { font-size: 12px; }
    }
}
</style>