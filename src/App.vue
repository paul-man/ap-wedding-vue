<template>
  <div id="app">
    <the-navbar/>
    <the-header/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheNavbar from '@/components/TheNavbar.vue'
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheHeader
  }
}
</script>

<style lang="scss">
  // @import '@/scss/base.scss';
  @import '@/scss/settings.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
