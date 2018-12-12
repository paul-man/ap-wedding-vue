<template>
  <div id="music-player">
    <div class="container">
      <div class="loading-wrapper loading" id="spotify-loader-div">
          <iframe src="https://open.spotify.com/embed/user/paulpvm/playlist/00Cepk7FcJsENlARM85kOz" id="spotify-player"
            width="400" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'MusicPlayer',
  components: {
  },
  mounted() {
      document.getElementById('spotify-player').onload = function() {
        parent.document.getElementById('spotify-loader-div').classList.remove('loading')
      }
    }
}
</script>

<style>
  #music-player{
    padding-top: 20px;
  }

  #music-player > .container {
    width: 400px;
    height: 380px;
  }

  #spotify-player {
    width: 100%;
  }
</style>