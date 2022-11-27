import React from "react";

import SetupOptions from "./SetupOptions.js";

//import images HERE to hand as props
import water from "../assets/hydrationlight.png";

function OptionsWater() {



    return (
        <SetupOptions image={water} title={"Hydration Nudges"} subject={"drink some water"}/>
    )
}

export default OptionsWater;