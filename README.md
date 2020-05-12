# electron-vuetify
Boilerplate project for electron 8.0 with vuetify 2.x

## Feature Set
- electron 8 w/ electron-builder (beta)
- jest + vue-test-utils
- routing w/ vue-router
- sass
- vuetify 2.x
- vuetify eslint
- vuetify-cli-plugin (coming soon)
- vuetify-cli-preset
- vuex + vuex-pathify
- offline fonts

## Project setup
If you use [Yarn](https://yarnpkg.com/en/) (strongly recommended):
```
yarn install
```
or if you use NPM:
```
// Delete the yarn.lock file
// You may need to invoke electron-builder cli (requires @vue/cli v3+)
// You can do this by running `vue invoke electron-builder`
// Do not select spectron test as it will cause errors

npm i
```


### Compiles and hot-reloads for development
```
yarn serve
```
** electron based stores: `window` are not available and components using such will be disabled **

### Compiles and minifies for production
```
yarn build
```
** electron based stores: `window` are not available and components using such will be disabled **

### Run your tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Starts Electron development environment
```
electron:serve
```

### Builds Electron for production
```
electron:build
```

