<template>
  <div class="future-step">
    <div class="container">
      <h2 class="page-title">
        O‘zbekiston Respublikasi Prezidentining qarori, 2025-yil 14-fevraldagi “Oliy ta’lim tashkilotlari bitiruvchilarining ishga joylashishiga ko‘maklashish bo‘yicha qo‘shimcha chora-tadbirlar to‘g‘risida”gi PQ-61-son qarori bilan yoshlarning bandligini ta’minlash, oliy ta’lim tashkilotlari bitiruvchilarining mehnat bozoriga integratsiyasini kuchaytirish, xususiy sektor va tijorat banklari ishtirokida kadrlar tayyorlash jarayonini takomillashtirish yuzasidan keng imkoniyatlar yaratib berildi.
      </h2>

      <p class="future-step__text">
        Mazkur Qaror asosida “O‘zmilliybank” AJ tomonidan hududlarda “Kelajakka qadam” markazlari tashkil etilishi belgilangan. Ushbu Markazda “O‘zmilliybank” bilan hamkorlikda talaba yoshlarni qo‘llab-quvvatlashga qaratilgan “Kelajakka qadam” dasturi Qarorda belgilab berilgan quyidagi yo‘nalishlarda amalga oshiriladi:
      </p>

      <ul class="future-step__list">
        <li>O‘z biznes g‘oyalarini amalga oshirish istagi bo‘lgan Universitetning bitiruvchi bosqich talabalari uchun biznes g‘oyani tayyor loyihagacha olib borish jarayonida to‘liq hamrohlik qilish, shu jumladan qulay shartlarda moliyalashtirish;</li>
        <li>Universitetning bitiruvchi va quyi bosqich talabalari o‘rtasida sohalar bo‘yicha ochiq tanlovlar o‘tkazish va g‘oliblarni ish bilan ta’minlashga ko‘maklashish.</li>
      </ul>

      <p class="future-step__text">
        Bunda:
      </p>

      <ul class="future-step__list">
        <li>Salohiyatli ish beruvchi tashkilotlar, shu jumladan yirik korxonalarning oliy ma’lumotli mutaxassislarga ehtiyojini aniqlash va mutaxassislarga qo‘yiladigan talablarni shakllantirish amaliyoti yo‘lga qo‘yiladi;</li>
        <li>Tanlov g‘oliblarini salohiyatli ish beruvchi tashkilotlar buyurtmasiga ko‘ra individual kasbiy ta’lim dasturlari asosida kasbga dastlabki tayyorlash tadbirlari moliyalashtiriladi;</li>
        <li>Individual kasbiy ta’lim dasturlarida ishlab chiqarish obyektlarida amaliyot o‘tash va chet eldagi universitetlarda qisqa muddatli o‘quv kurslarida qatnashish imkoniyati yaratiladi.</li>
      </ul>

      <div class="future-step__image-wrapper">
        <p class="future-step__text">Batafsil ma'lumotlarni bilish uchun QR-kodni skanerlang</p>
        <img src="/img/kelajakkaqadam.png" alt="Kelajakka Qadam" class="future-step__image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .page-title{
    font-size: 20px;
  }
.future-step {
  /* padding: 150px 0 300px; */
  padding: 0 20px;
  background: #f8f9fc;
  border-radius: 16px;
background-image: url('/img/bg/image_copy.png');
  background-image: url('/img/bg/image.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.877);
  background-blend-mode: overlay;
  padding-bottom: 80px;
  /* z-index: -100; */
}

.container {
  /* max-width: 1000px; */
  margin: 0 auto;
  padding: 40px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 25px rgba(0,0,0,0.05);
}

.future-step__title {
  font-size: 24px;
  font-weight: 700;
  color: #00455e;
  margin-bottom: 24px;
  line-height: 1.4;
}

.future-step__text {
  font-size: 16px;
  color: #475262;
  line-height: 1.8;
  margin-bottom: 16px;
}

.future-step__list {
  list-style: disc inside;
  margin: 16px 0;
  padding-left: 16px;
  color: #475262;
  line-height: 1.8;
}

.future-step__list li {
  margin-bottom: 12px;
}

.future-step__image-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
}
.future-step__image-wrapper .future-step__text{
    /* font-size:14px; */
    font-weight: 600;
}
.future-step__image {
  width: 100%;
  max-width: 300px;
  width: 200px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  object-fit: contain;
}

/* Responsiv dizayn */
@media (max-width: 768px) {
  .container {
    padding: 24px;
  }

  .future-step__title {
    font-size: 20px;
  }

  .future-step__text,
  .future-step__list li {
    font-size: 14px;
  }

  .future-step__image {
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .future-step__title {
    font-size: 18px;
  }

  .future-step__text,
  .future-step__list li {
    font-size: 13px;
  }

  .future-step__image {
    max-width: 220px;
  }
}
</style>
