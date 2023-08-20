var randNumber = Math.floor((Math.random()*6)+1);
var randoDice = "images/dice"+randNumber+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randoDice);

// second dice
var randNo2 = Math.floor((Math.random()*6)+1);
var ranDice2 = "images/dice"+randNo2+".png";
document.querySelectorAll("img")[1].setAttribute("src",ranDice2);

if( randNo2>randNumber)
{ document.querySelector("h1").innerHTML="Player No2 is winner";}
else if (randNo2<randNumber) {
    document.querySelector("h1").innerHTML="Player No1 is winner";}
else {
    document.querySelector("h1").innerHTML="we both are winners";
}
    
