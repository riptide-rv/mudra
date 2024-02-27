import firebase from 'firebase/compat/app';

import "firebase/compat/database";
import "firebase/compat/auth";
import { useNavigate } from 'react-router-dom';



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

export const auth = firebase.auth();

export const database = firebase.database();



export async function  login(email, password) {
  const navigate = useNavigate();
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    console.log("user")
       
                var user = userCredential.user;
                console.log(auth.currentUser)
                navigate('/admin')
    // ...
    }).catch((error) => {
      console.log("error")
      console.log(error)
        var errorCode = error.code;
        var errorMessage = error.message;
  });
}

export function logout() {
  firebase.auth().signOut().then(() => {
    alert('Logged out successfully');
    useNavigate('/');
  }).catch((error) => {
    // An error happened.
  });
}
