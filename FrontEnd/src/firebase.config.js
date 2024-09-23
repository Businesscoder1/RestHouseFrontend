// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQu_PjdgczzFgTwVOz1fj3ur5MD_jCPc4",
  authDomain: "resthouse-13407.firebaseapp.com",
  projectId: "resthouse-13407",
  storageBucket: "resthouse-13407.appspot.com",
  messagingSenderId: "693554107024",
  appId: "1:693554107024:web:d04d528a68aafee1fe7e15",
  measurementId: "G-Y4MN36Z87L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
