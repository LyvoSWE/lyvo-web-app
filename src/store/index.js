import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import initialState from './initialState'
import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
  state: initialState,
  mutations,
  actions
})
