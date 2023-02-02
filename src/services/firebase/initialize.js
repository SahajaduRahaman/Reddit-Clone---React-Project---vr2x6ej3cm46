import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const apiKey = process.env.REACT_APP_FIREBASE_API;
const appId = process.env.REACT_APP_APP_ID;
const measurementId = process.env.REACT_APP_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "reddit-my-post.firebaseapp.com",
  projectId: "reddit-my-post",
  storageBucket: "reddit-my-post.appspot.com",
  messagingSenderId: "316636017514",
  appId: appId,
  measurementId: measurementId,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
