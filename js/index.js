let userChoice = '';
let computerChoice = '';
let choiceArr = ['rock', 'paper', 'scissors'];
let scoreComp = 0;
let scoreUser = 0;
let winner;

// listen for user choice
window.addEventListener('click', function(e) {
  if (e.target.id === 'rock' || e.target.id === 'paper' || e.target.id === 'scissors') {
    userChoice = e.target.id;
    // give styling to show new user choice
    clearSelection();
    document.getElementById(userChoice).style.border = '5px solid mistyrose';
  }
  
  // when user clicks play
  else if (e.target.id === 'play-button') {
    if (userChoice === '') {
      alert('Please pick an option! :)');
    } else {
      document.getElementById('timer').innerText = '3';
      findWinner();
      timer();
    }
  }
});

//computer choice
function randomPick() {
  let randomNum = Math.floor(Math.random() * 3);
  let choice = choiceArr[randomNum];
  return choice;
}

function timer() {
  if (document.getElementById('timer').innerText === '3') {
    setTimeout(function() {document.getElementById('timer').innerText = '2'}, 700);
    setTimeout(timer, 710);
  }
  else if (document.getElementById('timer').innerText === '2') {
    setTimeout(function() {document.getElementById('timer').innerText = '1'}, 700);
    setTimeout(timer, 710);
  }
  else if (document.getElementById('timer').innerText === '1') {
    setTimeout(showRound, 710);
  }
}

function clearSelection() {
  // clear style on all choices before assigning style to new choice
  document.getElementById('rock').style.border = '5px solid #ffffff';
  document.getElementById('paper').style.border = '5px solid #ffffff';
  document.getElementById('scissors').style.border = '5px solid #ffffff';
}

function findWinner() {
  computerChoice = randomPick();
  console.log('computerChoice', computerChoice, 'userChoice',userChoice)
  //check all possible combos and assign points
  if (userChoice === computerChoice) {
    // alert("it's a tie!");
    winner = 'tie';
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    winner =  'comp';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    winner = 'user';
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    winner =  'comp';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    winner = 'user';
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    winner =  'comp';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    winner = 'user';
  }

  //clear variables for next round
  clearSelection();
}

function showRound() {
  document.getElementById('computer').innerText = computerChoice;
  document.getElementById('user').innerText = userChoice;
  if (winner === 'tie') {
    console.log('tie');
    document.getElementById('timer').innerText = "it's a tie!";
  } 
  else if (winner === 'user') {
    console.log('user');
    document.getElementById('timer').innerText = 'you won!';
  } 
  else if (winner === 'comp') {
    console.log('comp');
    document.getElementById('timer').innerText = 'computer won!';
  }
  addPoint();
  
  // if either score equals 3, execute checkScores to assign a winner
  if (scoreUser === 3 || scoreComp === 3) {
    setTimeout(checkScores, 1600);
  }  
  winner = '';
  userChoice = '';
  computerChoice = '';
  setTimeout(clearRound, 1500);
}

function clearRound() {
  document.getElementById('timer').innerText = '';
  document.getElementById('computer').innerText = '';
  document.getElementById('user').innerText = '';
}

function addPoint(){
  let displayScore;
  if (winner === 'user') {
    scoreUser += 1;
    displayScore = 'score ' + scoreUser.toString();
    document.getElementById('score-user').innerText = displayScore;
  } else if (winner === 'comp') {
    scoreComp += 1;
    displayScore = 'score ' + scoreComp.toString();
    document.getElementById('score-comp').innerText = displayScore;
  }
}

function checkScores() {
  if (scoreUser === 3) {
    alert('Congrats, you beat the computer!');
  } else if (scoreComp === 3) {
    alert('Sorry, the computer has won!');
  }
  scoreUser = 0;
  scoreComp = 0;
  document.getElementById('score-user').innerText = 'score 0';
  document.getElementById('score-comp').innerText = 'score 0';
}