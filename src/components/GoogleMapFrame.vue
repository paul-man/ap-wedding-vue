<template>
  <div class="googlemapframe">
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe width="700" height="500" id="gmap_canvas" :src="map_url" 
          frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoogleMapFrame',
  props: {
      map_url: String 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mapouter {
    text-align:right;
    height:500px;
    width:700px;
    margin: auto !important;
  }
  .gmap_canvas {
    overflow:hidden;
    background:none !important;
    height:500px;
    width:700px;
  }
</style>
