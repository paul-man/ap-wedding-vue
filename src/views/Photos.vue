<template>
  <div class="photos">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="photos to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'photos',
  components: {
    HelloWorld
  }
}
</script>
