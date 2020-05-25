import constants from '@/utils/constants'

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
  [SUBMIT_REQUEST](state) {
    state.submitRequestLoading = true
  },
  [SUBMIT_SUCCESS](state) {
    state.alertMsg = 'Submission successful'
    state.submitRequestLoading = false
    state.alertType = 'success'
  },
  [SUBMIT_FAILURE](state) {
    state.alertMsg = 'Submission failed'
    state.submitRequestLoading = false
    state.alertType = 'error'
  },
  [RESET_ALERT](state) {
    state.alertMsg = ''
    state.alertType = ''
  },
  [RETRIEVE_REQUEST](state) {},
  [RETRIEVE_SUCCESS](state, payload) {
    state.applicants = payload.apps
    state.data = createGraphData(state.applicants)
  },
  [RETRIEVE_FAILURE](state) {}
}

const createGraphData = applicants => {
  return constants.ADMIN.pieCharts.reduce((acc, chartLabel) => {
    const itemCounts = itemsByCount(applicants, chartLabel)
    return { ...acc, [chartLabel]: countsToArray(itemCounts) }
  }, {})
}

const itemsByCount = (applicants, field) => {
  return applicants.reduce((acc, applicant) => {
    acc[applicant[field]] = acc[applicant[field]] + 1
    return acc
  }, itemsInApplicationField(field))
}

const itemsInApplicationField = field => {
  return constants.APPLICATION_FIELDS.filter(
    f => f.name == field
  )[0].items.reduce((acc, i) => ({ ...acc, [i]: 0 }), {})
}

const countsToArray = itemCounts => {
  return Object.keys(itemCounts).reduce((acc, item) => {
    acc.push({ name: item, y: itemCounts[item] })
    return acc
  }, [])
}
