import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBslEzB2fzn2YVD93JUV-WObiw_SGpWmgY",
  authDomain: "sixth-grammar-417009.firebaseapp.com",
  projectId: "sixth-grammar-417009",
  storageBucket: "sixth-grammar-417009.appspot.com",
  messagingSenderId: "498708076866",
  appId: "1:498708076866:web:812ea99179d9bf7729d0db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
