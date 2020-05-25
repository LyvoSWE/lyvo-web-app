import { httpPost, httpGet } from '@/utils/api'
import {
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS,
  SUBMIT_FAILURE,
  RESET_ALERT
} from './mutation-types'

const RETRIEVE_REQUEST = 'RETRIEVE_REQUEST'
const RETRIEVE_SUCCESS = 'RETRIEVE_SUCCESS'
const RETRIEVE_FAILURE = 'RETRIEVE_FAILURE'

export default {
  async submitApplication({ commit }, postData) {
    commit(SUBMIT_REQUEST)
    try {
      const payload = await httpPost(`${urlPrefix}/application`, postData)
      commit(SUBMIT_SUCCESS)
    } catch (e) {
      console.log(e)
      commit(SUBMIT_FAILURE)
    } finally {
      setTimeout(() => commit(RESET_ALERT), 5000)
    }
  },
  async getApplicantCollection({ commit }) {
    commit(RETRIEVE_REQUEST)
    try {
      const payload = await httpGet(`${urlPrefix}/application`)
      commit(RETRIEVE_SUCCESS, payload)
    } catch (e) {
      console.log(e)
      commit(RETRIEVE_FAILURE)
    } finally {
      setTimeout(() => commit(RESET_ALERT), 5000)
    }
  }
}
