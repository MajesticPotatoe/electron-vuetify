module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  pluginOptions: {
    electronBuilder: {
      // example build parameters
      mainProcessFile: 'src/background.js',
      builderOptions: {
        productName: 'ElectronVuetify',
        appId: 'org.majesticpotatoe.electronvuetify',
        win: {
          icon: './src/assets/icons/win/vuetify.ico',
          target: 'nsis',
          publish: ['github'],
        },
        files: [],
      },
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
}
