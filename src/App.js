import './App.css';
import React from 'react';
import { TextField, Button } from '@material-ui/core';
//function App() {
  //function submitAnswer(e){
    
    //console.log(event.target.elements.answer.value)
  //}

let randNum = Math.random() * (500 - 1) + 1;
randNum = Math.floor(randNum);
let attemptsLeft = 10;

const App = () => {
  const onSubmit = (event)  => {
    event.preventDefault();
    //console.log(event.target.elements.answer.value)

   if(attemptsLeft > 0)
   { 
   let ans = event.target.elements.answer.value;
   let status = ""; 
   if(ans == randNum)
   {
      status =  "You've Guessed Correctly! Game is now over. Refresh to play again!"
      attemptsLeft = 0;
   }
   else if(ans < randNum)
   {
     status = "Higher!";

    attemptsLeft--;
   }
   else if(ans > randNum)
   {

    status = "Lower!";
    attemptsLeft--;
   }



   console.log(randNum);
   document.getElementById("gl").innerHTML = "You have " + attemptsLeft + " Guesses Remaining";
   document.getElementById("msg").innerHTML = status;

   } // end if
    
   else{
    document.getElementById("gl").innerHTML = "GAME OVER, NO GUESSES LEFT";
    document.getElementById("msg").innerHTML = "";
   }

  }


  return (
    <>
    <div className = "container">
    <form onSubmit = {onSubmit}>

    <div className = "title">Guessing Game</div>
    <TextField className = "textF" fullWidth type = "number" name = "answer" label = "Enter your answer here (1-500)"/>
    <Button  fullWidth varient = "contained" type = "submit"> Submit Answer</Button>
    </form>
    <div className = "guessesLeft" id = "gl">You have 10 Remaining guesses</div> 
    <div className = "message" id = "msg"></div> 

    </div>
    </>
  );
}

export default App;
