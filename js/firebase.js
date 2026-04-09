// FIREBASE CDN IMPORTS (Browser Compatible)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// YOUR CONFIG (same rakha hai)
const firebaseConfig = {
  apiKey: "AIzaSyCCdHDWh-CJkJqBSNxKAd7dWwX8agBYuuc",
  authDomain: "prompt-ai-a0c21.firebaseapp.com",
  projectId: "prompt-ai-a0c21",
  storageBucket: "prompt-ai-a0c21.firebasestorage.app",
  messagingSenderId: "322416217341",
  appId: "1:322416217341:web:c43dcc16ac86bbba24c294",
  measurementId: "G-B98ZKD5KP9"
};

// INIT FIREBASE
const app = initializeApp(firebaseConfig);

// EXPORT FIRESTORE
export const db = getFirestore(app);
