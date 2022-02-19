import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: "ecommerce-db-990b8.firebaseapp.com",
    projectId: "ecommerce-db-990b8",
    storageBucket: "ecommerce-db-990b8.appspot.com",
    messagingSenderId: "282624744544",
    appId: "1:282624744544:web:abbdf49fd210ecfa14b705",
    measurementId: "G-4JF9L2ZHVF"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;