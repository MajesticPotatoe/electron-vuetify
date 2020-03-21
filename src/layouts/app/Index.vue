<template>
  <v-app>
    <app-system-bar />

    <app-view />
  </v-app>
</template>

<script>
  export default {
    name: 'AppLayout',

    components: {
      AppSystemBar: () => import(/* webpackChunkName: "app-system-bar" */ './components/AppSysBar'),
      AppView: () => import('./components/AppView'),
    },
  }
</script>
