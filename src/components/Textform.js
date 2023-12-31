import React, {useState} from 'react'



export default function Textform(props) {
    
    const [text,set_text] = useState('Enter text here blah blah');
    const [isItalic, setIsItalic] = useState(false);
    const [isbold,setbold]=useState(false);
    const [isunderline,setUnderline]=useState(false);
    // const [modifiedText, setModifiedText] = useState('');
    const [p,setp]=useState(false);

    const handleLoClick = () => {
        let newtext= text.toLowerCase();
        set_text(newtext);

        props.showAlert("Converted to lowercase", "success")
    }
    const handleItalicClick = () => {
        setIsItalic(!isItalic);
        props.showAlert("Converted to italic", "success");
    };
    const handleBoldClick = () => {
        setbold(!isbold);
        props.showAlert("Converted to bold", "success");
    };
    const handleunderlineClick = () => {
        setUnderline(!isunderline);
        props.showAlert("Converted to underline", "success");
    };

    const Copy_text = () => {
        
        let t = document.getElementById("mybox");
        
        t.select();
        navigator.clipboard.writeText(t.value);
        
        
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard", "success")
    }

    const Remove = () => {
        
        let newtext = text.split(/[ ]+/);
        set_text(newtext.join(" "))
    }
    const handleuUpClick = () => {

        let newtext= text.toUpperCase();

        set_text(newtext);


        props.showAlert("Converted to uppercase", "success");
    }
    const HandleOnChange = (event) => {

        set_text(event.target.value);

    }


    
    // how to control speed of reading
    // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        // slow down the speed
        msg.rate = 1.0;
        // change the voice
        msg.voice = window.speechSynthesis.getVoices()[0];
        // for output voice
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking", "success")
        
    }
    // add a pause button
    // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/pause

    const fun = () => {
        if(p===false)
        {
            window.speechSynthesis.pause();
            props.showAlert("Paused", "success")
            setp(true)
        }
        else
        {
            window.speechSynthesis.resume();
            props.showAlert("Resume", "success")
            setp(false)
        }
    }
    const stop = () => {
        window.speechSynthesis.cancel();
        props.showAlert("Stopped", "success")
    }
    return (
        <>
        <div className='container' style={{color : props.mode==='dark' ? 'white' : 'black'}}>
            <h1>{props.Heading}</h1>
            <div className="mb-3">
                {/* jab bhi kuch change karoge text ke area me to... HandleOnChange function call hoga */}
                <textarea className="form-control" value ={text} onChange={HandleOnChange} 
                style={{
                    backgroundColor : props.mode==='dark'?'#1652a3':'white',
                    color : props.mode==='dark' ? 'white' : 'black',
                    fontStyle: isItalic ? 'italic' : 'normal',
                    textDecoration: isunderline ? 'underline' : 'none',
                    fontWeight: isbold ? 'bold' : 'normal',
                    }}    id="mybox" rows="8"></textarea>
            </div>
            {/* we had made a button to change the input to upper case */}
            <button disabled ={text.length===0} className="btn btn-outline-primary my-3 mx-2" onClick={handleuUpClick} >Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-outline-primary my-3 mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-outline-primary my-3 mx-2" onClick={handleItalicClick}>Convert to Italic</button>
            <button disabled={text.length===0} className="btn btn-outline-primary my-3 mx-2" onClick={handleBoldClick}>Convert to Bold</button>
            <button disabled={text.length===0} className="btn btn-outline-primary my-3 mx-2" onClick={handleunderlineClick}>Underline Text</button>
            {/* <button disabled={text.length===0} className="btn btn-outline-primary my-3 mx-2" onClick={HandleCapChange}>Captalized</button> */}

            {/* speaking button */}
            <button disabled={text.length===0} className="btn btn-outline-primary my-3 mx-2" onClick={speak}>Screen reader</button>

            <button disabled={text.length===0} className="btn btn-outline-primary my-3 mx-2" onClick={fun}>{p===false ? "Pause" : "Resume"}</button>
            
            {/* <button disabled={text.length===0} className="btn btn-outline-primary my-3 mx-2" onClick={resume}>Resume</button> */}
            {/* stoping */}
            <button disabled={text.length===0} className="btn btn-outline-primary my-3 mx-2" onClick={stop}>stoping</button>
            {/* copying button */}
            <button disabled={text.length===0} className="btn btn-outline-primary my-3 mx-2" onClick={Copy_text}>Copy Text </button>
            {/* Removing extra spaces */}
            <button disabled={text.length===0} className="btn btn-outline-primary my-3 mx-2" onClick={Remove}>Remove Extra spaces</button>
        </div>

        <div className="container" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
            
            <h2>Your text details</h2>

            <p>{text.trim().length} <b> characters</b> and {text.trim().length>0?text.trim().split(/\s+/).length:0} <b>words</b></p>
    
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>

            
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>

        </>
    )
    
}
