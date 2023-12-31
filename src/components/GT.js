// import React from 'react'
import React, {useContext } from 'react'
import { AppContext } from './Wordle';

function GT() {
    const {gameOver,currAttempt,correctWord}=useContext(AppContext);
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedword ? "You guesed correctly " : "lol you failed"}</h3>
        <h1>The word was {correctWord}</h1>
        {gameOver.guessedword && ( <h3> You guessed in {currAttempt.attempt} attempts</h3>)} 
    </div>
  )
}
export default GT