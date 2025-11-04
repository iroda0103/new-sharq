<template>
  <button
    v-bind="$attrs"
    class="px-4 py-2 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <slot />
  </button>
</template>
