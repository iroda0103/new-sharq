<!-- <template>
    <div class="sidebar">
        <h3 class="sidebar-title">Rahbariyat</h3>
        <ul class="sidebar-menu-list">
            <li class="sidebar-menu__item"><a href="" class="sidebar-menu__link">Rector</a></li>
            <li class="sidebar-menu__item"><a href="" class="sidebar-menu__link">Rahbariyat</a>
            </li>
            <li class="sidebar-menu__item"><a href="" class="sidebar-menu__link">Rahbariyat</a>
            </li>
            <li class="sidebar-menu__item"><a href="" class="sidebar-menu__link">Rahbariyat</a>
            </li>
        </ul>
    </div>
</template>

<script>

</script> -->
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

// Sidebar ma'lumotlari
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

// Joriy yo'lga mos bo'limni aniqlash
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

// Aktiv linkni tekshirish
const isActive = (href) => {
    return currentPath.value === href || currentPath.value.startsWith(href)
}

// Yo'lni yangilash
const updatePath = () => {
    currentPath.value = window.location.pathname + window.location.search
}

onMounted(() => {
    updatePath()
    window.addEventListener('popstate', updatePath)
})

// Vue Router ishlatilsa
watch(() => route.path, () => {
    updatePath()
}, { immediate: true })
</script>

<style scoped lang="scss">
.aside{
    display: flex;
    flex-direction: column;
    gap: 20px;
     position: sticky;
    top: 140px;
    // max-height: calc(100vh - 120px);
    overflow-y: auto;
    overflow: hidden;
    // height: 100%;
}
.sidebar {
    //   background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 12px;
    // flex-grow: 1;
    //   padding: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    // position: sticky;
    // top: 140px;
    // max-height: calc(100vh - 120px);
    // overflow-y: auto;
    // overflow: hidden;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(0, 69, 94, 0.3);
        border-radius: 10px;

        &:hover {
            background: rgba(0, 69, 94, 0.5);
        }
    }
}

.sidebar-title {
    font-size: 18px;
    font-weight: 550;
    //   font-weight: 700;
    //   color: #00455e;
    //   padding-left: 30px;
    //   margin-bottom: 20px;  
    //   padding-bottom: 16px;
    //   border-bottom: 3px solid #1b6ae9;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 60px;
        height: 3px;
        // background: linear-gradient(90deg, #00455e, #1b6ae9);
        border-radius: 2px;
    }
}

.sidebar-menu-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar-menu__item {
    //   margin-bottom: 8px;
    transition: all 0.3s ease;
    overflow: hidden;

    &:last-child {
        margin-bottom: 0;
    }

    &.active {
        .sidebar-menu__link {
            background: linear-gradient(135deg, #00455e 0%, #1b6ae9 100%);
            color: #fff;
            font-weight: 600;
            padding-left: 20px;
            box-shadow: 0 4px 15px rgba(27, 106, 233, 0.3);

            &::before {
                opacity: 1;
                transform: translateX(0);
            }
        }
    }

    &:hover:not(.active) {
        .sidebar-menu__link {
            background: rgba(27, 106, 233, 0.1);
            padding-left: 40px;
            color: #00455e;
        }
    }
}

.sidebar-menu__link {
    display: block;
    padding: 14px 16px;
    //   color: #495057;
    color: #252729;
    text-decoration: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        left: 8px;
        top: 50%;
        transform: translateY(-50%) translateX(-10px);
        width: 4px;
        height: 20px;
        background: #fff;
        border-radius: 2px;
        opacity: 0;
        transition: all 0.3s ease;
    }

    &:hover {
        // transform: translateX(4px);
        transform: scale(1.1);
        padding-left: 20px;
    }
}

@media (max-width: 992px) {
    .sidebar {
        // position: static;
        // max-height: none;
        // margin-bottom: 30px;
    }
}

@media (max-width: 768px) {
    .sidebar {
        // padding: 20px;
    }

    .sidebar-title {
        font-size: 20px;
        // margin-bottom: 16px;
        // padding-bottom: 12px;
    }

    .sidebar-menu__link {
        font-size: 14px;
        padding: 12px 14px;
    }
}

@media (max-width: 480px) {
    .sidebar {
        // padding: 16px;
        border-radius: 8px;
    }

    .sidebar-title {
        font-size: 18px;
    }

    .sidebar-menu__link {
        font-size: 13px;
        // padding: 10px 12px;
    }
}

// Testtttt
// .sidebar-menu__link:hover,
// .sidebar-menu__link.active {
//     color: rgb(45, 48, 218);
// }

// .sidebar-menu__item:hover .sidebar-menu__link::before {
//     height: 30%;
//     background-color: rgb(45, 48, 218);
//     color: rgb(45, 48, 218);
// }

// .sidebar-menu__link::before {
//     content: "";
//     position: absolute;
//     top: 50%;
//     left: 0;
//     transform: translateY(-50%);
//     height: 0%;
//     width: 4px;
//     background-color: rgb(45, 48, 218);
//     transition: all 0.2s ease-in-out;
// }

.aside-banner__title {
        color: rgba(1, 11, 27, 1);
        ;
        font-family: "MuseoSansCyrl-500", sans-serif;
        font-size: 15px;
        line-height: 140%;
        letter-spacing: -0.16px;
        margin-bottom: 12px;
}

.aside-banner__btn {
        background-color: transparent;
        padding: 0;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        outline: none;
        color: #fff;
        font-family: "MuseoSansCyrl-500", sans-serif;
        font-size: 15px;
        line-height: 140%;
        letter-spacing: -0.16px;
        border-radius: 8px;
        padding: 6px 8px;
        /* background: rgb(20, 62, 126); */
        background: linear-gradient(to right, rgba(0, 14, 90, 0.822), rgba(0, 50, 131, 0.973));
}

.aside-banner {
        border-radius: 12px;
        border: 1px solid var(--black-7);
        background: linear-gradient(90deg, #EAEEF5 0%, #DFE4ED 100%);
        padding: 12px;
        position: relative;
        overflow: hidden;
        z-index: 1;
}

.aside-banner__image {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: auto;
        z-index: -1;
}
</style>