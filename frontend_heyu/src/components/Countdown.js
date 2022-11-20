import React from "react";
import {useState, useEffect} from "react";

//this is going to need props from SetupOptions - minutes, repetitions, image
function Countdown({minutes, setMinutes}) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);

            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else {
                    setMinutes(minutes);
                    setSeconds(59);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000)
    }, [seconds]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
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