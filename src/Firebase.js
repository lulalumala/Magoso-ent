// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcjfRpE10iB1YHS_CcACtw1RiDKQahAJU",
  authDomain: "magoso-ent-90dbc.firebaseapp.com",
  projectId: "magoso-ent-90dbc",
  storageBucket: "magoso-ent-90dbc.appspot.com",
  messagingSenderId: "578770731895",
  appId: "1:578770731895:web:52caa57b20ba5f549bd772",
  measurementId: "G-YZNWLKRKP2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const storage=getStorage(app)