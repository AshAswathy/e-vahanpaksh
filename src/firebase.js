import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPAaAgp73nVCJT2fAf2tGWgT3YBURhdoo",
  authDomain: "e-vahan-paksh.firebaseapp.com",
  projectId: "e-vahan-paksh",
  storageBucket: "e-vahan-paksh.appspot.com",
  messagingSenderId: "875382172730",
  appId: "1:875382172730:web:7be201480407dc5edb1903",
  measurementId: "G-6HGC84Z18F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;