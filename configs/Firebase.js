// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBD-FXeFS4VZXE1PCrNKFYj8vRW8DLJibE",
	authDomain: "travel-app-9c885.firebaseapp.com",
	projectId: "travel-app-9c885",
	storageBucket: "travel-app-9c885.appspot.com",
	messagingSenderId: "550990292596",
	appId: "1:550990292596:web:007659e3c56c01e9169321",
	measurementId: "G-F1ET26L3P4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
