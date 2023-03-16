1. expo install @react-navigation/native @react-navigation/stack firebase dotenv react-native-elements expo-constants


about firebase:
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHyyddHkSC6nM8zrPM7RnSDK7LXumDIt0",
  authDomain: "uber-eats-76764.firebaseapp.com",
  projectId: "uber-eats-76764",
  storageBucket: "uber-eats-76764.appspot.com",
  messagingSenderId: "570619123325",
  appId: "1:570619123325:web:f182a87aea2946c9d58314"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);