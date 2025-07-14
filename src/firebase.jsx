import { initializeApp } from "firebase/app";
// Import Firestore methods
import { getFirestore } from "firebase/firestore";  

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDobZXufyEHEsuMhQrtxh4zSh3VdO-jjAM",
  authDomain: "portfolio-kevinguy28.firebaseapp.com",
  projectId: "portfolio-kevinguy28",
  storageBucket: "portfolio-kevinguy28.firebasestorage.app",
  messagingSenderId: "188408555442",
  appId: "1:188408555442:web:71d79e95b7f47bf7ed66ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const database = getFirestore(app);

export { database };  // Export Firestore instance