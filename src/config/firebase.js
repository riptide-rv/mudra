import firebase from 'firebase/compat/app';

import "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkAntz8qJFmGrP4kekmzcwpgjnrxMDjyg",
    authDomain: "mudra-983f3.firebaseapp.com",
    databaseURL: "https://mudra-983f3-default-rtdb.firebaseio.com",
    projectId: "mudra-983f3",
    storageBucket: "mudra-983f3.appspot.com",
    messagingSenderId: "887834591716",
    appId: "1:887834591716:web:e7145eab3408532cd387f1"
  };
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
