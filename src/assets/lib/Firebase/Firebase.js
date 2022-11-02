import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrYh6sJiWs0tSTiKZ7kD5hfHJBmkwWo4I",
  authDomain: "shankar-realtor.firebaseapp.com",
  projectId: "shankar-realtor",
  storageBucket: "shankar-realtor.appspot.com",
  messagingSenderId: "275315447112",
  appId: "1:275315447112:web:f1335fbbb67a521a4a4f7d",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
