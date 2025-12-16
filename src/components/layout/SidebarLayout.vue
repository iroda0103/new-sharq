<template>
  <div class="wrapper" :style="{ backgroundImage: `url(${currentPageConfig.background})` }">
    <!-- <Banner></Banner> -->
    <div class="container">
      <div class="page-row">
        <!-- Main Content -->
        <div class="main-section page-row__col">
          <RouterView />
        </div>

        <!-- Sidebar -->
        <aside class="page-row__col flex ">
          <!-- <div class="aside"> -->
            <SidebarController />
          <!-- </div> -->
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SidebarController from '../controllers/Sidebar.controller.vue'
import Banner from '../banner/Banner.vue'

const route = useRoute()
const currentPath = ref('')

// Sahifa konfiguratsiyalari
const pageConfigs = {
  '/admin/rektor': {
    title: 'Rektor',
    background: '/img/bg/image_copy.png'
  },
  '/admin/leadership': {
    title: 'Rahbariyat',
    background: '/img/bg/image_copy.png'
  },
  '/admin/history': {
    title: 'Universitet tarixi',
    background: '/img/bg/history_bg.png'
  },
  '/admin/partners': {
    title: 'Hamkorlar',
    background: '/img/bg/partners_bg.png'
  },
  '/admin/faculty': {
    title: 'Fakultetlar',
    background: '/img/bg/faculty_bg.png'
  },
  '/admin/kafedra': {
    title: 'Kafedralar',
    background: '/img/bg/kafedra_bg.png'
  },
  '/admin/department': {
    title: 'Bo\'limlar',
    background: '/img/bg/department_bg.png'
  },
  '/admin/directions': {
    title: 'Ta\'lim yo\'nalishlari',
    background: '/img/bg/directions_bg.png'
  }
}

// Joriy sahifa konfiguratsiyasini olish
const currentPageConfig = computed(() => {
  const path = route.path
  return pageConfigs[path] || {
    title: 'Sharq Universiteti',
    background: '/img/bg/image_copy.png'
  }
})

// Yo'lni yangilash
const updatePath = () => {
  currentPath.value = route.path
}

onMounted(() => {
  updatePath()
})
</script>

<style scoped>
/* .wrapper {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.877);
  background-blend-mode: overlay;
  margin-top: 130px;
  padding-bottom: 80px;
  transition: background-image 0.3s ease;
}

.page-row {
  display: flex;
  gap: 14px;
}

.page-row__col {
  flex-grow: 1;
  padding: 15px 0;
}

.page-row__col:nth-child(1) {
  width: 70%;
}

.page-row__col:nth-child(2) {
  width: 30%;
}

.aside {
  position: sticky;
  top: 130px;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 768px) {
  .page-row {
    flex-direction: column;
  }

  .page-row__col:nth-child(1),
  .page-row__col:nth-child(2) {
    width: 100%;
  }

  .wrapper {
    margin-top: 0;
    padding-top: 60px;
  }

  .aside {
    position: static;
  }
} */
.wrapper {
  background-image: url('/img/bg/image_copy.png');
  /* background-image: url('/img/bg/image.png'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;


  background-color: rgba(255, 255, 255, 0.877);
  background-blend-mode: overlay;
  margin-top: 130px;
  padding-bottom: 80px;
  z-index: -100;
}

.page-row {
  display: flex;
  gap: 14px;

  /* height: 100vh; */
}

.page-row__col {
  flex-grow: 1;
  padding: 15px 0;
}

.page-row__col:nth-child(1) {
  width: 70%;
  /* background-color: #000; */
}

.page-row__col:nth-child(2) {
  /* width: 20%; */
}

/* .aside {
  position: sticky;
  top: 130px;
  width: 100%;
  height: 100%;

} */

.sidebar {
  height: 100%;

  border-radius: 12px;
  border: 1px solid rgba(234, 238, 245, 1);
  ;
  background: #fff;
  box-shadow: 0px 0px 30px 0px rgba(7, 12, 28, 0.04);
  width: 100%;
}

.sidebar-title {
  padding: 12px;
  color: rgba(1, 11, 27, 1);
  font-size: 20px;
  line-height: 140%;
  font-weight: 600;
  letter-spacing: -0.2px;
}

.sidebar-menu__item {
  /* background-color: aqua; */
  border-top: 1px solid rgba(223, 228, 237, 1);
}

.sidebar-menu__link {
  display: block;
  padding: 12px;
  position: relative;
  color: rgba(1, 11, 27, 1);
  ;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.16px;
}

.sidebar-menu__link::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 0px;
  width: 4px;
  background-color: rgb(0, 60, 128);
  transition: all 0.2s ease-in-out;
}

.leadership {
  --local-image-width: 267px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  gap: 15px;
}

.leadership-image__inner img {
  /* width: 100%; */
  height: 250px;
  object-position: 15% center;
  object-fit: cover;
  border-radius: 12px;
  min-width: 250px;


}

.leadership-image {
  /* width: 100%; */
  margin: 0 auto;
}

.leadership-image__inner {
  aspect-ratio: 0.89;
  position: sticky;
  top: 140px;
}

.leadership-info__wrapper {
  /* width: calc(100% - 70px); */
}

.leadership-info {
  background: #FFF;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid rgba(239, 243, 249, 1);
  border-radius: 12px;
  /* height: 100%; */
  position: relative;
}

.leadership-detail .leadership-info,
.active .leadership-info {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.leadership-info__fio {
  color: rgba(1, 11, 27, 1);
  font-size: 24px;
  line-height: 140%;
  letter-spacing: -0.24px;
}

.leadership-info__text {
  color: rgba(71, 82, 98, 1);
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.16px;
  margin-bottom: auto;
}

.leadership-detail .leadership-info__bottom {
  justify-content: flex-start;
}

.leadership-info__bottom {
  margin-top: 16px;
  display: flex;
  /* justify-content: space-between; */
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 16px;
}

.leadership-detail .leadership-info__links {
  flex-direction: row;
  gap: 16px;
}

.leadership-info__link {
  padding: 6px 8px;
  display: flex;
  align-items: center;
  color: rgba(1, 11, 27, 1);
  font-size: 16px;
  line-height: 138%;
  letter-spacing: -0.16px;
  gap: 6px;
  border-radius: 8px;
  border: 1px solid rgba(223, 228, 237, 1);
  background: rgba(248, 250, 253, 1);
}

.leadership-info__link i {
  font-size: 18px;
  color: rgba(82, 148, 229, 1);
}

.leadership-info__links {
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  flex-direction: row;
  gap: 16px;
}

.page-block__subtitle {
  color: rgba(22, 35, 71, 1);
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.2px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.page-block__divider {
  border-top: 1px solid var(--black-7);
  margin: 12px 0;
}

.page-block {
  border-radius: 12px;
  border: 1px solid rgba(234, 238, 245, 1);
  background: #FFF;
  padding: 16px;
}

.page-block__subtitle {
  color: rgba(22, 35, 71, 1);
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.2px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
}

.page-block:not(:last-of-type) {
  margin-bottom: 12px;
}

.leadership-info__wrapper> :not(:last-child) {
  margin-bottom: 12px;
}

.leadership-info__social {
  display: flex;
  gap: 6px;
}

.leadership-info__social a {
  width: 34px;
  aspect-ratio: 1/1;
  border-radius: 8px;
  border: 1px solid rgba(223, 228, 237, 1);
  background: rgba(248, 250, 253, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: rgba(119, 129, 145, 1);
}


@media only screen and (max-width: 991px) {
  .leadership-image__inner img {
    min-width: 200px;
    height: 200px;

  }

}

@media only screen and (max-width: 768px) {

  .leadership-image__inner img {
    min-width: 160px;
    height: 179px;

  }

  .page-row {
    flex-direction: column;
  }

  .page-row__col:nth-child(1) {
    width: 100%;
  }

  .page-row__col:nth-child(2) {
    width: 100%;
  }

  .wrapper {
    margin-top: 0;
    padding-top: 60px;
  }

  .leadership-image__inner {
    aspect-ratio: 0.89;
    position: sticky;
    top: 140px;
  }

  .leadership-image__inner {
    aspect-ratio: 0.89;
    position: sticky;
    top: 50px;
  }
}

@media only screen and (max-width: 574px) {
  .leadership {
    flex-direction: column;

  }

  .leadership-image__inner {
    aspect-ratio: 0;
    display: flex;
    justify-content: center;
  }

  .leadership-image__inner img {
    min-width: 200px;
    height: 240px;

  }
}

</style>