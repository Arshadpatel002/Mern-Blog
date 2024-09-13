// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-31.firebaseapp.com",
  projectId: "mern-blog-31",
  storageBucket: "mern-blog-31.appspot.com",
  messagingSenderId: "967874566746",
  appId: "1:967874566746:web:12055f8ed7ce838e0e1663"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);