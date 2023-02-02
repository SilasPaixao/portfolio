import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGLdJrgIQLzHmhs6yxpObV9Vu3WUqXZH8",
  authDomain: "portfolio-7c68b.firebaseapp.com",
  projectId: "portfolio-7c68b",
  storageBucket: "portfolio-7c68b.appspot.com",
  messagingSenderId: "331774431243",
  appId: "1:331774431243:web:e1668ea8d6a90ae614370e"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);