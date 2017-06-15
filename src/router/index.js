import Vue from 'vue'
import Router from 'vue-router'

import * as Pages from '../pages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: "/stations"
    },
    {
      path: '/stations',
      name: 'stations',
      component: Pages.StationsPage
    },
    {
      path: '/stations/new',
      name: 'new-station',
      component: Pages.NewStationPage
    },
    {
      path: '/stations/:id',
      name: 'station',
      component: Pages.StationPage
    },
  ]
})
