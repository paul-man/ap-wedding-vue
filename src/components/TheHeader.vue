<template>
  <div id="header">
    <div class="container">
      <countdown-timer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CountdownTimer from '@/components/CountdownTimer.vue'

export default {

    
  name: 'TheHeader',
  components: {
    CountdownTimer
  }
}
</script>

<style>
  #header {
    background-image: url('~@/assets/hero.png');
    background-repeat: no-repeat;
    background-size: auto;
    height: 2000px;
    width: 100%;
  }
</style>