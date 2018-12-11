<template>
  <div class="event">
    <div class="container" id="event-schedule">
      <div class="row header-row">
        <div class="col">
          Time
        </div>
        <div class="col">
          Event
        </div>
      </div>
      <div class="row"
        v-for="(item, index) in items"
        :key="item.time"
        v-bind:class="{ 'odd-row': index % 2 !== 0 }">
        <div class="col time">
          {{ item.time }}
        </div>
        <div class="col">
          {{ item.description }}
        </div>
      </div>
    </div>
    <div class="container map-container">
      <GoogleMapFrame map_url="https://maps.google.com/maps?q=the%20royalton%20mansion&t=&z=15&ie=UTF8&iwloc=&output=embed" map_name="venue_map"/>      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GoogleMapFrame from '@/components/GoogleMapFrame.vue'

export default {
  name: 'event',
  components: {
    GoogleMapFrame
  },

  data () {
    return {
      items: [
        { 
          time: '3:00PM',
          description: 'Hotel check-in' 
        },
        { 
          time: '4:00PM - 5:00PM',
          description: 'Hotel to Royalton shuttle bus' 
        },
        { 
          time: '5:30PM',
          description: 'Wedding Ceremony begins' 
        },
        { 
          time: '6:00PM',
          description: 'Cocktail Hour' 
        },
        { 
          time: '7:00PM - 8:00PM',
          description: 'Dinner' 
        },
        { 
          time: '8:00PM - 12:00AM',
          description: 'Dancing our asses off' 
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.event {
  padding-top: 20px;
}

#event-schedule {
  width: 33%;
}
.time {
  color: $ap-red;
  font-weight: bolder;
}
.header-row{
  border-bottom: 1px solid black;
}
.odd-row {
  background-color: rgba($ap-off-white, 0.5);
  border-radius: 5px;
}

.map-container {
  padding-top: 20px;
}
</style>
