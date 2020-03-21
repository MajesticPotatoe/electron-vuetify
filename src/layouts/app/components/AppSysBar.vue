<template>
  <v-system-bar
    v-if="isElectron"
    app
    window
    lights-out
    class="app-system-bar white"
  >
    <v-spacer />
    <v-icon @click="minimizeWin">
      mdi-window-minimize
    </v-icon>
    <v-icon @click="toggleMaximize">
      mdi-window-maximize
    </v-icon>
    <v-icon @click="closeWin">
      mdi-window-close
    </v-icon>
  </v-system-bar>
</template>

<script>
  import { call, get } from 'vuex-pathify'

  export default {
    name: 'AppSystemBar',

    data: () => ({
      //
    }),

    computed: {
      ...get('window', ['fullscreen']),
      isElectron () {
        return process.env.IS_ELECTRON
      },
    },

    methods: {
      ...call('window', ['toggleMaximize', 'minimizeWin', 'closeWin']),
    },
  }
</script>

<style lang="sass">
  .app-system-bar
    -webkit-app-region: drag !important

    button
      color: black !important
      -webkit-app-region: no-drag
      padding: 0px !important
      margin: 5 !important
</style>
