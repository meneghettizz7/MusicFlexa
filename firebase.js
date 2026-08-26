import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
    getDatabase,
    ref,
    push,
    onValue,
    remove
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBCH-JDbzOuDpyFxgpebIHROFcDTClCoB4",
    authDomain: "aula2608-b40db.firebaseapp.com",
    databaseURL: "https://aula2608-b40db-default-rtdb.firebaseio.com",
    projectId: "aula2608-b40db",
    storageBucket: "aula2608-b40db.firebasestorage.app",
    messagingSenderId: "757626488522",
    appId: "1:757626488522:web:e8bcee8814d8db50781633"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, onValue, remove };