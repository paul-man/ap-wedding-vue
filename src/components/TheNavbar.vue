<template>
  <div id="nav">
    <router-link to="/">Welcome</router-link> |
    <router-link to="/event">Event</router-link> |
    <router-link to="/rsvp">RSVP</router-link> |
    <router-link to="/accomodations">Accomodations</router-link> |
    <router-link to="/photos">Photos</router-link>
    <CountdownTimer />
  </div>
</template>

<script>
// @ is an alias to /src
import CountdownTimer from '@/components/CountdownTimer.vue'

export default {
  name: 'TheNavbar',
  components: {
    CountdownTimer
  }
}
</script>

<style>
</style>