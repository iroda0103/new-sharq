<template>
    <div class="container history__container">
        <!-- <h2 class="history__title">Sharq Universiteti Tarixi</h2> -->

        <img loading="lazy" src="/img/place.webp">
        <div class="history__content">
            <!-- <p>
                Sharq Universiteti o‘z faoliyatini <strong>2025-yil</strong>da boshlagan bo‘lib,
                O‘zbekiston mustaqillikka erishgach, ta’lim sohasidagi yirik islohotlar
                doirasida tashkil etilgan. Universitet o‘zining ilk faoliyat yillarida
                Sharqshunoslik, Tarix, Pedagogika va boshqa yo‘nalishlarda ta’lim bergan.
            </p> -->
            <p>
                Sharq Universiteti o‘z faoliyatini <strong>25.02.2025 </strong>da O'zbekiston Respublikasi
                Prezidentining
                430-qarori 24-bandiga muvofiq "Oliy taʼlim, fan va innovatsiyalar vazirligi Navoiy viloyati hokimligi
                bilan birga Navoiy shahrida 10 ta yoʼnalishda taʼlim beruvchi zamonaviy "Sharq universiteti" nodavlat
                oliy taʼlim tashkilotini tashkil etish boʼyicha takliflarni belgilangan tartibda koʼrib chiqib, bir oy
                muddatda tegishli qaror qabul qilsin." ta’lim sohasidagi yirik islohotlar
                doirasida tashkil etilgan. Universitet o‘zining ilk faoliyat yillarida
                AT, Iqtisod , Filologiya va boshqa Ijtimoiy fanlar yo‘nalishlarda ta’lim bermoqda.
            </p>
            <p>
                Yillar davomida universitet <strong>milliy qadriyatlar</strong> va
                <strong>zamonaviy ta’lim</strong> integratsiyasiga asoslangan holda rivojlanmoqda.
                Bugungi kunda u yuzlab ilmiy tadqiqotlar markazi, ko‘plab xalqaro hamkorlik
                loyihalari va minglab talabalarni o‘zida jamlagan yirik ilmiy dargohga
                aylangan.
            </p>

            <p>
                Universitetda <strong>xalqaro tajribaga</strong> ega professor-o‘qituvchilar
                dars berishadi. Talabalar uchun zamonaviy axborot-resurs markazlari, ilmiy
                laboratoriyalar, kutubxonalar va yotoqxona bilan ta’minlangan.
            </p>

            <p>
                Universitet kelajakda ham o‘z faoliyatini zamonaviy innovatsiyalar va
                xalqaro standartlarga mos tarzda davom ettirishga intiladi.
            </p>
        </div>
    </div>
</template>
<style lang="scss">
.history {
    padding: 45px 0;
    background-color: #f4f7fa;
    color: #1b1b1b;

    &__container {
        // padding: 45px 0;
        // max-width: 900px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 12px;
        border: 1px solid rgba(234, 238, 245, 1);
        background: #fff;
        box-shadow: 0px 0px 30px 0px rgba(7, 12, 28, 0.04);
        width: 100%;
    }

    &__title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 30px;
        text-align: center;
        color: #0d172f;
        position: relative;

        &::after {
            content: "";
            display: block;
            width: 60px;
            height: 4px;
            background-color: #00bafc;
            margin: 12px auto 0;
            border-radius: 2px;
        }
    }

    &__content {
        font-size: 17px;
        line-height: 1.8;

        p {
            margin-bottom: 20px;

            strong {
                color: #004aad;
            }
        }
    }
}

@media (max-width: 768px) {
    .history {
        padding: 40px 20px;
        margin-top: 0;
        padding-top: 80px;

        &__title {
            font-size: 26px;
        }

        &__content {
            font-size: 16px;
        }
    }
}
</style>