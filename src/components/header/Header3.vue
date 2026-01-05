<template>
  <header
    class="header fixed w-full z-[1000] top-0 left-0 transition-all duration-300"
    :class="scrolled && 'bg-gradient-to-r from-[#00455ede] to-[#1b6ae9ee]'"
  >
    <div
      class="absolute inset-0 -z-10 transition-all"
      :class="scrolled ? 'bg-none' : 'bg-gradient-to-b from-[#0D172F] to-transparent'"
    />

    <div class="max-w-[1200px] mx-auto px-4">
      <HeaderTop
        :isMenuOpen="isMenuOpen"
        @toggle-menu="toggleMenu"
      />

      <HeaderNav
        :menuItems="menuItems"
        :activeIndex="activeIndex"
        :hoveredIndex="hoveredIndex"
        @toggle="toggleDropdown"
        @hover="setHover"
      />

      <HeaderMobileMenu
        v-if="isMenuOpen"
        :menuItems="menuItems"
        :activeIndex="activeIndex"
        @toggle="toggleDropdown"
      />
    </div>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { menuItems } from '@/data/menuData'

import HeaderTop from './HeaderTop.vue'
import HeaderNav from './HeaderNav.vue'
import HeaderMobileMenu from './HeaderMobileMenu.vue'

const route = useRoute()

const isMenuOpen = ref(false)
const activeIndex = ref(null)
const hoveredIndex = ref(null)
const scrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const toggleDropdown = (index) => {
  if (window.innerWidth >= 1024) return
  activeIndex.value = activeIndex.value === index ? null : index
}

const setHover = (index) => {
  if (window.innerWidth >= 1024) hoveredIndex.value = index
}

const updateHeader = () => {
  scrolled.value = route.path !== '/' || window.scrollY > 100
}

watch(() => route.path, () => {
  isMenuOpen.value = false
  activeIndex.value = null
  document.body.style.overflow = ''
  updateHeader()
})

onMounted(() => {
  updateHeader()
  window.addEventListener('scroll', updateHeader)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateHeader)
})
</script>


<style scoped>
    .header:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(180deg, #0d172f, #0d172f00);
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all .3s ease;
}

element.style {
}
.dropdown {
    /* position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%) translateY(-10px);
    background: linear-gradient(180deg, #375277, #3c6cac);
    border-radius: 8px;
    min-width: 220px;
    box-shadow: 0 10px 30px #00000026;
    z-index: 20; */
    /* visibility: hidden;
    overflow: visible; */
    /* opacity: 0; */
    /* transition: all .3s cubic-bezier(.175, .885, .32, 1.1); */
}
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInDown {
    animation: fadeInDown 0.4s ease;
}

/* Container responsive */
@media (min-width: 2560px) {
    .max-w-\[1200px\] {
        max-width: 2300px;
    }
}

@media (max-width: 1920px) {
    .max-w-\[1200px\] {
        max-width: 1620px;
    }
}

@media (max-width: 1800px) {
    .max-w-\[1200px\] {
        max-width: 1600px;
    }
}

@media (max-width: 1600px) {
    .max-w-\[1200px\] {
        max-width: 1400px;
    }
}

@media (max-width: 1300px) {
    .max-w-\[1200px\] {
        max-width: 1200px;
    }
}
</style>