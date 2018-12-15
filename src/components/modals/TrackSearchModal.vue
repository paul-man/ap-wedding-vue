<template>
  <div class="track-search-modal">    
    <div class="modal-header">
      <h1>Search a song</h1>
      <button type="button" class="close float-right" aria-label="Close" @click="$emit('close')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="container">
      <label for="input-track-search">Songs on Spotify:</label>
      <input id="input-track-search" class="form-control" type="text" placeholder="Type to search...">      
      <uiv-typeahead v-model="model" target="#input-track-search" :async-function="trackSearch" item-key="name" append-to-body>
        <template slot="item" slot-scope="props">
          <li v-for="item in props.items" v-bind:key="item.id">
            <a role="button" @click="props.select(item);getTrack(item.id);">
              <div class="container">
                <div class="row">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5" style="background-color:red;">
                    <img width="50px" height="50px" :src="item.album.images[0].url">
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-3 col-xs-2" style="padding:0px">
                    <div class="short-div" style="background-color:green">
                      <span v-html="props.highlight(item)"></span></div>
                    <div class="short-div" style="background-color:purple">
                      <span class="artist-name">{{ item.artists[0].name }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </template>
      </uiv-typeahead>
      <div id="selected-track-div"></div>
      <br/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TrackSearchModal',
  props: { 
    text: String 
  },
  data () {
    return {
      model: ''
    }
  },
  methods: {
    trackSearch (track_title, done) {
      axios.get("api/track/" + track_title)
      .then(res => {
        done(res.data.tracks.items)
      })
      .catch(err => {
        // any error handler
        alert('Oops, there was an error retrieving the songs!\nCall/text Paul and tell at him.\n'+err)
      })
    },
    github (query, done) {
        axios.get('https://api.github.com/search/users?q=' + query)
          .then(res => {
            done(res.data.items)
          })
          .catch(err => {
            // any error handler
            alert(err)
          })
      },
    getTrack: function(track_id) {
      var song_div = document.getElementById('selected-track-div')
      song_div.innerHTML = '<iframe src="https://open.spotify.com/embed/track/'+track_id+'" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    }
  }
}
</script>

<style lang="scss">

.track-search-modal h1 {
    font-size: 24px;
    font-weight: lighter;
    display: inline-block;
    font-family:'Open Sans', sans-serif;
    margin:0;
    margin-right: 42px;
}
.track-search-modal button {
    // margin:0;
    font-size: 35px;
    display: inline-block;
    // line-height: 0.5;
    vertical-align: middle;
}

.modal-header {
  padding: 10px;
  height: 50px;
}

.dropdown-menu {
  max-height: 200px;
  background-color: gray;
  overflow-y: auto;
}

.dropdown-menu li {
  height: 50px;
}

.artist-name{
  color: gray;
}
</style>
