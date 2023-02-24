import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDwwnekeHCnyd9BlgmJdTFmp009S_ykv8g",
  authDomain: "han-readinglist.firebaseapp.com",
  projectId: "han-readinglist",
  storageBucket: "han-readinglist.appspot.com",
  messagingSenderId: "50984812144",
  appId: "1:50984812144:web:2233d224acb3330a05beb5"
};

//init firebase 9
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// firebase auth
const auth = getAuth()

export { db, auth }