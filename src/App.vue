<template>
  <v-app class="mainApp">
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

<style lang="sass">
  html
    overflow: auto !important

  .mainApp
    background-color: #CCEBFF !important
</style>
