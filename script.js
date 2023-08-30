var randomNumber1 = Math.floor(Math.random() * 6) + 1;


var randomDiceNumber = 'dice' + randomNumber1 + '.png';


var randomDiceSelector = "images/" + randomDiceNumber;



    var randomDice1 = document.querySelectorAll('img')[0].setAttribute('src',randomDiceSelector)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var randomDiceNumber2 = 'dice' + randomNumber2 + '.png';


var randomDiceSelector2 = "images/" + randomDiceNumber2;


var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var randomDiceNumber2 = 'dice' + randomNumber2 + '.png';


var randomDiceSelector2 = "images/" + randomDiceNumber2;
    var randomDice2 = document.querySelectorAll('img')[1].setAttribute('src',randomDiceSelector2)






const draw = document.querySelector('.draw')
const player1 = document.querySelector('.Player1')
const player2 = document.querySelector('.Player2')


draw.onclick = function(){
    randomDice1 = document.querySelectorAll('img')[0].setAttribute('src',randomDiceSelector2)
    randomDice1 = document.querySelectorAll('img')[0].setAttribute('src',randomDiceSelector2)
    
}

const smallestNumber = Math.min(randomNumber1, randomNumber2);
const largerNumber = Math.max(randomNumber1,randomNumber2) + 1

let currentNumber = smallestNumber
let largeNumber = largerNumber

player1.onclick = function(){

    const interval = setInterval(() => {
   if(currentNumber <= largerNumber){
    const randomDiceNumber = "dice" + currentNumber + ".png";
    const randomDiceSelector = "images/" + randomDiceNumber;
    randomDice1 = document.querySelectorAll('img')[0].setAttribute('src',randomDiceSelector)

    currentNumber++
   } else if (largeNumber >= 6) {
    largeNumber--;
            const randomDiceNumberLarge = 'dice' + largeNumber + ".png";
            const randomDiceSelector2 = "images/" + randomDiceNumberLarge;
            document.querySelectorAll('img')[1].setAttribute('src', randomDiceSelector2);
    
   } else {
    clearInterval(interval)
   }
 }, 500)
}


player2.onclick = function(){

    const interval = setInterval(() => {

        if(currentNumber <= largerNumber){
            const randomDiceNumber = 'dice' + currentNumber +'.png';
            const randomDiceSelector = 'images/' + randomDiceNumber;
            document.querySelectorAll('img')[1].setAttribute('src', randomDiceSelector)

            currentNumber++
        } else if (largeNumber >= 6){
            largeNumber--;
            const randomDiceNumberLarge = 'dice' + largeNumber + '.png';
            const randomDiceSelector2 = 'images/' + randomDiceNumberLarge
            document.querySelectorAll('img')[0].setAttribute('src',randomDiceSelector2)
        } else {
            clearInterval(interval)
        }
    }, 500)



}


function winner(){

    if(randomNumber1 === randomNumber2){
        document.querySelector('h1').innerHTML = 'Draw'
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = 'Player 1 win'
    } else {
        document.querySelector('h1').innerHTML = 'Player 2 win'
    }

}
winner()