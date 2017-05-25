import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import User from '@/components/User'
import Phone from '@/components/Phone'
import Bind122 from '@/components/Bind122'
import Schools from '@/components/Schools'
import School from '@/components/School'
import Coaches from '@/components/Coaches'
import Coach from '@/components/Coach'
import Record from '@/components/Record'
import Recommend from '@/components/Recommend'
import Exercise from '@/components/Exercise'
import Authorize from '@/components/Authorize'
import Enroll from '@/components/Enroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/user/phone',
      name: 'Phone',
      component: Phone
    },
    {
      path: '/user/bind122',
      name: 'Bind122',
      component: Bind122
    },
    {
      path: '/school',
      name: 'Schools',
      component: Schools
    },
    {
      path: '/school/:id',
      name: 'School',
      component: School
    },
    {
      path: '/coach',
      name: 'Coaches',
      component: Coaches
    },
    {
      path: '/coach/:id',
      name: 'Coach',
      component: Coach
    },
    {
      path: '/record',
      name: 'Record',
      component: Record
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/exercise/:id',
      name: 'Exercise',
      component: Exercise
    },
    {
      path: '/enroll/:id',
      name: 'Enroll',
      component: Enroll
    },
    {
      path: '/authorize',
      name: 'Authorize',
      component: Authorize
    }
  ]
})
