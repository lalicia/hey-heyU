import React from "react";
// import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import timerlight2color from "../assets/timerlight2color.png";

function Home() { 
  const navigate = useNavigate();

  //this function is passed to the dropdown so that whatever option is clicked, the value is used to determine which page to navigate to. There's a second-long timeout just to give a tiny delay for better UX
  function handleClick(e) {
    console.log(e.target.value);
    if (e.target.value === "posture") {
      setTimeout(() => navigate("/nudges-posture"), 1000)
    }
    if (e.target.value === "hydration") {
      setTimeout(() => navigate("/nudges-water"), 1000)
    }
    if (e.target.value === "stretching") {
      setTimeout(() => navigate("/nudges-slouch"), 1000)
    }
    if (e.target.value === "break") {
      setTimeout(() => navigate("/nudges-break"), 1000)
    }
    // if (e.target.value === "break" || e.target.value === "stretching" || e.target.value === "hydration") {
    //   setTimeout(() => navigate("/nudges"), 1000)
    // }
  }
  
  return (
    <div className="home-pg">
      {/* <RequestNotification /> */}
      <div className="home-img">
        <img className="home-timer-img" src={timerlight2color} alt="a stopwatch"></img>  
      </div>
      
      <section>
        <h1>hey - heyU</h1>
        {/* <h3>In order fo us to send nudges, we need permission to send notifications - please click <button onClick={permission}>here</button> to allow permissions</h3> */}
        <h3>
          We all need some help remembering the basics - so choose what you'd like to be reminded about, and then we can give you a nudge
        </h3>
        
        {/* <label htmlFor="alarms"> Choose</label> */}
        {/*TRYING TO CHANGE COLOR ON HOVER - WORKED BUT NOT FOR DEFAULT OPTION
        onFocus={(e) => e.target.size = 4} onBlur={(e) => e.target.size = 1} onChange={(e) => {e.target.size = 1; e.target.blur()}}*/}
        <select name="alarms" onClick={handleClick}>
          <option value="" defaultValue hidden className="def-option">
            What can we nudge you for?
          </option>
          <option value="posture" className="option">Posture</option>
          <option value="hydration" className="option">Hydration</option>
          <option value="stretching" className="option">Stretching</option>
          <option value="break" className="option">Break</option>
        </select>
      </section>
    </div>
  );
}

export default Home;
