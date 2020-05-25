import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

import AppForm from '@/components/AppForm'
import initialState from '@/store/initialState'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Vuetify)

describe('AppForm.vue', () => {
  let vuetify
  let actions
  let state
  let store

  beforeEach(() => {
    vuetify = new Vuetify()

    state = initialState

    actions = {
      submitApplication: sinon.spy()
    }

    store = new Vuex.Store({
      state,
      actions
    })
  })

  it('calls store action "submitApplication" when button is clicked', async () => {
    const wrapper = mount(AppForm, { localVue, vuetify, store })
    // ONLY test input or select fields as setValue() will not work
    const testApplicant = {
      first_name: 'Joe',
      last_name: 'Blake',
      email: 'blake@gmail.com',
      phone: '111-111-1111',
      gender: 'Male',
      class: 'Freshman'
    }
    Object.keys(testApplicant).forEach(field =>
      wrapper.find(`#${field}`).setValue(testApplicant[field])
    )
    sinon.stub(wrapper.vm.$refs.form, 'validate').returns(true)
    wrapper.vm.$on('action-btn:clicked', wrapper.vm.submitApplication)

    wrapper.find('.v-btn').trigger('click')

    expect(actions.submitApplication).to.have.been.calledWith(
      sinon.match.any,
      testApplicant
    )
  })
})
