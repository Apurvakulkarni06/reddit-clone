// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  authDomain: process.env.NEXT_PUBLIC_PROJECT_ID,
  projectId: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  storageBucket: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);