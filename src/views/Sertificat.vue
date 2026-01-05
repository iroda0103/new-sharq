<template>
  <section class="certificates-section">
    <div class="container">
      <!-- <h2 class="public-card-wrapper page-title">Litsenziya va Sertifikatlar</h2> -->
      <h2 class="page-title">Litsenziya va Sertifikatlar</h2>
      <div class="certificates-grid">
        <div class="certificate-card" v-for="(item, index) in certificates" :key="index">
          <img loading="lazy" :src="item.image" :alt="item.title" />
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
        // KO‘proq sertifikatlar qo‘shishingiz mumkin
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.certificates-section {
  // padding: 20px;
  // background-color: #ffffff;
  // border-radius: 12px;
  // border: 1px solid rgba(234, 238, 245, 1);
  // background: #fff;
  // box-shadow: 0px 0px 30px 0px rgba(7, 12, 28, 0.04);
  width: 100%;

  // background: var(--light-color);
  // padding-top: 150px;

  .section-title {
    text-align: center;
    font-size: 2.2rem;
    color: var(--primary-color);
    // margin-bottom: 40px;
    font-weight: bold;
  }

  .certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
  }

  .certificate-card {
    flex-grow: 1;
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
      // max-width: 100%;
      border-radius: 12px;
      margin-bottom: 16px;
      height: 430px;
      width: 300px;
      margin: 0 auto;
      // width: 100%;
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
