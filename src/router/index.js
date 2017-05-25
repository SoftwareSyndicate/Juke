import Vue from 'vue'
import Router from 'vue-router'

import * as Pages from '../pages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: "/boxes"
    },
    {
      path: '/boxes',
      name: 'boxes',
      component: Pages.BoxesPage
    },
    {
      path: '/boxes/:id',
      name: 'box',
      component: Pages.BoxPage
    }
  ]
})
