// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdGWP9Z_i2ZdFgPY9cFUq2Q-ev_UlSJgU",
  authDomain: "react-course-1e7d7.firebaseapp.com",
  projectId: "react-course-1e7d7",
  storageBucket: "react-course-1e7d7.appspot.com",
  messagingSenderId: "1033275235721",
  appId: "1:1033275235721:web:b3f93aaf714d52da7b1558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);