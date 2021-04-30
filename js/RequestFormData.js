var firebaseConfig = {
    apiKey: "AIzaSyCe420SVK7KcwvmpPSuI9bCd3Ay03DamgI",
    authDomain: "foodorg-5c290.firebaseapp.com",
    databaseURL: "https://foodorg-5c290-default-rtdb.firebaseio.com",
    projectId: "foodorg-5c290",
    storageBucket: "foodorg-5c290.appspot.com",
    messagingSenderId: "934628512365",
    appId: "1:934628512365:web:369485f864f14386fe2564"
  };
firebase.initializeApp(firebaseConfig);
//Listen for a submit
// document.querySelector(".donationForm").addEventListener("submit",submitForm);

//Referrence form info
let RequestFormInfo = firebase.database().ref("RequestFormUsers");

//For extracting RequestForm data and updating in firestore
function submitForm() {
    // e.preventDefault();
    // Get input Values
    let MyName = document.querySelector("#my-name").value;
    let MyNumber = document.querySelector("#my-number").value;
    let MyEmail = document.querySelector("#my-email").value;
    let MyAddress = document.querySelector("#my-address").value;
    let OrgName = document.querySelector("#org-name").value;
    let OrgType = document.querySelector("#orgselect").value;
    let ContactNumber = document.querySelector("#org-contact").value;
    let OrgEmail = document.querySelector("#org-email").value;
    let OrgAddress = document.querySelector("#org-address").value;
    let OrgDateAndTime = document.querySelector("#date-time").value;
    let terms = document.querySelector("#org-terms").value;
    console.log(MyName, MyNumber, MyEmail, MyAddress, OrgName, OrgType, ContactNumber, OrgEmail, OrgAddress, OrgDateAndTime, terms);

    saveRequestForm(MyName, MyNumber, MyEmail, MyAddress, OrgName, OrgType, ContactNumber, OrgEmail, OrgAddress, OrgDateAndTime, terms);
}
function saveRequestForm(MyName, MyNumber, MyEmail, MyAddress, OrgName, OrgType, ContactNumber, OrgEmail, OrgAddress, OrgDateAndTime, terms) {

    let newRequestInfo = RequestFormInfo.push();

    newRequestInfo.set({
        MyName, MyNumber, MyEmail, MyAddress, OrgName, OrgType, ContactNumber, OrgEmail, OrgAddress, OrgDateAndTime, terms
    });
}