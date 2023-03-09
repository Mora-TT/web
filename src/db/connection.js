// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCCF6fCsxGJQ2E5ujNr10xjHPcMxf6aQk",
  authDomain: "mora-tt.firebaseapp.com",
  projectId: "mora-tt",
  storageBucket: "mora-tt.appspot.com",
  messagingSenderId: "620701470301",
  appId: "1:620701470301:web:fbed93baf509e99dd3c7b4",
  measurementId: "G-CZG25BEKGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);