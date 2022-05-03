import { initializeApp } from "firebase/app";
// auth
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD6a5BIfCAn9cipp3Jly7Dpd0G8QFtD6kU",
  authDomain: "my-doctor-79eb4.firebaseapp.com",
  projectId: "my-doctor-79eb4",
  storageBucket: "my-doctor-79eb4.appspot.com",
  messagingSenderId: "646669949041",
  appId: "1:646669949041:web:75eff86eaa777bf4d263d0",
  measurementId: "G-NMH1XHMMY2",
};

// initialize app

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
