import * as firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyBIwRErE4KKzG4RcPZziWLkvlwCSsf42T4",
    authDomain: "first-app-99ba5.firebaseapp.com",
    databaseURL: "https://first-app-99ba5.firebaseio.com",
    projectId: "first-app-99ba5",
    storageBucket: "first-app-99ba5.appspot.com",
    messagingSenderId: "325571921952",
    appId: "1:325571921952:web:b23e64232ce48cc2dad445"
};

var app = null;

if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}
// firebase.analytics();