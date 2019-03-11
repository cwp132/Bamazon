//  Set our number counter to 45 seconds.
//variables
var number = 45;
var correct = 0;
var incorrect = 0;
var intervalId;
var radios = document.getElementsByName("q1c");
console.log(correct);
$("#resume").on("click", run);


$(".answer").on("click", function (event) {
    console.log(event);
    if (event.currentTarget.value === "0") {
        correct = correct + 1;
        console.log(correct);
    }
});

function showQs() {
    $("#hideQuestions").show();
}



function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#timer").html("<h2>" + number + "</h2>");

    //  Once number hits zero...
    if (number === 0) {
        //  ...run the stop function.
        stop();
    }
};
//  The stop function
function stop() {
    clearInterval(intervalId);
    alert("You got" + " " + correct + " " + "correct!");
};

$("#submitButton").on("click", function () {
    stop();
});
//  Execute the run function.
$("#start").on("click", function () {
    run();
    showQs();
});