<template>
    <div class="container rektor__container">
        <div class="rektor__content">
            <div class="rektor__image-wrapper">
<<<<<<< HEAD
                <img loading="lazy" class="rektor__image" src="/img/person/sherzod_atamuradov.webp"
=======
                <img loading="lazy" class="rektor__image" src="../../public/img/person/sherzod_atamuradov.webp"
>>>>>>> dad943b (update)
                    alt="Universitet rektori rasmi" />
            </div>
            <div class="rektor__info">
                <h2 class="rektor__title">Universitet Rektori</h2>
                <h3 class="rektor__name"> PhD. Sherzod Atamurodov</h3>
                <p class="rektor__description">
                    Sharq Universiteti rektori Phd. Sherzod Akramovich Atamurodov 20 yildan ortiq ta’lim sohasida
                    faoliyat yuritib kelmoqda. O`z faoliyati davomida ko‘plab ilmiy maqolalar, darsliklar yozgan va bir
                    necha xalqaro loyihalarga asos solgan. Uning boshqaruvi ostida universitet yangi rivojlanish
                    bosqichiga chiqmoqda.
                </p>
                <p class="rektor__quote">
                    <em>"Yoshlar bizning kelajagimizdir. Ularning ilmli, vatanparvar va faol bo‘lishi uchun biz barcha
                        sharoitlarni yaratishga intilamiz."</em>
                </p>
            </div>
            <p class="rektor__quote rektor__quote-back ">
                <em>"Yoshlar bizning kelajagimizdir. Ularning ilmli, vatanparvar va faol bo‘lishi uchun biz barcha
                    sharoitlarni yaratishga intilamiz."</em>
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.rektor {
    padding: 60px 0;
    background: #f4f7fa;
    color: #1b1b1b;
    height: 100%;
<<<<<<< HEAD

=======
>>>>>>> dad943b (update)
    &__container {
        display: flex;
        padding: 30px;
        align-items: flex-start;
        justify-content: space-between;
        gap: 40px;
        flex-wrap: wrap;
        padding-top: 80px;
        // padding-bottom: 90px;
        height: 100vh;
<<<<<<< HEAD
=======
        padding-top: 180px;
>>>>>>> dad943b (update)
    }

    &__content {
        display: flex;
        flex-direction: row;
        gap: 30px;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }

    &__image-wrapper {
        flex: 1 1 300px;
        max-width: 300px;
    }

    &__image {
        width: 100%;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        object-fit: cover;
    }

    &__info {
        flex: 2;
        max-width: 700px;
    }

    &__title {
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
        color: #0d172f;
    }

    &__name {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;
        color: #004aad;
    }

    &__description {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 20px;
    }

    &__quote {
        font-size: 16px;
        font-style: italic;
        color: #555;
        border-left: 4px solid #00bafc;
        padding-left: 15px;

        &-back {
            display: none;
        }
    }

}

@media (max-width: 768px) {

    // .rektor__image{
    //     width: 270px;
    // }
    .rektor {
        // padding-top: 0;
        margin-top: 0;

    }

    .rektor__image-wrapper {
        flex: 1 1 270px;
        max-width: 270px;
        height: 270px;
    }

    .rektor__quote {
        display: none;
    }

    .rektor__quote-back {
        display: block;
    }
}

@media (max-width:670px) {
    .rektor__description {
        font-size: 15px;
    }

    .rektor__title {
        font-size: 27px;
    }

    .rektor__name {
        font-size: 20px;
    }

    .rektor__content {
        gap: 18px;
    }

}

@media (max-width:590px) {
    .rektor__content {
        flex-direction: column;
        align-items: center;

    }
}
</style>