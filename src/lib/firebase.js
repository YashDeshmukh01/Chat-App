import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-266a6.firebaseapp.com",
  projectId: "reactchat-266a6",
  storageBucket: "reactchat-266a6.appspot.com",
  messagingSenderId: "235375050132",
  appId: "1:235375050132:web:713c89dd7aa302200b6381",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();