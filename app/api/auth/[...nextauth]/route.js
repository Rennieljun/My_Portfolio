// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, doc, getDoc, getFirestore} from 'firebase/firestore'
import { getDownloadURL, getStorage, ref} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MESUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const docRef = doc(db, 'PortfolioInfo', 'Info')
const resumeRef = doc(db, 'PortfolioInfo', 'resume');
export async function getDocData() {
  try{
    const docu = await getDoc(docRef);
    return docu.data();
  }catch(e){
    console.error(e)
  }
}

export async function getResumeUrl() {
  try{
    const resume = await getDoc(resumeRef);
    return resume.data();
  }catch(e){
    console.log(e.message)
  }
}

