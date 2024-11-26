var scoreElement = document.querySelector('#score-section');
var buttonHit = document.querySelector('#answer-one');
var buttonStand = document.querySelector('#answer-two');
var buttonDoubleDown = document.querySelector('#answer-three');
var buttonSplit = document.querySelector('#answer-four');

var scoreCount = 0;

function scoreUpdate() {
    scoreElement.textContent = "Score: " + scoreCount;
};

scoreElement.addEventListener('click', function() {
    scoreElement.textContent = "Score: " + scoreCount;
});

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