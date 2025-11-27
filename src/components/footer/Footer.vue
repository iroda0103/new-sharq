<script setup lang="ts">
import FooterFrame from './FooterFrame.vue';
import FooterBottom from './FooterBottom.vue';
</script>

<template>
  <footer class="footer">
    <div class="footer-top">
      <FooterFrame></FooterFrame>
    </div>
    <div class="footer-bottom">
      <FooterBottom></FooterBottom>-
    </div>

    <!-- <div class="footer__container">
      <div class="footer__main">
        <div class="footer__brand">
          <img loading="lazy"src="../../../public/img/logo_sharq.webp" alt="Sharq University" class="footer__logo">
          <div class="footer__social">
            <a href="https://t.me/sharquniversiteti" aria-label="Telegram"><font-awesome-icon :icon="['fab', 'telegram']" /></a>
            <a href="https://www.instagram.com/sharquniversiteti/" aria-label="Instagram"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a href="https://www.facebook.com/sharquniversiteti" aria-label="Facebook"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
            <a href="https://www.youtube.com/@sharquniversiteti" aria-label="YouTube"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
          </div>
        </div>

        <div class="footer__nav">
          <div class="footer__section">
            <h3 class="footer__title">Universitet</h3>
            <ul class="footer__list">
              <li><a href="#" class="footer__link">Biz haqimizda</a></li>
              <li><a href="#" class="footer__link">Yo'nalishlar</a></li>
              <li><a href="#" class="footer__link">Talabalar hayoti</a></li>
              <li><a href="#" class="footer__link">Yangiliklar</a></li>
            </ul>
          </div>

          <div class="footer__section">
            <h3 class="footer__title">Foydali</h3>
            <ul class="footer__list">
              <li><a href="#" class="footer__link">FAQ</a></li>
              <li><a href="#" class="footer__link">Bog'lanish</a></li>
              <li><a href="#" class="footer__link">Kirish tizimi</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__map">
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=65.363462%2C40.108278&mode=poi&poi%5Bpoint%5D=65.362133%2C40.108578&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D80402538213&z=16.96"
            loading="lazy" title="Universitet manzili" class="footer__iframe"></iframe>
        </div>
      </div>

      <div class="footer__bottom">

        <p class="footer__copy">&copy; {{ new Date().getFullYear() }} Sharq University</p>
      </div>
    </div> -->
  </footer>
</template>
<!-- 000129 -->

<style lang="scss" scoped>
.footer{
 // margin-top: 90px;
}

.footer-bottom {
  background: #000129;
  color: #fff;
  padding: 2rem 1rem;
  z-index: 1000 !important;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  &__brand {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  &__logo {
    height: 50px;
    width: auto;
  }

  &__nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
  }

  &__title {
    color: #f7c744;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  &__list {
    list-style: none;
    padding: 0;
  }

  &__link {
    color: #ccc;
    text-decoration: none;
    display: block;
    padding: 0.3rem 0;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }

  &__map {
    border-radius: 8px;
    overflow: hidden;
    min-height: 200px;
  }

  &__iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(30%);
  }

  &__bottom {
    border-top: 1px solid #222;
    padding-top: 1.5rem;
    text-align: center;
  }

  &__social {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 20px;


    a {
      color: #ccc;
      font-size: 1.2rem;
      transition: color 0.2s;

      &:hover {
        color: #f7c744;
      }
    }
  }

  &__copy {
    color: #999;
    font-size: 0.9rem;
    margin: 0;
  }
}
</style>