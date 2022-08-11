import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNn6xqayMJdROopRkkLHMUBquKoThm-CI",
  authDomain: "batman-gym.firebaseapp.com",
  projectId: "batman-gym",
  storageBucket: "batman-gym.appspot.com",
  messagingSenderId: "587321133162",
  appId: "1:587321133162:web:adca86aedc6753c8cb2213",
};

firebase.initializeApp(firebaseConfig)
export {firebase}