<template>
  <section class="history">
    <div class="history__container">

      <div class="history__grid">
        <!-- RASM -->
        <div class="history__image">
          <img loading="lazy" src="/img/place.webp" alt="Sharq Universiteti" />
        </div>

        <!-- MATN -->
        <div class="history__content">
          <h2 class="page-title">SHARQ UNIVERSITETI</h2>

          <p>
            <strong>SHARQ UNIVERSITETI</strong> — zamonaviy ta’lim, innovatsiya va
            qadriyatlarni uyg‘unlashtirgan holda, milliy va xalqaro maydonda
            raqobatbardosh mutaxassislar yetishtirishni maqsad qilgan xususiy oliy
            ta’lim muassasasi.
          </p>

          <p>
            Universitet <strong>2025 yil 25 fevral</strong>da Oliy ta’lim, fan va
            innovatsiyalar vazirligi tomonidan berilgan
            <strong>636162-sonli davlat litsenziyasi</strong> asosida faoliyat
            yuritadi.
          </p>
        </div>
      </div>

      <!-- QO‘SHIMCHA BLOK -->
      <div class="text-wrapper">
        <h3>🎯 Maqsadimiz</h3>
        <p>
          Ilm-fan, ta’lim va innovatsiyani uyg‘unlashtirgan holda, milliy va
          xalqaro talablariga javob beradigan, yuqori malakali va
          raqobatbardosh mutaxassislar tayyorlash.
        </p>

        <h3>📌 Strategiyamiz</h3>
        <p>
          Zamonaviy ta’lim orqali xalqaro andozalarga mos, kuchli
          raqobatbardosh mutaxassislar yetishtirish va TOP universitetlar
          qatoriga kirish.
        </p>

        <h3>🌐 Xalqaro hamkorlik</h3>
        <p>
          Turkiya, Ozarbayjon, Indoneziya, Italiya va Shimoliy Kipr davlatlaridagi
          yetakchi universitetlar bilan <strong>2+2</strong> ta’lim dasturlari
          yo‘lga qo‘yilgan.
        </p>

        <p class="history__slogan">
          “Zamonaviy ta’lim, imkoniyat va qadriyatlar uyg‘unligi”
        </p>
      </div>

    </div>
  </section>
</template>

 <style lang="scss">.history {
  &__container {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(7, 12, 28, 0.08);
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__grid {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 40px;
    align-items: center;
  }

  &__image {
    border-radius: 14px;
    overflow: hidden;

    img {
      width: 100%;
      height: 260px; // 🔥 kichraytirildi
      object-fit: cover;
      display: block;
    }
  }

  &__title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 18px;
    color: #0d172f;
  }

  &__content {
    font-size: 16px;
    line-height: 1.75;
    color: #2c2c2c;

    p {
      margin-bottom: 14px;

      strong {
        color: #004aad;
      }
    }
  }

  &__slogan {
    margin-top: 24px;
    font-weight: 600;
    color: #004aad;
    font-style: italic;
    text-align: center;
  }
}

/* 🔹 Pastki matn bloki */
.text-wrapper {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #e6eaf0;

  h3 {
    font-size: 18px;
    margin: 22px 0 8px;
    color: #0d172f;
  }

  p {
    font-size: 16px;
    line-height: 1.7;
    color: #333;
  }
}

/* 📱 MOBIL */
@media (max-width: 768px) {
  .history {
    padding: 40px 16px;

    &__container {
      padding: 24px;
    }

    &__grid {
      grid-template-columns: 1fr;
    }

    &__image img {
      height: 200px;
    }

    &__title {
      font-size: 24px;
      text-align: center;
    }
  }

  .text-wrapper {
    text-align: left;
  }
}

 </style>