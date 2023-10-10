const cancelButton = document.getElementById("cancel");

cancelButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Initialize Firebase with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsUH9RiHQyitBmwL33TLGTZ0131nKHIMk",
  authDomain: "eventmanagementsystem-80c46.firebaseapp.com",
  projectId: "eventmanagementsystem-80c46",
  storageBucket: "eventmanagementsystem-80c46.appspot.com",
  messagingSenderId: "459268231098",
  appId: "1:459268231098:web:40d6e0228bd7df8a465783",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const databse = firebase.database();

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userid = document.getElementById("userid").value;
  const password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userid, password)
    .then(() => {
      // Successful login
      window.location.href = "dashboard.html"; // Redirect to the dashboard or desired page
    })
    .catch((error) => {
      // Handle login error (e.g., display a message to the user)
      alert(error.message);
    });
});
