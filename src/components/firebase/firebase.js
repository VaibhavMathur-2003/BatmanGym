import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNn6xqayMJdROopRkkLHMUBquKoThm-CI",
  authDomain: "batman-gym.firebaseapp.com",
  projectId: "batman-gym",
  storageBucket: "batman-gym.appspot.com",
  messagingSenderId: "587321133162",
  appId: "1:587321133162:web:adca86aedc6753c8cb2213",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const SignInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((e) => {
      console.log(e);
    })
    .catch((err) => {
      console.log(err);
    });
};
