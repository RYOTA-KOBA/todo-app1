import  firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBunyk4Q1xL2qzZRgxVvm7zhwFv-HX8R88",
    authDomain: "todo-app-a478e.firebaseapp.com",
    databaseURL: "https://todo-app-a478e.firebaseio.com",
    projectId: "todo-app-a478e",
    storageBucket: "todo-app-a478e.appspot.com",
    messagingSenderId: "470319899512",
    appId: "1:470319899512:web:4a232eddf661163aaa5e8d"
};

firebase.initializeApp(firebaseConfig);


export default firebase