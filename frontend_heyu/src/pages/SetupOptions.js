import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";

import Countdown from "../components/Countdown.js"; 
//import images HERE to hand as props

//needs to HAND DOWN props to Enabled/Countdown - minutes, repetitions, image
function SetupOptions() {
    const [minutes, setMinutes] = useState(0);
    const [repetitions, setRepetitions] = useState(0);
    const [image, setImage] = useState({});

    const [start, setStart] = useState(false);

    function onClick() {
        setStart(true);
    };

    return (
        <div className="options-pg">

            {start === false ? 
            (<>
                <h2 className="back-home">
                    <Link to="/">hey-heyU</Link>
                </h2>

                <div className="options-pg-contents">
                    <section>
                        <h1>Options Page</h1>

                        <button className="to-countdown-btn" onClick={onClick}>
                            That's great, let's go
                        </button>
                    </section>
                
                    <div className="option-img"></div>
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
                    <div className="option-img"></div>
                </>)}    
        </div>
    )
}

export default SetupOptions;