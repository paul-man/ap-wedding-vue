<template>
  <div id="googlemapframe">
    <div id="mapouter">
      <div id="gmap_canvas">
        <iframe width="700" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=the%20royalton%20mansion&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <a href="https://www.pureblack.de">pureblack.de</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoogleMapFrame'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mapouter {
    text-align:right;
    height:500px;
    width:700px;
  }
  .gmap_canvas {
    overflow:hidden;
    background:none !important;
    height:500px;
    width:700px;
  }
</style>
