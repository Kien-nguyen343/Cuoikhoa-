import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3el0YqnfwzOX5KQsnySXGtfVAAGNXK4w",
  authDomain: "mindx-2ba76.firebaseapp.com",
  projectId: "mindx-2ba76",
  storageBucket: "mindx-2ba76.firebasestorage.app",
  messagingSenderId: "209408053802",
  appId: "1:209408053802:web:bae58daaa370835f886953",
  measurementId: "G-CBDQ5FZLK9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Đăng ký thành công!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Lỗi: " + error.message);
    });
});