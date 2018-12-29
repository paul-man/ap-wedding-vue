<template>
  <div id="header">
    <div class="container">
      <countdown-timer date="November 1, 2019"/>
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
    padding: 90px;
    /* margin-top: 20px; */
    /* background-image: url('~@/assets/hero.png');
    background-repeat: no-repeat;
    background-size: auto; */
    /* height: 2000px; */
    /* width: 100%; */
  }
</style>