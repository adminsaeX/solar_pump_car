/* ═ ═ ═ ═ ═ ═ ═ ═ ═ *\
|      CORE LIBS      |
\* ═ ═ ═ ═ ═ ═ ═ ═ ═ */
import 'es6-promise/auto'
//import 'es7-shim'
import _ from 'lodash'
import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import Vuebar from 'vuebar'
import vClickOutside from 'v-click-outside'
import VueFloatLabel from 'vue-float-label'
import VuePerfectScrollbar from './components/vue-ps'


/* ═ ═ ═ ═ ═ ═ ═ ═ ═ *\
|  THIRD PARTS LIBS   |
\* ═ ═ ═ ═ ═ ═ ═ ═ ═ */
import VueI18n from 'vue-i18n'
import moment from 'moment-timezone'
import Fullscreen from 'vue-fullscreen'
import VueResize from 'vue-resize'
import 'vue-resize/dist/vue-resize.css'
//import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import 'flag-icon-css/css/flag-icon.css'


/* ═ ═ ═ ═ ═ ═ ═ ═ ═ *\
|     CORE ASSETS     |
\* ═ ═ ═ ═ ═ ═ ═ ═ ═ */
//import './assets/scss/element-variables.scss'
import './assets/scss/global.scss'
import 'flex.box'
import 'animate.css'
//import '../node_modules/mdi/scss/materialdesignicons.scss'
import '../node_modules/@mdi/font/css/materialdesignicons.min.css'
import Affix from './directives/affix'
import App from './App.vue'
import router from './router/' 
import store from './store' 
import i18n_messages from './i18n.json' 
import firebase from 'firebase/app'
import VueSimpleAlert from "vue-simple-alert";


Vue.config.productionTip = false


/* ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ *\
|  THIRD PARTS COMPONENTS |
\* ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ */
Vue.use(VueResize)
Vue.use(Fullscreen)
Vue.use(VueI18n)


/* ═ ═ ═ ═ ═ ═ ═ ═ *\
|  CORE COMPONENTS  |
\* ═ ═ ═ ═ ═ ═ ═ ═ */
Vue.use(Element, {locale})
Vue.use(vClickOutside)
Vue.use(VueFloatLabel)
Vue.use(Vuebar)
Vue.use(VueSimpleAlert)
Vue.component('vue-scroll', VuePerfectScrollbar)
Vue.directive('affix', Affix)

var firebaseConfig = {
    apiKey: "AIzaSyDONVKLyrlicjVV2sLFePTSjVo8ljP03g4",
    authDomain: "solarpumpcar.firebaseapp.com",
    projectId: "solarpumpcar",
    storageBucket: "solarpumpcar.appspot.com",
    messagingSenderId: "845232095290",
    appId: "1:845232095290:web:1700f10056d35f4f5df503",
    measurementId: "G-RD9YP5ZEML"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const i18n = new VueI18n({ locale: 'us', messages:i18n_messages })

new Vue({
	i18n,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
