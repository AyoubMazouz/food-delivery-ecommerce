import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

// Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCkBBaK40BLLKQ2ve6bBK_s3lCYUhaz2AA",
	authDomain: "ecommerce-7e462.firebaseapp.com",
	projectId: "ecommerce-7e462",
	storageBucket: "ecommerce-7e462.appspot.com",
	messagingSenderId: "1091933215765",
	appId: "1:1091933215765:web:783d612dd84bf5e0df821c",
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Storage.
export const storage = getStorage(app)
// DataBase.
export const db = getFirestore(app)
// Authentication.
export const auth = getAuth(app)
