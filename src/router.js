import Vue from 'vue'
import Router from 'vue-router'
// import Welcome from './views/Welcome.vue'
// import Event from './views/Event.vue'
// import Rsvp from './views/Rsvp.vue'
// import Accomodations from './views/Accomodations.vue'
// import Photos from './views/Photos.vue'
// import Music from './views/Music.vue'
// import FirestoreTest from './views/FirestoreTest.vue'
// import Login from './views/Login.vue'
import firebase from 'firebase'
import nprogress from 'nprogress'
import PageNotFound from './views/PageNotFound.vue'

Vue.use(Router)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: loadView('Welcome')
    },
    {
      path: '/event',
      name: 'Event',
      component: loadView('Event')
    },
    {
      path: '/rsvp',
      name: 'RSVP',
      component: loadView('Rsvp')
    },
    {
      path: '/accomodations',
      name: 'Accomodations',
      component: loadView('Accomodations')
    },
    {
      path: '/photos',
      name: 'Photos',
      component: loadView('Photos')
    },
    {
      path: '/music',
      name: 'Music',
      component: loadView('Music')
    },
    {
      path: '/firestore',
      name: 'Firestore',
      component: loadView('FirestoreTest'),
      meta: {
        requiresAuth: true
      } 
    },
    {
      path: '/login',
      name: 'Login',
      component: loadView('Login')
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

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line
  // debugger
  nprogress.start()
  nprogress.set(0.1)
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) 
    next('login')
  else 
    next()
})

router.afterEach(() => {
  // eslint-disable-next-line
  // debugger
})

export default router
