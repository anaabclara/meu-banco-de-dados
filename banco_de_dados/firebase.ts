// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firestore from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeQ1T4BYxwUOX48H0ikw5vYv62Qeu1VLk",
  authDomain: "teste-ff847.firebaseapp.com",
  projectId: "teste-ff847",
  storageBucket: "teste-ff847.appspot.com",
  messagingSenderId: "868479207485",
  appId: "1:868479207485:web:ec7ab0af9be7bf13970254"
};

// Initialize Firebase
console.log('Conectado ao Firebase')
const Firebase = initializeApp(firebaseConfig);
export const db = firestore.getFirestore(Firebase)


export{firestore}
