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
    var firestore = firebase.firestore();

    docref = firestore.doc("FormData/DonateForm/users");

    var docdata = {
        name: document.getElementById("my-name").value,
        number: document.getElementById("my-number").value,
        address: document.getElementById("my-address").value,
        orgname: document.getElementById("org-name").value,
        organisation: document.getElementById("org-type").value,
        orgcontact: document.getElementById("org-contact").value,
        orgaddress: document.getElementById("org-address").value,
        email: document.getElementById("my-email").value,
        orgemail: document.getElementById("org-email").value,
    };

    document.getElementById("saveButton").addEventListener("click", function(){

        docref.set(docData).then(() => {
            console.log("Document successfully written!");
        });

    });
