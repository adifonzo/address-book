// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLHJl_8X0GtDcYpokTzK0haHbx_KJ9m9M",
  authDomain: "address-book-74f01.firebaseapp.com",
  databaseURL: "https://address-book-74f01-default-rtdb.firebaseio.com",
  projectId: "address-book-74f01",
  storageBucket: "address-book-74f01.appspot.com",
  messagingSenderId: "438998021623",
  appId: "1:438998021623:web:3cc85bd8f6d515f8472af2"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default app;