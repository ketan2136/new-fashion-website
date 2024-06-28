// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBl1QzW4u96dpfCDS3ZvrzuapmUqyvAqsM",
    authDomain: "fashion-website-65299.firebaseapp.com",
    projectId: "fashion-website-65299",
    storageBucket: "fashion-website-65299.appspot.com",
    messagingSenderId: "972355081835",
    appId: "1:972355081835:web:27f4bccd98e1eca5f4832e",
    measurementId: "G-Z28ZTTN7KJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
