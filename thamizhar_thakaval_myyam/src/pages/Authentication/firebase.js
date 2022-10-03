import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPO4m8UGgm5Bna0CurJVLicpHnpr-rARQ",
  authDomain: "test-e530e.firebaseapp.com",
  projectId: "test-e530e",
  storageBucket: "test-e530e.appspot.com",
  messagingSenderId: "577328229954",
  appId: "1:577328229954:web:4903b5b16f6da4b105c7db",
  measurementId: "G-Y9R1Q8TNJ0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth, app };
