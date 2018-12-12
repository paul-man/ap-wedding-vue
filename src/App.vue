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
 
  .loading-wrapper {
    position: relative;
  }
  .loading:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: rgba($ap-off-white, 0.3) center center no-repeat url('~@/assets/loading.gif');
  }
</style>
