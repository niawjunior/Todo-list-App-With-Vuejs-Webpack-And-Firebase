import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyBUUCm8KSKfXcFfMl-XpLG-CxW3TZGv_KQ",
    authDomain: "todolist-app-b6acc.firebaseapp.com",
    databaseURL: "https://todolist-app-b6acc.firebaseio.com",
    projectId: "todolist-app-b6acc",
    storageBucket: "todolist-app-b6acc.appspot.com",
    messagingSenderId: "507217730194"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')