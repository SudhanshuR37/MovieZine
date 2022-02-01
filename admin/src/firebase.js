import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDto3grbPG3Ji15977KfJd2R8WBEzo4xE0",
    authDomain: "moviezine-6d6ed.firebaseapp.com",
    projectId: "moviezine-6d6ed",
    storageBucket: "moviezine-6d6ed.appspot.com",
    messagingSenderId: "519302453350",
    appId: "1:519302453350:web:66ca5df9ea2044e2d7f5a7",
    measurementId: "G-Y1PJ0VJZ67"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

