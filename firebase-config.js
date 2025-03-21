// Import and configure Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZNLSIuRU4GOmrJ59_FIUelsblhAAqh_s",
    authDomain: "iot-based-smart-parking-be092.firebaseapp.com",
    databaseURL: "https://iot-based-smart-parking-be092-default-rtdb.firebaseio.com",
    projectId: "iot-based-smart-parking-be092",
    storageBucket: "iot-based-smart-parking-be092.firebasestorage.app",
    messagingSenderId: "271639620448",
    appId: "1:271639620448:web:57b05b5d5b0f990ffa0c05",
    measurementId: "G-FJYK9HVEX4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
