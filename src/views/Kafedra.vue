<template>
  <div class="min-h-screen">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-6">
      
      <!-- Chap: Tanlangan kafedra haqida ma'lumot -->
      <div class="flex-1 bg-white rounded-xl shadow-sm lg:p-8 max-h-[85vh] overflow-y-auto">
        <div v-if="selectedDepartment">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            {{ selectedDepartment.name }}
          </h2>

          <!-- Kafedra haqida -->
          <div class="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-6">
            <h4 class="flex items-center gap-2 text-lg font-semibold text-blue-700 mb-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Kafedra haqida
            </h4>
            <div class="text-gray-700 leading-relaxed whitespace-pre-line">{{ selectedDepartment.about }}</div>
          </div>

          <!-- Kafedra mudiri -->
          <div v-if="selectedDepartment.head" class="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
            <h4 class="flex items-center gap-2 text-lg font-semibold text-blue-700 mb-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              Kafedra mudiri
            </h4>
            <p class="text-gray-800 font-medium">{{ selectedDepartment.head }}</p>
          </div>

          <!-- Ustuvor yo‘nalishlar -->
          <div v-if="selectedDepartment.priorities" class="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-6">
            <h4 class="flex items-center gap-2 text-lg font-semibold text-blue-700 mb-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Kafedraning ustuvor yo‘nalishlari
            </h4>
            <ul class="space-y-2">
              <li v-for="(priority, index) in selectedDepartment.priorities" :key="index" class="flex items-start gap-2">
                <span class="text-blue-700 mt-1">•</span>
                <span class="text-gray-700">{{ priority }}</span>
              </li>
            </ul>
          </div>

          <!-- Ta'lim yo‘nalishlari -->
          <div v-if="selectedDepartment.programs" class="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-6">
            <h4 class="flex items-center gap-2 text-lg font-semibold text-blue-700 mb-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Ta'lim yo‘nalishlari
            </h4>
            <div class="text-gray-700 leading-relaxed">{{ selectedDepartment.programs }}</div>
          </div>

          <!-- Ma'naviy-ma'rifiy ishlar -->
          <div v-if="selectedDepartment.spiritualWork" class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 mb-6">
            <h4 class="flex items-center gap-2 text-lg font-semibold text-blue-700 mb-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Kafedra ma'naviy-ma'rifiy ishlari
            </h4>
            <div class="text-gray-700 leading-relaxed whitespace-pre-line">{{ selectedDepartment.spiritualWork }}</div>
          </div>

          <!-- Professor-o‘qituvchilar ro‘yxati -->
          <div v-if="selectedDepartment.staff && selectedDepartment.staff.length > 0" class="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <h4 class="flex items-center gap-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-700 to-indigo-700 px-6 py-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              Kafedra professor-o‘qituvchilari ro‘yxati
            </h4>
            
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="bg-gray-50 border-b border-gray-200">
                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">№</th>
                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">F.I.SH</th>
                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">Lavozimi</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr v-for="(member, index) in selectedDepartment.staff" :key="index" class="hover:bg-gray-50 transition-colors">
                    <td class="px-6 py-4 text-sm text-gray-600">{{ index + 1 }}</td>
                    <td class="px-6 py-4 text-sm text-gray-900 font-medium">{{ member.name }}</td>
                    <td class="px-6 py-4 text-sm text-gray-600">{{ member.position }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-12">
          <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
          <p class="text-gray-500 text-lg">Iltimos, kafedrani tanlang</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { departments as deptData } from "../data/kafedraData";

const route = useRoute();
const router = useRouter();

const departments = deptData;

const selectedDepartment = ref(null);

const loadDepartmentFromQuery = () => {
  const id = route.query.id;
  if (id) {
    const dept = departments.find(d => d.slug === id);
    selectedDepartment.value = dept || departments[0];
  } else {
    selectedDepartment.value = departments[0];
  }
};

watch(() => route.query.id, loadDepartmentFromQuery);

onMounted(loadDepartmentFromQuery);
</script>

<style scoped>
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>