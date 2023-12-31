import React from 'react'
import "./Wordle.css"
import Board from './Board';
import Keyboard from './Keyboard';
import { useState,useEffect } from 'react';
import { createContext } from 'react';
import { boardDefault, generateWordSet } from './Words';
import GT from './GT';

export const AppContext = createContext();

function Wordle(props) {

    const [wordSet, setwordSet] = useState(new Set());
    // for making the letter disable from keyboards after it is selected
    const [DisableLetter, setDisableLetter] = useState([]);
    const [correctWord, setcorrectWord] = useState("");
    const [gameOver,setGameOver]=useState({

        gameOver:false,
        guessedword:false,
    });

    useEffect(() => {
        generateWordSet().then((words)=>
        {
            setwordSet(words.wordSet);
            setcorrectWord(words.todaysword);
        })
    },[])


    const [board, setboard] = useState(boardDefault); 
    const [currAttempt, setcurrAttempt] = useState({attempt : 0 , letterPos : 0});
    // const correctWord = 'RIGHT';


    const onselectLetter =(keyval)=>
    {
        if(currAttempt.letterPos>4) return;
        const newBoard=[...board]
        newBoard[currAttempt.attempt][currAttempt.letterPos]=keyval;
        setboard(newBoard);
        setcurrAttempt({attempt:currAttempt.attempt ,letterPos:currAttempt.letterPos+1});
    }

    const onEnter=()=>  
    {
        if(currAttempt.letterPos!==5) return;
        // if(currAttempt.attempt===5) return;

        // the below function allow user to only enter the word which is in the wordSet
        // allowe the user to only enter meaingingful words
        let currWord="";
        for (let i = 0; i < 5; i++) {
            currWord+=board[currAttempt.attempt][i];
            
        }
        if(wordSet.has(currWord.toLowerCase()))
        {
            setcurrAttempt({attempt:currAttempt.attempt+1,letterPos:0}); 
        }
        else
        {
            alert("Wrong Word");
        }

        if(currWord.toLowerCase()===correctWord)
        {
            setGameOver({gameOver:true,guessedword:true});
            return;
        }

        if(currAttempt.attempt===5)
        {
            setGameOver({gameOver:true,guessedword:false}); 
            return;
        }
    }

    const onDelete=()=>
    {
        if(currAttempt.letterPos===0) return;
        const newBoard=[...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos-1]=' ';
        setboard(newBoard);
        setcurrAttempt({attempt:currAttempt.attempt ,letterPos:currAttempt.letterPos-1});
    }


    return (
        <div className='Wordle' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Wordle</h1>
            <AppContext.Provider 
            value={{

                board,
                setboard,
                currAttempt,
                setcurrAttempt,
                onselectLetter,
                onEnter,
                onDelete,
                correctWord,
                DisableLetter,
                setDisableLetter,
                setGameOver,
                gameOver,

                }}
            >
                <div className='game'>
                    <Board mode={props.mode} />
                    {gameOver.gameOver ? <GT/> : <Keyboard />}
                </div>
            </AppContext.Provider>
        </div>
    );
}

export default Wordle
