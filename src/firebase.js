import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseApp;

if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAmkNmm5uNQWD0weQykMhffodpQXQjBvMM",
        authDomain: "desenvolvimentoweb2-2d224.firebaseapp.com",
        databaseURL: "https://desenvolvimentoweb2-2d224-default-rtdb.firebaseio.com",
        projectId: "desenvolvimentoweb2-2d224",
        storageBucket: "desenvolvimentoweb2-2d224.appspot.com",
        messagingSenderId: "994481652801",
        appId: "1:994481652801:web:b4d8ae61179f115b1d72c0",
        measurementId: "G-FRY2QEWY5T"
    });
 }else {
    firebaseApp = firebase.app(); // if already initialized, use that one
 }

const db = firebaseApp.firestore();
export { db };