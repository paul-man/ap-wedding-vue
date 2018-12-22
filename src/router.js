import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Event from './views/Event.vue'
import Rsvp from './views/Rsvp.vue'
import Accomodations from './views/Accomodations.vue'
import Photos from './views/Photos.vue'
import Music from './views/Music.vue'
import PageNotFound from './views/PageNotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/event',
      name: 'event',
      component: Event
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: Rsvp
    },
    {
      path: '/accomodations',
      name: 'accomodations',
      component: Accomodations
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    { 
      path: "*", 
      component: PageNotFound 
    }
  ]
})
