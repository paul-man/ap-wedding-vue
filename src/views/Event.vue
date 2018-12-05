<template>
  <div class="event">
    <img alt="Vue logo" src="../assets/logo.png">
    <GoogleMapFrame/>
  </div>
</template>

<script>
// @ is an alias to /src
import GoogleMapFrame from '@/components/GoogleMapFrame.vue'

export default {
  name: 'event',
  components: {
    GoogleMapFrame
  }
}
</script>
