import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTNgKRR2yuNpEgp9FoDqij0DeXFvQ4Iqc",
  authDomain: "portfolio-57278.firebaseapp.com",
  databaseURL: "https://portfolio-57278-default-rtdb.firebaseio.com",
  projectId: "portfolio-57278",
  storageBucket: "portfolio-57278.appspot.com",
  messagingSenderId: "610245615117",
  appId: "1:610245615117:web:ff721bb70a9b7adfafff44",
  measurementId: "G-8G5SC7MGE2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
