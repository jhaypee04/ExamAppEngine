import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrv5UvJk8YDSGNJZXKjGrSzkJrcFxJrOg",
  authDomain: "examapp-e3568.firebaseapp.com",
  projectId: "examapp-e3568",
  storageBucket: "examapp-e3568.appspot.com",
  messagingSenderId: "790660261054",
  appId: "1:790660261054:web:582c78a3c2ba1517892aef",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
