
<template>
  <div id="countdown">
    <p>Only</p>
    <Countdown end="November 1, 2019"></Countdown>
    <p>left</p>
  </div>
</template>
<script>
  // replace with more customizable countdown timer or build own
  // npm uninstall vuejs-countdown --save
  import Countdown from 'vuejs-countdown'
  
  export default {
    components: { Countdown }
  }
</script>

<style scope>
  #countdown {
    color: gray;
  }
</style>