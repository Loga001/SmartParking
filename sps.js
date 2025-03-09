
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// Firebase configuration
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
const db = getDatabase(app);

// Function to update slot status
function updateSlots(data) {
    for (const slot in data) {
        const element = document.getElementById(slot);
        if (element) {
            if (data[slot]) {
                element.className = "slot-card occupied";
                element.textContent = `${slot.toUpperCase()} (Occupied)`;
            } else {
                element.className = "slot-card available";
                element.textContent = `${slot.toUpperCase()} (Available)`;
            }
        }
    }
}

// Fetch real-time data from Firebase
const parkingRef = ref(db, 'parking');
onValue(parkingRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        updateSlots(data);
    }
});

// Initial loading state for slots
window.onload = () => {
    updateSlots({
        slot1: false,
        slot2: false,
        slot3: false,
        slot4: false
    });
};
