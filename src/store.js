import Vue from 'vue'
import Vuex from 'vuex'

// Imports all modules
import * as modules from './store'

Vue.use(Vuex)

const state = {}

const mutations = {}

const actions = {}

const plugins = []

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  plugins,
  modules,
})

export default store
