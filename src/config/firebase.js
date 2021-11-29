// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIP_rxGJz-bWbM7nYtOau6n_SS5HZBY2k",
  authDomain: "preguntados-40873.firebaseapp.com",
  projectId: "preguntados-40873",
  storageBucket: "preguntados-40873.appspot.com",
  messagingSenderId: "699473849342",
  appId: "1:699473849342:web:f5fdb910e6b4457c67eeaf",
  measurementId: "G-ZS8KWC7DG0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);