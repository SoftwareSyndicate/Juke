import Vue from 'vue'
import Router from 'vue-router'

import * as Pages from '../pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/hubs"
    },
    {
      path: '/hubs',
      name: 'Hubs-Page',
      component: Pages.HubsPage
    },
    {
      path: '/hubs/:id',
      name: 'Hub-Page',
      component: Pages.HubPage
    }
  ]
})
