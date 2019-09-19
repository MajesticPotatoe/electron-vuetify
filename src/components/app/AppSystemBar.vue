<template>
  <v-system-bar app window lights-out>
    <v-spacer />
    <v-icon class="systemBarBtn">mdi-window-minimize</v-icon>
    <v-icon class="systemBarBtn">mdi-window-maximize</v-icon>
    <v-icon class="systemBarBtn">mdi-window-close</v-icon>
  </v-system-bar>
</template>

<script>
  export default {
    name: 'AppSystemBar',
    data: () => ({
      //
    }),
  }
</script>

<style lang="sass">
  .systemBarBtn
    width: 30px
    padding: 0 !important
    margin: 0 !important
</style>
