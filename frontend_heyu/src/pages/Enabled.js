import React from "react";
import {Link} from "react-router-dom";

import Countdown from "../components/Countdown.js";

//this is going to need props from SetupOptions - (minutes, repetitions?) image
function Enabled({image}) {



    return (
        <div className="enabled-pg">

            <h2 className="back-home">
                <Link to="/">hey-heyU</Link>
            </h2>

            <div className="options-pg-contents">
                <section>
                    <h1>Enabled Page</h1>
                    <Countdown />
                </section>
                
                <div className="option-img"></div>
            </div>
        </div>
    )
}

export default Enabled;