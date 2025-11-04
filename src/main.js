import { createApp } from 'vue'
<<<<<<< HEAD
=======
import './css/index.css'

>>>>>>> dad943b (update)
// import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
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
<<<<<<< HEAD
    faCircleInfo
=======
    faCircleInfo,
    faTrophy,
    faGlobe,
    faJournalWhills,
    faPeopleGroup
>>>>>>> dad943b (update)

} from '@fortawesome/free-solid-svg-icons'
// import { faRocket } from '@fortawesome/free-regular-svg-icons'
import {  faInstagram, faTelegram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
<<<<<<< HEAD
library.add(faCircleInfo,faBook,faMicrochip,faShieldAlt, faRobot, faStar, faRocket,faEye, faInstagram, faTelegram, faFacebook,faYoutube, faFileAlt, faDownload,faMinus, faPlus, faCode,faChartLine,faBriefcase,faBullhorn,faCoins,faLandmark,faBrain,faLanguage,faBed,faBuilding,faWifi, faUtensils)
=======
library.add(faJournalWhills,faPeopleGroup,faGlobe,faTrophy,faCircleInfo,faBook,faMicrochip,faShieldAlt, faRobot, faStar, faRocket,faEye, faInstagram, faTelegram, faFacebook,faYoutube, faFileAlt, faDownload,faMinus, faPlus, faCode,faChartLine,faBriefcase,faBullhorn,faCoins,faLandmark,faBrain,faLanguage,faBed,faBuilding,faWifi, faUtensils)
>>>>>>> dad943b (update)
import './css/index.css'

createApp(App)
    // .use(createPinia())
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router).mount('#app')