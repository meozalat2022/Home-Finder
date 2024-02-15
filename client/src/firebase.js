// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "property-finder-fc288.firebaseapp.com",
  projectId: "property-finder-fc288",
  storageBucket: "property-finder-fc288.appspot.com",
  messagingSenderId: "704225535497",
  appId: "1:704225535497:web:4cec4a7f01e22afafb7ad8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
