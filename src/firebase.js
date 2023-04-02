// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//a
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9d-mG_PZuDzwe44XS5D6os2_gZJzZxFk",
  authDomain: "authentication-personal.firebaseapp.com",
  projectId: "authentication-personal",
  storageBucket: "authentication-personal.appspot.com",
  messagingSenderId: "829825718766",
  appId: "1:829825718766:web:b2c5f2decb97881b32d6ff",
  measurementId: "G-TK6BQQVMLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
