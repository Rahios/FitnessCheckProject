import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/database" // Real-time database
// import "firebase/compat/firestore" // Firestore
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {collection, getDocs} from 'firebase/firestore';

// Configure Firebase.
const config = {
  apiKey:            process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:       "https://fitnesscheck-webapp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "fitnesscheck-webapp",
  storageBucket:     "fitnesscheck-webapp.appspot.com",
  messagingSenderId: "71433959621",
  appId:             "1:71433959621:web:a77fbfac033de01ff458ac"
  // Other configuration options, such as the Realtime Database / Firestore details...
};
export default firebase.initializeApp(config);
const firebaseApp = firebase.initializeApp(config);
export const db			= getFirestore(firebaseApp);
export const auth 			= getAuth(firebaseApp);

console.log("Firebase initialized : " + firebaseApp.name);

