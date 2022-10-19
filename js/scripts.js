let dice1 = Math.floor(Math.random() * 6 + 1);
let dice2 = Math.floor(Math.random() * 6 + 1);

let diceImage = 'img/dice' + dice1 + '.png';
let diceImage2 = 'img/dice' + dice2 + '.png';

document.querySelectorAll('img')[0].setAttribute('src', diceImage);
document.querySelectorAll('img')[1].setAttribute('src', diceImage2);