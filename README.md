# electron-vuetify

> This project has been deprecated in favor of the `@vue/cli` plugin/preset [electron-vuetify](https://github.com/MajesticPotatoe/vue-cli-plugin-electron-vuetify)

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

```bash
yarn install
```

or if you use NPM:

```bash
// Delete the yarn.lock file
// You may need to invoke electron-builder cli (requires @vue/cli v3+)
// You can do this by running `vue invoke electron-builder`
// Do not select spectron test as it will cause errors

npm i
```

### Compiles and hot-reloads for development

```bash
yarn serve
```

**electron based stores: `window` are not available and components using such will be disabled**

### Compiles and minifies for production

```bash
yarn build
```

**electron based stores: `window` are not available and components using such will be disabled**

### Run your tests

```bash
yarn test:unit
```

### Lints and fixes files

```bash
yarn lint
```

### Starts Electron development environment

```bash
electron:serve
```

### Builds Electron for production

```bash
electron:build
```
