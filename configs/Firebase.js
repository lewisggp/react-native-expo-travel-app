import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBD-FXeFS4VZXE1PCrNKFYj8vRW8DLJibE",
	authDomain: "travel-app-9c885.firebaseapp.com",
	projectId: "travel-app-9c885",
	storageBucket: "travel-app-9c885.appspot.com",
	messagingSenderId: "550990292596",
	appId: "1:550990292596:web:007659e3c56c01e9169321",
	measurementId: "G-F1ET26L3P4",
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore(app);
