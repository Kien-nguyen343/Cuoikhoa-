// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3el0YqnfwzOX5KQsnySXGtfVAAGNXK4w",
  authDomain: "mindx-2ba76.firebaseapp.com",
  projectId: "mindx-2ba76",
  storageBucket: "mindx-2ba76.firebasestorage.app",
  messagingSenderId: "209408053802",
  appId: "1:209408053802:web:bae58daaa370835f886953",
  measurementId: "G-CBDQ5FZLK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Login success");
        window.location.href = 'mainpage.html'; 
    })
})