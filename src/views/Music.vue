<template>
  <div id="music">
    <music-player/>
    <!-- button to suggest another song -->
    <input v-model="track_search" placeholder="Track name">
    <div id="track-search">
      <!-- `greet` is the name of a method defined below -->
      <button v-on:click="trackSearch">Search</button>
    </div>
    <p>{{ track_count }}</p>
    <p>{{ api_response }}</p>
    <p>{{ first_track_name }}</p>
  </div>
</template>

<script>
import MusicPlayer from '@/components/MusicPlayer.vue'
import axios from 'axios'

/* TODO: 
1. Setup
  a. 'login' to spotify as paul
  b. get collab playlist i've already created

2. Features
  a. have ability to listen to playlist
  b. have ability to 'suggest another song
*/
export default {
  name: 'music',
  data: function () {
    return {
      track_count: 0,
      track_search: '',
      api_response: '',
      first_track_name: ''
    }
  },
  components: {
    MusicPlayer
  },
  methods: {
     trackSearch: function () {
      // `this` inside methods points to the Vue instance
      // alert('track name ' + this.track_search)
      axios.get("api/track/" + this.track_search)
      .then((response)  =>  {
        this.track_count = response.data.tracks.total
        this.api_response = 'good'
        this.first_track_name = response.data.tracks.items[0].name
        alert(this.track_count + ',' + this.api_response + '.' + this.first_track_name)
      }, (error)  =>  {
        this.track_search = 'oh shit' + error
      }) 
    }
  }
}
</script>

<style lang="scss">
</style>
