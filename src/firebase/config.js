import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDaGGZVFYg2xH4aj0l0LB6dDWxRdWA1oo0",
    authDomain: "bullw3-54d2a.firebaseapp.com",
    projectId: "bullw3-54d2a",
    storageBucket: "bullw3-54d2a.appspot.com",
    messagingSenderId: "76318737624",
    appId: "1:76318737624:web:1cf888ef499445011b43ad"
};

firebase.initializeApp(firebaseConfig)

//firestore
const projectFirestore = firebase.firestore()
//fire auth
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp;
//storage
const projectStorage = firebase.storage();
export { projectFirestore, projectAuth, projectStorage, timestamp }