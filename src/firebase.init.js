// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbCBYbCFHtaC65SvoR9qz5qGf4n-IMRMc",
  authDomain: "bid-player.firebaseapp.com",
  projectId: "bid-player",
  storageBucket: "bid-player.appspot.com",
  messagingSenderId: "464454635241",
  appId: "1:464454635241:web:8758661add006cbbfeaa78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;