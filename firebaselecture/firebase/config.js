import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp,query, onSnapshot, orderBy} from 'firebase/firestore'

const firebaseConfig = {
// api keys and rest of the stuff, that cannot be uploeaded to github
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
