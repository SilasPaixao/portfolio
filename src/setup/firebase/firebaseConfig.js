import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDG_Y8TDtBk2cBRyJSCCy_lnGcpE-XFFwo",
  authDomain: "portifolio-d0b43.firebaseapp.com",
  projectId: "portifolio-d0b43",
  storageBucket: "portifolio-d0b43.appspot.com",
  messagingSenderId: "78695324349",
  appId: "1:78695324349:web:7b13ffb976156b70a335d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);