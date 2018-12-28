import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vmodal from 'vue-js-modal'
import * as uiv from 'uiv'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(vmodal, {
  dialog: true,
  dynamic: true
})
Vue.use(uiv, {prefix: 'uiv'})
Vue.use(VueAxios, axios)
Vue.use(VueFire)

firebase.initializeApp({
  apiKey: "AIzaSyBfDW-L_wa3qfWn6-EFsizhwo2v_HXCTDE",
  authDomain: "wedding-vue-94a4d.firebaseapp.com",
  databaseURL: "https://wedding-vue-94a4d.firebaseio.com",
  projectId: "wedding-vue-94a4d",
  storageBucket: "wedding-vue-94a4d.appspot.com",
  messagingSenderId: "278306639818"
})

export const db = firebase.firestore()

Vue.filter('two_digits', function (value) {
  if(value.toString().length <= 1)
  {
      return "0"+value.toString();
  }
  return value.toString();
})

new Vue({
  data: { loading: false },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
