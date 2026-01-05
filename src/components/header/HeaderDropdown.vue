<template>
  <ul
    class="absolute bg-[#375277] rounded-lg min-w-[220px]"
    v-show="visible"
  >
    <li v-for="(child, i) in items" :key="i">
      <router-link :to="child.to" class="block px-5 py-3 text-white">
        {{ child.title }}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: Array,
  visible: Boolean
})
</script>
