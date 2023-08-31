

// Buttons

const play = document.querySelector('.play')
const draw = document.querySelector('.draw')
const player1 = document.querySelector('.Player1')
const player2 = document.querySelector('.Player2')

// Number Generator

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Dices 

var randomDiceSelector1 = 'images/dice' + randomNumber1 + '.png';
var randomDice1 = document.querySelectorAll('img')[0].setAttribute('src',randomDiceSelector1)

var randomDiceSelector2 = 'images/dice' + randomNumber2 + '.png';
var randomDice2 = document.querySelectorAll('img')[1].setAttribute('src',randomDiceSelector2)

// Numbers for buttons

const smallestNumber = Math.min(randomNumber1, randomNumber2);
const largerNumber = Math.max(randomNumber1,randomNumber2) + 1

let currentNumber = smallestNumber
let largeNumber = largerNumber

// Play function


play.onclick = function(){
    
    
    

        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
        var randomDiceSelector1 = 'images/dice' + randomNumber1 + '.png';
        document.querySelectorAll('img')[0].setAttribute('src',randomDiceSelector1)
    
        var randomDiceSelector2 = 'images/dice' + randomNumber2 + '.png';
        document.querySelectorAll('img')[1].setAttribute('src',randomDiceSelector2)
        
        if(randomNumber1 === randomNumber2){
            document.querySelector('h1').innerHTML = 'Draw'
        } else if (randomNumber1 > randomNumber2) {
            document.querySelector('h1').innerHTML = 'Player 1 win'
        } else {
            document.querySelector('h1').innerHTML = 'Player 2 win'
            clearInterval(interval)
        }
    
}

// Draw function

draw.onclick = function(){
    randomDice1 = document.querySelectorAll('img')[0].setAttribute('src',randomDiceSelector2)
    

    document.querySelector('h1').innerHTML = 'Draw'
}

// Player 1 win function 


player1.onclick = function(){
    const interval = setInterval(() => {
        if(currentNumber <= largerNumber){
            const randomDiceSelector1 = 'images/dice' + currentNumber + '.png';
            document.querySelectorAll('img')[0].setAttribute('src',randomDiceSelector1);
            currentNumber++
        } else if (largeNumber >= 6){
            largeNumber--;
            const randomDiceSelector2 = 'images/dice' + largeNumber + '.png';
            document.querySelectorAll('img')[1].setAttribute('src', randomDiceSelector2);
        } else if(currentNumber > largeNumber) {
            document.querySelector('h1').innerHTML = 'Player 1 wins';
      clearInterval(interval);
        } else {
            clearInterval(interval)
        }
    }, 500)
}

// Player 2 win function 

player2.onclick = function(){
    const interval = setInterval(() => {
        if(currentNumber <= largerNumber){
            const randomDiceSelector1 = 'images/dice' + currentNumber + '.png';
            document.querySelectorAll('img')[1].setAttribute('src',randomDiceSelector1);
            currentNumber++
        } else if (largeNumber >= 6){
            largeNumber--;
            const randomDiceSelector2 = 'images/dice' + largeNumber + '.png';
            document.querySelectorAll('img')[0].setAttribute('src', randomDiceSelector2);
        } else if(currentNumber > largeNumber) {
            document.querySelector('h1').innerHTML = 'Player 2 wins';
      clearInterval(interval);
        } else {
            clearInterval(interval)
        }
    }, 500)
}

// Winner function

function winner(){

    if(randomNumber1 === randomNumber2){
        document.querySelector('h1').innerHTML = 'Draw'
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = 'Player 1 win'
    } else {
        document.querySelector('h1').innerHTML = 'Player 2 win'
    }

}
