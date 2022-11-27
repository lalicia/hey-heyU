import React from "react";
import {useState, useEffect} from "react";

import Notification from "../components/Notification.js";

function NewCountdown({minutes, setMinutes, resetMins}) {
    const [seconds, setSeconds] = useState(0);
    //state for if button to start another nudge should show
    const [button, setButton] = useState(false);
    //console.log('this is orig now ', now);

    let date = new Date();
    let rightNow = date.getTime();
    const [now, setNow] = useState(rightNow);
    
    useEffect(() => {
        let interval = setInterval(() => {
            //DON'T EVER REMOVE THIS CLEARINTERVAL
            clearInterval(interval);
            //added in the else if to make the countdown stop when reaches 00:00
            if (seconds === 0) {
                //CHANGED SECONDS FROM 59 to 10 FOR TESTING
                //to handle going down in minutes and restarting seconds
                if (minutes !== 0) {
                    setSeconds(10);
                    setMinutes(minutes - 1);
                } else if (minutes === 0) {
                    clearInterval(interval);
                    setButton(true);
                } else {
                    setMinutes(minutes);
                    setSeconds(10);
                }
                //then also just counting down seconds if they're not at zero
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000)

        console.log('this is now ', now);
        
        function resets() {
            clearInterval(interval);
            setMinutes(0);
            setSeconds(0);
            console.log('timeout ran')
        }
        setTimeout(() => resets(), (now + 10000) - now);
        //this cleanup function is what makes the interval clear and essentially makes the timer 00:00 and notification come through, in sync
        return () => {
            clearInterval(interval);
            clearTimeout()
        }

        //setButton(false); now moved to goAgain function to stop notification being resent on click
    }, [seconds]);

    //THIS ISN'T WORKING - is zeroing out and sending notification immediately
     //trigger by button click, resets the countdown for the nudge
    //needs to be -1 on mins otherwise does not show correctly
    function goAgain() {
        updateNow();
        setButton(false);
        setMinutes(resetMins - 1);
        setSeconds(10);
    }

    function updateNow() {
        let update = date.getTime();
        setNow(update);
    }

    useEffect(() => {
        if (button === true) {
            updateNow();
        }
    }, [])
   

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

export default NewCountdown;