import React from "react";
// import {Link} from "react-router-dom";

import SetupOptions from "./SetupOptions.js";

//import images HERE to hand as props
import posture from "../assets/posture.png";

function OptionsPosture() {



    return (
        <SetupOptions image={posture} title={"Posture Nudges"} subject={"check your posture"}/>
    )
}

export default OptionsPosture;