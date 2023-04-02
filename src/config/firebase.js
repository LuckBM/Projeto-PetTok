
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDlBBEpAx0WxreF6N4Pnuo0v22m3Uv2eDQ",
  authDomain: "pet-tok.firebaseapp.com",
  projectId: "pet-tok",
  storageBucket: "pet-tok.appspot.com",
  messagingSenderId: "930187998694",
  appId: "1:930187998694:web:4877c12fac68fce0e2d227"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;