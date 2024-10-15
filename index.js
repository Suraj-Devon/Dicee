var randomNumber1 = Math.floor(Math.random() *6 + 1);

var randomNumber2 = Math.floor(Math.random() *6 + 1);

var randomDice1 = "./images/dice"+ randomNumber1 + ".png";
var randomDice2 = "./images/dice"+ randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , randomDice1);
document.querySelectorAll("img")[1].setAttribute("src" , randomDice2);


if(sessionStorage.getItem('flag')===null){
    document.querySelector("h1").innerHTML = "Refresh me";
    sessionStorage.setItem('flag','1');
  }else{


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " 🚩 Player 1 WINS "
}

else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = " Player 2 WINS 🚩 "
}
else{
    document.querySelector("h1").innerHTML = " Draw!"
}


  }