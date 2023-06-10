/*import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDBC2KQ38J8wtGWTGHSqvThgecMIYtvaRo",
  authDomain: "test-6b04b.firebaseapp.com",
  databaseURL: "https://test-6b04b-default-rtdb.firebaseio.com",
  projectId: "test-6b04b",
  storageBucket: "test-6b04b.appspot.com",
  messagingSenderId: "370954793583",
  appId: "1:370954793583:web:f670765b6ddb29da27539a",
  measurementId: "G-M776P1D6VD",
};
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBC2KQ38J8wtGWTGHSqvThgecMIYtvaRo",
  authDomain: "test-6b04b.firebaseapp.com",
  databaseURL: "https://test-6b04b-default-rtdb.firebaseio.com",
  projectId: "test-6b04b",
  storageBucket: "test-6b04b.appspot.com",
  messagingSenderId: "370954793583",
  appId: "1:370954793583:web:f670765b6ddb29da27539a",
  measurementId: "G-M776P1D6VD",
};

// Initialize Firebase
console.log("Initializing Firebase");
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// Initialize Firebase Authentication and get a reference to the service
