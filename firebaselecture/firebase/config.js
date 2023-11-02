import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp,query, onSnapshot, orderBy} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBgMAYUgQv7E5UDAH1hhH8GCfoVyz1ATI4",
    authDomain: "lecturechat-a926d.firebaseapp.com",
    projectId: "lecturechat-a926d",
    storageBucket: "lecturechat-a926d.appspot.com",
    messagingSenderId: "555626107544",
    appId: "1:555626107544:web:04e53b28f18921139af6ed"
  };

  initializeApp(firebaseConfig)

  const firestore = getFirestore()
  const MESSAGES = 'messages'

  export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    onSnapshot,
    orderBy,
    MESSAGES
  }

  console.log("Firebase toimii")
