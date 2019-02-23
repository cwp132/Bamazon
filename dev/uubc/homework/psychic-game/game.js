  console.log("java is loaded");
  // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
      "s", "t", "u", "v", "w", "x", "y", "z"
  ];


  // Creating variables to hold the number of wins
  var wins = 0;
  var losses = 0;
  var guessLeft = 9;

  // Create variables that hold references to the places in the HTML where we want to display things.
  var directionsText = document.getElementById("directions-text");
  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("losses-text");
  var guessLeftText = document.getElementById("guessLeft-Text");
  var guessSoFarText = document.getElementById("guessSoFarText");
  var guessSoArr = [];
  // This function is run whenever the user presses a key.
  document.onkeyup = function (event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      // Randomly chooses a choice from the computerChoice array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


      if (userGuess === computerGuess) {
          wins++;
      } else {
          guessLeft--;

      }
      if (guessLeft === 0) {
          losses++;
      }
      if (guessSoArr.length === 9) {
          guessSoArr = [];
          guessLeft = 9;
      };


      //Pushes User guesses to guessSoArr

      guessSoArr.push(userGuess);
      console.log(guessSoArr);


      // Display the user and computer guesses, and userChoiceText/wins/losses/guess.
      winsText.textContent = "Wins: " + wins;
      lossesText.textContent = "Losses: " + losses;
      guessLeftText.textContent = "Guesses Left: " + guessLeft;
      guessSoFarText.textContent = "Your Guesses so far: " + guessSoArr;
  };