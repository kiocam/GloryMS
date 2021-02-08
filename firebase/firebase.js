import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init -
const firebaseConfig = {
    apiKey: "AIzaSyAYGFIL3MI4axmKmGG1VjcG_k4mU2S81D8",
    authDomain: "gloryms-a00f9.firebaseapp.com",
    projectId: "gloryms-a00f9",
    storageBucket: "gloryms-a00f9.appspot.com",
    messagingSenderId: "514654707051",
    appId: "1:514654707051:web:fafe5ef898bc662f2dc02e",
    measurementId: "G-Q0LEYRE9NW"
}


// utils 
const db = firebase.firestore()
const auth = firebase.auth()

// collection references 
const usersCollection = db.collection('users')

export {
    db,
    auth,
    usersCollection
}

firebase.initializeApp(firebaseConfig);
