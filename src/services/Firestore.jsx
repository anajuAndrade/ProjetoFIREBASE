// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADVNCqnBL2ch3uj6P1g1lCzAoMmS4mSfA",
  authDomain: "reactfloricultura.firebaseapp.com",
  projectId: "reactfloricultura",
  storageBucket: "reactfloricultura.firebasestorage.app",
  messagingSenderId: "123962600445",
  appId: "1:123962600445:web:1180c2806c437c87eb0794"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;