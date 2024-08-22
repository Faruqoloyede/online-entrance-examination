// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyALg2DLmGgfjb29JoKZ5UMYBVWgvWMRoKI",
    authDomain: "entrance-exam-72e2b.firebaseapp.com",
    projectId: "entrance-exam-72e2b",
    storageBucket: "entrance-exam-72e2b.appspot.com",
    messagingSenderId: "194160648312",
    appId: "1:194160648312:web:8da071fade9da5e7dbcd8d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
