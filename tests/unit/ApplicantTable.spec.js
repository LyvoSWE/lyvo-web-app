import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

import ApplicantTable from '@/components/admin/ApplicantTable'
import initialState from '@/store/initialState'

Vue.use(Vuex)
Vue.use(Vuetify)

describe('ApplicantTable.vue', () => {
  let vuetify
  let actions
  let state
  let store
  let wrapper

  beforeEach(() => {
    vuetify = new Vuetify()
    state = initialState

    actions = {
      getApplicantCollection: sinon.spy()
    }

    store = new Vuex.Store({
      state,
      actions
    })
    wrapper = shallowMount(ApplicantTable, { Vue, vuetify, store })
  })

  it('displays properly on Mount', () => {
    expect(wrapper.find('v-data-table-stub').exists()).to.be.true
  })

  it('dispatchs action "getApplicantCollection" on mount', () => {
    expect(actions.getApplicantCollection).to.have.been.calledOnce
  })
})
