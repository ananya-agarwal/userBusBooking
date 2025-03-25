import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA31ipeDqpZTC-zJBzAHLeOHpM0c6STteU",
  authDomain: "bookingsystem-27ec9.firebaseapp.com",
  projectId: "bookingsystem-27ec9",
  storageBucket: "bookingsystem-27ec9.firebasestorage.app",
  messagingSenderId: "61455152234",
  appId: "1:61455152234:web:5400a5199ec947f6430613"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);