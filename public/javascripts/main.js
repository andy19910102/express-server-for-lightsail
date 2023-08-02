// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            res.user.getIdToken()
                .then(idToken => {
                    console.log("idToken", idToken);
                    axios.post("/api/login", { idToken })
                        .then(() => {
                            location.reload();
                        })
                        .catch(err => {
                            console.log("err:", err);
                            alert("idToken驗證失敗");
                        })
                })
                .catch(err => {
                    console.log("err", err);
                })
        })
        .catch(err => {
            console.log("err", err);
            alert("登入失敗");
        });
});