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

            //this worked as if/else so leaving in place
            if ((minutes === 14 && seconds === 52) || 
                (minutes === 29 && seconds === 52) || 
                (minutes === 44 && seconds === 52) || 
                (minutes === 59 && seconds === 52)) {
                    clearInterval(interval);
                    console.log('the 10 second ci ran')
                }

            else if (seconds === 0 && minutes !== 0) {
                //to handle going down in minutes and restarting seconds
                setSeconds(59);
                setMinutes(minutes - 1);
            } 
            else if (seconds === 0 && minutes === 0) {
                    clearInterval(interval);
                    console.log('the mins/secs = 0 ci ran')
                    // setButton(true);
                    // console.log('this setButton ran')
                    // setShowTimer(true);
                    // console.log('this setShowTimer ran')
            } 
            else {
                setSeconds(seconds - 1);
            }
            console.log('interval ran');
        }, 1000)
        //console.log('this is now ', now);

        //this cleanup function is what makes the interval clear and essentially makes the timer 00:00 and notification come through, in sync
        return () => {
            //THIS clearInterval CANNOT BE REMOVED, do not put anything else it will break
            clearInterval(interval);
        }
    }, [seconds, minutes]);

    //dynamic number for setting the notification alert based on the nudge time the user chose - can't use minutes as that state is updated above
    let timeAdd = resetMins * 60000;

    //CUT BECAUSE SOMETHING IS BREAKING MY RESET NUDGE
    // setImgBig(false);
    // setShowTimer(true);

    //useEffect for setting minutes/seconds to zero - which ends the timer and triggers the button state, which in turn triggers notification
    useEffect(() => {
        function resets() {
            // setMinutes(0);
            // setSeconds(0);
            setButton(true);
            setShowTimer(true);
            setImgBig(false);
            console.log('timeout ran');
        }

        const myTimeout = setTimeout(resets, (now + timeAdd) - now);
        //this cleanup function is what makes the timeout clear and stops it repeating
        return () => {
            console.log('button state =',button);
            clearTimeout(myTimeout);
        }
    }, [now]);


     //trigger by button click, resets the countdown for the nudge
    //needs to be -1 on mins otherwise does not show correctly
    function goAgain() {
        updateNow();
        setMinutes(resetMins - 1);
        setSeconds(59);
        setButton(false);
        setShowTimer(false);
        setImgBig(true);
    }

    function updateNow() {
        let update = date.getTime();
        setNow(update);
        console.log('now updated');
    }

    // useEffect for making timer disappear and resizing img
    useEffect(() => {
        setTimeout(() => setShowTimer(false), 2000);
        setTimeout(() => setImgBig(true), 2000);
        // console.log('setTimeout to disappear timer ran')
    }, [])

    useEffect(() => {
        setTimeout(() => setMinutes(0), 12000);
        // console.log('setTimeout to zero minutes ran')
    }, [now])
    
    useEffect(() => {
        setTimeout(() => setSeconds(0), 12000);
        // console.log('setTimeout to zero seconds ran')
    }, [now])
    

    //to ensure timer display is in 00:00 format, else would get single digits
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="countdown-container">
            <p className={showTimer ? "active-msg-invisible" : "active-msg"}>
                <i>Just leave this tab open and we'll do the rest</i>
            </p>

            <div className={showTimer ? "countdown" : "countdown-invisible"}>
                {timerMinutes}:{timerSeconds}
            </div>

            {button === true ? 
            (<>
                <Notification />
                <div className="go-again-btns">
                    <button className="countdown-btns" onClick={goAgain}>Set another nudge</button>
                    <button className="countdown-btns">
                        <Link to="/">I'm ok for now</Link>
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