import React from "react";
// import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

//import RequestNotification from "../components/RequestNotification.js";

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

  // //this function checks/requests permission to send notifications - is called when button clicked
  // function permission() {
  //   if (!("Notification" in window)) {
  //     // Check if the browser supports notifications
  //     alert("This browser does not support desktop notification");
  //   } else if (Notification.permission === "granted") {
  //     // Check whether notification permissions have already been granted;
  //     // if so, create a notification
  //     const notification = new Notification("Notifications are already allowed");
  //     // …
  //   } else if (Notification.permission !== "denied") {
  //     // We need to ask the user for permission
  //     Notification.requestPermission().then((permission) => {
  //       // If the user accepts, let's create a notification
  //       if (permission === "granted") {
  //         const notification = new Notification("Thank you :)");
  //         // …
  //       }
  //     });
  //   }
  
  //   // At last, if the user has denied notifications, and you
  //   // want to be respectful there is no need to bother them anymore.
  // }
  
  return (
    <div className="home-pg">
      {/* <RequestNotification /> */}
      <div className="home-img"></div>
      
      <section>
        <h1>hey - heyU</h1>
        {/* <h3>In order fo us to send nudges, we need permission to send notifications - please click <button onClick={permission}>here</button> to allow permissions</h3> */}
        <h3>
          We all need some help remembering the basics - so choose what you'd like to be reminded about, and then we can set some nudges for you
        </h3>
        
        {/* <label htmlFor="alarms"> Choose</label> */}
        <select name="alarms" onClick={handleClick}>
          <option value="" defaultValue className="def-option">
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
