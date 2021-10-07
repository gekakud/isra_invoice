import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAx3Qfp2YjXk7wcwt36cVyaNav0aRk_lzE",
  authDomain: "invoice-213d7.firebaseapp.com",
  projectId: "invoice-213d7",
  storageBucket: "invoice-213d7.appspot.com",
  messagingSenderId: "628731390469",
  appId: "1:628731390469:web:f0e52961cca886dabf8a6c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
