import React from "react";
import {useState, useEffect} from "react";

import Notification from "../components/Notification.js";

//this is going to need props from SetupOptions - minutes, repetitions, image
function Countdown({minutes, setMinutes, resetMins}) {
    const [seconds, setSeconds] = useState(0);
    //state for if button to start another nudge should show
    const [button, setButton] = useState(false);

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            //added in the else if to make the countdown stop when reaches 00:00
            if (seconds === 0) {
                //to handle going down in minutes and restarting seconds
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else if (minutes === 0) {
                    clearInterval(interval);
                    setButton(true);
                } else {
                    setMinutes(minutes);
                    setSeconds(59);
                }
                //then also just counting down seconds if they're not at zero
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000)
        //setButton(false); now moved to goAgain function to stop notification being resent on click
    }, [seconds]);

    //trigger by button click, resets the countdown for the nudge
    //needs to be -1 on mins otherwise does not show correctly
    function goAgain() {
        setButton(false);
        setMinutes(resetMins - 1);
        setSeconds(59);
    }

    //to ensure timer display is in 00:00 format, else would get single digits
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="countdown-container">
            <div className="countdown">
                {timerMinutes}:{timerSeconds}
            </div>

            {button === true ? 
            (<>
                <Notification />
                <button onClick={goAgain}>Set another nudge?</button>
            </>)
            :
            (<></>)
            }
        </div>
    )
}

export default Countdown;