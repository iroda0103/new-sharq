<template>
  <li
    class="relative group"
    @mouseenter="$emit('hover', index)"
    @mouseleave="$emit('hover', null)"
  >
    <a v-if="item.href && !item.children" :href="item.href" target="_blank" rel="noopener noreferrer" class="text-white">
      {{ item.title }}
    </a>
    <template v-else>
      <a href="#" @click.prevent="$emit('toggle', index)" class="text-white">
        {{ item.title }}
      </a>

      <HeaderDropdown
        v-if="item.children"
        :items="item.children"
        :visible="activeIndex === index || hoveredIndex === index"
      />
    </template>
  </li>
</template>

<script setup>
import HeaderDropdown from './HeaderDropdown.vue'
defineProps(['item', 'index', 'activeIndex', 'hoveredIndex'])
</script>
