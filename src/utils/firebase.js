// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0BGW989FwSWvcTgfAHJixtNqUt9Q_ZuY",
  authDomain: "newsapp-60364.firebaseapp.com",
  projectId: "newsapp-60364",
  storageBucket: "newsapp-60364.appspot.com",
  messagingSenderId: "219837790200",
  appId: "1:219837790200:web:dee8f2e1ea7c6bcc90c80d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();