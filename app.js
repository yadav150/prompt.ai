import { auth, db } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  where,
  doc,
  getDoc,
  updateDoc,
  increment,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

/* ---------------- AUTH ---------------- */
export let currentUser = null;

onAuthStateChanged(auth, (user) => {
  currentUser = user;
  updateNav();
});

/* NAV UPDATE */
function updateNav(){
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if(currentUser){
    loginBtn.style.display="none";
    logoutBtn.style.display="inline";
  }else{
    loginBtn.style.display="inline";
    logoutBtn.style.display="none";
  }
}

/* LOGOUT */
window.logout = async () => {
  await signOut(auth);
  location.reload();
};

/* GOOGLE LOGIN */
window.googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

/* ---------------- PROMPTS ---------------- */
export async function submitPrompt(title, prompt, category){
  if(!currentUser) return alert("Login required");

  await addDoc(collection(db,"prompts"),{
    title,
    prompt,
    category,
    createdAt: serverTimestamp(),
    userId: currentUser.uid,
    userEmail: currentUser.email,
    userName: currentUser.displayName || "",
    views:0
  });

  location.href="index.html";
}

/* GET RECENT */
export async function getRecent(){
  const q = query(collection(db,"prompts"), orderBy("createdAt","desc"));
  return await getDocs(q);
}

/* GET SINGLE */
export async function getPrompt(id){
  const ref = doc(db,"prompts",id);
  const snap = await getDoc(ref);

  await updateDoc(ref,{
    views: increment(1)
  });

  return snap.data();
}
export function requireAuth(){
  if(!currentUser){
    location.href = "login.html";
  }
}
