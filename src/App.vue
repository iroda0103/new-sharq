<template>
  <div class="app">
    <Header></Header>
    <!-- APP HEADER -->

    <!-- <div class="container app-header">
      <AppSearch @update:searchQuery="handleSearchChange" />
      <AppLocation @update:selectedLocation="handleLocationChange" :locations="locations" />
    </div> -->
    <!-- <h1>{{ user?.first_name }},{{ user?.id }}{{ JSON.stringify(user) }}</h1> -->

    <main>
      <RouterView />
    </main>
    <Footer></Footer>
  </div>
</template>
<style>
.app {
  position: relative;
  position: relative;
  /* padding: 130px 0; */
  height: 100%;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

main {
  flex: 1;
}
</style>
<script>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
onMounted(() => {
  initFlowbite();
})

export default {
  components: {
    Header,
    Footer
  }
}
</script>