import React from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import Notification from "../components/Notification.js";

function NewCountdown({minutes, setMinutes, resetMins, imgBig, setImgBig}) {
    const [seconds, setSeconds] = useState(0);
    //state for if button to start another nudge should show
    const [button, setButton] = useState(false);
    //console.log('this is orig now ', now);

    //gets the date and time via UTC, so can set accurate notifications based on calculation on this basis using now state
    let date = new Date();
    let rightNow = date.getTime();
    const [now, setNow] = useState(rightNow);

    //state for disappearing timer
    const [showTimer, setShowTimer] = useState(true);
    
    //useEffect for the countdown display
    useEffect(() => {
        let interval = setInterval(() => {
            //DON'T EVER REMOVE THIS CLEARINTERVAL
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
            //console.log('interval ran');
        }, 1000)

        //console.log('this is now ', now);

        //this cleanup function is what makes the interval clear and essentially makes the timer 00:00 and notification come through, in sync
        return () => {
            //THIS clearInterval CANNOT BE REMOVED
            clearInterval(interval);
        }
    }, [seconds]);

    //dynamic number for setting the notification alert based on the nudge time the user chose - can't use minutes as that state is updated above
    let timeAdd = resetMins * 60000;
    //console.log('this is minutes ', resetMins);
    //console.log('this is timeAdd ', timeAdd);

    //useEffect for setting minutes/seconds to zero - which ends the timer and triggers the button state, which in turn triggers notification
    useEffect(() => {
        function resets() {
            setMinutes(0);
            setSeconds(0);
            setImgBig(false);
            setShowTimer(true);
            // setNow(600000); this does work to change now, just unsure of whether required
            console.log('timeout ran')
        }

        const myTimeout = setTimeout(resets, (now + timeAdd) - now);
        //this cleanup function is what makes the timeout clear and stops it repeating
        return () => {
            clearTimeout(myTimeout);
        }
    }, [now]);


     //trigger by button click, resets the countdown for the nudge
    //needs to be -1 on mins otherwise does not show correctly
    function goAgain() {
        updateNow();
        setButton(false);
        setMinutes(resetMins - 1);
        setSeconds(59);
    }

    function updateNow() {
        let update = date.getTime();
        setNow(update);
    }

    //useEffect for making timer disappear and resizing img
    useEffect(() => {
        setTimeout(() => setShowTimer(false), 3000);
        setTimeout(() => setImgBig(true), 3000);
    }, [now])
    

    //to ensure timer display is in 00:00 format, else would get single digits
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="countdown-container">
            <div className={showTimer ? "countdown" : "countdown-invisible"}>
                {timerMinutes}:{timerSeconds}
            </div>

            {button === true ? 
            (<>
                <Notification />
                <div className="go-again-btns">
                    <button onClick={goAgain}>Set another nudge</button>
                    <button>
                        <Link to="/">I'm ok for now, thanks</Link>
                    </button>
                </div>
            </>)
            :
            (<></>)
            }
        </div>
    )
}

export default NewCountdown;