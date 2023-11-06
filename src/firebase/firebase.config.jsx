// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyDpB6IoD4kQRQJQ0W19ooQPCC6PhN5Esu0",
    // authDomain: "pet-sitting-and-walking.firebaseapp.com",
    // projectId: "pet-sitting-and-walking",
    // storageBucket: "pet-sitting-and-walking.appspot.com",
    // messagingSenderId: "1056167449244",
    // appId: "1:1056167449244:web:8784c7ff7b131265b3d359",
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);