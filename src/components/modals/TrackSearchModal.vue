<template>
  <div class="track-search-modal">    
    <div class="modal-header">
      <h1>Search a song</h1>
      <button type="button" class="close float-right" aria-label="Close" @click="$emit('close')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="container">
      <label for="input-5">Users of Github:</label>
    <input id="input-5" class="form-control" type="text" placeholder="Type to search...">
    <uiv-typeahead v-model="model" target="#input-5" :async-function="queryFunction" bind:data="tracks">
      <template slot="item" slot-scope="props">
        <li v-for="(item) in props.items" :key="item.id">
          <p>test</p>
          <a role="button" @click="props.select(item)">
            <img width="22px" height="22px" :src="item.album.images[0] + '&s=40'">
            <span v-html="props.highlight(item)">{{ item.name }}</span>
          </a>
        </li>
      </template>
    </uiv-typeahead>
    <br/>
    <uiv-alert v-show="model">You selected {{model}}</uiv-alert>
      <!-- <label for="input-4">Tracks:</label>
      <input id="input-4" class="form-control" type="text" placeholder="Type to search...">
      <typeahead v-model="model" target="#input-4" async-src="localhost:8081/api/track/" async-key="items" item-key="login"/>
      <br/>
      <alert v-show="model">You selected {{model}}</alert> -->
      <!-- <input v-model="track_search" placeholder="Track name">
      <div>
        <button v-on:click="searchTrack">Search song</button>
      </div> -->
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
      tracks: [],
      model: ''
    }
  },
  methods: {
     queryFunction (query, done) {
        axios.get("api/track/" + query)
          .then(res => {
            // alert(res.data.total_count)
            this.tracks = res.data.tracks
            done(res.data.tracks.items)
          })
          .catch(err => {
            // any error handler
          })
      },
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
</style>
