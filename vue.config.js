module.exports = {
  pluginOptions: {
    electronBuilder: {
      chainWebpackRendererProcess: config => {
        if (process.env.NODE_ENV === 'development') {
          config.plugins.delete('prefetch')
        }
      },
      // example build parameters
      mainProcessFile: 'src/background.js',
      builderOptions: {
        productName: 'ElectronVuetify',
        appId: 'org.majesticportatoe.electronvuetify',
        win: {
          icon: 'build/icons/icon.ico',
          target: 'portable',
        },
        files: [],
      },
    },
    transpileDependencies: [
      'vuetify',
    ],
  },
}
