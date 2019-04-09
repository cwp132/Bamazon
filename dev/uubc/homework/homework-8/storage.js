console.log("ayyo");

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCiGHLM7Y7XJT3je5k2mC_hu9sYhGoVOic",
    authDomain: "porfolio-contact.firebaseapp.com",
    databaseURL: "https://porfolio-contact.firebaseio.com/",
    projectId: "porfolio-contact",
    storageBucket: "porfolio-contact.appspot.com",
    messagingSenderId: "682786259399"
};

firebase.initializeApp(config);
var database = firebase.database.ref();

$("#submit").on('click', function () {
    event.preventDefault;
    var name = $("#nameInput").val();
    var email = $("#emailInput").val();
    var message = $("#messageInput").val();

    var database = database().ref();

    name.empty();
    email.empty();
    message.empty();

    database.ref().push({
        name: name,
        email: email,
        message: message,
    })
})