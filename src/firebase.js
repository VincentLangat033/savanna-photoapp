import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
const auth = getAuth(app);

export { auth };