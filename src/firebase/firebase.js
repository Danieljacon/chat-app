import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbNXmEhGpbgoAJphCCOsgAq5QNt0_0Kkc",
  authDomain: "app-chat-dj.firebaseapp.com",
  projectId: "app-chat-dj",
  storageBucket: "app-chat-dj.appspot.com",
  messagingSenderId: "373329416074",
  appId: "1:373329416074:web:aff3a640ff843ec1224273",
  measurementId: "G-07RQ9ZF8LN",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
