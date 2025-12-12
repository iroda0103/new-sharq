<template>
    <div class="leadership">
        <div class="leadersheap-image">
            <div class="leadership-image__inner">
                <img src="/img/person/rector.jpg" alt="PhD. Sherzod Atamurodov">
            </div>
        </div>

        <div class="leadership-info__wrapper">
            <!-- HEADER -->
            <div class="leadership-info">
                <h3 class="leadership-info__fio">PhD. Sherzod Atamurodov</h3>
                <div class="leadership-info__divider"></div>
                <p class="leadership-info__text">Sharq universiteti rektori</p>

                <div class="leadership-info__bottom">
                    <div class="leadership-info__links">
                        <a href="mailto:info@uzedu.uz" class="leadership-info__link">
                            <i class="fa-regular fa-envelope"></i>
                            info@sharqedu.uz
                        </a>
                        <a href="tel:+998712410115" class="leadership-info__link">
                            <i class="fa-solid fa-phone"></i>
                            +998 (79) 222-77-07
                        </a>
                    </div>

                    <div class="leadership-info__social">
                        <a href="#" class="icon-instagram" rel="nofollow" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" class="icon-telegram" rel="nofollow" target="_blank">
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                        <a href="#" class="icon-facebook" rel="nofollow" target="_blank">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" class="icon-youtube" rel="nofollow" target="_blank">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- BIOGRAPHY -->
            <div class="page-block">
                <h3 class="page-block__subtitle">Tarjimai hol</h3>
                <div class="page-block__divider"></div>
                <div class="content">
                    <p>
                        <strong>Tug'ilgan:</strong> 26.09.1983, Navoiy viloyati<br>
                        <strong>Ilmiy daraja:</strong> Iqtisodiyot fanlari bo'yicha PhD, dotsent<br>
                        <strong>Millati:</strong> O'zbek<br>
                        <strong>Tillar:</strong> Rus, Turk, Ingliz
                    </p>
                    <p>
                        20 yildan ortiq taʼlim sohasida faoliyat yuritib kelmoqda.
                        Ko‘plab ilmiy maqolalar, darsliklar muallifi va bir qator xalqaro loyihalar asoschisi.
                    </p>
                </div>
            </div>

            <!-- EDUCATION -->
            <div class="page-block">
                <h3 class="page-block__subtitle">Ma'lumoti</h3>
                <div class="page-block__divider"></div>
                <div class="content">
                    <ul>
                        <li>2004 y. — Navoiy davlat konchilik instituti</li>
                        <li>2006 y. — Samarqand iqtisodiyot va servis instituti (Magistratura)</li>
                    </ul>
                </div>
            </div>

            <!-- EXPERIENCE -->
            <div class="page-block">
                <h3 class="page-block__subtitle">Mehnat faoliyati</h3>
                <div class="page-block__divider"></div>
                <div class="content">
                    <ul>
                        <li>2025 — h.v. — Sharq universiteti rektori</li>
                        <li>2024–2025 — Navoiy DKvTU, "Iqtisodiyot va menejment" kafedrasi dotsenti</li>
                        <li>2023–2024 — Navoiy innovatsiyalar universiteti, prorektor</li>
                        <li>2022–2023 — Navoiy DKvTU, dekan o‘rinbosari</li>
                        <li>2018–2022 — Navoiy DKI, dekan o‘rinbosari</li>
                        <li>2009–2018 — Navoiy DKI, katta o‘qituvchi</li>
                        <li>2006–2009 — Navoiy DKI, assistent</li>
                        <li>2004–2006 — Samarqand IvSI, magistrant</li>
                        <li>2000–2004 — Navoiy DKI, talaba</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
.wrapper {
    background-image: url('/img/bg/image_copy.png');
    /* background-image: url('/img/bg/image.png'); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;


    background-color: rgba(255, 255, 255, 0.877);
    background-blend-mode: overlay;
    margin-top: 130px;
    padding-bottom: 80px;
    z-index: -100;
}

.page-row {
    display: flex;
    gap: 14px;

    /* height: 100vh; */
}

.page-row__col {
    flex-grow: 1;
    padding: 15px 0;
}

.page-row__col:nth-child(1) {
    width: 70%;
}

.sidebar {
    border-radius: 12px;
    border: 1px solid rgba(234, 238, 245, 1);
    background: #fff;
    box-shadow: 0px 0px 30px 0px rgba(7, 12, 28, 0.04);
    width: 100%;
}

.sidebar-title {
    padding: 12px;
    color: rgba(1, 11, 27, 1);
    font-size: 20px;
    line-height: 140%;
    font-weight: 600;
    letter-spacing: -0.2px;
}

.sidebar-menu__item {
    border-top: 1px solid rgba(223, 228, 237, 1);
}

.sidebar-menu__link {
    display: block;
    padding: 12px;
    position: relative;
    color: rgba(1, 11, 27, 1);
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.16px;
}

.sidebar-menu__link::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 0px;
    width: 4px;
    background-color: rgb(0, 60, 128);
    transition: all 0.2s ease-in-out;
}

.leadership {
    --local-image-width: 267px;
    display: flex;
    justify-content: space-between;
    height: 100%;
    gap: 15px;
}

.leadership-image__inner img {
    height: 250px;
    object-position: 15% center;
    object-fit: cover;
    border-radius: 12px;
    min-width: 250px;


}

.leadership-image {
    margin: 0 auto;
}

.leadership-image__inner {
    aspect-ratio: 0.89;
    position: sticky;
    top: 140px;
}

.leadership-info__wrapper {}

.leadership-info {
    background: #FFF;
    display: flex;
    flex-direction: column;
    padding: 16px;
    border: 1px solid rgba(239, 243, 249, 1);
    border-radius: 12px;
    position: relative;
}

.leadership-detail .leadership-info,
.active .leadership-info {
    position: relative;
    z-index: 1;
    overflow: hidden;
}

.leadership-info__fio {
    color: rgba(1, 11, 27, 1);
    font-size: 24px;
    line-height: 140%;
    letter-spacing: -0.24px;
}

.leadership-info__text {
    color: rgba(71, 82, 98, 1);
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.16px;
    margin-bottom: auto;
}

.leadership-detail .leadership-info__bottom {
    justify-content: flex-start;
}

.leadership-info__bottom {
    margin-top: 16px;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 16px;
}

.leadership-detail .leadership-info__links {
    flex-direction: row;
    gap: 16px;
}

.leadership-info__link {
    padding: 6px 8px;
    display: flex;
    align-items: center;
    color: rgba(1, 11, 27, 1);
    font-size: 16px;
    line-height: 138%;
    letter-spacing: -0.16px;
    gap: 6px;
    border-radius: 8px;
    border: 1px solid rgba(223, 228, 237, 1);
    background: rgba(248, 250, 253, 1);
}

.leadership-info__link i {
    font-size: 18px;
    color: rgba(82, 148, 229, 1);
}

.leadership-info__links {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    gap: 16px;
}

.page-block__subtitle {
    color: rgba(22, 35, 71, 1);
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -0.2px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.page-block__divider {
    border-top: 1px solid var(--black-7);
    margin: 12px 0;
}

.page-block {
    border-radius: 12px;
    border: 1px solid rgba(234, 238, 245, 1);
    background: #FFF;
    padding: 16px;
}

.page-block__subtitle {
    color: rgba(22, 35, 71, 1);
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -0.2px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 600;
}

.page-block:not(:last-of-type) {
    margin-bottom: 12px;
}

.leadership-info__wrapper> :not(:last-child) {
    margin-bottom: 12px;
}

.leadership-info__social {
    display: flex;
    gap: 6px;
}

.leadership-info__social a {
    width: 34px;
    aspect-ratio: 1/1;
    border-radius: 8px;
    border: 1px solid rgba(223, 228, 237, 1);
    background: rgba(248, 250, 253, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: rgba(119, 129, 145, 1);
}


@media only screen and (max-width: 991px) {
    .leadership-image__inner img {
        min-width: 200px;
        height: 200px;

    }

}

@media only screen and (max-width: 768px) {
    .leadership-image__inner img {
        min-width: 160px;
        height: 179px;

    }

    .page-row {
        flex-direction: column;
    }

    .page-row__col:nth-child(1) {
        width: 100%;
    }

    .page-row__col:nth-child(2) {
        width: 100%;
        flex-grow: 0;
    }

    .wrapper {
        margin-top: 0;
        padding-top: 60px;
    }

    .leadership-image__inner {
        aspect-ratio: 0.89;
        position: sticky;
        top: 140px;
    }

    .leadership-image__inner {
        aspect-ratio: 0.89;
        position: sticky;
        top: 50px;
    }
}

@media only screen and (max-width: 574px) {
    .leadership {
        flex-direction: column;

    }

    .leadership-image__inner {
        aspect-ratio: 0;
        display: flex;
        justify-content: center;
    }

    .leadership-image__inner img {
        min-width: 200px;
        height: 240px;

    }
}
</style>