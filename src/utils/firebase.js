// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration


const firebaseConfig = {

    apiKey: "AIzaSyAf5SjIjA9Xoqql3NsI_Mw7yttsLPjNmv4",
    authDomain: "netflixgpt-6c636.firebaseapp.com",
    projectId: "netflixgpt-6c636",
    storageBucket: "netflixgpt-6c636.appspot.com",
    messagingSenderId: "3453773955",
    appId: "1:3453773955:web:48558423233db24ea3d3b6"
};
// Initialize Firebase  

const app = initializeApp(firebaseConfig);



export const auth = getAuth();