import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";

import Countdown from "../components/Countdown.js"; 

//needs to HAND DOWN props to Countdown - minutes, repetitions
function SetupOptions({image, title, subject}) {
    //changed to 1 to avoid having 0 mins on start of counter
    const [minutes, setMinutes] = useState(1);
    //for starting another nudge from button after countdown ends
    const [resetMins, setResetMins] = useState(0);

    //state to control whether Options or Countdown are shown
    const [start, setStart] = useState(false);

    //to switch state so display goes from options to countdown timer
    function onClick() {
        setStart(true);
    };

    //to set minutes on input selection from radio buttons
    function timeSelection(e) {
        //console.log('this is the e.t.v: ', e.target.value);
        setMinutes(Number(e.target.value));
        setResetMins(Number(e.target.value));
    }
    //console.log(minutes)

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
                            <h3>In how long would you like us to nudge you?</h3>
                            {/* temporarily changed all VALUES to 0 for testing in browser */}
                            <label htmlFor="15">
                                <input type="radio" id="15" name="time" value="1" onChange={timeSelection}/>
                                15 minutes
                            </label>
                            
                            <label htmlFor="30">
                                <input type="radio" id="30" name="time" value="0" onChange={timeSelection}/>
                                30 minutes  
                            </label>
                            
                            <label htmlFor="45">
                                <input type="radio" id="45" name="time" value="0" onChange={timeSelection}/>
                                45 minutes
                            </label>
                            
                            <label htmlFor="60">
                                <input type="radio" id="60" name="time" value="0" onChange={timeSelection}/>
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
                        <h1>When we nudge you, {subject}</h1>
                        <Countdown minutes={minutes} setMinutes={setMinutes} resetMins={resetMins}/>
                    </div>

                    <div className="option-img">
                    <img src={image} alt="icon for nudge type"></img>
                    </div>
                </>)}    
        </div>
    )
}

export default SetupOptions;