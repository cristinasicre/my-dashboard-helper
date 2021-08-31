// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
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

