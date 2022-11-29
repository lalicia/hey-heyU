import React from "react";
// import {Link} from "react-router-dom";

import SetupOptions from "./SetupOptions.js";

//import images HERE to hand as props
import posturelight from "../assets/posturelight.png";

function OptionsPosture() {



    return (
        <SetupOptions image={posturelight} title={"Posture Nudges"} subject={"check your posture"}/>
    )
}

export default OptionsPosture;