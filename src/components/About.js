import React from 'react'

export default function About(props) {
    // ye ho gaya for toggling the color of the page...ye state uske liye use hua


    // const [mystyle, setmystyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white',
    //     border : '1px solid black',
    // })

    let mystyle = {
        color : props.mode === 'dark'?'white':'black',
        backgroundColor : props.mode === 'dark'?' #1652a3':'white',
        border : '2px solid',
        borderColor : props.mode === 'dark'?'#0f0f41':'white',
        
    }


    return (
        

        <div className='container my-3' style={mystyle}>
            <h1>About us</h1>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong> Analyse you text </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>Unleash your content's full potential with our React-powered text manipulation platform, offering intricate typographical control and seamless auditory integration for a truly immersive reading experience.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong> Free to use </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>Free to use
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong> Brouse</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container my-3'>
            <button onClick={toggleStyle} type="button" className='btn btn-danger'>{btntext}</button>
            </div> */}
        </div>
    )
}
