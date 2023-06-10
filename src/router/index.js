import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlleventsView from '../views/Recipes/AlleventsView.vue'
import BirthdayView from '../views/Recipes/BirthdayView.vue'
import GraduationView from '../views/Recipes/GraduationView.vue'
import WeddingView from '../views/Recipes/WeddingView.vue'
import SingleCakeView from '../views/Recipes/SingleCakeView.vue'
import RegisterUser from '../views/Auth/RegisterUser.vue'
import LoginUser from '../views/Auth/LoginUser.vue'
import UserProfile from '../views/User/UserProfile.vue'
import AddCake from '../views/AddCake.vue' 
import AddBirthday from '../views/CakeCrud/Birthday/AddBirthday.vue' 
import SingleBirthday from '../views/CakeCrud/Birthday/SingleBirthday.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/allevents',
      name: 'allevents',
      component: AlleventsView
    },
    {
      path: '/birthday',
      name: 'birthday',
      component: BirthdayView
    },
    {
      path: '/graduation',
      name: 'graduation',
      component: GraduationView
    },
    {
      path: '/wedding',
      name: 'wedding',
      component: WeddingView
    },
    {
      path: '/singlecake',
      name: 'singlecake',
      component: SingleCakeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser
    },
    {
      path: '/login',
      name: 'login',
      component: LoginUser
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: UserProfile
    },
    {
      path: '/addcake',
      name: 'addcake',
      component: AddCake
    },
    {
      path: '/addbirthday',
      name: 'addbirthday',
      component: AddBirthday
    },
    {
      path: '/singlebirthday/:id',
      name: 'singlebirthday',
      component: SingleBirthday
    },
  ]
})

export default router
