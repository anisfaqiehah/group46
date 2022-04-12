import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAE3qisV1mcx6PqtllNm6f6wBqh7UsoleA",
    authDomain: "login-53a83.firebaseapp.com",
    projectId: "login-53a83",
    storageBucket: "login-53a83.appspot.com",
    messagingSenderId: "988968655364",
    appId: "1:988968655364:web:a8893a1b4b6151cf6eb351"
};


const fire = firebase.initializeApp(firebaseConfig);

export default fire