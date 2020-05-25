import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './store-config'
import { cloneDeep } from 'lodash'

describe('submitApplication', () => {
  it('submits an application', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(cloneDeep(storeConfig))
    // expect(store.state.submitRequestLoading).to.be.false
  })
})
