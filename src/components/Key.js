import React,{useContext} from 'react'
import { AppContext } from './Wordle';

function Key ({keyval,bigkey,disabled}) {
    const {
        onselectLetter,
        onEnter,
        onDelete
    } =useContext(AppContext);
    
    const selectLetter=()=>{
        if(keyval==='Enter')
        {  
          onEnter();
        }
        else if(keyval==='DELETE'){
          onDelete();
        }
        else
        {
          onselectLetter(keyval);
        }
    }
  return (
    <div className='key' id={bigkey ? "big": disabled && "disabled"} onClick={selectLetter}>
      {keyval} 
    </div>
  ) 
}
export default Key
