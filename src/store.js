import Vue from 'vue'
import Vuex from 'vuex'

// Imports of individual modules
import window from '@/store/window'

Vue.use(Vuex)

const state = {}

const mutations = {}

const actions = {}

const plugins = []

const modules = {
  window,
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  plugins,
  modules,
})

export default store
