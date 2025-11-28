// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKwh7MXHJN2P9n03DyghrW2_HRyiJj-x4",
  authDomain: "coffee-store-54293.firebaseapp.com",
  projectId: "coffee-store-54293",
  storageBucket: "coffee-store-54293.firebasestorage.app",
  messagingSenderId: "821355476654",
  appId: "1:821355476654:web:dd43bb9cf2064cb2d3df3f",
  measurementId: "G-GK59C3Y2R9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;