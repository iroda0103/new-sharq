<template>
  <div class="lg:hidden bg-gradient-to-b from-[#00455e] to-[#1b6ae9]">
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        <a @click.prevent="$emit('toggle', index)" class="text-white">
          {{ item.title }}
        </a>

        <ul v-if="item.children && activeIndex === index">
          <li v-for="(child, i) in item.children" :key="i">
            <router-link :to="child.to">{{ child.title }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps(['menuItems', 'activeIndex'])
</script>
