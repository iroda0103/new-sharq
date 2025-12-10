<script setup>
import 'flowbite'
import BreadCrumb from '../breadcrumb/BreadCrumb.vue';
</script>

<template>
    <div class="banner">
        <div class="container banner__container">
            <BreadCrumb></BreadCrumb>
            <h1 class="breadcrumbs-title">Rektor</h1>
        </div>
    </div>
</template>
<style>
.banner {
    background-image: url('../../../public/img/bg/banner.jpg');
    background-size: cover;
    background-position: center;
        height: 140px;

    /* color: white; */
    text-align: center;
    position: relative;
    /* background-image: url('/img/bg/image_copy.png'); */
    /* background-image: url('/img/bg/image.png'); */
    background-repeat: no-repeat;
    /* background-size: cover; */
    background-position: center;

    /* background-color: rgba(255, 255, 255, 0.047); */
    /* background-color: #fff;; */
    /* background-color: linear-gradient(180deg, rgba(22, 35, 71, 0.2) 0%, #162347 100%); */
    background-color: rgba(255, 255, 255, 0.877);
    /* height: 100px; */
    /* background-color: ; */
}
.breadcrumbs-title {
  color: #fff;
  /* font-family: "MuseoSansCyrl-700", sans-serif; */
  font-size: 32px;
  line-height: 140%;
  letter-spacing: -0.32px;
  font-weight: 600;
}

.banner__container {
    position: relative;
    /* padding: 100px 20px; */
    max-width: 400px;
    margin: auto;
    color: white;
    z-index: 1;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 20px;
}
 
.banner::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(22, 35, 71, 0.2) 0%, #162347 100%);
    /* z-index: -1; */
}
</style>