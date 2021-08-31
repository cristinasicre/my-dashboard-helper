import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

export const environment = {
  production: true,
  firebaseConfig : {
    apiKey: "AIzaSyAnASpuifDpjIAI516VDCXdJ9mCugWsSFM",
    authDomain: "my-dashboard-helper.firebaseapp.com",
    databaseURL: "https://my-dashboard-helper-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-dashboard-helper",
    storageBucket: "my-dashboard-helper.appspot.com",
    messagingSenderId: "774421233540",
    appId: "1:774421233540:web:12f4c2958503644f4727d1",
    measurementId: "G-DV1G8G1SEK"
  }
};

// Initialize Firebase
export const app = initializeApp(environment.firebaseConfig);
export const analytics = getAnalytics(app);
