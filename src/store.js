import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const redirectUri = window.location.href

export default new Vuex.Store({
  state: {
    redirectUri: redirectUri,
    clientId: 'eea9884919bc419db2191097aa29e310',
    clientSecret: '774e96e969c54cdaa297faa70c97af7d'
  },
  mutations: {

  },
  actions: {

  }
})
