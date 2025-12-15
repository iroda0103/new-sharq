<template>
  <div class="min-h-screen">
    <div class="max-w-7xl mx-auto">
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
                'px-6 py-4 whitespace-nowrap font-medium transition',
                activeTab === tab.id
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              ]"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <div class="page-block">
          <div class="lg:col-span-2">
            <div class="bg-white rounded-lg shadow-sm p-4">
              <h1 class="page-title">
                {{ direction.degree }} - {{ direction.name }}
              </h1>
              <!-- <p class="text-gray-600 mb-6">{{ direction.nameEn }}</p> -->

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
                <!-- <div class="border rounded-lg p-4">
                  <div class="font-semibold mb-1">Xorijiy talabalar</div>
                  <div class="text-2xl text-blue-600">{{ direction.fees.international }}</div>
                </div> -->
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { directions } from '../data/directionData'
import Payment from './Payment.vue';

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
  
  // Haqiqiy loyihada API chaqiruvi
  // try {
  //   const response = await fetch(`/api/directions/${directionId}`);
  //   const data = await response.json();
  //   direction.value = data;
  // } catch (error) {
  //   console.error('Xatolik:', error);
  //   direction.value = null;
  // } finally {
  //   loading.value = false;
  // }
  
  // Mock data bilan
//   setTimeout(() => {
    direction.value = directions[directionId];
    loading.value = false;
//   }, 300);
};

// Component yuklanganda
onMounted(() => {
  loadDirection();
});

// Route o'zgarganda (sidebar dan boshqa yo'nalishga o'tilganda)
watch(
  () => route.params.id,
  (newId, oldId) => {
    if (newId !== oldId) {
      // Tab'ni default holatga qaytarish
      activeTab.value = 'description';
      // Yangi yo'nalish ma'lumotlarini yuklash
      loadDirection();
      // Sahifani tepaga scroll qilish
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
);
</script>