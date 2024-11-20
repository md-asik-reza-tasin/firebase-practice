// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWqdetwvDmJvgBF43-ZQEgPfKL21XR14M",
  authDomain: "fir-project-13a47.firebaseapp.com",
  projectId: "fir-project-13a47",
  storageBucket: "fir-project-13a47.firebasestorage.app",
  messagingSenderId: "872033879597",
  appId: "1:872033879597:web:65da350cc931cf351e5aa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;