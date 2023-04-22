// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrJDo-HsZKJfZQfpnUzT6l0k167bf0Oxg",
  authDomain: "climate-hack-2023.firebaseapp.com",
  projectId: "climate-hack-2023",
  storageBucket: "climate-hack-2023.appspot.com",
  messagingSenderId: "901096743695",
  appId: "1:901096743695:web:4466a51de716479348d47a",
  measurementId: "G-988ESSFHGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)

