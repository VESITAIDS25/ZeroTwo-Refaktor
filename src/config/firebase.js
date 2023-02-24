import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSssUoIYBhiBLg-eVTsHRHqLpbVQ7O51g",
  authDomain: "zerotwo-refactor.firebaseapp.com",
  projectId: "zerotwo-refactor",
  storageBucket: "zerotwo-refactor.appspot.com",
  messagingSenderId: "148188614545",
  appId: "1:148188614545:web:bb344c6ba09460cf5ad430",
  measurementId: "G-FENMLBQ02T"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);