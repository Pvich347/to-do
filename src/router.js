import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Ad from '@/components/Ads/Ad'
import Сompleted from '@/components/Ads/Сompleted'
import NewTask from '@/components/Ads/NewTask'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Tasks from '@/components/User/Tasks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      props: true,
      name: 'ad',
      component: Ad
    },
    {
      path: '/completed',
      name: 'completed',
      component: Сompleted
    },
    {
      path: '/new',
      name: 'newTask',
      component: NewTask
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'reg',
      component: Registration
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    }
  ],
  mode: 'history'
})
