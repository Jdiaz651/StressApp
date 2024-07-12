import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBURFKffQa4KtCJMqXdAyjzTFhO6BUzxks",
    authDomain: "stress-and-anxiety1.firebaseapp.com",
    databaseURL: "https://stress-and-anxiety1-default-rtdb.firebaseio.com/",
    projectId: "stress-and-anxiety1",
    storageBucket: "stress-and-anxiety1.appspot.com",
    messagingSenderId: "867873321843",
    appId: "1:867873321843:web:684d6d239753451f5e0b06",
    measurementId: "G-GJJM724G4G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getDoc, setDoc, doc};