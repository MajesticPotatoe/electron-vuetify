<template>
  <v-system-bar
    v-if="!fullscreen"
    app
    window
    lights-out
    class="sysbar"
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
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'SysBar',

    data: () => ({
      //
    }),

    computed: {
      ...mapState('window', ['fullscreen']),
    },

    methods: {
      ...mapActions('window', ['toggleMaximize', 'minimizeWin', 'closeWin']),
    },
  }
</script>

<style lang="sass">
  .sysbar
    -webkit-app-region: drag !important

    i
      color: black !important
      -webkit-app-region: no-drag
      width: 25px
      padding: 0 !important
      margin: 0 !important
</style>
