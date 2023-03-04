import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhx5z28a5CeTWvbP9KAAbmObU0M_PiSS8",
  authDomain: "reading-list-app-72a38.firebaseapp.com",
  projectId: "reading-list-app-72a38",
  storageBucket: "reading-list-app-72a38.appspot.com",
  messagingSenderId: "138741689181",
  appId: "1:138741689181:web:29b2ed5c710ac3555f96b4",
};

//init firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

//init firebase auth
const auth = getAuth();

export { db, auth };
