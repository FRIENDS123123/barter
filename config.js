import firebase from "firebase";

var firebaseConfig = {
   apiKey: "AIzaSyDGdHmke7_WC3mODDPMCR0fzM2fft9-Z7Q",
    authDomain: "book-santa-3a5b9.firebaseapp.com",
    projectId: "book-santa-3a5b9",
    storageBucket: "book-santa-3a5b9.appspot.com",
    messagingSenderId: "544104489713",
    appId: "1:544104489713:web:3e51ab41f135f76ab8bf50"
};
// Initialize Firebase
if(!firebase.apps.length)
{

firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();

