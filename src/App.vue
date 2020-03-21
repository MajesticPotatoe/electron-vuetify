<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="sass">
  html
    overflow: auto !important
</style>
