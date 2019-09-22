<template>
  <v-app class="mainApp">
    <sys-bar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
      SysBar: () => import(/* webpackChunkName: "sys-bar" */ '@/components/app/SysBar'),
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
