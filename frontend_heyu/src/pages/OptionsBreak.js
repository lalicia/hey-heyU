import React from "react";
import {Link} from "react-router-dom";

import SetupOptions from "./SetupOptions.js";

//import images HERE to hand as props
import getBreak from "../assets/break.png";

function OptionsBreak() {



    return (
        <SetupOptions image={getBreak}/>
    )
}

export default OptionsBreak;