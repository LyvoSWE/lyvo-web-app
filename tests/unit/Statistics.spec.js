import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

import Statistics from '@/components/admin/Statistics'
import initialState from '@/store/initialState'

Vue.use(Vuex)
Vue.use(Vuetify)

describe('Statistics.vue', () => {
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
    wrapper = shallowMount(Statistics, { Vue, vuetify, store })
  })

  it('displays properly on Mount', () => {
    expect(wrapper.find('highcharts-stub').exists()).to.be.true
  })

  it('dispatchs action "getApplicantCollection" on mount', () => {
    expect(actions.getApplicantCollection).to.have.been.calledOnce
  })
})
