import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBCpcUp3mO2FN6LV8-BdV-NcDxsCPV8scQ",
    authDomain: "vue-app-dc2e8.firebaseapp.com",
    projectId: "vue-app-dc2e8",
    storageBucket: "vue-app-dc2e8.appspot.com",
    messagingSenderId: "84790958830",
    appId: "1:84790958830:web:d0b9025429853b943b31ff"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();