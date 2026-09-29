
// Array of possible Magic Eight Ball answers
let answers = [
    "It is certain.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Ask again later.",
    "Better not tell you now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "Very doubtful."
];

// Get HTML elements
let ball = document.getElementById("ball");
let question = document.getElementById("question");
let circle = document.getElementById("circle");
let reset = document.getElementById("reset");
let addResponse = document.getElementById("addResponse");
let eightBallForm = document.getElementById("eightBallForm");

// Display a random answer
function displayAnswer() {

    // Generate a random index
    let index = Math.floor(Math.random() * answers.length);

    // Display the selected answer
    circle.innerHTML = answers[index];
    circle.style.display = "flex";
    circle.style.alignItems = "center";
    circle.style.justifyContent = "center";
}

// Check the question when the ball is clicked
ball.addEventListener("mousedown", function () {

    if (question.value.trim() === "") {

        alert("Please enter a question first!");

    } else {

        displayAnswer();

    }

});

// Prevent the form from reloading the page
eightBallForm.addEventListener("submit", function (event) {
    event.preventDefault();
});

// Hide the answer when reset is clicked
reset.addEventListener("click", function () {

    circle.style.display = "none";
    circle.innerHTML = "";

});

// Add a new response to the answers array
addResponse.addEventListener("click", function () {

    let newAnswer = prompt(
        "Enter a new Magic Eight Ball response:"
    );

    if (newAnswer !== null && newAnswer.trim() !== "") {

        answers.push(newAnswer.trim());

        alert("Your new response has been added!");

    } else if (newAnswer !== null) {

        alert("Please enter a valid response.");

    }

});