// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBghFHyonDEtErmMV-8LAc1pC--8e8BLj8",
  authDomain: "divhacks-5a4e2.firebaseapp.com",
  projectId: "divhacks-5a4e2",
  storageBucket: "divhacks-5a4e2.appspot.com",
  messagingSenderId: "366332672157",
  appId: "1:366332672157:web:ff3f2bc8f4e9f208b7fc74"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
