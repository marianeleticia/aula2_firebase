// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0dyzK91diyqXWGh7DsrYgP2_4bHWzw8Q",
  authDomain: "auth-firebase-mariane-aula1.firebaseapp.com",
  projectId: "auth-firebase-mariane-aula1",
  storageBucket: "auth-firebase-mariane-aula1.appspot.com",
  messagingSenderId: "902025678895",
  appId: "1:902025678895:web:1da3be01ef7f346cee36da",
  measurementId: "G-J9SK8RRDYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };