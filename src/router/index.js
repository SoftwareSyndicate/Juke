import Vue from 'vue'
import Router from 'vue-router'

import * as Pages from '../pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/boxes"
    },
    {
      path: '/boxes',
      name: 'Boxes-Page',
      component: Pages.BoxesPage
    },
    {
      path: '/boxes/:id',
      name: 'Box-Page',
      component: Pages.BoxPage
    }
  ]
})
