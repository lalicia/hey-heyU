import React from "react";
// import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Home() { 
  const navigate = useNavigate();

  //this function is passed to the dropdown so that whatever option is clicked, the value is used to determine which page to navigate to. There's a second-long timeout just to give a tiny delay for better UX
  function handleClick(e) {
    console.log(e.target.value);
    if (e.target.value === "hydration") {
      setTimeout(() => navigate("/options-water"), 1000)
    }
    if (e.target.value === "stretching") {
      setTimeout(() => navigate("/options-slouch"), 1000)
    }
    if (e.target.value === "break") {
      setTimeout(() => navigate("/options-break"), 1000)
    }
  }
  
  return (
    <main>
      <div className="circle"></div>
      
      <section>
        <h1>hey - heyU</h1>
        <h3>
          We all need some help remembering the basics - so choose what you'd
          like to be reminded about, and then we can set some nudges for you
        </h3>
        {/* <label htmlFor="alarms"> Choose</label> */}
        <select name="alarms" onClick={handleClick}>
          <option value="" defaultValue>
            WHAT CAN WE NUDGE YOU FOR?
          </option>
          <option value="hydration" >Hydration</option>
          <option value="stretching" >Stretching</option>
          <option value="break" >Break</option>
        </select>
      </section>
    </main>
  );
}

export default Home;
