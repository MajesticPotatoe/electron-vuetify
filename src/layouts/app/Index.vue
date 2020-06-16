<template>
  <v-app>
    <app-system-bar />

    <app-view />

    <app-updater />
  </v-app>
</template>

<script>
  export default {
    name: 'AppLayout',

    components: {
      AppSystemBar: () => import(/* webpackChunkName: "app-system-bar" */ './components/AppSysBar'),
      AppUpdater: () => process.env.IS_ELECTRON ? import(/* webpackChunkName: "app-updater" */ './components/AppUpdater') : null,
      AppView: () => import(/* webpackChunkName: "app-view" */'./components/AppView'),
    },
  }
</script>
