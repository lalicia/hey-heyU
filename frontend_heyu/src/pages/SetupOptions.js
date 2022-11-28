import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";

import NewCountdown from "../components/NewCountdown.js"; 

import Modal from "../components/Modal.js";

//needs to HAND DOWN props to Countdown - minutes, repetitions
function SetupOptions({image, title, subject}) {
    const [modal, setModal] = useState(true);

    //changed to 1 to avoid having 0 mins on start of counter
    const [minutes, setMinutes] = useState(1);
    //for starting another nudge from button after countdown ends
    const [resetMins, setResetMins] = useState(0);

    //state to control whether Options or Countdown are shown
    const [start, setStart] = useState(false);

    //state to control size of image (operational when countdown is running)
    const [imgBig, setImgBig] = useState(false);

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
            {modal === true ? <Modal setModal={setModal}/> : <></>}

            {start === false ? 
            (<>
                <div className="options-back-btn-container">
                    <h2 className="back-home">
                        <Link to="/">hey-heyU</Link>
                    </h2>
                </div>
                

                <div className="options-pg-container">
                    <section className="options-pg-content">
                        <h1>{title}</h1>
                        
                        <form className="time-options">
                            <h3>In how long would you like us to nudge you?</h3>
                            {/* change VALUES to 0 for testing in browser */}
                            <label htmlFor="15">
                                <input type="radio" id="15" name="time" value="1" onChange={timeSelection}/>
                                15minutes
                            </label>
                            
                            <label htmlFor="30">
                                <input type="radio" id="30" name="time" value="2" onChange={timeSelection}/>
                                30minutes  
                            </label>
                            
                            <label htmlFor="45">
                                <input type="radio" id="45" name="time" value="3" onChange={timeSelection}/>
                                45minutes
                            </label>
                            
                            <label htmlFor="60">
                                <input type="radio" id="60" name="time" value="4" onChange={timeSelection}/>
                                60minutes   
                            </label>
                        </form>

                        {/* <Notification onClick={onClick} /> */}

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
                (<div className="countdown-pg-container">
                    <h2 className="back-home">
                        <Link to="/">hey-heyU</Link>
                    </h2>
 
                    <div className="option-title">
                        <h1>When we nudge you, {subject}</h1>
                    </div>

                    <div className="countdown-container">
                        {/*added toggle for class to allow img resize*/}
                        <div className={imgBig ? "countdown-img-bigger" : "countdown-img"}>
                            <img src={image} alt="icon for nudge type"></img>
                        </div>

                        <div className="option-countdown-display">
                            {/* COMMENTED OUT TO WORK ON NEW VERSION, BUT THIS IS THE WORKING CODE - now permanently replaced but was initial working version <Countdown minutes={minutes} setMinutes={setMinutes} resetMins={resetMins}/> */}
                            <NewCountdown minutes={minutes} setMinutes={setMinutes} resetMins={resetMins} imgBig={imgBig} setImgBig={setImgBig}/>
                        </div>
                    </div>
                    

                </div>)}    
        </div>
    )
}

export default SetupOptions;