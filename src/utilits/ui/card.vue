<template>
  <div
    class="bg-white rounded-2xl shadow p-4 border border-gray-100"
    :class="customClass"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  customClass: {
    type: String,
    default: "",
  },
});
</script>
