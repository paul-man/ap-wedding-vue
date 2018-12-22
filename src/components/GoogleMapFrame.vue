<template>
  <div class="googlemapframe">
    <!-- <div class="map-responsive"> -->
      <div class="loading-wrapper loading map-responsive" id="maps_loading_div">
        <iframe width="500" height="500" :id="map_name" :src="map_url" 
            frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'GoogleMapFrame',
  props: {
      map_url: String,
      map_name: String
    },
    created() {
    },
    mounted() {
      document.getElementById(this.map_name).onload = function() {
        // debugger
        // parent.document.getElementById('maps_loading_div').classList.remove('loading')
        document.getElementById('maps_loading_div').classList.remove('loading')
      }
      // Maybe use this for a CSS loading icon
      // Maybe take the favicon, and fade in the rings 1 in, 1 out, over and over

      // let iframe = document.getElementById(this.map_name);
      // let iframe_rect = iframe.getBoundingClientRect();
      // let loading_elm = document.getElementById('loading-wrapper');

      // let iframe_width = iframe.offsetWidth;
      // let iframe_height = iframe.offsetHeight;
      // let loading_elm_height = loading_elm.offsetHeight;
      // let loading_elm_width = loading_elm.offsetWidth;
      // let iframe_x = iframe_rect.left;
      // let iframe_y = iframe_rect.top;

      // loading_elm.style.left = (iframe_x + iframe_width - (loading_elm_width / 2))+'px';
      // loading_elm.style.top = (iframe_y - iframe_height - (loading_elm_height / 2))+'px';
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // .mapouter {
  //   text-align:right;
  //   height:500px;
  //   width:700px;
  //   margin: auto !important;
  // }
  // .gmap_canvas {
  //   overflow:hidden;
  //   background:none !important;
  //   height:500px;
  //   width:700px;
  //   border: 1px solid black;
  // }

  .map-responsive{
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
  }
  .map-responsive iframe{
      left:0;
      top:0;
      height:100%;
      width:100%;
      position:absolute;
  }
  
// @media (max-width:1025px) { .container-fluid { width: 33% !important;} }
</style>
