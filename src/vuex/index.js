import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cart from './mudules/cart'
import tablelist from './mudules/tablelist'
const store = new Vuex.Store({
  modules: {
    cart,
    tablelist
  }
})
export default store
