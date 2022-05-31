// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { getFirestore, collection, getDocs, setDoc, doc,getDocFromCache,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBL7GkU8dNf6lqvFIB3FjLmgnm-roTTJns",
    authDomain: "pu-menza.firebaseapp.com",
    projectId: "pu-menza",
    storageBucket: "pu-menza.appspot.com",
    messagingSenderId: "402563475712",
    appId: "1:402563475712:web:27ef24130618b8fa83abe5",
    measurementId: "G-72Z6ZSL7PE"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {
    auth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,db,collection,getDocs,setDoc,doc,getDocFromCache
}