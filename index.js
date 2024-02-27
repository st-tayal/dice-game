function createRandom(){
    var randomNum=Math.random();
    randomNum=randomNum*6;
    randomNum=Math.floor(randomNum)+1;
    return randomNum; 
}

var randomNumber1=createRandom();
console.log(randomNumber1);
var randomNumber2=createRandom();
console.log(randomNumber2);

var diceSource1="./images/dice"+randomNumber1+".png";
var diceSource2="./images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",diceSource1);
document.querySelector(".img2").setAttribute("src",diceSource2);

if(diceSource1>diceSource2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}
else if(diceSource2>diceSource1){
    document.querySelector("h1").textContent="Player 2 Wins!";
}
else if(diceSource1===diceSource2){
    document.querySelector("h1").textContent="It's a Draw!";
}