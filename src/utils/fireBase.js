
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyAEIlimBELtsWxZbu-uHWVdKORr8H5Cec0",
    authDomain: "proyecto-ferreteria-reactjs.firebaseapp.com",
    projectId: "proyecto-ferreteria-reactjs",
    storageBucket: "proyecto-ferreteria-reactjs.appspot.com",
    messagingSenderId: "399178733214",
    appId: "1:399178733214:web:94d58e55982503da26cd8f"
  
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;
  
