// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey           : "AIzaSyClH8QDouQb2EOOLAxSrdbsr9zN8zd_v6c",
    authDomain       : "nuraeni-rivan.firebaseapp.com",
    projectId        : "nuraeni-rivan",
    storageBucket    : "nuraeni-rivan.firebasestorage.app",
    messagingSenderId: "317823627452",
    appId            : "1:317823627452:web:9901c05074730aeca1a0b9",
    measurementId    : "G-ME43222JNQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };