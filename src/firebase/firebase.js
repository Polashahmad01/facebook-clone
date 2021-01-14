import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDN5NwGg9ouk9mpXEjgG6yIRb4j3LQCshM",
    authDomain: "facebook-clone-642e0.firebaseapp.com",
    projectId: "facebook-clone-642e0",
    storageBucket: "facebook-clone-642e0.appspot.com",
    messagingSenderId: "494958786166",
    appId: "1:494958786166:web:903a52e8b0b1428e529157"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export default auth;