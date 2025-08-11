<template>
  <div class="stat">
    <div class="number">{{ displayCount }}+</div>
    <span class="label">{{ label }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  count: Number,
  label: String,
  stepCount:Number
})

const displayCount = ref(0)

onMounted(() => {
  let start = 0
  const duration = 1000
  const stepTime = Math.max(Math.floor(duration / props.count), 10)

  const step = () => {
    if (start < props.count) {
    //   start++
      start+=props.stepCount
      displayCount.value = start
      setTimeout(step, stepTime)
    }
  }

  step()
})
</script>

<style scoped>
.stat {
  min-width: 100px;
  background: #f9f9f9;
  border-bottom: 3px solid #00bafc;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
}
.stat:hover {
  transform: translateY(-5px);
}
.number {
  font-size: 2rem;
  font-weight: bold;
  color: #222;
}
.label {
  font-size: 0.875rem;
  color: #777;
  margin-top: 5px;
  text-transform: uppercase;
}
</style>
