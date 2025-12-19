<template>
  <aside class="sticky top-[140px] self-start w-[290px] flex-grow flex flex-col gap-5">
    
    <!-- Sidebar -->
    <div
      v-if="currentSection"
      class="rounded-xl shadow-md overflow-hidden bg-white"
    >
      <h3 class="text-[18px] font-semibold px-4 py-3 relative">
        {{ currentSection.title }}
      </h3>

      <ul class="flex flex-col">
        <li
          v-for="(item, i) in currentSection.items"
          :key="i"
          class="sidebar-menu__item"
        >
          <router-link
            :to="item.href"
            class="sidebar-link"
            :class="{ 'sidebar-link--active': isActive(item.href) }"
          >
            <span class="truncate block w-full">
              {{ item.label }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Banner -->
    <div class="relative rounded-xl border bg-gradient-to-r from-[#EAEEF5] to-[#DFE4ED] p-3 overflow-hidden">
      <a
        href="https://t.me/sharqMurojaat_bot"
        target="_blank"
        class="relative z-10 block"
      >
        <h3 class="text-[15px] leading-[140%] mb-3 text-[#010b1b]">
          Rektorga <br /> Murojaat
        </h3>

        <button
          class="text-[15px] text-white px-2 py-1 rounded-md bg-gradient-to-r from-[#000e5a] to-[#003283]"
        >
          Yuborish
        </button>
      </a>

      <img
        src="/img/murojaat.png"
        class="absolute right-0 top-0 h-full object-contain opacity-80"
        alt=""
      />
    </div>
  </aside>
</template>

<style scoped>
.sidebar-link {
  @apply
    block
    w-full
    px-4
    py-3
    text-[15px]
    font-medium
    text-[#252729]
    transition-colors
    duration-200
    overflow-hidden;
}

.sidebar-link:hover {
  background: rgba(27, 106, 233, 0.1);
  color: #00455e;
}

.sidebar-link--active {
  background: linear-gradient(135deg, #00455e 0%, #1b6ae9 100%);
  color: #fff;
  font-weight: 600;
}

.sidebar-menu__item {
  border-top: 1px solid rgb(223, 228, 237);
}
</style>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useDepartmentsStore } from '../../stores/department'
import { storeToRefs } from 'pinia'

const route = useRoute()
const departmentsStore = useDepartmentsStore()
const { departments } = storeToRefs(departmentsStore)

// Static sidebar data
const staticSidebarData = {
    universitet: {
        title: 'Universitet',
        items: [
            { label: 'Rektor haqida', href: '/rektor' },
            { label: 'Tarixi', href: '/history' },
            { label: 'Hamkorlar', href: '/partners' },
            { label: 'Asosiy me\'yoriy hujjatlar', href: '/document' },
            { label: 'Litsenziya va sertifikatlar', href: '/sertificat' },
            { label: '360 gradusda binolar tuzilishi', href: '/campus' }
        ]
    },
    tuzilma: {
        title: 'Tuzilma',
        items: [
            { label: 'Rahbariyat', href: '/leadership' },
            { label: 'Fakultetlar', href: '/faculty' },
            { label: 'Kafedralar', href: '/kafedra' },
            { label: 'Bo\'limlar', href: '/department' }
        ]
    },
    fakultetlar: {
        title: 'Fakultetlar',
        items: [
            { label: 'Texnik va raqamli texnologiyalar fakulteti', href: '/directions?faculty=texnika' },
            { label: 'Iqtisod va biznes fakulteti', href: '/directions?faculty=iqtisod' },
            { label: 'Gumanitar fanlar fakulteti', href: '/directions?faculty=gumanitar' }
        ]
    },
    kafedralar: {
        title: 'Kafedralar',
        items: [
            { label: 'Iqtisodiyot va menejment kafedrasi', href: '/kafedra?id=iqtisodiyot' },
            { label: 'Gumanitar fanlar kafedrasi', href: '/kafedra?id=gumanitar' },
            { label: 'Axborot texnologiyalari kafedrasi', href: '/kafedra?id=it' }
        ]
    },
    faoliyatlar: {
        title: 'Faoliyatlar',
        items: [
            { label: 'Yoshlar ittifoqi', href: '/activity/yoshlar' },
            { label: 'Xotin-qizlar kengashi', href: '/activity/women' },
            { label: 'Kasaba uyushmasi', href: '/activity/kasaba' },
            { label: 'Tyutorlar faoliyati', href: '/activity/tutoring' },
            { label: 'Psixologik faoliyat', href: '/activity/psychology' }
        ]
    },
    talim: {
        title: 'Ta\'lim',
        items: [
            { label: 'Ta\'lim yo\'nalishlari', href: '/directions' },
            { label: 'Ta\'lim portali', href: '/education-portal' },
            { label: 'Axborot resurslar markazi', href: '/library' },
            { label: 'Dars jadvali', href: '/academic-calendar' }
        ]
    },
    yonalishlar: {
        title: 'Ta\'lim yo\'nalishlari',
        items: [
            { label: 'Tarix', href: '/direction/tarix' },
            { label: 'Psixologiya', href: '/direction/psixologiya' },
            { label: 'Ingliz tili', href: '/direction/ingliz-tili' },
            { label: 'Rus tili', href: '/direction/rus-tili' },
            { label: 'O\'zbek tili', href: '/direction/ozbek-tili' },
            { label: 'Iqtisodiyot', href: '/direction/iqtisodiyot' },
            { label: 'Moliya va moliyaviy texnologiyalar', href: '/direction/moliya' },
            { label: 'Marketing', href: '/direction/marketing' },
            { label: 'Biznesni boshqarish', href: '/direction/biznes' },
            { label: 'Kiberxavfsizlik injiniringi', href: '/direction/kiberxavfsizlik' },
            { label: 'Dasturiy injiniring', href: '/direction/dasturiy-injiniring' },
            { label: 'Sun\'iy intellekt', href: '/direction/suniy-intellekt' }
        ]
    },
    qabul: {
        title: 'Qabul',
        items: [
            { label: 'Bakalavr', href: '/directions' },
            { label: 'Grantlar', href: '/grant' },
            { label: 'O\'qishni ko\'chirish', href: '/academic-change' },
            { label: 'To\'lov turlari', href: '/payment' }
        ]
    },
    press: {
        title: 'Matbuot xizmati',
        items: [
            { label: 'Matbuot xizmati', href: '/press-service' },
            { label: 'Rasmlar', href: '/gallery' }
        ]
    },
    studentlife: {
        title: 'Talabalar hayoti',
        items: [
            { label: 'Yotoqxona', href: '/bed-room' },
            { label: 'Klublar', href: '/club' }
        ]
    }
}

// Default bo'limlar (agar API ishlamasa)
const defaultDepartments = [
    // { id: 1, name: 'Moliya-iqtisod bo\'limi' },
    // { id: 2, name: 'Xo\'jalik bo\'limi' },
    // { id: 3, name: 'Axborot texnologiyalar markazi' },
    // { id: 4, name: 'Axborot-resurslar markazi' },
    // { id: 5, name: 'Xodimlar bo\'limi' },
    // { id: 6, name: 'O\'quv-uslubiy bo\'lim' },
    // { id: 7, name: 'Marketing va shartnomalar bo\'limi' },
    // { id: 8, name: 'Talabalarga xizmat ko\'rsatish bo\'limi' },
    // { id: 10, name: 'Nazorat va sifat monitoringi bo\'limi' }
]

// Dinamik bo'limlar menusi
const bolimlarSection = computed(() => {
    // Agar store da ma'lumot bo'lsa
    if (departments.value && departments.value.length > 0) {
        return {
            title: 'Bo\'limlar',
            items: departments.value.map(dept => ({
                label: dept.name,
                href: `/department/staffs?department_id=${dept.id}`
            }))
        }
    }
    
    // Agar store bo'sh bo'lsa, default ma'lumotlardan foydalanish
    return {
        title: 'Bo\'limlar',
        items: defaultDepartments.map(dept => ({
            label: dept.name,
            href: `/department/staffs?department_id=${dept.id}`
        }))
    }
})

// Current section ni aniqlash
const currentSection = computed(() => {
    const path = route.path
    const fullPath = route.fullPath

    // Yo'nalishlar
    if (path.startsWith('/direction/')) {
        return staticSidebarData.yonalishlar
    }

    // Universitet
    if (['/rektor', '/history', '/partners', '/document', '/sertificat', '/campus'].some(p => path.includes(p))) {
        return staticSidebarData.universitet
    }
    
    // Tuzilma
    if (path.includes('/leadership')) {
        return staticSidebarData.tuzilma
    }
    
    // Fakultetlar
    if (path.includes('/faculty') || (path.includes('/directions') && fullPath.includes('faculty='))) {
        return staticSidebarData.fakultetlar
    }
    
    // Kafedralar
    if (path.includes('/kafedra')) {
        return staticSidebarData.kafedralar
    }
    
    // Bo'limlar - DINAMIK
    if (path.includes('/department')) {
        return bolimlarSection.value
    }
    
    // Faoliyatlar
    if (path.includes('/activity/')) {
        return staticSidebarData.faoliyatlar
    }
    
    // Ta'lim
    if (['/education-portal', '/library', '/academic-calendar'].some(p => path === p) || 
        (path === '/directions' && !fullPath.includes('faculty='))) {
        return staticSidebarData.talim
    }
    
    // Qabul
    if (['/grant', '/academic-change', '/payment'].some(p => path === p)) {
        return staticSidebarData.qabul
    }
    
    // Press
    if (['/press-service', '/gallery'].some(p => path === p)) {
        return staticSidebarData.press
    }
    
    // Student life
    if (['/bed-room', '/club'].some(p => path === p)) {
        return staticSidebarData.studentlife
    }

    return null
})

// Active link tekshirish
const isActive = (href) => {
    const currentFullPath = route.fullPath
    const currentPath = route.path
    
    // Query parametrlar bilan to'liq moslik
    if (href.includes('?')) {
        return currentFullPath === href
    }
    
    // Oddiy path moslik
    return currentPath === href
}

// Component mount bo'lganda store dan ma'lumot olish
onMounted(async () => {
    // Agar store bo'sh bo'lsa, API dan yuklash
    if (!departments.value || departments.value.length === 0) {
        try {
            await departmentsStore.fetchDepartments({  })
        } catch (error) {
            console.error('Bo\'limlarni yuklashda xatolik:', error)
            // Default ma'lumotlar ishlatiladi
        }
    }
})
</script>