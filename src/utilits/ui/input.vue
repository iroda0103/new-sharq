<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
});
defineEmits(["update:modelValue"]);
</script>
