<template>
  <div id="music">
    <p>Alissa and I have set up a wedding playlist that we'll be adding to leading up to the wedding!</p>
    <p>Due to some API restrictions we can't have everyone adding to the playlist on the fly from this website, but below we can share the current state of the playlist.</p>
    <p>We can't promise every song will be played, but we'll see what we can do!</p>
    <music-player/>
    <!-- button to suggest another song -->
    <div id="track-search">
      <!-- `greet` is the name of a method defined below -->
      <button v-on:click="showButtonsDialog">Suggest a song</button>
    </div>
    <!-- <v-dialog/> -->
    <modals-container/>
  </div>
</template>

<script>
import MusicPlayer from '@/components/MusicPlayer.vue'
import TrackSearchModal from '@/components/modals/TrackSearchModal.vue'

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
    }
  },
  components: {
    MusicPlayer
  },
  methods: {
    showButtonsDialog () {
      this.$modal.show(TrackSearchModal)
    }
  }
}
</script>

<style lang="scss">
  #track-search {
    padding-top: 20px;
  }
</style>
