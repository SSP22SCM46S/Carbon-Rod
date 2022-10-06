// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9wPxeLXxjWswKxhU4gTbPNpojeNt9rrc",
  authDomain: "tree-of-life-01.firebaseapp.com",
  databaseURL: "https://tree-of-life-01-default-rtdb.firebaseio.com",
  projectId: "tree-of-life-01",
  storageBucket: "tree-of-life-01.appspot.com",
  messagingSenderId: "297833766999",
  appId: "1:297833766999:web:a0ac6db4dff40c07f30312",
  measurementId: "G-4QSPV0XZQW"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();

export const signupUser = (username, email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((cred) => {
        console.log("The user was created: ", cred.user);
    })
}