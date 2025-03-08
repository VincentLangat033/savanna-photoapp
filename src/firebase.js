// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzD3EA69zkcYqiix_fumPLN9KC5qIZE1Q",
  authDomain: "savannah-qa-assessment.firebaseapp.com",
  projectId: "savannah-qa-assessment",
  storageBucket: "savannah-qa-assessment.firebasestorage.app",
  messagingSenderId: "675261633420",
  appId: "1:675261633420:web:9a3a036f9564c7b727fca9",
  measurementId: "G-3NCGLVGRKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);