import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyAt-J_zc09dMbrN0T7_lzp6BfjC3UqF6Gw",
  authDomain: "tiktok-ebac-23991.firebaseapp.com",
  projectId: "tiktok-ebac-23991",
  storageBucket: "tiktok-ebac-23991.appspot.com",
  messagingSenderId: "962542503449",
  appId: "1:962542503449:web:fa648fd7bb1e1195b54c88"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;