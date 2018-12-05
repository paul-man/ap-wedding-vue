// replace with more customizable countdown timer or build own
// npm uninstall vuejs-countdown --save
<template>
  <div id="countdown">
    <Countdown end="November 1, 2019"></Countdown>
  </div>
</template>
<script>
  import Countdown from 'vuejs-countdown'

  export default {
    components: { Countdown }
  }
</script>