// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2G551Soq72hdunOwdo5aW7x4ICx2FM-4",
  authDomain: "mypersonalportfolio-a2c4f.firebaseapp.com",
  projectId: "mypersonalportfolio-a2c4f",
  storageBucket: "mypersonalportfolio-a2c4f.appspot.com",
  messagingSenderId: "251358402900",
  appId: "1:251358402900:web:b52dd9a70d4852fd1010c1",
  measurementId: "G-6VE05KGHPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const docRef = doc(db, 'PortfolioInfo', 'Info')
export const storage = getStorage(app);
export async function getDocData() {
  try{
    const docu = await getDoc(docRef);
    return docu.data();
  }catch(e){
    console.error(e)
  }
}