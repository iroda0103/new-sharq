<template>
    <header 
        class="header fixed w-full z-[1000] top-0 left-0 transition-all duration-300"
        :class="{
            'bg-gradient-to-r from-[#00455ede] to-[#1b6ae9ee] shadow-[0_4px_20px_rgba(0,0,0,0.1)]': scrolled
        }"
    >
        <!-- Gradient overlay -->
        <div 
            class="absolute left-0 top-0 h-full w-full -z-10 transition-all duration-300"
            :class="scrolled ? 'bg-none' : 'bg-gradient-to-b from-[#0D172F] to-transparent'"
        ></div>

        <div class="max-w-[1200px] mx-auto px-4">
            <!-- Header Top -->
            <div class="flex justify-between items-center py-3 border-b border-white/20">
                <!-- Logo (Mobile only) -->
                <router-link to="/" class="lg:hidden">
                    <img 
                        loading="lazy" 
                        class="w-[140px] transition-transform hover:scale-105" 
                        src="/img/logo_sharq.webp" 
                        alt="Site logo"
                    />
                </router-link>

                <!-- Contact Info (Desktop) -->
                <div class="hidden lg:flex gap-8 items-center">
                    <a 
                        href="mailto:info@sharqedu.uz" 
                        class="text-white text-[15px] flex items-center hover:opacity-80 transition-opacity"
                    >
                        <i class="fas fa-envelope mr-2 text-white/95"></i>
                        <span class="hidden xl:inline">info@sharqedu.uz</span>
                    </a>
                    <a 
                        href="tel:+998792227707" 
                        class="text-white text-[15px] flex items-center hover:opacity-80 transition-opacity"
                    >
                        <i class="fas fa-phone mr-2 text-white/95"></i>
                        <span class="hidden xl:inline">+998 (79) 222-07-00</span>
                    </a>
                </div>

                <!-- Warning Badge -->
                <div class="hidden sm:flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 h-7 text-white/80 text-sm">
                    <i class="fa fa-warning"></i>
                    <span class="hidden md:inline">The site works in test mode</span>
                </div>

                <!-- Social Links -->
                <div class="hidden md:flex gap-4">
                    <a 
                        href="https://t.me/sharquniversiteti" 
                        target="_blank"
                        class="text-gray-200 text-lg hover:text-white hover:-translate-y-1 transition-all"
                    >
                        <font-awesome-icon :icon="['fab', 'telegram']" />
                    </a>
                    <a 
                        href="https://www.instagram.com/sharquniversiteti/" 
                        target="_blank"
                        class="text-gray-200 text-lg hover:text-white hover:-translate-y-1 transition-all"
                    >
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                    </a>
                    <a 
                        href="https://www.facebook.com/sharquniversiteti" 
                        target="_blank"
                        class="text-gray-200 text-lg hover:text-white hover:-translate-y-1 transition-all"
                    >
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                    </a>
                    <a 
                        href="https://www.youtube.com/@sharquniversiteti" 
                        target="_blank"
                        class="text-gray-200 text-lg hover:text-white hover:-translate-y-1 transition-all"
                    >
                        <font-awesome-icon :icon="['fab', 'youtube']" />
                    </a>
                </div>

                <!-- Portal Links -->
                <div class="hidden lg:flex gap-5">
                    <Hemis />
                    <ELibrary />
                </div>

                <!-- Mobile Menu Button -->
                <button 
                    @click="toggleMenu" 
                    class="lg:hidden relative w-10 h-10 flex items-center justify-center z-[1001]"
                    aria-label="Toggle menu"
                >
                    <span 
                        class="absolute w-6 h-0.5 bg-white transition-all duration-300"
                        :class="isMenuOpen ? 'bg-transparent' : ''"
                    >
                        <span 
                            class="absolute w-6 h-0.5 bg-white transition-all duration-300"
                            :class="isMenuOpen ? 'rotate-45 top-0' : '-top-2'"
                        ></span>
                        <span 
                            class="absolute w-6 h-0.5 bg-white transition-all duration-300"
                            :class="isMenuOpen ? '-rotate-45 top-0' : 'top-2'"
                        ></span>
                    </span>
                </button>
            </div>

            <!-- Header Bottom (Navigation) -->
            <nav 
                class="lg:flex lg:py-2.5 hidden flex gap-6 justify-between items-center"
                :class="isMenuOpen ? 'flex' : ''"
            >
                <!-- Desktop Logo -->
                <router-link to="/" class="hidden lg:block left-4">
                    <img 
                        loading="lazy" 
                        class="w-[190px] transition-transform hover:scale-105" 
                        src="/img/logo_sharq.webp" 
                        alt="Site logo"
                    />
                </router-link>

                <ul class="flex flex-col lg:flex-row lg:justify-center lg:gap-5 lg:flex-wrap w-full lg:w-auto">
                    <li 
                        v-for="(item, index) in menuItems" 
                        :key="index"
                        class="relative group"
                        :class="{ 'active': activeIndex === index }"
                        @mouseenter="handleMouseEnter(index)"
                        @mouseleave="handleMouseLeave"
                    >
                        <!-- Main Menu Link -->
                        <a 
                            href="#" 
                            @click.prevent="toggleDropdown(index)"
                            class="flex items-center justify-between lg:justify-center lg:py-4 py-3.5 px-5 lg:px-1 text-white text-[17px] lg:text-base font-medium border-b lg:border-0 border-white/10 hover:bg-white/10 lg:hover:bg-transparent transition-all relative"
                        >
                            <span class="relative px-1 transition-transform group-hover:lg:-translate-y-0.5">
                                {{ item.title }}
                            </span>
                            <i 
                                v-if="item.children" 
                                class="fas fa-chevron-down text-xs ml-1.5 lg:ml-1 transition-transform duration-300"
                                :class="activeIndex === index ? 'rotate-180' : ''"
                            ></i>

                            <!-- Underline effect (Desktop) -->
                            <span class="hidden lg:block absolute bottom-3 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 transition-all duration-300 group-hover:w-[calc(100%-8px)] group-hover:delay-300"></span>
                        </a>

                        <!-- Dropdown Menu -->
                        <ul 
                            v-if="item.children"
                            class="lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-0 lg:bg-gradient-to-b lg:from-[#375277] lg:to-[#3C6CAC] lg:rounded-lg lg:min-w-[220px] lg:shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 bg-black/10"
                            :class="{
                                'max-h-0 lg:max-h-none': activeIndex !== index && hoveredIndex !== index,
                                'max-h-[1000px] lg:opacity-100 lg:visible': activeIndex === index || hoveredIndex === index,
                                'lg:opacity-0 lg:invisible lg:-translate-y-2': hoveredIndex !== index && activeIndex !== index
                            }"
                        >
                            <!-- Arrow (Desktop) -->
                            <span class="hidden lg:block absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#375277]"></span>

                            <li 
                                v-for="(child, cIndex) in item.children" 
                                :key="cIndex"
                                class="relative border-b border-white/10 last:border-0 group/submenu"
                            >
                                <router-link 
                                    v-if="!child.children"
                                    :to="child.to"
                                    class="block py-3 px-5 lg:py-3 text-white/90 hover:text-white text-[15px] transition-all hover:bg-white/15 lg:pl-5"
                                >
                                    {{ child.title }}
                                </router-link>

                                <!-- Has Submenu -->
                                <template v-else>
                                    <router-link 
                                        :to="child.to"
                                        class="flex items-center justify-between py-3 px-5 lg:py-3 text-white/90 hover:text-white text-[15px] transition-all hover:bg-white/15"
                                    >
                                        {{ child.title }}
                                        <i class="fas fa-chevron-right text-xs transition-transform group-hover/submenu:lg:translate-x-1"></i>
                                    </router-link>

                                    <!-- Submenu -->
                                    <ul class="lg:absolute lg:left-full lg:top-0 lg:ml-2 lg:bg-gradient-to-b lg:from-[#2d4766] lg:to-[#355e94] lg:rounded-lg lg:min-w-[280px] lg:shadow-[0_10px_30px_rgba(0,0,0,0.2)] overflow-hidden bg-black/15 max-h-0 lg:max-h-none lg:opacity-0 lg:invisible lg:-translate-x-2 lg:group-hover/submenu:opacity-100 lg:group-hover/submenu:visible lg:group-hover/submenu:translate-x-0 transition-all duration-300">
                                        <li 
                                            v-for="(sub, sIndex) in child.children" 
                                            :key="sIndex"
                                            class="border-b border-white/10 last:border-0"
                                        >
                                            <router-link 
                                                :to="sub.to"
                                                class="block py-3 px-8 lg:px-5 text-white/90 hover:text-white text-sm transition-all hover:bg-white/20"
                                            >
                                                {{ sub.title }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </template>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <!-- Mobile Menu -->
            <div 
                v-if="isMenuOpen"
                class="lg:hidden flex flex-col py-4 bg-gradient-to-b from-[#00455e] to-[#1b6ae9] shadow-inner max-h-[80vh] overflow-y-auto animate-fadeInDown"
            >
                <ul class="flex flex-col w-full">
                    <li 
                        v-for="(item, index) in menuItems" 
                        :key="index"
                        :class="{ 'active': activeIndex === index }"
                    >
                        <a 
                            href="#" 
                            @click.prevent="toggleDropdown(index)"
                            class="flex items-center justify-between py-3.5 px-5 text-white text-base font-medium border-b border-white/10 hover:bg-white/10 transition-all"
                        >
                            <span class="transition-transform" :class="activeIndex === index ? 'translate-x-2' : ''">
                                {{ item.title }}
                            </span>
                            <i 
                                v-if="item.children" 
                                class="fas fa-chevron-down text-xs transition-transform duration-300"
                                :class="activeIndex === index ? 'rotate-180' : ''"
                            ></i>
                        </a>

                        <!-- Mobile Dropdown -->
                        <ul 
                            v-if="item.children"
                            class="overflow-hidden transition-all duration-400 bg-black/10"
                            :class="activeIndex === index ? 'max-h-[1000px]' : 'max-h-0'"
                        >
                            <li 
                                v-for="(child, cIndex) in item.children" 
                                :key="cIndex"
                                class="border-b border-white/10 last:border-0"
                            >
                                <router-link 
                                    v-if="!child.children"
                                    :to="child.to"
                                    class="block py-2.5 px-8 text-white/90 hover:text-white text-sm transition-all hover:bg-white/20"
                                >
                                    {{ child.title }}
                                </router-link>

                                <template v-else>
                                    <div 
                                        @click="toggleMobileSubmenu(index, cIndex)"
                                        class="flex items-center justify-between py-2.5 px-8 text-white/90 text-sm cursor-pointer hover:bg-white/10"
                                    >
                                        <router-link :to="child.to" class="flex-1" @click.stop>
                                            {{ child.title }}
                                        </router-link>
                                        <i 
                                            class="fas fa-chevron-down text-xs transition-transform duration-300"
                                            :class="activeSubmenu === `${index}-${cIndex}` ? 'rotate-180' : ''"
                                        ></i>
                                    </div>

                                    <ul 
                                        class="bg-black/15 overflow-hidden transition-all duration-300"
                                        :class="activeSubmenu === `${index}-${cIndex}` ? 'max-h-[500px]' : 'max-h-0'"
                                    >
                                        <li 
                                            v-for="(sub, sIndex) in child.children" 
                                            :key="sIndex"
                                            class="border-b border-white/10 last:border-0"
                                        >
                                            <router-link 
                                                :to="sub.to"
                                                class="block py-2 px-12 text-white/90 hover:text-white text-xs transition-all hover:bg-white/20 hover:px-14"
                                            >
                                                {{ sub.title }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </template>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { menuItems } from "../../data/menuData"
import Hemis from '../../utilits/ui/hemis.vue'
import ELibrary from '../../utilits/ui/e-library.vue'

const route = useRoute()
const activeIndex = ref(null)
const hoveredIndex = ref(null)
const isMenuOpen = ref(false)
const scrolled = ref(false)
const activeSubmenu = ref(null)

const isHomePage = computed(() => route.path === '/')

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const toggleDropdown = (index) => {
    if (window.innerWidth >= 1024) return
    activeIndex.value = activeIndex.value === index ? null : index
}

const toggleMobileSubmenu = (parentIndex, childIndex) => {
    const key = `${parentIndex}-${childIndex}`
    activeSubmenu.value = activeSubmenu.value === key ? null : key
}

const handleMouseEnter = (index) => {
    if (window.innerWidth >= 1024) {
        hoveredIndex.value = index
    }
}

const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
        hoveredIndex.value = null
    }
}

const updateHeaderState = () => {
    if (isHomePage.value) {
        scrolled.value = window.scrollY > 100
    } else {
        scrolled.value = true
    }
}

watch(() => route.path, () => {
    updateHeaderState()
    isMenuOpen.value = false
    activeIndex.value = null
    activeSubmenu.value = null
    document.body.style.overflow = ''
}, { immediate: true })

onMounted(() => {
    updateHeaderState()
    window.addEventListener('scroll', updateHeaderState)
})

onUnmounted(() => {
    window.removeEventListener('scroll', updateHeaderState)
    document.body.style.overflow = ''
})
</script>

<style scoped>
.header:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(180deg, #0d172f, #0d172f00);
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all .3s ease;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInDown {
    animation: fadeInDown 0.4s ease;
}

/* Container responsive */
@media (min-width: 2560px) {
    .max-w-\[1200px\] {
        max-width: 2300px;
    }
}

@media (max-width: 1920px) {
    .max-w-\[1200px\] {
        max-width: 1620px;
    }
}

@media (max-width: 1800px) {
    .max-w-\[1200px\] {
        max-width: 1600px;
    }
}

@media (max-width: 1600px) {
    .max-w-\[1200px\] {
        max-width: 1400px;
    }
}

@media (max-width: 1300px) {
    .max-w-\[1200px\] {
        max-width: 1200px;
    }
}
</style>