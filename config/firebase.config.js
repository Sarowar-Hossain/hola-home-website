import { initializeApp } from 'firebase/app'
import { Timestamp } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyA0Oqu75v9GYMcWf_A2XWCRqG9x6Z24vg4',
  authDomain: 'hola-home.firebaseapp.com',
  projectId: 'hola-home',
  storageBucket: 'hola-home.appspot.com',
  messagingSenderId: '106249001978',
  appId: '1:106249001978:web:1535b6e88c45bf58736243',
  measurementId: 'G-D5GMR1N4N3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default app;
