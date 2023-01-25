// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmVBWjQonzmPyYGwPQ1w-er8fBgAFic3M",
    authDomain: "portfolio-504a4.firebaseapp.com",
    projectId: "portfolio-504a4",
    storageBucket: "portfolio-504a4.appspot.com",
    messagingSenderId: "872991681334",
    appId: "1:872991681334:web:b9e33bc5ec2501352d6197",
    measurementId: "G-Q43GZ4VDMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
