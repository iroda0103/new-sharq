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
import Activity from '../views/Activity.vue'
import Tyutor from '../views/Tyutor.vue'
import YouthUnion from '../views/YouthUnion.vue'
import WomenCommunity from '../views/WomenCommunity.vue'
import Kasaba from '../views/Kasaba.vue'
import Psychology from '../views/Psychology.vue'
import AcademicCalendar from '../views/AcademicCalendar.vue'
import Payment from '../views/Payment.vue'
import AcademicChange from '../views/AcademicChange.vue'
import PressService from '../views/PressService.vue'


// Layout componentlar
import DefaultLayout from '../components/layout/DefaultLayout.vue'
import SidebarLayout from '../components/layout/SidebarLayout.vue'

const routes = [
  // Sidebarsiz sahifalar - DefaultLayout
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'HomePage', component: HomePage },
      { path: 'apply', name: 'ApplyFor', component: ApplyFor },
      { path: 'gallery', name: 'GalleryPage', component: GalleryPage },
      // Boshqa sidebarsiz sahifalar...
    ]
  },

  // Sidebar bilan sahifalar - SidebarLayout
  {
    path: '/',
    component: SidebarLayout,
    children: [
      { path: 'rektor', name: 'Rector', component: Rector },
      { path: 'addpost', name: 'AddPost', component: AddPost },
      { path: 'news/:id', name: 'NewsDetail', component: News },
      { path: 'faculty', name: 'FacultiesPage', component: FacultiesPage },
      { path: 'directions', name: 'Faculty', component: Faculty },
      { path: 'history', name: 'History', component: History },
      { path: 'partners', name: 'Partners', component: Partners },
      { path: 'document', name: 'Document', component: Document },
      { path: 'sertificat', name: 'Sertificat', component: Sertificat },
      { path: 'leadership', name: 'Leadership', component: Leadership },
      { path: 'lesson-time', name: 'TimetablePage', component: TimetablePage },
      { path: 'bed-room', name: 'BedRoom', component: BedRoom },
      { path: 'department', name: 'Departments', component: Departments },
      { path: 'kafedra', name: 'Kafedra', component: Kafedra },
      { path: 'grant', name: 'Grant', component: Grant },
      { path: 'library', name: 'Library', component: Library },
      { path: 'campus', name: 'Campus', component: Test },
      { path: 'gallery', name: 'Gallery', component: Gallery },
      { path: 'academic-calendar', name: 'AcademicCalendar', component: AcademicCalendar },
      { path: 'academic-change', name: 'AcademicChange', component: AcademicChange },
      { path: 'payment', name: 'Payment', component: Payment },
      { path: 'press-service', name: 'PressService', component: PressService },
      { path: 'activity', name: 'Activity', component: Activity },
      { path: 'activity/tutoring', name: 'Tyutor', component: Tyutor },
      { path: 'activity/yoshlar', name: 'YouthUnion', component: YouthUnion },
      { path: 'activity/women', name: 'WomenCommunity', component: WomenCommunity },
      { path: 'activity/kasaba', name: 'Kasaba', component: Kasaba },
      { path: 'activity/psychology', name: 'Psychology', component: Psychology },
      { path: 'education-portal', name: 'EducationPortal', component: EducationPortal },
    ]
  },

  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})