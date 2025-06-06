var ran1 = Math.floor(Math.random()*6)+1;

var diceImage1 = "dice" + ran1 + ".png";

var imageSource1 = "images/" + diceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",imageSource1);

var ran2 = Math.floor(Math.random()*6)+1;

var diceImage2 = "dice"+ran2+".png";

var imageSource2 = "images/"+diceImage2;

document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

if(ran1 > ran2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(ran1<ran2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Match draw";
}