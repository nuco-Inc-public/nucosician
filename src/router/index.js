import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Analyzer from '@/components/Analyzer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/test',
      name: 'Analyzer',
      component: Analyzer
    }
  ]
})
