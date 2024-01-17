
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAIfaIkLnH7ztK32EkttD97FNDqfInErUQ",
  authDomain: "loginmuestra.firebaseapp.com",
  projectId: "loginmuestra",
  storageBucket: "loginmuestra.appspot.com",
  messagingSenderId: "275315746506",
  appId: "1:275315746506:web:c2459a8748dbd52e697633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
