import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgI_rKhpKUc3j_YstTfk0fYzpa-rn64vk",
  authDomain: "clone-d8903.firebaseapp.com",
  databaseURL: "https://clone-d8903.firebaseio.com",
  projectId: "clone-d8903",
  storageBucket: "clone-d8903.appspot.com",
  messagingSenderId: "680875003936",
  appId: "1:680875003936:web:78f4ea38d613a0ae19ec45",
  measurementId: "G-NDPZTX5KBL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
