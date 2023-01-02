//$("h1").css("color","red")
// $ is equevalent to the document.queryselector
//selecting one many same is their
//$("h1   o r  class name")

/*  for adding the class in the jquery we only have 
to apply the addClass method in the java script file: */  
//$("h1").addClass("same");

/*

manupulating the text content we use 
innerHTML
in java script but here we only have to use 
text or html
*/
//$("button").text("hey")
// to apply html also we use html tag in the jquery
//$("button").html("<strong>hey</strong>")


/*
add attribute value run time 

*/
//$("a").attr("href","https://www.google.com");


/**
 * ADD event listener by simple 
 * 
 * 
 */

$("button").click(function (){
    $("h1").css("color","red")
})


$("button").keypress(function (event){
    $("h1").text(event.key)
})


/*$("button").click(function (event){
    $("h1").fadeToggle()
})// slideup slideToggle animate

*/
$("button").click(function (event){
    $("h1").slideToggle().animate({opacity :0.5})
})