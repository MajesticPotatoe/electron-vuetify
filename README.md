# electron-vuetify
Vue-Cli3 template of electron 6.0 with vuetify 2.0

## Installing from scratch:
```
vue create app
cd app
vue add vuetify
vue add electron-builder
```

## Feature Set
- vuetify 2.x
- vuetify-loader
- electron 6
- eslint-config-vuetify
- vuex
- vue-router
- offline fonts

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```
** currently will not work due to electron specific store: `window` **

### Compiles and minifies for production
```
yarn build
```
** currently will not work due to electron specific store: `window` **

### Run your tests
```
yarn test
```

### Lints and fixes files
```
yarn lint
```

### Starts Electron development environment
```
electron-dev
```

### Builds Electron for production
```
electron-build
```

