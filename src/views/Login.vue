<template>
  <div class="login">
    <h3>Admin Login</h3>
    <form @submit.prevent="login">
      <label>
        Email:
        <input 
          type="email"
          v-model="email"
          placeholder="Email address"
          class="input"/>
      </label>
      <label>
        Password:
        <input 
          type="password" 
          v-model="password"
          placeholder="Password" 
          class="input"/>
      </label>
    <button v-on:click="login" class="button" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
  import firebase from 'firebase'
  // import nprogress from 'nprogress'
  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: '',
        user: {}
      }
    },
    methods: {
      login () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
          this.user = user
          this.$router.replace('/firestore')
        }).catch((err) => {
          alert(err.message)
        })
      }
    },
    mounted: function () {
      this.$nextTick(function () {
      })
    } 
  }
</script>