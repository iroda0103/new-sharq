<!-- 
<template>
    <div class="aside">
        <div class="sidebar" v-if="currentSection">
            <h3 class="sidebar-title">{{ currentSection.title }}</h3>
            <ul class="sidebar-menu-list">
                <li v-for="(item, index) in currentSection.items" :key="index" class="sidebar-menu__item"
                    :class="{ 'active': isActive(item.href) }">
                    <a :href="item.href" class="sidebar-menu__link">
                        {{ item.label }}
                    </a>
                </li>
            </ul>
        </div>
        <div class="aside-banner">
            <a href="https://t.me/sharqMurojaat_bot">
                <h3 class="aside-banner__title"> Rektorga <br>Murojaat</h3>
                <button class="aside-banner__btn">Yuborish</button>
                <img class="aside-banner__image" src="/img/murojaat.png" alt="Reach out to the Rector">
            </a>
        </div>
    </div>

</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPath = ref('')

const sidebarData = {
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
    bolimlar: {
        title: 'Bo\'limlar',
        items: [
            { label: 'Moliya-iqtisod bo\'limi', href: '/department?id=moliya' },
            { label: 'Xo\'jalik bo\'limi', href: '/department?id=xojalik' },
            { label: 'Axborot texnologiyalar markazi', href: '/department?id=it' },
            { label: 'Axborot-resurslar markazi', href: '/department?id=library' },
            { label: 'Xodimlar bo\'limi', href: '/department?id=hr' },
            { label: 'O\'quv-uslubiy bo\'lim', href: '/department?id=metodic' },
            { label: 'Marketing va shartnomalar bo\'limi', href: '/department?id=marketing' },
            { label: 'Talabalarga xizmat ko\'rsatish bo\'limi', href: '/department?id=student-service' }
        ]
    },
    faoliyatlar:{
        title: 'Faoliyatlar',
        items: [
            { label: 'Yoshlar ittifoqi', href: '/activity/yoshlar' },
            {label:'Xotin-qizlar kengashi', href:'/activity/women'},
            {label:'Kasaba uyushma', href:'/activity/kasaba'},
            {label:'Tyutorlar faoliyati', href:'/activity/tutoring'},
            {label:"Psixologik faoliyat", href:'/activity/psychology'}]
    },
    talim: {
        title: 'Ta\'lim',
        items: [
            { label: 'Ta\'lim portali', href: '/education-portal' },
            { label: 'Axborot resurslar markazi', href: '/library' },
            { label: 'Dars jadvali', href: '/academic-calendar' },
            { label: 'Faoliyatlar', href: '/activity' },
            { label: 'Gallery', href: '/galery' }
        ]
    },
    abituriyentlar: {
        title: 'Abituriyentlar',
        items: [
            { label: 'Ta\'lim yo\'nalishlari', href: '/directions' },
            { label: 'Yotoqxona', href: '/bed-room' },
            { label: 'Grantlar', href: '/grant' },
            { label: 'Umumiy ma\'lumot', href: '/info' },
            { label: 'Qabul statistikasi', href: '/statistics' },
            { label: 'O\'qish to\'lovlari va stipendiyalar', href: '/payment' }
        ]
    },
    press:{
        title: 'Matbuot xizmati',
        items: [
            { label: 'Yangiliklar', href: '/news' },
            { label: 'Postlar', href: '/posts' },
            { label: 'Matbuot xizmati', href: '/press-service' },
            { label: 'Rasmlar', href: '/gallery' },
        ]
    }
}

const currentSection = computed(() => {
    const path = currentPath.value

    if (path.includes('/rektor') || path.includes('/history') || path.includes('/wrapper') ||
        path.includes('/partners') || path.includes('/document') ||
        path.includes('/sertificat') || path.includes('/campus')) {
        return sidebarData.universitet
    }

    if (path.includes('/leadership')) {
        return sidebarData.tuzilma
    }

    if (path.includes('/faculty') || (path.includes('/directions') && path.includes('faculty='))) {
        return sidebarData.fakultetlar
    }

    if (path.includes('/kafedra')) {
        return sidebarData.kafedralar
    }

    if (path.includes('/department')) {
        return sidebarData.bolimlar
    }
      if (path.includes('/activity') && path.includes('/activity')) {
        return sidebarData.faoliyatlar
    }

    if (path.includes('/education-portal') || path.includes('/library') || path.includes('/academic-calendar') ||
        path.includes('/activity') || path.includes('/galery')) {
        return sidebarData.talim
    }

    if (path.includes('/directions') || path.includes('/bed-room') ||
        path.includes('/grant') || path.includes('/info') ||
        path.includes('/statistics') || path.includes('/payment')) {
        return sidebarData.abituriyentlar
    }

    if (path.includes('/press-service') || path.includes('/news') ||
        path.includes('/posts') || path.includes('/gallery')) {
        return sidebarData.press
    }
    return null
})

const isActive = (href) => {
    return currentPath.value === href || currentPath.value.startsWith(href)
}

const updatePath = () => {
    currentPath.value = window.location.pathname + window.location.search
}

onMounted(() => {
    updatePath()
    window.addEventListener('popstate', updatePath)
})

watch(() => route.path, () => {
    updatePath()
}, { immediate: true })
</script> -->
<template>
  <aside class="sticky top-[140px] self-start w-[290px] flex-grow flex flex-col gap-5">
  <!-- <aside class="flex-grow flex flex-col gap-5 sticky top-[140px] w-[290px] w-[100%] "> -->
    
    <!-- Sidebar -->
    <div
      v-if="currentSection"
      class="rounded-xl shadow-md overflow-hidden bg-white"
    >
      <h3
        class="text-[18px] font-semibold px-4 py-3 relative"
      >
        {{ currentSection.title }}
        <!-- <span class="absolute left-4 bottom-0 w-14 h-[3px] rounded bg-gradient-to-r from-[#00455e] to-[#1b6ae9]" /> -->
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
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const sidebarData = {
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
    bolimlar: {
        title: 'Bo\'limlar',
        items: [
            { label: 'Moliya-iqtisod bo\'limi', href: '/department/staffs?department_id=1' },
            { label: 'Xo\'jalik bo\'limi', href: '/department/staffs?department_id=2' },
            { label: 'Axborot texnologiyalar markazi', href: '/department/staffs?department_id=3' },
            { label: 'Axborot-resurslar markazi', href: '/department/staffs?department_id=4' },
            { label: 'Xodimlar bo\'limi', href: '/department/staffs?department_id=5' },
            { label: 'O\'quv-uslubiy bo\'lim', href: '/department/staffs?department_id=6' },
            { label: 'Marketing va shartnomalar bo\'limi', href: '/department/staffs?department_id=7' },
            { label: 'Talabalarga xizmat ko\'rsatish bo\'limi', href: '/department/staffs?department_id=8' }
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

const currentSection = computed(() => {
    const path = route.path
    const fullPath = route.fullPath

    // Yo'nalishlar (direction pages)
    if (path.startsWith('/direction/')) {
        return sidebarData.yonalishlar
    }

    // Universitet
    if (['/rektor', '/history', '/partners', '/document', '/sertificat', '/campus'].some(p => path.includes(p))) {
        return sidebarData.universitet
    }
    
    // Tuzilma
    if (path.includes('/leadership')) {
        return sidebarData.tuzilma
    }
    
    // Fakultetlar
    if (path.includes('/faculty') || (path.includes('/directions') && fullPath.includes('faculty='))) {
        return sidebarData.fakultetlar
    }
    
    // Kafedralar
    if (path.includes('/kafedra')) {
        return sidebarData.kafedralar
    }
    
    // Bo'limlar
    if (path.includes('/department')) {
        return sidebarData.bolimlar
    }
    
    // Faoliyatlar
    if (path.includes('/activity/')) {
        return sidebarData.faoliyatlar
    }
    
    // Ta'lim
    if (['/education-portal', '/library', '/academic-calendar'].some(p => path === p) || 
        (path === '/directions' && !fullPath.includes('faculty='))) {
        return sidebarData.talim
    }
    
    // Qabul
    if (['/grant', '/academic-change', '/payment'].some(p => path === p)) {
        return sidebarData.qabul
    }
    
    // Press
    if (['/press-service', '/gallery'].some(p => path === p)) {
        return sidebarData.press
    }
    
    // Student life
    if (['/bed-room', '/club'].some(p => path === p)) {
        return sidebarData.studentlife
    }

    return null
})

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
</script>
