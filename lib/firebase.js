// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBw30bnKxNQgl9v6ROSDtOhhz1uwkfiPH8",
    authDomain: "coffeapp-22c4a.firebaseapp.com",
    projectId: "coffeapp-22c4a",
    storageBucket: "coffeapp-22c4a.appspot.com",
    messagingSenderId: "282597350028",
    appId: "1:282597350028:web:848ed4c91cde593d1d39a9"
  };
  // Initialize Firebase
  export const appfirebase = initializeApp(firebaseConfig);
  export const auth= getAuth(appfirebase);