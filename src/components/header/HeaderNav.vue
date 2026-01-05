<template>
  <nav class="hidden lg:flex justify-between items-center">
    <router-link to="/">
      <img src="/img/logo_sharq.webp" class="w-[190px]" />
    </router-link>

    <ul class="flex gap-5">
      <HeaderMenuItem
        v-for="(item, index) in menuItems"
        :key="index"
        :item="item"
        :index="index"
        :activeIndex="activeIndex"
        :hoveredIndex="hoveredIndex"
        @toggle="$emit('toggle', index)"
        @hover="$emit('hover', index)"
      />
    </ul>
  </nav>
</template>

<script setup>
import HeaderMenuItem from './HeaderMenuItem.vue'
defineProps(['menuItems', 'activeIndex', 'hoveredIndex'])
</script>
