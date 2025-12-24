<template>
  <section class="timeline-section">
    <div class="hero-section">
      <h2 class="hero-title">{{ title }}</h2>
      <p v-if="subtitle" class="hero-subtitle">{{ subtitle}}</p>
    </div>

    <div class="timeline-container">
      <!-- Vertikal nuqtali chiziq -->
      <div class="timeline-line">
        <div class="timeline-progress" :style="{ height: progressHeight + '%' }"></div>
      </div>

      <!-- Timeline items -->
      <div v-for="(item, index) in timelineItems" :key="item.id" class="timeline-item"
        :class="{ visible: item.visible }" :ref="el => setItemRef(el, item.id)">
        
        <!-- O'rtadagi raqam -->
        <div class="timeline-number">
          <div class="number-pulse"></div>
          {{ item.id }}
        </div>

        <!-- Gorizontal nuqtali chiziqlar -->
        <div class="horizontal-line horizontal-line-left" :class="{ visible: item.visible }"></div>
        <div class="horizontal-line horizontal-line-right" :class="{ visible: item.visible }"></div>

        <!-- Card va Rasm -->
        <div class="content-wrapper" :class="index % 2 === 0 ? 'content-left' : 'content-right'">
          <!-- Card -->
          <div class="card" :class="{ 'border-animate': item.visible }">
            <div class="card-content">
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-description">{{ item.description }}</p>
            </div>
          </div>

          <!-- Rasm (qarama-qarshi tomonda) -->
          <div class="image-container" :class="{ 'border-animate': item.visible }">
            <!-- <img :src="item.image" :alt="item.title" class="timeline-image" /> -->
            <img :src="(item.id==1 || item.id==3)?'/img/education/sharq1.webp':'/img/education/sharq2.webp'" :alt="item.title" class="timeline-image" />
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="cta-section" :class="{ visible: ctaVisible }" ref="ctaSection">
      <div class="cta-box">
        <h2 class="cta-title title">{{ ctaTitle }}</h2>
        <p class="cta-description">{{ ctaDescription }}</p>
        <button class="cta-button" @click="handleCTAClick">
          {{ ctaButtonText }}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'TimelineSection',

  props: {
    title: {
      type: String,
      default: 'Nega Sharq universiteti?'
    },
    subtitle: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    ctaTitle: {
      type: String,
      default: 'Kelajagingizni bugun boshlang!'
    },
    ctaDescription: {
      type: String,
      default: '12 ta zamonaviy yo\'nalishdan birini tanlang: IT, Iqtisodiyot, Filologiya, Tarix, Psixologiya va boshqalar'
    },
    ctaButtonText: {
      type: String,
      default: 'Ariza Topshirish'
    }
  },

  emits: ['cta-click'],

  setup(props, { emit }) {
    const progressHeight = ref(0);
    const ctaVisible = ref(false);
    const itemRefs = ref({});
    const ctaSection = ref(null);

    // Default timeline items with images
    const defaultItems = [
      {
        id: 1,
        title: "Bizning maqsadimiz",
        description: "Ilm-fan, ta'lim va innovatsiya jarayonlarni uyg'unlashtirgan holda, milliy va xalqaro standartlarga mos yuqori malakali mutaxassislarni tayyorlashdir.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
        visible: false
      },
      {
        id: 2,
        title: "Bizning imkoniyatlarimiz",
        description: "Har bir talaba uchun individual yondashuv. Faol talabalar klublari va tashabbuslarga ochiq platforma. Mentorlik dasturlari va ustozlar bilan bevosita aloqa.",
        image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
        visible: false
      },
      {
        id: 3,
        title: "Bizning qadriyatimiz",
        description: "Sharqona ma'daniyat bilan zamonaviy bilimlarni uyg'unlashtirish. 'Sharq madaniyati Yevropaga nafaqat ilm-fan, balki yangi ruh va izlanish usullarini ham olib keldi.'",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
        visible: false
      }
    ];

    const timelineItems = ref(
      props.items.length > 0
        ? props.items.map(item => ({ ...item, visible: false }))
        : defaultItems
    );

    const setItemRef = (el, id) => {
      if (el) {
        itemRefs.value[id] = el;
      }
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Progress bar
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      console.log('ll',Math.min(scrollPercent, 100),'TEST',documentHeight,windowHeight,scrollTop);
      
      progressHeight.value = Math.min(scrollPercent, 100);

      // Timeline items visibility (ikki tomonlama)
      timelineItems.value.forEach((item) => {
        const element = itemRefs.value[item.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;

          // Ekranda ko'rinsa visible true, yo'qsa false
          if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
            item.visible = true;
          } else {
            item.visible = false;
          }
        }
      });

      // CTA visibility
      if (ctaSection.value) {
        const ctaRect = ctaSection.value.getBoundingClientRect();
        ctaVisible.value = ctaRect.top < windowHeight * 0.8;
      }
    };

    const handleCTAClick = () => {
      emit('cta-click');
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      progressHeight,
      ctaVisible,
      timelineItems,
      ctaSection,
      setItemRef,
      handleCTAClick
    };
  }
};
</script>

<style scoped>
.timeline-section {
  min-height: 150vh;
  padding: 20px 0;
  background: #f8fafc;
  color: #1e293b;
  overflow: hidden;
}

.hero-section {
  text-align: center;
  padding: 40px 20px 80px;
  max-width: 900px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  line-height: 1.6;
}

.timeline-container {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Vertikal nuqtali chiziq */
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  width: 3px;
  height: 100%;
  background: transparent;
  background-image: repeating-linear-gradient(
    0deg,
    #cbd5e1,
    #cbd5e1 10px,
    transparent 10px,
    transparent 20px
  );
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-progress {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: linear-gradient(180deg, #1e3a8a, #3b82f6);
  box-shadow: 0 0 15px rgba(30, 58, 138, 0.5);
  transition: height 0.3s ease-out;
}

/* Timeline item */
.timeline-item {
  position: relative;
  margin-bottom: 50px;
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

.timeline-item.visible {
  opacity: 1;
  transform: translateY(0);
}

/* O'rtadagi raqam */
.timeline-number {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 20px rgba(30, 58, 138, 0.4);
  z-index: 10;
}

.number-pulse {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(30, 58, 138, 0.3), transparent);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.2);
    opacity: 0;
  }
}

/* Gorizontal nuqtali chiziqlar */
.horizontal-line {
  position: absolute;
  top: 50%;
  height: 2px;
  background: transparent;
  background-image: repeating-linear-gradient(
    90deg,
    #cbd5e1,
    #cbd5e1 10px,
    transparent 10px,
    transparent 20px
  );
  transform: translateY(-50%);
  width: 0;
  transition: width 0.8s ease-out 0.3s;
  z-index: 3;
}

.horizontal-line.visible {
  width: calc(50% - 35px);
}

.horizontal-line-left {
  right: 50%;
  margin-right: 35px;
}

.horizontal-line-right {
  left: 50%;
  margin-left: 35px;
}

/* Content wrapper */
.content-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  height: 280px;
}

.content-wrapper.content-left {
  flex-direction: row;
}

.content-wrapper.content-right {
  flex-direction: row-reverse;
}

/* Card - Kattalashtrildi */
.card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 3px solid transparent;
  width: calc(50% - 60px);
  max-width: 550px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  z-index: 5;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(30, 58, 138, 0.15);
}

/* Border animatsiya */
.card.border-animate {
  animation: borderGrow 1s ease-out 0.5s forwards;
}

@keyframes borderGrow {
  from {
    border-color: transparent;
  }
  to {
    border-color: #3b82f6;
  }
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1e3a8a;
}

.card-description {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #475569;
}

/* Rasm konteyner - Kattalashtrildi */
.image-container {
  width: calc(50% - 60px);
  max-width: 550px;
  height: 280px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  border: 3px solid transparent;
  z-index: 5;
  transition: all 0.4s ease;
}

.image-container:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

/* Border animatsiya rasmga */
.image-container.border-animate {
  animation: borderGrow 1s ease-out 0.5s forwards;
}

.timeline-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.timeline-image:hover {
  transform: scale(1.1);
}

/* CTA Section */
.cta-section {
  text-align: center;
  margin-top: 50px;
  padding: 60px 20px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease;
}

.cta-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.cta-box {
  background: white;
  border-radius: 24px;
  padding: 50px 40px;
  border: 2px solid #e2e8f0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  max-width: 750px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  /* color: #1e293b; */
}

.cta-description {
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 32px;
  line-height: 1.6;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 48px;
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 25px rgba(30, 58, 138, 0.3);
  opacity: 0.4;
  cursor: not-allowed;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 35px rgba(30, 58, 138, 0.4);
}

.cta-button svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(5px);
}

/* Mobile responsive */
@media (max-width: 1024px) {
  .content-wrapper {
    flex-direction: column !important;
    height: auto;
    gap: 30px;
  }

  .card,
  .image-container {
    width: 100%;
    max-width: 600px;
  }

  .horizontal-line {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .timeline-line {
    left: 30px;
  }

  .timeline-number {
    left: 30px;
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  .card {
    padding: 30px;
  }

  .card-title {
    font-size: 1.4rem;
  }

  .image-container {
    height: 220px;
  }

  .cta-title {
    font-size: 1.8rem;
  }

  .cta-button {
    padding: 14px 36px;
    font-size: 1rem;
  }
}
</style>