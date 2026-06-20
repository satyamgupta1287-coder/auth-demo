// js/firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqSMjr5__HNV-LXZi5vQvGzfBQ46lRFNA",
  authDomain: "auth-demo-f8ae4.firebaseapp.com",
  projectId: "auth-demo-f8ae4",
  storageBucket: "auth-demo-f8ae4.firebasestorage.app",
  messagingSenderId: "245702722359",
  appId: "1:245702722359:web:c669123eb90a1d282290b2",
  measurementId: "G-DJ4TS9FBX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export these to use in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
