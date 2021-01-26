import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
  apiKey: "AIzaSyCYMXjSmdgFGy2gPqDS1QhQ21l7ptGAqDM",
  authDomain: "project-ijikod.firebaseapp.com", 
  projectId: "project-ijikod",
  storageBucket: "project-ijikod.appspot.com",
  messagingSenderId: "447059724378",
  appId: "1:447059724378:web:28a05be29f26b37e80f063",
});


export const auth = app.auth()
export default app