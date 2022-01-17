// Brings in the core functionality:
import firebase from "firebase/app";

// This brings in the specific services we want to use:
import "firebase/firestore";
import "firebase/auth";

// TODO: this shouldn't be directly in our source code. We don't want to commit
// this to GitHub.
const firebaseConfig = {
  apiKey: "AIzaSyDTP2_y62eZc17pHL-UhjsZoszzZwt-R2I",
  authDomain: "quizapp-c5b39.firebaseapp.com",
  projectId: "quizapp-c5b39",
  storageBucket: "quizapp-c5b39.appspot.com",
  messagingSenderId: "172385158697",
  appId: "1:172385158697:web:bfe8a254ce22f6d4f4fe38",
  measurementId: "G-H53MVXHH9R"
};

// To help us with debugging later!
if (!firebaseConfig.apiKey) throw new Error("Missing firebase credential: apiKey");
if (!firebaseConfig.authDomain) throw new Error("Missing firebase credential: authDomain");
if (!firebaseConfig.projectId) throw new Error("Missing firebase credential: projectId");
if (!firebaseConfig.storageBucket) throw new Error("Missing firebase credential: storageBucket");
if (!firebaseConfig.messagingSenderId)
  throw new Error("Missing firebase credential: messagingSenderId");
if (!firebaseConfig.appId) throw new Error("Missing firebase credential: appId");
if (!firebaseConfig.measurementId) throw new Error("Missing firebase credential: measurementId");

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const getServerTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();
const getNewQuizId = () => db.collection("quizzes").doc().id;

export { db, auth, provider, firebase, getNewQuizId, getServerTimestamp };
