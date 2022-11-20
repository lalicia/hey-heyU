import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";

//import images HERE to hand as props 

//needs to HAND DOWN props to Enabled - minutes, repetitions, image
function SetupOptions() {
    const [minutes, setMinutes] = useState(0);
    const [repetitions, setRepetitions] = useState(0);
    const [image, setImage] = useState({});

    return (
        <div className="options-pg">

            <h2 className="back-home">
                <Link to="/">hey-heyU</Link>
            </h2>

            <div className="options-pg-contents">
                <section>
                    <h1>Options Page</h1>

                    <button className="to-countdown-btn">
                        <Link to="/enabled">
                        That's great, let's go
                        </Link>
                    </button>
                </section>
                
                <div className="option-img"></div>
            </div>
        </div>
    )
}

export default SetupOptions;