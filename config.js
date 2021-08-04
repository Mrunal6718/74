import firebase from 'firebase'; 
import '@firebase/firestore'; 
// Required for side-effects 
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCVgffmgtm3Pxdqxm46ZAt84M2IBqLwk54",
  authDomain: "storyhub-5f1fc.firebaseapp.com",
  databaseURL: "https://storyhub-5f1fc.firebaseio.com",
  projectId: "storyhub-5f1fc",
  storageBucket: "storyhub-5f1fc.appspot.com",
  messagingSenderId: "690761381106",
  appId: "1:690761381106:web:3debf30425db315d7ccc6b",
}
firebase.initializeApp(firebaseConfig);
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); } 

var db = firebase.firestore();
export default db