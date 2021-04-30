const firebaseConfig = {
  apiKey: "AIzaSyCe420SVK7KcwvmpPSuI9bCd3Ay03DamgI",
  authDomain: "foodorg-5c290.firebaseapp.com",
  databaseURL: "https://foodorg-5c290-default-rtdb.firebaseio.com",
  projectId: "foodorg-5c290",
  storageBucket: "foodorg-5c290.appspot.com",
  messagingSenderId: "934628512365",
  appId: "1:934628512365:web:369485f864f14386fe2564"
};

firebase.initializeApp(firebaseConfig);


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

//User signup auth with email and pass
// function signup() {
//     var email = "test@example.com";
//     var password = "hunter2";
//     // [START auth_signin_password]
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user;
//         console.log(user);
//         // ...
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//       });
//     // [END auth_signin_password]
//   }

function signup() {
  var username = document.getElementById("new-username")
  var email = document.getElementById("new-email");
  var password = document.getElementById("new-pass");

  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;

      alert("Signed up as: " + email.value);
      window.location(url);
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}

var url;

function openRequest() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.email);
      window.location = "RequestForm.html";
    } else {
      url = "RequestForm.html";
      window.location = "signin.html";
    }
  });
}

function openDonate() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.email);
      window.location = "DonateForm.html";
    } else {
      url = "DonateForm.html";
      window.location = "signin.html";
    }
  });
}

//User signin auth through email and pass
function signIn() {
  var email = document.getElementById("user-email");
  var password = document.getElementById("user-pass");

  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;

      alert("Signed in: " + email.value);
      // window.location(url);
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


$("#search-icon").click(function () {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});