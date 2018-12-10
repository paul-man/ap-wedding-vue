<template>
  <div class="accomodations">
    <div class="container">
      <p>For those of you who are planning on getting wild, we do have a room block available at the Vianna hotel, not more than a 10 minute drive away.</p><br/>
      <p>There will be a free shuttle running back and forth between the venue -- The Royalton Mansion -- and the Vianna from 3:00pm - 5:00pm & 10:00pm - 12:00am</p><br/>
      <p>Check-in at the hotel begins at 3:00pm, but we have have been told early check-in may be possible</p><br/>
      <p>Please see below for Vianna location and directions</p><br/>
    </div>
    <div class="container">
      <GoogleMapFrame map_url="https://maps.google.com/maps?q=viana%20hotel&t=&z=13&ie=UTF8&iwloc=&output=embed"/>
    </div>
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


<style lang="scss">
.accomodations {
  padding-top: 20px;
}
</style>
