// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACjr7aErjVXNjoil-KGdjcXJqQJjn9p_g",
  authDomain: "podcast-app-9042e.firebaseapp.com",
  projectId: "podcast-app-9042e",
  storageBucket: "podcast-app-9042e.appspot.com",
  messagingSenderId: "1080070309045",
  appId: "1:1080070309045:web:50f86f3530caf53158eafc",
  measurementId: "G-81R1F6752S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };