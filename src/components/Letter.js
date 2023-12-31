import React, {useContext, useEffect}from 'react'
import { AppContext } from './Wordle';


function Letter  ({letterPos,attemptVal})  {
  const {
    board,
    correctWord,
    currAttempt,
    setDisableLetter,
  } =useContext(AppContext);
  const letter=board[attemptVal][letterPos];

  
  const correct=correctWord.toUpperCase()[letterPos]===letter;
  const almost= !correct && letter!=='' && correctWord.toUpperCase().includes(letter);
  const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error" );

  
  // the below useEffect is used to disable the letter if the word is wrong
  useEffect(()=>{
    if(letter!=="" && !correct && !almost )
    {
      // 1:19:50   this was for removing leter which is not in our final word...but not working
      setDisableLetter((prev)=>[...prev,letter]);
      // setDisableLetter([...DisableLetter,letter]);
    }
  },[currAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
       
      {letter}
    </div>
  )
}

export default Letter
