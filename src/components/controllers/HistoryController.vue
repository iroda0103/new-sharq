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
            <strong>SHARQ UNIVERSITETI</strong> — zamonaviy ta'lim, ilmiy salohiyat 
            va innovatsion yondashuv uyg'unligiga asoslangan xususiy oliy ta'lim 
            muassasasi. Universitet jamiyat va mehnat bozori ehtiyojlariga mos, 
            raqobatbardosh va mas'uliyatli mutaxassislar tayyorlashni o'z oldiga 
            ustuvor vazifa qilib qo'ygan.
          </p>

          <p>
            "SHARQ UNIVERSITY" MCHJ <strong>2024-yil 29-mart</strong> kuni Navoiy 
            shahar Davlat xizmatlari markazida <strong>№2424023-raqam</strong> bilan 
            davlat ro'yxatidan o'tkazilgan. Universitet O'zbekiston Respublikasi 
            Prezidenti tomonidan 2024-yil 12-dekabrda qabul qilingan 
            <strong>PQ–430-sonli qaror</strong>ning 24-bandiga muvofiq tashkil etilgan.
          </p>

          <p>
            Hozirda Sharq University Oliy ta'lim, fan va innovatsiyalar vazirligining 
            <strong>1009085-raqamli litsenziyasi</strong> asosida faoliyat yuritmoqda.
          </p>
        </div>
      </div>

      <!-- QO'SHIMCHA BLOK -->
      <div class="text-wrapper">
        <h3> Missiya va strategik maqsadlar</h3>
        <p>
          Ilm-fan, ta'lim va innovatsiyalarni uyg'unlashtirgan holda, milliy va
          xalqaro talablariga javob beradigan yuqori malakali hamda raqobatbardosh 
          mutaxassislar tayyorlash. Zamonaviy ta'lim yondashuvlari orqali xalqaro 
          andozalarga mos kadrlar yetishtirish, akademik sifatni doimiy oshirib 
          borish hamda istiqbolda yetakchi universitetlar qatoridan munosib o'rin 
          egallash.
        </p>

        <h3> Ta'lim yo'nalishlari (2025–2026 o'quv yili)</h3>
        <p>
          <strong>Axborot texnologiyalari va muhandislik:</strong><br>
          • Sun'iy intellekt<br>
          • Kiberxavfsizlik injiniringi<br>
          • Dasturiy injiniring
        </p>
        <p>
          <strong>Iqtisodiyot va biznes:</strong><br>
          • Iqtisodiyot<br>
          • Moliya va moliyaviy texnologiyalar<br>
          • Biznesni boshqarish (tarmoqlar bo'yicha)<br>
          • Marketing (tarmoqlar va sohalar bo'yicha)
        </p>
        <p>
          <strong>Gumanitar yo'nalishlar:</strong><br>
          • Filologiya va tillarni o'qitish (o'zbek, rus va ingliz tillari)<br>
          • Psixologiya<br>
          • Tarix
        </p>

        <h3> Xalqaro hamkorlik</h3>
        <p>
          Turkiya (Karabuk universiteti, Istanbul Tijorat universiteti, Anqara 
          Yildirim Boyazid universiteti, Istanbul Okan universiteti), Ozarbayjon 
          (Hazar universiteti), Indoneziya, Italiya va Shimoliy Kipr davlatlaridagi 
          yetakchi universitetlar bilan <strong>2+2 ta'lim dasturlari</strong> 
          yo'lga qo'yilgan. Talabalar almashinuvi, xorijiy professorlarni jalb 
          etish hamda mahalliy o'qituvchilarning malakasini oshirish amalga 
          oshirilmoqda.
        </p>

        <h3>🔬 Ilmiy-tadqiqot va innovatsiya</h3>
        <p>
          Yosh tadqiqotchilarni qo'llab-quvvatlash, ilmiy izlanishlarni 
          rag'batlantirish va fan hamda amaliyot integratsiyasini kuchaytirish 
          ustuvor yo'nalishlar hisoblanadi.
        </p>

        <h3>🏗️ Rivojlanish strategiyasi</h3>
        <p>
          5 yillik rivojlanish strategiyasi doirasida 2027–2028 o'quv yiliga 
          qadar 8 000 nafar talabani qamrab olish imkoniyatiga ega bo'lgan 
          <strong>12 qavatli o'quv binosi</strong> va zamonaviy talabalar 
          yotoqxonasi qurib topshirilishi rejalashtirilgan.
        </p>
        <p>
          Shuningdek, quyidagi tuzilmalar tashkil etilmoqda:<br>
          • Sanoat va IT texnoparki<br>
          • Ilmiy-tadqiqot va ishlanmalar markazi<br>
          • Qurilish-sinov laboratoriyasi hamda bino-inshootlarning texnik 
          holatini baholash markazi
        </p>

        <p class="history__slogan">
          "Zamonaviy ta'lim, imkoniyat va qadriyatlar uyg'unligi"<br>
          ILM SHARQDAN BOSHLANADI!
        </p>
      </div>

    </div>
  </section>
</template>

<style lang="scss">
.history {
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
      height: 260px;
      object-fit: cover;
      display: block;
    }
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
    font-size: 17px;
  }
}

.text-wrapper {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #e6eaf0;

  h3 {
    font-size: 18px;
    margin: 22px 0 8px;
    color: #0d172f;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    line-height: 1.7;
    color: #333;
    margin-bottom: 14px;
  }
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 18px;
  color: #0d172f;
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
  }

  .page-title {
    font-size: 24px;
    text-align: center;
  }

  .text-wrapper {
    text-align: left;
  }
}
</style>