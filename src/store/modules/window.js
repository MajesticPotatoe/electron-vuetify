import { remote } from 'electron'

const win = remote.getCurrentWindow()

const state = {
  fullscreen: false,
  maximized: false,
}

const mutations = {
  updateFullscreen (state, val) {
    state.fullscreen = val
  },
  updateMaximized (state, val) {
    state.maximized = val
  },
}

const actions = {
  async toggleFullscreen ({ commit }) {
    const newState = !win.isFullScreen()
    win.setFullScreen(newState)
    commit('updateFullscreen', newState)
  },
  async toggleMaximize ({ commit }) {
    const maxState = !win.isMaximized()
    if (maxState) {
      win.maximize()
    } else {
      win.unmaximize()
    }
    commit('updateMaximized', maxState)
  },
  async minimizeWin () {
    win.minimize()
  },
  async closeWin () {
    win.close()
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
