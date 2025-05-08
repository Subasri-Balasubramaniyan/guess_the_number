// Selecting Elements
var inputbox=document.getElementById("inputbox")
var result=document.getElementById("result")
var guesscount=document.getElementById("guesscount")
var noguess=3
// Generate random number from 1 to 5
var randomnumber=Math.floor(Math.random()*10)+1    //1 to 10         
if(randomnumber>5){
    randomnumber=randomnumber-5
}
// Event handler function
function checkbutton(){
    if(inputbox.value==randomnumber){
        alert("You are Right ☺️☺️, Congratulations👏👏")
        result.textContent="You are Right ☺️☺️!!!"
    }
    else{
        noguess=noguess-1
        if(noguess==0){
            alert("you are lost 😔😔,generated randaom number is:"+randomnumber)
            
        }
        guesscount.textContent="💭💭💭Available Guesses:"+noguess
        result.textContent="You are Wrong 😔😔!!"
    }
}