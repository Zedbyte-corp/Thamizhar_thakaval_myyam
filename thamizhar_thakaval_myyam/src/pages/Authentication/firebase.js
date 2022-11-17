import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCH5MVEk5a6lt-v-ryitowd4Jc_CqH0zK8",
  authDomain: "thamizhar-thakkaval-mayyam.firebaseapp.com",
  projectId: "thamizhar-thakkaval-mayyam",
  storageBucket: "thamizhar-thakkaval-mayyam.appspot.com",
  messagingSenderId: "481303146294",
  appId: "1:481303146294:web:8a8592c17fc4f164b98d97",
  measurementId: "G-9358YRDLDY"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth, app };
