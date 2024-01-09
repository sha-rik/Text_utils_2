import React, { useEffect, useCallback, useContext } from 'react'
import Key from './Key';
import { AppContext } from './Wordle';

function Keyboard() {
  const { onDelete, onEnter, onselectLetter, DisableLetter } = useContext(AppContext);
  const key1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const key2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const key3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  // this is something related to keyboards
  const handelKeyboard = useCallback((e) => {
    if (e.key === 'Enter') {
      onEnter();
    }
    else if (e.key === 'Backspace') {
      onDelete();
    }
    else {
      key1.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          onselectLetter(key);
        }
      })
      key2.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          onselectLetter(key);
        }
      })
      key3.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          onselectLetter(key);
        }
      })
    }

  },);
  useEffect(() => {
    document.addEventListener('keydown', handelKeyboard);
    return () => {
      document.removeEventListener('keydown', handelKeyboard);
    }
  }, [handelKeyboard])


  return (
    <div className='keyboard' onKeyDown={handelKeyboard} >
      <div className='line1'>
        {key1.map((key) => {
          return <Key keyval={key} disabled={DisableLetter.includes(key)} />;
        })}</div>
      <div className='line2'>
        {key2.map((key) => {
          return <Key keyval={key} disabled={DisableLetter.includes(key)} />;
        })}</div>
      <div className='line3'>
        <Key keyval={"Enter"} bigkey={true} />
        {key3.map((key) => {
          return <Key keyval={key} disabled={DisableLetter.includes(key)} />;
        })}
        <Key keyval={"DELETE"} bigkey={true} />
      </div>
    </div>
  )
}

export default Keyboard



