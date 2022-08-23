// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0_Ib8jUD9drjvhVbh4nodM1XAcDyH9Uw",
  authDomain: "cityhospital-378d1.firebaseapp.com",
  projectId: "cityhospital-378d1",
  storageBucket: "cityhospital-378d1.appspot.com",
  messagingSenderId: "774680449802",
  appId: "1:774680449802:web:01a402ff1f04ef8d9560f3",
  measurementId: "G-PKM6GZG4BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
