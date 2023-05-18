// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.envapiKey,
  authDomain: import.meta.envauthDomain,
  projectId: import.meta.envprojectId,
  storageBucket: import.meta.envstorageBucket,
  messagingSenderId: import.meta.envmessagingSenderId,
  appId: import.meta.envappId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;