import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import Phone from '@/components/Phone'
import Schools from '@/components/Schools'
import School from '@/components/School'
import Coaches from '@/components/Coaches'
import Coach from '@/components/Coach'
import Record from '@/components/Record'
import Recommend from '@/components/Recommend'
import Exercise from '@/components/Exercise'
import Authorize from '@/components/Authorize'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/authorize',
      name: 'Authorize',
      component: Authorize
    }
  ]
})
