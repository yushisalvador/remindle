import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXf4NdML3GFhm89dMUA-5wFnPFAW9VGrM",
  authDomain: "pingme-39804.firebaseapp.com",
  projectId: "pingme-39804",
  storageBucket: "pingme-39804.appspot.com",
  messagingSenderId: "275270267718",
  appId: "1:275270267718:web:0a9a8240612de8bfedab47",
  measurementId: "G-Y7D0EYP186",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = getAuth(app);

export { auth };
