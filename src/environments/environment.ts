// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf0sepvq-DGvZmL2K2Ta_SHM74Nxx5PFY",
  authDomain: "black-butterfly-artwork.firebaseapp.com",
  projectId: "black-butterfly-artwork",
  storageBucket: "black-butterfly-artwork.firebasestorage.app",
  messagingSenderId: "985473495600",
  appId: "1:985473495600:web:ae8bb1e7b04435c5a9f3f5",
  measurementId: "G-NZGEW5C3YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);