// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA3w5IOJ5yJzp3IuPoT6tVMDvZqDXyMZc",
  authDomain: "mrpankajpandeyportfolio.firebaseapp.com",
  projectId: "mrpankajpandeyportfolio",
  storageBucket: "mrpankajpandeyportfolio.appspot.com",
  messagingSenderId: "598993251173",
  appId: "1:598993251173:web:9d60a7c8798cb9114d4f8c",
  measurementId: "G-HE6ZSW68SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

export { db };