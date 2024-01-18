import React from 'react'
import Letter from './Letter'
// import { boardDefault, generateWordSet } from './Words' 1

function Board(props) {
    // const [board, setboard] = useState(boardDefault); 1 
    return (
        <div className='board' style={{color: props.mode==='dark'?'white':'black'}}>
            <div className='row'>
                <Letter className="letter" letterPos={0} attemptVal={0}/>
                <Letter className="letter" letterPos={1} attemptVal={0}/>
                <Letter className="letter" letterPos={2} attemptVal={0}/>
                <Letter className="letter" letterPos={3} attemptVal={0}/>
                <Letter className="letter" letterPos={4} attemptVal={0}/>
                {/* checking */}
            </div>
            <div className='row'>
                <Letter className="letter" letterPos={0} attemptVal={1}/>
                <Letter className="letter" letterPos={1} attemptVal={1}/>
                <Letter className="letter" letterPos={2} attemptVal={1}/>
                <Letter className="letter" letterPos={3} attemptVal={1}/>
                <Letter className="letter" letterPos={4} attemptVal={1}/>
            </div>
            <div className='row'> 
                <Letter className="letter" letterPos={0} attemptVal={2}/>
                <Letter className="letter" letterPos={1} attemptVal={2}/>
                <Letter className="letter" letterPos={2} attemptVal={2}/>
                <Letter className="letter" letterPos={3} attemptVal={2}/>
                <Letter className="letter" letterPos={4} attemptVal={2}/>
            </div>
            <div className='row'>
                <Letter className="letter" letterPos={0} attemptVal={3}/>
                <Letter className="letter" letterPos={1} attemptVal={3}/>
                <Letter className="letter" letterPos={2} attemptVal={3}/>
                <Letter className="letter" letterPos={3} attemptVal={3}/>
                <Letter className="letter" letterPos={4} attemptVal={3}/>
            </div>
            <div className='row'>
                <Letter className="letter" letterPos={0} attemptVal={4}/>
                <Letter className="letter" letterPos={1} attemptVal={4}/>
                <Letter className="letter" letterPos={2} attemptVal={4}/>
                <Letter className="letter" letterPos={3} attemptVal={4}/>
                <Letter className="letter" letterPos={4} attemptVal={4}/>
            </div>
            <div className='row'>
                <Letter className="letter" letterPos={0} attemptVal={5}/>
                <Letter className="letter" letterPos={1} attemptVal={5}/>
                <Letter className="letter" letterPos={2} attemptVal={5}/>
                <Letter className="letter" letterPos={3} attemptVal={5}/>
                <Letter className="letter" letterPos={4} attemptVal={5}/>
            </div>
        </div>
    )
}
export default Board
