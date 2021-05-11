import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";


import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const initialState = () => {
  return { user: null, errors: null}
}
export default new Vuex.Store({
  plugins: [createPersistedState],
  state: initialState(),
  mutations: mutations,
  actions: actions,
  getters: getters
})
