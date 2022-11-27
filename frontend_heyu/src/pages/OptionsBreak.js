import React from "react";
// import {Link} from "react-router-dom";

import SetupOptions from "./SetupOptions.js";

//import images HERE to hand as props
import getBreak from "../assets/breaklight.png";

function OptionsBreak() {



    return (
        <SetupOptions image={getBreak} title={"Break Nudges"} subject={"take a break"}/>
    )
}

export default OptionsBreak;