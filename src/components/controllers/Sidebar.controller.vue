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
        href="https://t.me/atamuradov"
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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { menuItems } from '../../data/menuData' // O‘z yo‘lingizni kiriting

const route = useRoute()

// Menu items dan sidebar ma'lumotlarini yaratish
const buildSidebarData = () => {
  const sidebarMap = {}
  
  menuItems.forEach(menuItem => {
    // Agar sidebarKey bo‘lsa, asosiy section yaratamiz
    if (menuItem.sidebarKey && menuItem.children) {
      sidebarMap[menuItem.sidebarKey] = {
        title: menuItem.title,
        items: menuItem.children.map(child => ({
          label: child.title,
          href: child.to
        }))
      }
    }
    
    // Ichki children larni tekshiramiz
    if (menuItem.children) {
      menuItem.children.forEach(child => {
        // Agar child showInSidebar=true bo‘lsa va children bo‘lsa
        if (child.showInSidebar && child.sidebarKey && child.children) {
          sidebarMap[child.sidebarKey] = {
            title: child.title,
            items: child.children.map(subChild => ({
              label: subChild.title,
              href: subChild.to
            }))
          }
        }
      })
    }
  })
  
  return sidebarMap
}

const sidebarData = buildSidebarData()

// Route asosida to‘g‘ri sectionni topish
const currentSection = computed(() => {
  const path = route.path
  const fullPath = route.fullPath
// YO‘nalishlar
    if (path.startsWith('/direction/')) {
        return sidebarData['education-direction']
    }
  // Bo‘limlar
  if (path.includes('/department')) {
    return sidebarData['bolimlar']
  }
  
  // Fakultetlar
  if (path.includes('/faculty') || (path.includes('/directions') && fullPath.includes('faculty='))) {
    return sidebarData['fakultetlar']
  }
  
  // Kafedralar
  if (path.includes('/kafedra')) {
    return sidebarData['kafedralar']
  }
  
  // Faoliyatlar
  if (path.includes('/activity')) {
    return sidebarData['faoliyatlar']
  }
  
  // Universitet
  if (['/rektor', '/history', '/partners', '/document', '/sertificat', '/campus'].some(p => path.includes(p))) {
    return sidebarData['universitet']
  }
  
  // Tuzilma
  if (path.includes('/leadership')) {
    return sidebarData['tuzilma']
  }
  
  // Ta'lim
  if (['/education-portal', '/library', '/academic-calendar', '/kelajakkaqadam'].some(p => path === p) || 
      (path === '/directions' && !fullPath.includes('faculty='))) {
    return sidebarData['talim']
  }
  
  // Qabul
  if (['/grant', '/academic-change', '/payment'].some(p => path === p)) {
    return sidebarData['qabul']
  }
  
  // Axborot xizmati
  if (['/press-service', '/news', '/gallery'].some(p => path === p)) {
    return sidebarData['axborot']
  }
  
  // Talabalar hayoti
  if (['/bed-room', '/club'].some(p => path === p)) {
    return sidebarData['studentlife']
  }
  return null
})

// Active link tekshirish
const isActive = (href) => {
  const currentFullPath = route.fullPath
  const currentPath = route.path
  
  // Query parametrlar bilan to‘liq moslik
  if (href.includes('?')) {
    return currentFullPath === href
  }
  
  // Oddiy path moslik
  return currentPath === href
}
</script>