import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Analyzer from '@/components/Analyzer'
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({

  mode: 'history',
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
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    }
  ]
})
