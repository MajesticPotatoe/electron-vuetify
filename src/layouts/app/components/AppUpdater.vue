<template>
  <v-snackbar
    v-model="showSnackbar"
    timeout="-1"
    bottom
    right
  >
    <div :style="downloadComplete ? 'max-width: 240px' : ''">
      {{ message }}
    </div>
    <v-btn
      v-if="downloadComplete"
      color="info"
      @click="restart"
    >
      Restart
    </v-btn>
    <v-btn
      v-if="downloadComplete"
      color="error"
      class="mr-0"
      @click="showSnackbar = false"
    >
      Not Now
    </v-btn>
  </v-snackbar>
</template>

<script>
  import { ipcRenderer } from 'electron'

  export default {
    name: 'AppUpdater',

    data: () => ({
      showSnackbar: false,
      updateAvailable: false,
      downloadComplete: false,
    }),

    computed: {
      message () {
        return this.updateAvailable
          ? 'A new version is available. Download in progress...'
          : this.downloadComplete
            ? 'A new version has been downloaded. It will be installed on restart' : ''
      },
    },

    created () {
      ipcRenderer.on('update_available', () => {
        ipcRenderer.removeAllListeners('update_available')
        this.updateAvailable = this.showSnackbar = true
      })
      ipcRenderer.on('update_downloaded', () => {
        ipcRenderer.removeAllListeners('update_downloaded')
        this.updateAvailable = false
        this.downloadComplete = this.showSnackbar = true
      })
    },

    methods: {
      restart () {
        this.showSnackbar = this.downloadComplete = false
        ipcRenderer.send('restart_app')
      },
    },

  }
</script>
