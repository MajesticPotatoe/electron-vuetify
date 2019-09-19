<template>
  <v-app>
    <app-system-bar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
      AppSystemBar: () => import(/* webpackChunkName: "app-system-bar" */ '@/components/app/AppSystemBar'),
    },
    data: () => ({
    //
    }),
  }
</script>
