import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'
Vue.use(VueScrollTo)

//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAYGFIL3MI4axmKmGG1VjcG_k4mU2S81D8",
  authDomain: "gloryms-a00f9.firebaseapp.com",
  projectId: "gloryms-a00f9",
  storageBucket: "gloryms-a00f9.appspot.com",
  messagingSenderId: "514654707051",
  appId: "1:514654707051:web:fafe5ef898bc662f2dc02e",
  measurementId: "G-Q0LEYRE9NW"
}

// init firebase 
firebase.initializeApp(firebaseConfig)

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
