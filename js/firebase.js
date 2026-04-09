// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCdHDWh-CJkJqBSNxKAd7dWwX8agBYuuc",
  authDomain: "prompt-ai-a0c21.firebaseapp.com",
  projectId: "prompt-ai-a0c21",
  storageBucket: "prompt-ai-a0c21.firebasestorage.app",
  messagingSenderId: "322416217341",
  appId: "1:322416217341:web:c43dcc16ac86bbba24c294",
  measurementId: "G-B98ZKD5KP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
