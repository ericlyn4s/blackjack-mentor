var scoreElement = document.querySelector('#score-section');
var startButton = document.querySelector('#start-button');
var dealerCardOne = document.querySelector('#dealer-card-one');
var playerCardOne = document.querySelector('#player-card-one');
var playerCardTwo = document.querySelector('#player-card-two');
var buttonHit = document.querySelector('#answer-one');
var buttonStand = document.querySelector('#answer-two');
var buttonDoubleDown = document.querySelector('#answer-three');
var buttonSplit = document.querySelector('#answer-four');

// Create global variables and set their defaults
var scoreCount = 0;
var resetButton = document.createElement('button');


// Array of card combinations
var cardComboArray = [
    {
        dealer: "Jack",
        playerOne: "King",
        playerTwo: "Ten",
    }
]

function startScore() {
    scoreElement.removeChild(startButton);
    scoreElement.textContent = "Score: " + scoreCount;
};

function scoreUpdate() {
    scoreElement.textContent = "Score: " + scoreCount;
    resetButton.textContent = 'Reset'
    scoreElement.appendChild(resetButton);
};

startButton.addEventListener("click", startScore);

resetButton.addEventListener("click", function() {
    scoreCount = 0;
    scoreUpdate();
})

buttonHit.addEventListener('click', function(){
    scoreCount += 1;
    scoreUpdate();
});

buttonStand.addEventListener('click', function(){
    scoreCount += 2;
    scoreUpdate();
});

buttonDoubleDown.addEventListener('click', function(){
    scoreCount += 3;
    scoreUpdate();
});

buttonSplit.addEventListener('click', function(){
    scoreCount += 4;
    scoreUpdate();
});