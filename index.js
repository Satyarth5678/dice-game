document.addEventListener('DOMContentLoaded', function () {

 var randomNumber1=Math.random();
 randomNumber1= Math.floor((randomNumber1*6)+1);
 
 var firstImg = document.querySelector('.player img');
 var allImages = document.querySelectorAll('.player img');
 var secondImg= allImages[1];
 if( randomNumber1===1)
 {
    firstImg.setAttribute('src','./dice1.png');

 }
 else if(randomNumber1===2)
 {
    firstImg.setAttribute('src','./dice2.png');
 }
 else if(randomNumber1===3)
 {
    firstImg.setAttribute('src','./dice3.png');
 }
 else if(randomNumber1===4)
 {
    firstImg.setAttribute('src','./dice4.png');
 }
 else if(randomNumber1===5)
 {
    firstImg.setAttribute('src','./dice5.png');
 }
 else 
 {
    firstImg.setAttribute('src','./dice6.png');
   
 }
 var randomNumber2=Math.random();
 randomNumber2= Math.floor((randomNumber2*6)+1);
 
 if( randomNumber2===1)
 {
    secondImg.setAttribute('src','./dice1.png');

 }
 else if(randomNumber2===2)
 {
    secondImg.setAttribute('src','./dice2.png');
 }
 else if(randomNumber2===3)
 {
    secondImg.setAttribute('src','./dice3.png');
 }
 else if(randomNumber2===4)
 {
    secondImg.setAttribute('src','./dice4.png');
 }
 else if(randomNumber2===5)
 {
    secondImg.setAttribute('src','./dice5.png');
 }
 else 
 {
    secondImg.setAttribute('src','./dice6.png');
   
 }

 var playerNames = document.querySelectorAll('.playername');

 if (randomNumber1 > randomNumber2) {
     playerNames[0].textContent = 'Player 1 wins';
   
 } else if (randomNumber2 > randomNumber1) {
     playerNames[0].textContent = 'Player 1 loses';
   
 } else {
     playerNames[0].textContent = 'It\'s a draw';
    
 }












});