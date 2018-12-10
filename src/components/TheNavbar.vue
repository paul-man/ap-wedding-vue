<template>
  <div id="nav">
    <!-- navbar navbar-default navbar-fixed-top justify-content-md-center
    navbar  navbar-fixed-top justify-content-center -->
    <nav class="navbar navbar-default fixed-top justify-content-center">
      <div class="container">
        <router-link class="active" to="/">Welcome</router-link>
        <router-link to="/event">Event</router-link>
        <router-link to="/rsvp">RSVP</router-link>
        <router-link to="/accomodations">Accomodations</router-link>
        <router-link to="/photos">Photos</router-link>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'TheNavbar',
  components: {
  }
}
</script>

<style  lang="scss" scoped>
  $navlink-color: #DE877B;  
  $nav-bg-color: #957AA5;

  .navbar {
    background-color: $ap-purple;
    position: relative;
  }
  .fixed-top {
  }
  
  #nav a {
    color: $navlink-color;
    text-decoration: none;
  }

  #nav a:hover {
    color: $navlink-color;
    border: 5px black;
  }
</style>