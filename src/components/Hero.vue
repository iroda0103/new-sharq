<template>
    <!-- START HERO SECTION -->
    <section class="hero">
        <div class="container hero__container">
            <div class="hero-bg"></div>
            <div class="hero__content">
                <h2 class="hero__title">
                    Zamonaviy <mark>ta'lim</mark>, imkoniyat va qadiryatlar uyg'unligi </h2>
                <p class="hero__text">
                    Sizni zamonaviy kelajak sari yetaklovchi, innovatsion universitetda oʻqish imkoniyati kutmoqda!
                </p>
                <a class="blue-link" href="https://qabul.sharqedu.uz/">Ariza berish</a>
            </div>

            <div class="hero__wrapper">
                <!-- <iframe class="hero__video" width="458" height="258" src="https://www.youtube-nocookie.com/embed/6_pru8U2RmM"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe> -->
                <img loading="lazy"class="hero__img" src="/img/place.webp" alt="Hero image">
            </div>
        </div>
    </section>
    <!-- END HERO SECTION -->
</template>

<style  lang="scss">
.hero {
    position: relative;
    padding: 130px 0;


    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap; // fallback
        gap: 32px;
        .blue-link{
            padding: 16px 76px;
        }
    }

    &__content {
        // flex: 1 1 400px;
        max-width: 600px;
    }

    &__title {
        font-size: 45px;
        line-height: 130%;
        margin-bottom: 16px;

        mark {
            background-color: transparent;
            color: #00bafc;
            font-weight: bold;
        }
    }

    &__text {
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 20px;
    }

    &__wrapper {
        flex: 1 1 400px;
        max-width: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__img,
    &__video {
        max-width: 100%;
        height: auto; 
        border-radius: 10px;
    }
}

.blue-link {
  display: inline-block;
  padding: 9px 26px;
//   background-color: #00bafc;
  background: linear-gradient(to right, rgba(0, 69, 94, 0.8705882353), rgba(27, 106, 233, 0.9333333333));;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  font-size: 20px;
}

.blue-link:hover {
  opacity: 0.8;
}

.blue-link:active {
  opacity: 0.6;
}

// Tablet (≤ 992px)
@media only screen and (max-width: 894px) {
    .header .header-bottom .nav__list {
        gap: 10px;
    }

    .hero {
        padding: 80px;

        &__title {
            font-size: 32px;
        }

        &__text {
            font-size: 16px;
            line-height: 24px;
        }

        // &__wrapper {
        //   flex: 0;
        // }
    }


}

// Mobile (≤ 768px)
@media only screen and (max-width: 768px) {
    .hero {
        padding: 40px;

        &__container {
            flex-direction: column-reverse;
            align-items: center;
            text-align: center;
        }

        &__wrapper {
            width: 100%;
            flex: 0;
        }

        &__content {
            width: 100%;
        }

        &__title {
            font-size: 26px;
        }

        &__text {
            font-size: 15px;
        }
    }
}

// Very small phones (≤ 425px)
@media only screen and (max-width: 425px) {
    .hero {
        padding: 30px 0;

        &__title {
            font-size: 22px;
        }

        &__text {
            font-size: 14px;
        }
    }
}
</style>