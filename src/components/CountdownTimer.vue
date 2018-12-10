// replace with more customizable countdown timer or build own
// npm uninstall vuejs-countdown --save
<template>
  <div id="countdown">
    <div class="container">
      <!-- <div id="hex2" class="hexagon-wrapper">
        <div id="color2" class="hexagon">
          <p class="text">Only</p>
          <p class="digit">{{ days | two_digits }}</p>
          <p class="text">Days</p>
        </div>
      </div> -->
      <div class="round">
        <p class="text">Only</p>
        <p class="digit">{{ days | two_digits }}</p>
        <p class="text">Days</p>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    ready() {
      window.setInterval(() => {
          this.now = Math.trunc((new Date()).getTime() / 1000);
      },1000);
    },
    props: {
      date: Number 
    },
    data() {
        return {
          now: Math.trunc((new Date()).getTime() / 1000)
        }
    },
    computed: {
      days: function() {
        return Math.trunc((Date.parse(this.date) / 1000 - this.now) / 60 / 60 / 24)
      }
    },
    name: 'CountdownTimer'
  }
</script>

<style lang="scss">
// .block {
//     display: flex;
//     flex-direction: column;
//     // margin: 20px;
// }
// $ap-light-purple: #B2999A;
// $ap-purple: #66505D;
// $ap-dark-purple: #3C343F;
// $ap-off-white: #DDE3D5;
// $ap-red: #A14531;

#hex2 {
  background-color: $ap-purple;
  width: 150px;
  height: 150px;
}
.hexagon-wrapper {
  text-align: center;
  margin: 20px;
  position: relative;
  display: inline-block;
}

.hexagon {
  height: 100%;
  width: calc(100% * 0.57735);
  display: inline-block;
}

.hexagon:before {
  position: absolute;
  top: 0;
  right: calc((100% / 2) - ((100% * 0.57735) / 2));
  background-color: inherit;
  height: inherit;
  width: inherit;
  content: '';
  transform: rotateZ(60deg);
}

.hexagon:after {
  position: absolute;
  top: 0;
  right: calc((100% / 2) - ((100% * 0.57735) / 2));
  background-color: inherit;
  height: inherit;
  width: inherit;
  content: '';
  transform: rotateZ(-60deg);
}
.text {
    color: $ap-off-white;
    font-size: 18px;
    // font-family: 'Roboto Condensed', serif;
    // font-weight: 40;
    // margin-top:10px;
    // margin-bottom: 10px;
    text-align: center;
}
.round p {
  margin: 0px !important;
}
.digit {
    color: $ap-red;
    font-size: 24px;
    font-weight: 100;
    // font-family: 'Roboto', serif;
    text-align: center;
}
#countdown .round { 
  margin: auto;
}
.round {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: $ap-light-purple;
    border: 3px solid $ap-purple;
}


</style>