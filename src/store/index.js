import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

import {
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS,
  SUBMIT_FAILURE,
  RESET_ALERT
} from './mutation-types'

const initialState = {
  alertMsg: '',
  alertType: '',
  loading: false
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    [SUBMIT_REQUEST](state) {
      state.loading = true
    },
    [SUBMIT_SUCCESS](state) {
      state.alertMsg = 'Submission successful'
      state.loading = false
      state.alertType = 'success'
    },
    [SUBMIT_FAILURE](state) {
      state.alertMsg = 'Submission failed'
      state.loading = false
      state.alertType = 'error'
    },
    [RESET_ALERT](state) {
      state.alertMsg = ''
      state.alertType = ''
    }
  },
  actions: {
    async submitApplication({ commit }, postData) {
      commit(SUBMIT_REQUEST)
      try {
        // payload = await httpPost('', postData)
        commit(SUBMIT_SUCCESS)
      } catch (e) {
        console.log(e)
        commit(SUBMIT_FAILURE)
      } finally {
        setTimeout(() => commit(RESET_ALERT), 5000)
      }
    }
  },
  modules: {}
})

const httpPost = async (apiEndpoint, postData) => {
  await axios({
    method: 'POST',
    url: apiEndpoint,
    data: postData,
    config: { headers: { 'Content-Type': 'application/json' } }
  })
}
