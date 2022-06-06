import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD4qnNiN7g-jdI6L4-uw1asMllNA_3lD2M",
  authDomain: "first-todo-d8322.firebaseapp.com",
  projectId: "first-todo-d8322",
  storageBucket: "first-todo-d8322.appspot.com",
  messagingSenderId: "198965224246",
  appId: "1:198965224246:web:7f38e66200b95f658e0997"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };