<template>
  <div class="partners-page">
    <section class="partners-page__header">
      <div class="container">
        <h1 class="partners-page__title">Hamkorlarimiz</h1>
        <p class="partners-page__subtitle">
          Biz bilan hamkorlik qilayotgan tashkilotlar va korxonalar ro‘yxati.
        </p>
      </div>
    </section>
    <div class="container">
      <div class="partners-grid">
        <div
          class="partner-card"
          v-for="partner in partners"
          :key="partner.id"
        >
          <img loading="lazy":src="partner.img" :alt="partner.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnersPage',
  data() {
    return {
      partners: Array.from({ length: 18 }, (_, i) => ({
        id: i + 1,
        name: `Partner ${i + 1}`,
        img: `https://sharqedu.uz/assets/img/partners/part${i + 1}.png`
      }))
    }
  }
}
</script>

<style scoped lang="scss">
.partners-page {
  padding-top: 80px;
  color: #1b1b1b;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
  }

  &__header {
    padding: 60px 0;
    text-align: center;

    &__title {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 12px;
      color: #0d172f;
    }

    &__subtitle {
      font-size: 18px;
      line-height: 1.6;
      color: #555;
    }
  }

  .partners-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 30px;
    padding: 40px 0;
    align-items: center;
    justify-content: center;
  }

  .partner-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;

    img {
      max-width: 100%;
      max-height: 100px;
      object-fit: contain;
      filter: grayscale(100%);
      transition: filter 0.3s ease;
    }

    &:hover {
      transform: translateY(-5px);

      img {
        filter: grayscale(0%);
      }
    }
  }

  @media (max-width: 576px) {
    &__header {
      &__title {
        font-size: 24px;
      }

      &__subtitle {
        font-size: 14px;
      }
    }
  }
}
</style>
