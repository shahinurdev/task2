/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5l9cQWB13gMOvlYhch_AdJVeoHpOMtz8",
  authDomain: "worhard-2b9f9.firebaseapp.com",
  projectId: "worhard-2b9f9",
  storageBucket: "worhard-2b9f9.appspot.com",
  messagingSenderId: "262690927868",
  appId: "1:262690927868:web:23d239fece71f1f4331379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
