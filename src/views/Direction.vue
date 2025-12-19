<template>
  <div class="min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="loading" class="flex justify-center items-center h-64">
        <div class="text-xl text-gray-600">Yuklanmoqda...</div>
      </div>

      <div v-else-if="!direction" class="flex justify-center items-center h-64">
        <div class="text-xl text-gray-600">Yo'nalish topilmadi</div>
      </div>

      <div v-else>
        <div class="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
          <div class="flex border-b overflow-x-auto">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'px-4 sm:px-6 py-4 whitespace-nowrap font-medium transition text-sm sm:text-base',
                activeTab === tab.id
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              ]"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <div class="direction-about-wrapper">
          <div class="page-block">
            <div class="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h1 class="page-title text-2xl sm:text-3xl">
                {{ direction.degree }} - {{ direction.name }}
              </h1>

              <!-- Yo'nalish haqida -->
              <div v-if="activeTab === 'description'" class="prose max-w-none">
                <p class="text-gray-700 leading-relaxed">{{ direction.description }}</p>
              </div>

              <!-- Tuzilma -->
              <div v-if="activeTab === 'structure'" class="space-y-4">
                <div
                  v-for="year in direction.structure"
                  :key="year.year"
                  class="border-l-4 border-blue-600 pl-4"
                >
                  <h3 class="font-semibold text-lg mb-2">{{ year.year }}-kurs</h3>
                  <div class="space-y-1">
                    <div
                      v-for="(subject, i) in year.subjects"
                      :key="i"
                      class="text-gray-700"
                    >
                      • {{ subject }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Talablar -->
              <div v-if="activeTab === 'requirements'" class="space-y-6">
                <div>
                  <h3 class="font-semibold text-lg mb-3">Kirish talablari</h3>
                  <div class="space-y-2">
                    <div
                      v-for="(req, i) in direction.requirements.entry"
                      :key="i"
                      class="flex items-start"
                    >
                      <span class="text-blue-600 mr-2">✓</span>
                      <span class="text-gray-700">{{ req }}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-3">Bitiruv talablari</h3>
                  <div class="space-y-2">
                    <div
                      v-for="(req, i) in direction.requirements.graduation"
                      :key="i"
                      class="flex items-start"
                    >
                      <span class="text-blue-600 mr-2">✓</span>
                      <span class="text-gray-700">{{ req }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- To'lov -->
              <div v-if="activeTab === 'fees'" class="space-y-4">
                <div class="border rounded-lg p-4">
                  <div class="font-semibold mb-1">Mahalliy talabalar</div>
                  <div class="text-xl">{{ direction.fees.local }}</div>
                </div>
                <Payment></Payment>
              </div>

              <!-- Ish o'rinlari -->
              <div v-if="activeTab === 'jobs'" class="grid sm:grid-cols-2 gap-3">
                <div
                  v-for="(job, i) in direction.jobs"
                  :key="i"
                  class="border rounded-lg p-4 hover:shadow-md transition"
                >
                  <div class="font-medium text-gray-800">{{ job }}</div>
                </div>
              </div>
            </div>
          </div>
          <img 
            v-if="activeTab === 'description'" 
            :src="direction.img"
            class="direction-image"
          />
        </div>
      </div>
    </div>
    
    <!-- Student Ambassador Chat Component -->
    <StudentChat />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { directions } from '../data/directionData';
import Payment from './Payment.vue';
import StudentChat from '../components/card/StudentChat.vue';

const route = useRoute();
const direction = ref(null);
const activeTab = ref('description');
const loading = ref(true);

const tabs = [
  { id: 'description', label: "Yo'nalish haqida" },
  { id: 'structure', label: 'Tuzilma' },
  { id: 'requirements', label: 'Talablar' },
  { id: 'fees', label: "To'lov" },
  { id: 'jobs', label: "Ish o'rinlari" }
];

const loadDirection = () => {
  loading.value = true;
  const directionId = route.params.id;
  direction.value = directions[directionId];
  loading.value = false;
};

onMounted(() => {
  loadDirection();
});

watch(
  () => route.params.id,
  (newId, oldId) => {
    if (newId !== oldId) {
      activeTab.value = 'description';
      loadDirection();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
);
</script>

<style scoped>
.direction-about-wrapper {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.direction-image {
  width: 100%;
  max-width: 405px;
  height: 321px;
  object-fit: cover;
  border-radius: 13px;
  flex-shrink: 0;
}

.page-block {
  flex: 1;
  min-width: 300px;
}

.page-title {
  margin-bottom: 1rem;
  font-weight: 600;
}

/* Tablet */
@media (max-width: 1024px) {
  .direction-about-wrapper {
    flex-direction: column;
  }
  
  .direction-image {
    max-width: 100%;
    height: auto;
    min-height: 250px;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .direction-image {
    height: 200px;
  }
  
  .page-title {
    font-size: 1.5rem;
  }
}
</style>