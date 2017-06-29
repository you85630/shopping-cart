import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './mudules/state'
import getters from './mudules/getters'
import mutations from './mudules/mutations'
import actions from './mudules/actions'
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store
