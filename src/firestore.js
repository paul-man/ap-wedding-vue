import { firebase } from "@firebase/app";
import "@firebase/firestore";
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBfDW-L_wa3qfWn6-EFsizhwo2v_HXCTDE",
  authDomain: "wedding-vue-94a4d.firebaseapp.com",
  databaseURL: "https://wedding-vue-94a4d.firebaseio.com",
  projectId: "wedding-vue-94a4d",
  storageBucket: "wedding-vue-94a4d.appspot.com",
  messagingSenderId: "278306639818"
})

export const db = firebaseApp.firestore()
