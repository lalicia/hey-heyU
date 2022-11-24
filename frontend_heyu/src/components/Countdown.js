import React from "react";
import {useState, useEffect} from "react";

//this is going to need props from SetupOptions - minutes, repetitions, image
function Countdown({minutes, setMinutes}) {
    const [seconds, setSeconds] = useState(59);

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
                } else {
                    setMinutes(minutes);
                    setSeconds(59);
                }
                //then also just counting down seconds if they're not at zero
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000)
    }, [seconds]);

    //to ensure timer display is in 00:00 format, else would get single digits
    const timerMinutes = minutes < 10 ? `0${minutes - 1}` : minutes - 1;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="countdown-container">
            <div className="countdown">
                {timerMinutes}:{timerSeconds}
            </div>
        </div>
    )
}

export default Countdown;