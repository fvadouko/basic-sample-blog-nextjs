import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBd5M0WXjNfcZEiOaNT8OtoAdlE1ojh-OU",
  authDomain: "basic-medium-blog.firebaseapp.com",
  projectId: "basic-medium-blog",
  storageBucket: "basic-medium-blog.appspot.com",
  messagingSenderId: "741416945653",
  appId: "1:741416945653:web:add1f0fda86d5602c142bc",
  measurementId: "G-MLBF9FRBGS",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
