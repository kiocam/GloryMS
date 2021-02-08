import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init -
const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectID: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
}

firebase.initializeApp(firebaseConfig)

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