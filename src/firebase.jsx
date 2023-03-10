import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, onSnapshot, addDoc, doc, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7SDQ51qgHzta1Xt4qAVu7nFGHGT6ByPI",
  authDomain: "swd-project-f0508.firebaseapp.com",
  projectId: "swd-project-f0508",
  storageBucket: "swd-project-f0508.appspot.com",
  messagingSenderId: "534900378275",
  appId: "1:534900378275:web:ed30c7ab9bb3da0d6ccd16",
  measurementId: "G-10PR1DZRFE"
};


// onSnapshot(q, (Snapshot) => {
//   let user = []
//   Snapshot.docs.forEach((doc) => {
//     user.push({...doc.data(), id: doc.id})
//   })
//   console.log(user)
// })



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

