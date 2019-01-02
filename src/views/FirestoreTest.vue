<template>
  <div class="firestore">
    <!-- <button class="button logout" v-on:click="logout">Logout</button> -->
    <div class="container">
      <form @submit="addGuest(first_name, last_name, added_guests, access_code, email)">
        <h2>Add a New Guest</h2>
        <div class="form-group">
          <label for="first_name">First Name</label>
          <input v-model="first_name" id="first_name" placeholder="First Name" class="input form-control" type="text" required>
        </div>
        <div class="form-group">
          <label for="last_name">Last Name</label>
          <input v-model="last_name" id="last_name" placeholder="Last Name" class="input form-control" type="text" required>
        </div>
        <div class="form-group">
          <label for="added_guests">Additional Guest count</label>
          <input v-model="added_guests" id="added_guests" placeholder="Additional Guest count" class="input form-control" type="text" required>
        </div>
        <div class="form-group">
          <label for="access_code">Access Code</label>
          <input v-model="access_code" id="access_code" placeholder="Access Code" class="input form-control" type="text" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" id="email" placeholder="Email" class="input form-control" type="email">
        </div>
        <button type="submit" class="button">Add New Guest</button>
      </form>
    </div>
    <article class="covers" v-for="(guest, idx) in guests" :key="idx">
      <div>
        <h1 style="margin: 10px">{{ guest.first_name + ' ' + guest.last_name }}</h1>
        <h1 style="margin: 10px">{{ guest.access_code }}</h1>
        <h1 style="margin: 10px">{{ guest.added_guests }}</h1>
        <h1 style="margin: 10px">{{ guest.email }}</h1>
        <hr>
        <button class="button" @click="deleteGuest(guest.id)">
          Delete
        </button>
      </div>
    </article>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../main'
// import nprogress from 'nprogress'
export default {
  name: 'Comics',
  data () {
    return {
      comics: [],
      guests: [],
      first_name: '',
      last_name: '',
      added_guests: '',
      access_code: '',
      email: ''
    }
  },
  methods: {
    addComic (name, image) {
      const createdAt = new Date()
      db.collection('comics').add({ name, image, createdAt })
      // Clear values
      this.name = ''
      this.image = ''
    },
    deleteComic (id) {
      db.collection('comics').doc(id).delete()
    },
    addGuest (first_name, last_name, added_guests, access_code, email) {
      // const createdAt = new Date()
      email = email || access_code + '@ap-wedding-' + access_code + '.com'
      db.collection('guests').add({ first_name, last_name, added_guests, access_code, email })
      // Clear values
      this.first_name = ''
      this.last_name = ''
      this.added_guests = ''
      this.access_code = ''
      this.email = ''
    },
    deleteGuest (id) {
      db.collection('guests').doc(id).delete()
    },
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },    
    loadComics () {
      // this.comics = db.collection('comics')
      // this.comics = this.comics.orderBy('createdAt')
      // return {
      //   comics: db.collection('comics').orderBy('createdAt')
      // }
      // const timestamp = snapshot.get('created_at');
      // const date = timestamp.toDate();
      this.comics = []
      db.collection('comics').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.comics.push(doc)
        })
      })
    },    
    loadGuests () {
      this.guests = []
      db.collection('guests').get().then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.guests.push(doc.data())
        })
      })
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.loadGuests()
      // this.loadComics()
    })
  }
}
</script>

<style>
  .firestore .container {
    width: 50%;
  }
  .reptileList {
    list-style: none;
  }
  article div {
    border: 1px solid black;
  }
</style>