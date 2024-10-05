// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG8L1oClbLyIe5NNhdQgLOvkDBDd0qkWw",
  authDomain: "chatbot-6b5fe.firebaseapp.com",
  projectId: "chatbot-6b5fe",
  storageBucket: "chatbot-6b5fe.appspot.com",
  messagingSenderId: "1004172808825",
  appId: "1:1004172808825:web:343e633c7a55a08bfd3aa8",
  measurementId: "G-VZRCMG3EQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);