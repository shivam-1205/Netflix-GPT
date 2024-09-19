// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY_FIREBASE,
    authDomain: process.env.REACT_APP_AUTHDOMAIN_FIREBASE,
    projectId: process.env.REACT_APP_PROJECTID_FIREBASE,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET_FIREBASE,
    messagingSenderId: process.env.REACT_APP_MASSAGINGSENDER_ID_FIREBASE,
    appId: process.env.REACT_APP_APPID_FIREBASE,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID_FIREBASE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Analytics = getAnalytics(app);


export const auth = getAuth()