<template>
  <div class="admission-page">
    <div class="admission-container">
      <h1>Sharq Universiteti</h1>
      <h2>2025/2026-o‘quv yili qabul jarayonlari yakunlandi</h2>
      <router-link to="/" class="visit-btn">Bosh sahifaga o‘tish</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToWebsite() {
      window.open("https://sharqedu.uz", "_blank");
    }
  }
}
</script>

<style scoped>
.admission-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: linear-gradient(180deg, #2d4766 0%, #355e94 100%);
  color: #fff;
  padding: 20px;
    padding-top: 250px;
    padding-bottom: 150px;
    background-image: url('/img/bg/image_copy.png');
  /* background-image: url('/img/bg/image.png'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;


  background-color: rgba(255, 255, 255, 0.877);
  background-blend-mode: overlay;
  /* margin-top: 130px; */
  z-index: -100;

}

.admission-container {
    background: linear-gradient(180deg, #2d4766 0%, #355e94 100%);

  max-width: 600px;
  text-align: center;
  background-color: rgba(255,255,255,0.05);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.admission-container h1 {
  font-size: 32px;
  margin-bottom: 10px;
  font-weight: 700;
}

.admission-container h2 {
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 500;
}

.admission-container p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.visit-btn {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #355e94;
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.visit-btn:hover {
  background-color: #e0e0e0;
}
</style>
