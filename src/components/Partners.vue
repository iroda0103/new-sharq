<template>
  <section class="partners">
    <div class="container section-title" data-aos="fade-up">
      <h2 class="title">Hamkorlarimiz</h2>
    </div>

    <div class="partners-slider" ref="sliderRef" @mouseenter="pause" @mouseleave="start">
      <div class="our-partners" ref="partnersRef">
        <div
          v-for="(partner, index) in extendedPartners"
          :key="index"
          class="partner"
        >
          <img loading="lazy":src="partner.img" :alt="partner.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';

const sliderRef = ref(null);
const partnersRef = ref(null);
const originalPartners = ref([]);
const extendedPartners = ref([]);
const position = ref(0);
let animationId = null;
const speed = 1;
const itemWidth = 230; // 200px + 30px gap

const createData = () => {
  const data = [];
  for (let i = 0; i < 18; i++) {
    data.push({
      id: i + 1,
      name: `Partner ${i + 1}`,
      img: `/img/partners/part${i + 1}.png`
    });
  }
  originalPartners.value = data;
};

const duplicateForLooping = () => {
  const sliderWidth = sliderRef.value?.offsetWidth || 0;
  const cloneCount = Math.ceil(sliderWidth / itemWidth);
  const clones = [];

  for (let i = 0; i < cloneCount; i++) {
    clones.push(...originalPartners.value.slice(0, cloneCount));
  }

  extendedPartners.value = [...originalPartners.value, ...clones];
};

const animate = () => {
  const totalWidth = originalPartners.value.length * itemWidth;

  if (-position.value >= totalWidth) {
    position.value += totalWidth;
  }

  position.value -= speed;

  if (partnersRef.value) {
    partnersRef.value.style.transform = `translateX(${position.value}px)`;
  }

  animationId = requestAnimationFrame(animate);
};

const pause = () => {
  cancelAnimationFrame(animationId);
};

const start = () => {
  animationId = requestAnimationFrame(animate);
};

const resetOnResize = () => {
  position.value = 0;
  if (partnersRef.value) {
    partnersRef.value.style.transform = `translateX(0px)`;
  }
  duplicateForLooping();
};

onMounted(() => {
  createData();
  duplicateForLooping();
  start();
  window.addEventListener('resize', resetOnResize);
});

onUnmounted(() => {
  pause();
  window.removeEventListener('resize', resetOnResize);
});
</script>

<style scoped lang="scss">
.partners {
  .section-title {
    text-align: center;
    padding-bottom: 0;
  }
}

.partners-slider {
  position: relative;
  overflow: hidden;
  padding: 15px 0;
}

.our-partners {
  display: flex;
  gap: 30px;
  padding: 20px 0;
  transition: transform 0.1s linear;
}

.partner {
  flex: 0 0 220px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 15px;
  transition: all 0.3s ease;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);

    img {
      opacity: 1;
      transform: scale(1.01);
      filter: grayscale(0%);
    }
  }
}
</style>
