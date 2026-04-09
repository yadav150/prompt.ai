import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCDHDWhC-JkJQBSNxKAd7dWwX8agBYuuc",
  authDomain: "prompt-ai-a0c21.firebaseapp.com",
  projectId: "prompt-ai-a0c21",
  storageBucket: "prompt-ai-a0c21.firebasestorage.app",
  messagingSenderId: "322416217341",
  appId: "1:322416217341:web:c43dcc16ac86bbba24c294",
  measurementId: "G-B98ZKD5KP9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
