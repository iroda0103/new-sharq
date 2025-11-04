<template>
  <section class="certificates-section">
    <div class="container">
      <h2 class="section-title">Litsenziya va Sertifikatlar</h2>
      <div class="certificates-grid">
        <div
          class="certificate-card"
          v-for="(item, index) in certificates"
          :key="index"
        >
          <img loading="lazy":src="item.image" :alt="item.title" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Sertifikat from '../img/sertificat.jpg'
export default {
  name: "LicenseCertificates",
  data() {
    return {
      certificates: [
        {
          title: "Guvohnoma",
          description: "Ommaviy axborot vositasi davlat roʼyxatidan oʼtkazilganligi toʼgʼrisidagi guvohnoma",
          image: "/img/doc/guvohnoma.webp",
        },
        {
          title: "Xabarnoma",
          description: "Maktabdan tashqari taʼlim faoliyatini boshlaganlik yoki tugatganlik toʼgʼrisida xabarnoma",
          image: "/img/doc/tasdiqnoma.webp",
        },
        {
          title: "Litsenziya",
          description: "Nodavlat taʼlim xizmatlarini koʼrsatish faoliyati uchun litsenziya",
          image: "/img/doc/sertifikat2.webp",
        },
        // Ko'proq sertifikatlar qo‘shishingiz mumkin
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.certificates-section {
  padding: 80px 20px;
  background: var(--light-color);
<<<<<<< HEAD
=======
  padding-top: 150px;
>>>>>>> dad943b (update)

  .section-title {
    text-align: center;
    font-size: 2.2rem;
    color: var(--primary-color);
    margin-bottom: 40px;
    font-weight: bold;
  }

  .certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
  }

  .certificate-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 20px;
    text-align: center;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    }

    img {
      max-width: 100%;
      border-radius: 12px;
      margin-bottom: 16px;
    }

    h3 {
      font-size: 1.2rem;
      color: var(--dark-color);
      margin-bottom: 8px;
    }

    p {
      font-size: 0.95rem;
      color: var(--text-color);
    }
  }
}
</style>
