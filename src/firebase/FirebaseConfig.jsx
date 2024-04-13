import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOnsOZ3c2M0Vv_St5JnVW___P5EogAVbQ",
  authDomain: "roomquest-78c6c.firebaseapp.com",
  projectId: "roomquest-78c6c",
  storageBucket: "roomquest-78c6c.appspot.com",
  messagingSenderId: "908702051959",
  appId: "1:908702051959:web:df90343fae2afedcc42072",
  measurementId: "G-DEPSYF19R7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireDb = getFirestore(app);
export { auth, fireDb };
