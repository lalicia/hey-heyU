import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";

import Countdown from "../components/Countdown.js"; 

//needs to HAND DOWN props to Enabled/Countdown - minutes, repetitions
function SetupOptions({image, title}) {
    const [minutes, setMinutes] = useState(0);
    const [repetitions, setRepetitions] = useState(0);
    //const [image, setImage] = useState({});

    const [start, setStart] = useState(false);

    //to switch state so display goes from options to countdown timer
    function onClick() {
        setStart(true);
    };

    //to set minutes on input selection from radio buttons
    function timeSelection(e) {
        //console.log('this is the e.t.v: ', e.target.value);
        setMinutes(Number(e.target.value));
    }
    console.log(minutes)

    return (
        <div className="options-pg">

            {start === false ? 
            (<>
                <h2 className="back-home">
                    <Link to="/">hey-heyU</Link>
                </h2>

                <div className="options-pg-contents">
                    <section>
                        <h1>{title}</h1>

                        <form className="time-options">
                            
                            <label htmlFor="15">
                                <input type="radio" id="15" name="time" value="15" onChange={timeSelection}/>
                                15 minutes
                            </label>
                            
                            <label htmlFor="30">
                                <input type="radio" id="30" name="time" value="30" onChange={timeSelection}/>
                                30 minutes  
                            </label>
                            
                            <label htmlFor="45">
                                <input type="radio" id="45" name="time" value="45" onChange={timeSelection}/>
                                45 minutes
                            </label>
                            
                            <label htmlFor="60">
                                <input type="radio" id="60" name="time" value="60" onChange={timeSelection}/>
                                60 minutes   
                            </label>
                        </form>

                        <button className="to-countdown-btn" onClick={onClick}>
                            That's great, let's go
                        </button>
                    </section>
                
                    <div className="option-img">
                        <img src={image} alt="icon for nudge type"></img>
                    </div>
                </div>
                </>)
                :
                (<>
                    <h2 className="back-home">
                        <Link to="/">hey-heyU</Link>
                    </h2>
                    
                    <div className="options-pg-contents">
                        <h1>We're counting down for you</h1>
                        <Countdown minutes={minutes} setMinutes={setMinutes}/>
                    </div>
                    <div className="option-img">
                    <img src={image} alt="icon for nudge type"></img>
                    </div>
                </>)}    
        </div>
    )
}

export default SetupOptions;