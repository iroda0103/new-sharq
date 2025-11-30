import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import Faculty from '../views/Faculty.vue'
import FacultiesPage from '../views/FacultiesPage.vue'
import Rector from '../views/Rector2.vue'
import History from '../views/History2.vue'
import Partners from '../views/Partners.vue'
import Document from '../views/Document.vue'
import Sertificat from '../views/Sertificat.vue'
import Leadership from '../views/Leadership.vue'
import TimetablePage from '../views/TimetablePage.vue'
import BedRoom from '../views/BedRoom.vue'
import Departments from '../views/Departments.vue'
import Kafedra from '../views/Kafedra.vue'
// import Kafedra2 from '../views/Kafedra2.vue'
import Grant from '../views/Grant.vue'
import NotFound from '../views/NotFound.vue'
import Library from '../views/Library.vue'
import EducationPortal from '../views/EducationPortal.vue'
import AddPost from '../views/AddPost.vue'
import ApplyFor from '../views/ApplyFor.vue'
import News from '../components/news/NewsDetail.vue'

import Test from '../components/campus/Test.vue'
import Gallery from '../views/Gallery.vue'
import GalleryPage from '../views/GalleryPage.vue'
import Wrapper from '../components/controllers/wrapper.vue'

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/apply', name: 'ApplyFor', component: ApplyFor },
    { path: '/wrapper', name: 'Wrapper', component: Wrapper },
    // { path: '/codepen', name: 'Codepen', component: Codepen },
    // { path: '/rektor', name: 'Rector', component: Rector },
    { path: '/addpost', name: 'AddPost', component: AddPost },
    { path: '/news/:id', name: 'AddPost', component: News },
    { path: '/faculty', name: 'FacultiesPage', component: FacultiesPage },
    { path: '/directions', name: 'Faculty', component: Faculty },
    // { path: '/history', name: 'History', component: History },
    { path: '/partners', name: 'Partners', component: Partners },
    { path: '/document', name: 'Document', component: Document },
    { path: '/sertificat', name: 'Sertificat', component: Sertificat },
    { path: '/leadership', name: 'Leadership', component: Leadership },
    { path: '/lesson-time', name: 'TimetablePage', component: TimetablePage },
    { path: '/bed-room', name: 'BedRoom', component: BedRoom },
    { path: '/department', name: 'Departments', component: Departments },
    { path: '/kafedra', name: 'Kafedra', component: Kafedra },
    // { path: '/tg', name: 'Kafedra', component: TelegramPage },
    // { path: '/kafedra2', name: 'Kafedra2', component: Kafedra2 },
    { path: '/grant', name: 'Grant', component: Grant },
    { path: '/library', name: 'Library', component: Library },
    { path: '/campus', name: 'Campus', component: Test },
    { path: '/galery', name: 'Gallery', component: Gallery },
    { path: '/gallery', name: 'Gallery', component: GalleryPage },
    { path: '/education-portal', name: 'EducationPortal', component: EducationPortal },
    // { path: '/restaurant/:id', name: 'RestaurantMenu', component: RestaurantMenu }
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
    {
        path: "/",
        component: Wrapper,
        children: [
            { path: "faculty", name: "Faculty", component: Faculty },
            { path: "rektor", name: "Rector", component: Rector },
            { path: "history", name: "History", component: History },
            // boshqa sidebarli pages…
        ]
    },

]

export default createRouter({
    history: createWebHistory(),
    routes
});