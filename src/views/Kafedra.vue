<template>
  <div class="min-h-screen">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-6">
      
      <!-- O'ng: Kafedra tanlash sidebar -->
      

      <!-- Chap: Tanlangan kafedra haqida ma'lumot -->
      <div class="flex-1 bg-white rounded-xl shadow-sm lg:p-8 max-h-[85vh] overflow-y-auto">
        <div v-if="selectedDepartment">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            {{ selectedDepartment.name }}
          </h2>
          <p class="text-base text-gray-600 leading-relaxed mb-6">
            {{ selectedDepartment.description }}
          </p>

          <div class="border-l-4 border-blue-700 pl-6 py-4 mb-8 bg-blue-50 rounded-r-lg">
            <em class="text-blue-700 text-base font-medium">
              "{{ selectedDepartment.motto }}"
            </em>
          </div>

          <div class="space-y-6">
            <!-- Kafedra haqida -->
            <div class="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h4 class="flex items-center gap-2 text-lg font-semibold text-blue-700 mb-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Kafedra haqida
              </h4>
              <p class="text-gray-700 leading-relaxed">{{ selectedDepartment.about }}</p>
            </div>

            <!-- Ta'lim yo'nalishlari -->
            <div class="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h4 class="flex items-center gap-2 text-lg font-semibold text-blue-700 mb-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                Ta'lim yo'nalishlari
              </h4>
              <p class="text-gray-700 leading-relaxed">{{ selectedDepartment.programs }}</p>
            </div>

            <!-- Aloqa ma'lumotlari -->
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <h3 class="flex items-center gap-2 text-lg font-semibold text-blue-700 mb-6">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Aloqa
              </h3>

              <div class="space-y-4">
                <!-- Email -->
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a 
                    :href="`mailto:${selectedDepartment.email}`" 
                    class="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    {{ selectedDepartment.email }}
                  </a>
                </div>

                <!-- Telefon -->
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <a 
                    :href="`tel:${selectedDepartment.phone.replace(/\s/g, '')}`"
                    class="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    {{ selectedDepartment.phone }}
                  </a>
                </div>

                <!-- Manzil -->
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span class="text-gray-700">{{ selectedDepartment.address }}</span>
                </div>

                <!-- Ish vaqti -->
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span class="text-gray-700">Dushanba-Juma, 9:00-18:00</span>
                </div>
              </div>
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

const route = useRoute();
const router = useRouter();

const departments = [
  {
    slug: "iqtisodiyot",
    name: "Iqtisodiyot va menejment kafedrasi",
    description: "Iqtisodiy bilimlarni chuqurlashtirish va menejment bo'yicha malakali kadrlar tayyorlovchi kafedra.",
    motto: "Yaxshi boshqaruv — taraqqiyot garovi.",
    about: "Kafedra 2025-yilda tashkil etilgan bo'lib, iqtisodiyot, menejment va moliyaviy tahlil sohalarida faoliyat yuritadi. Bizning kafedramizda 50 dan ortiq professor-o'qituvchilar faoliyat ko'rsatadi, jumladan 7 nafar fan doktori, 28 nafar fan nomzodi. Kafedramizda zamonaviy ta'lim texnologiyalari joriy etilgan bo'lib, talabalar amaliy ko'nikmalarga ega bo'lishlari uchun barcha shart-sharoitlar yaratilgan.",
    programs: "Iqtisodiyot, Biznesni boshqarish, Marketing, Moliya va moliyaviy texnologiyalar",
    email: "info@sharqedu.uz",
    phone: "+998 79 222 07 00",
    address: "2-qavat, 201-xona"
  },
  {
    slug: "gumanitar",
    name: "Gumanitar fanlar kafedrasi",
    description: "Tarix, Psixologiya, Filologiya va till va boshqa gumanitar fanlar bo'yicha ta'lim beruvchi kafedra.",
    motto: "Jamiyatni tushunish — uni boshqarish kalitidir.",
    about: "Ijtimoiy fanlar asoslari, milliy g'oya va ma'naviyat asoslari bo'yicha kurslar. Kafedramizda yuqori malakali professor-o'qituvchilar o'z sohalarida chuqur bilimga ega bo'lib, talabalarni zamonaviy pedagogik metodlar orqali ta'lim berishadi.",
    programs: "Siyosatshunoslik, Tarix, Falsafa, Filologiya, Psixologiya",
    email: "info@sharqedu.uz",
    phone: "+998 79 222 07 00",
    address: "3-qavat, 301-xona"
  },
  {
    slug: "it",
    name: "Axborot texnologiyalari kafedrasi",
    description: "Dasturlash, tarmoq texnologiyalari va IT-innovatsiyalarni o'rgatuvchi kafedra.",
    motto: "Texnologiya — kelajakning tili.",
    about: "Kompyuter fanlari, sun'iy intellekt, veb dasturlash yo'nalishlarida ta'lim beradi. Kafedramizda 12 nafar o'qituvchi va 4 nafar texnik mutaxassis faoliyat yuritadi. Zamonaviy laboratoriyalar va texnik jihozlar bilan ta'minlangan.",
    programs: "Kompyuter injiniringi, IT Servis, Axborot xavfsizligi, Dasturiy injiniring",
    email: "info@sharqedu.uz",
    phone: "+998 79 222 07 00",
    address: "5-qavat, 501-xona"
  }
];

const selectedDepartment = ref(null);

const selectDepartment = (slug) => {
  router.push({ path: '/kafedra', query: { id: slug } });
};

const loadDepartmentFromQuery = () => {
  const id = route.query.id;
  if (id) {
    const dept = departments.find(d => d.slug === id);
    if (dept) {
      selectedDepartment.value = dept;
    } else {
      selectedDepartment.value = departments[0];
    }
  } else {
    selectedDepartment.value = departments[0];
  }
};

// Query parametri o'zgarganda
watch(() => route.query.id, () => {
  loadDepartmentFromQuery();
});

onMounted(() => {
  loadDepartmentFromQuery();
});
</script>

<style scoped>
/* Scrollbar styling */
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