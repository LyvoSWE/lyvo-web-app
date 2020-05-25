import { httpPost, httpGet } from '@/utils/api'

import {
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS,
  SUBMIT_FAILURE,
  RESET_ALERT,
  RETRIEVE_REQUEST,
  RETRIEVE_SUCCESS,
  RETRIEVE_FAILURE
} from './mutation-types'

export default {
  async submitApplication({ commit }, postData) {
    commit(SUBMIT_REQUEST)
    try {
      const payload = await httpPost('/application', postData)
      commit(SUBMIT_SUCCESS)
    } catch (e) {
      console.log(`Error: ${JSON.stringify(e)}`)
      commit(SUBMIT_FAILURE)
    } finally {
      setTimeout(() => commit(RESET_ALERT), 5000)
    }
  },
  async getApplicantCollection({ commit }) {
    commit(RETRIEVE_REQUEST)
    try {
      const payload = await httpGet('/application')
      commit(RETRIEVE_SUCCESS, payload)
    } catch (e) {
      console.log(`Error: ${JSON.stringify(e)}`)
      commit(RETRIEVE_FAILURE)
    } finally {
      setTimeout(() => commit(RESET_ALERT), 5000)
    }
  }
}
