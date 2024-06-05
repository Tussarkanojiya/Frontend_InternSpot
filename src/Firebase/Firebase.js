// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgePNZyPrfujUrV3g2jvTE6ijjo1BnksE",
  authDomain: "internspot-9a232.firebaseapp.com",
  projectId: "internspot-9a232",
  storageBucket: "internspot-9a232.appspot.com",
  messagingSenderId: "867924009784",
  appId: "1:867924009784:web:fdf2cae0235cc1eda657cd",
  measurementId: "G-KHH3NQLY63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export{auth, provider}