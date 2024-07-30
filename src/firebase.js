// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDx6jzJWJ-D7JoIAt09Jram1_FyJs6SwqI",
    authDomain: "yrp-am-app.firebaseapp.com",
    projectId: "yrp-am-app",
    storageBucket: "yrp-am-app.appspot.com",
    messagingSenderId: "206169745825",
    appId: "1:206169745825:web:368803029ce7e096dd43e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;