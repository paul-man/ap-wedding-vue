<template>
  <div id="nav">
    <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
      <a class="navbar-brand" href="/"><img id="brand-img" src="~@/assets/ap-brand.png"/>
        <span id="view-title">{{ view_title }}</span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link"><router-link to="/" v-on:click.native="view_title = 'Welcome'">Welcome</router-link></a>
          <a class="nav-item nav-link"><router-link to="/event" v-on:click.native="view_title = 'Event'">Event</router-link></a>
          <a class="nav-item nav-link"><router-link to="/rsvp" v-on:click.native="view_title = 'RSVP'">RSVP</router-link></a>
          <a class="nav-item nav-link"><router-link to="/accomodations" v-on:click.native="view_title = 'Accomodations'">Accomodations</router-link></a>
          <a class="nav-item nav-link"><router-link to="/photos" v-on:click.native="view_title = 'Photos'">Photos</router-link></a>
          <a class="nav-item nav-link"><router-link to="/music" v-on:click.native="view_title = 'Music'">Music</router-link></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'TheNavbar',
  data () {
    return {
      view_title: ''
    }
  },
  components: {
  },
  mounted() {
    var element= document.getElementsByClassName('nav-item');
    for(var i=0; i<element.length; i++) {
      element[i].addEventListener('click', function() {
        if (screen.width < 768) {
          setTimeout(document.getElementsByClassName('navbar-toggler')[0].click(), 750)
        }
      }, false);   
    }
  }
}
</script>

<style  lang="scss">
  $navlink-color: #DE877B;  
  $nav-bg-color: #957AA5;
  .fixed-top {
    position: relative !important;
  }
  .navbar {
    background-color: $ap-purple;
    position: relative;
  }
  
  #nav a {
    color: $navlink-color;
    text-decoration: none;
  }

  #nav a:hover {
    color: $navlink-color;
    border: 5px black;
  }

  a.router-link-exact-active {
    background-color: rgba($navlink-color, 0.4);
    color: $ap-purple !important;
    padding: 5px;
    border-radius: 7px;
    border: solid 1px $ap-purple !important;
  }

  #brand-img {
    height:45px;
  }

  @media (max-width: 1200px) {
    .navbar{
      position: fixed;
      right: 0;
      left: 0;   
      border-radius: 0;
      top: 0;
    }      
  }

  #view-title {
    position: absolute;
    padding-top: 48px;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-size: 5vw;
    border-bottom: solid 1px $navlink-color;
  }

  @media (min-width: 768px) {
    #view-title {
      display: none;
    }
  }
</style>