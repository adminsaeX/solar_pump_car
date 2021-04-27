import Vue from 'vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './Utils/fliter'
import App from './App.vue'
import router from './router'
import store from './store'
import Raphael from 'raphael/raphael'
import './plugins'
import './registerServiceWorker'
import i18n from './i18n'
import * as firebase from 'firebase'
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

global.Raphael = Raphael
Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyDONVKLyrlicjVV2sLFePTSjVo8ljP03g4",
  authDomain: "solarpumpcar.firebaseapp.com",
  projectId: "solarpumpcar",
  storageBucket: "solarpumpcar.appspot.com",
  messagingSenderId: "845232095290",
  appId: "1:845232095290:web:1700f10056d35f4f5df503",
  measurementId: "G-RD9YP5ZEML"
};
firebase.initializeApp(firebaseConfig)
let vm = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

window.vm = vm
