import firebase from  'firebase/app';
import "firebase/auth";

export const auth =firebase.initializeApp( {
    apiKey: "AIzaSyDaYDm3a61_-2Fj3qsJLc2cwZt7tF3TYGw",
    authDomain: "unichat-b0274.firebaseapp.com",
    projectId: "unichat-b0274",
    storageBucket: "unichat-b0274.appspot.com",
    messagingSenderId: "649514417753",
    appId: "1:649514417753:web:a9222c336230a77619bb48"
  }).auth();