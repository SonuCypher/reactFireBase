import firebase from 'firebase/compat/app'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC25zsM3tvYkMm61lM7BclnJr8MTY0bBJo",
    authDomain: "fir-568da.firebaseapp.com",
    projectId: "fir-568da",
    storageBucket: "fir-568da.appspot.com",
    messagingSenderId: "935456973661",
    appId: "1:935456973661:web:3aa796909b8d0ce5ce3eb4",
    measurementId: "G-DH442FNVF6"
  };

  export const Firebase = firebase.initializeApp(firebaseConfig)