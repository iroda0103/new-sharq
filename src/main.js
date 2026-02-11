import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './css/index.css'
import 'flowbite';

import App from './App.vue'
import router from './router/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome/index.es'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faStar,
    faRocket,
    faEye,
    faFileAlt,
    faDownload,
    faMinus,
    faPlus,
    faRobot,
    faShieldAlt,
    faCode,
    faChartLine,
    faBriefcase,
    faBullhorn,
    faCoins,
    faLandmark,
    faBrain,
    faLanguage,
    faBed,
    faBuilding,
    faWifi,
    faUtensils,
    faMicrochip,
    faBook,
    faBookOpen,
    faCircleInfo,
    faTrophy,
    faGlobe,
    faJournalWhills,
    faPeopleGroup,
    faUsers,
    faUserTie,
    faUser,
    faCertificate,
    faPhone,
    faLocationDot,
    faEnvelope

} from '@fortawesome/free-solid-svg-icons'
// import { faRocket } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faTelegram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faJournalWhills, faPeopleGroup, faGlobe, faTrophy, faCircleInfo, faBook, faBookOpen, faMicrochip, faShieldAlt, faRobot, faStar, faRocket, faEye, faInstagram, faTelegram, faFacebook, faYoutube, faFileAlt, faDownload, faMinus, faPlus, faCode, faChartLine, faBriefcase, faBullhorn, faCoins, faLandmark, faBrain, faLanguage, faBed, faBuilding, faWifi, faUtensils, faUsers, faUserTie, faUser, faCertificate, faPhone, faLocationDot, faEnvelope)
import './css/index.css'

createApp(App).use(createPinia())
    // .use(createPinia())
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router).mount('#app')