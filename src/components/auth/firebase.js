

import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    FacebookAuthProvider,
    onAuthStateChanged
} from "firebase/auth";
import {
    getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsfekYb0auTserxFHRDGyaYplzHbwZ3l4",
  authDomain: "quora-clone-6e79d.firebaseapp.com",
  projectId: "quora-clone-6e79d",
  storageBucket: "quora-clone-6e79d.appspot.com",
  messagingSenderId: "190360821252",
  appId: "1:190360821252:web:1ba70521e2e1abbca99f51",
  measurementId: "G-19W61Q5P86"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


export {
    auth,
    db,
    googleProvider,
    facebookProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
};
