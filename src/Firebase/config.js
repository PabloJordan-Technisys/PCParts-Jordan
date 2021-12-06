// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgGAB9Voqxww5wkXDwYhip-kZ9Vphx7-0",
  authDomain: "technoarg-1f2cb.firebaseapp.com",
  projectId: "technoarg-1f2cb",
  storageBucket: "technoarg-1f2cb.appspot.com",
  messagingSenderId: "831599846809",
  appId: "1:831599846809:web:49ac0908bbd70c53699f08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
