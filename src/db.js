import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyAnZ2OCz7epAcLdECeOC0P01Bcf5xZAKlg",
    authDomain: "vue-chat-on.firebaseapp.com",
    projectId: "vue-chat-on",
    storageBucket: "vue-chat-on.appspot.com",
    messagingSenderId: "470809714908",
    appId: "1:470809714908:web:6c906fe9e7345d312c5419"
    
    }
    const db = firebase.initializeApp(config);
    export default db;