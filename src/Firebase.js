// firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmrq1KjbZCdaUrUD6WlQWVO0ijUxt7hQE",
  authDomain: "review-81bea.firebaseapp.com",
  projectId: "review-81bea",
  storageBucket: "review-81bea.appspot.com",
  messagingSenderId: "291161180649",
  appId: "1:291161180649:web:1d783651b2001d8c6c6378"

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Storage and export it
const storage = getStorage(firebaseApp);

export { storage };
