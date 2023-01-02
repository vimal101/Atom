var randomnumber = Math.floor(Math.random()*6)+1;
var randomimage = "dice" + randomnumber+".png";
var imagesource = "images/"+randomimage;
 var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesource);


var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomimage2 = "dice" + randomnumber2+".png";
var imagesource2 = "images/"+randomimage2;
 var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",imagesource2);


if(randomnumber>randomnumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if (randomnumber<randomnumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}else{
  document.querySelector("h1").innerHTML = "🚩 Draw ! 🚩";
}
