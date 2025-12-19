<template>
  <div>
    <!-- Floating Button -->
    <button
      v-if="!isOpen"
      @click="isOpen = true"
      class="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 z-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </button>

    <!-- Ambassador Card -->
    <div
      v-if="isOpen"
      class="fixed bottom-6 right-6 w-[320px] bg-white rounded-xl shadow-2xl z-50 overflow-hidden student-chat-card"
    >
      <div class="relative">
        <button
          @click="isOpen = false"
          class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="p-4">
        <div class="flex items-start gap-3 mb-3">
          <div class="ambassador-avatar">
            <img 
              src="/img/person/student.png" 
              alt="Talaba"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-base text-gray-800 leading-tight">{{ ambassador.name }}</h3>
            <p class="text-xs text-gray-600 mt-1">{{ ambassador.degree }}</p>
            <div class="mt-1.5 flex gap-1">
              <!-- <span class="text-base">🇸🇰</span>
              <span class="text-base">🇩🇪</span> -->
            </div>
          </div>
        </div>

        <p class="text-gray-600 mb-4 leading-relaxed text-xs">
          Talaba hayoti haqida ko'proq ma'lumot olishni xohlaysizmi? Bizning talaba elchilarimiz bilan suhbatlashing va savollaringizni bering.
        </p>

        <a
          :href="ambassador.telegramUrl"
          target="_blank"
          class="block w-full bg-white text-blue-700 py-2.5 px-3 rounded-full font-medium border-2 border-blue-700 hover:bg-blue-50 transition-colors duration-200 text-center uppercase text-xs"
        >
          Talabalar bilan suhbat
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(true);

const ambassador = {
  name: 'Shukurullayev Adham',
  degree: 'Moliya va moliyaviy texnologiyalar',
  telegramUrl: 'https://t.me/SHARQ_YI'
};
</script>

<style scoped>
.student-chat-card {
  animation: slideInUp 0.3s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ambassador-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 640px) {
  .student-chat-card {
    width: calc(100vw - 40px);
    max-width: 300px;
    right: 20px;
    bottom: 20px;
  }
  
  .fixed.bottom-6.right-6 {
    bottom: 1.25rem;
    right: 1.25rem;
  }
}

@media (max-width: 400px) {
  .student-chat-card {
    width: calc(100vw - 32px);
    max-width: 280px;
    right: 16px;
    bottom: 16px;
  }
  
  .ambassador-avatar {
    width: 48px;
    height: 48px;
  }
  
  .fixed.bottom-6.right-6 {
    bottom: 1rem;
    right: 1rem;
    padding: 0.625rem;
  }
  
  .fixed.bottom-6.right-6 svg {
    width: 20px;
    height: 20px;
  }
}
</style>