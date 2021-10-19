import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAQ1TIhArxCVpYS5vB-uS5JBUaSF3FEYNU",
    authDomain: "netflix-geodev.firebaseapp.com",
    projectId: "netflix-geodev",
    storageBucket: "netflix-geodev.appspot.com",
    messagingSenderId: "426950130054",
    appId: "1:426950130054:web:9b387773be9f4293431407"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const bd = firebaseApp.firestore()
const auth = firebase.auth()

export { auth };
export default bd;