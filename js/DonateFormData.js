//Listen for a submit
// document.querySelector(".donationForm").addEventListener("submit",submitForm);

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
    let OrgOtherType = document.querySelector("#org-type").value;
    let ContactNumber = document.querySelector("#org-contact").value;
    let OrgEmail = document.querySelector("#org-email").value;
    let OrgAddress = document.querySelector("#org-address").value;
    let OrgDateAndTime = document.querySelector("#date-time").value;
    let Frequency = document.querySelector("#org-frequency").value;
    let terms = document.querySelector("#org-terms").value;
    console.log(MyName, MyNumber, MyEmail, MyAddress, OrgName, OrgType, OrgOtherType, ContactNumber, OrgEmail, OrgAddress, OrgDateAndTime, Frequency, terms);
    
}