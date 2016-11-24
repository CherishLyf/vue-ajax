import Vue from 'vue'
import Vuex from 'vuex'
import products from './module/products'
import * as actions from './actions'
// import cart from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
  modules: {
    products
  },
  actions
})
