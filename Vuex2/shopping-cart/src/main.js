import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueTouch from 'vue-touch'
import App from './App.vue'
import store from './vuex'
import './util/util'

Vue.use(VueTouch)
Vue.use(MintUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store: store,
  components: { App }
})
