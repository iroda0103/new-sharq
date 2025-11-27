<script setup>
import 'flowbite'
import BreadCrumb from '../breadcrumb/BreadCrumb.vue';
</script>

<template>
    <div class="banner">
        <div class="container banner__container">
            <BreadCrumb></BreadCrumb>
            <h1 class="banner__title">News Detail</h1>
        </div>
    </div>
</template>
<style>
.banner {
    /* background-image: url('../../../public/img/banner.jpg'); */
    background-size: cover;
    background-position: center;
    /* color: white; */
    text-align: center;
    position: relative;
    /* background-image: url('/img/bg/image_copy.png'); */
    /* background-image: url('/img/bg/image.png'); */
    background-repeat: no-repeat;
    /* background-size: cover; */
    background-position: center;

    background-color: rgba(255, 255, 255, 0.047);
    background-color: #fff;;
    height: 100px;
    /* background-color: ; */
}

/* .banner__container {
    position: relative;
    padding: 100px 20px;
    max-width: 1200px;
    margin: 0 auto;
    color: white;
    z-index: 1;
} */
.banner::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(22, 35, 71, 0.2) 0%, #162347 100%);
    z-index: -1;
}
</style>