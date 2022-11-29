import React from "react";
import {useState} from "react";

import BabyModal from "./BabyModal.js";

function Modal({setModal}) {
    const [babyModal, setBabyModal] = useState(false);

    //this function checks/requests permission to send notifications - is called when button clicked
    function permission() {
        if (!("Notification" in window)) {
            // Check if the browser supports notifications
            alert("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {
            // Check whether notification permissions have already been granted;
            // if so, create a notification
            const notification = new Notification("Notifications are already allowed");
        // …
        } else if (Notification.permission !== "denied") {
            // We need to ask the user for permission
            Notification.requestPermission().then((permission) => {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                    const notification = new Notification("Thank you :)");
                // …
                }
            });
        }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
    }

    return (
        <div className="modalbg">

            <div className="modal-x-box">
                <div className="modal-xbtn">
                    <button onClick={() => setModal(false)}>x</button>
                </div>
            </div>

        <div className="modal-container">
            {babyModal === true ? <BabyModal setBabyModal={setBabyModal}/> : <></>}

            <div className="modal-msg">
                <h3 className="modal-msg-text">In order for us to nudge you we need to send notifications - please click <button onClick={permission}>here</button> to set permissions</h3>
                <button className="modal-done-btn" onClick={() => setModal(false)}>Done, back to the nudges</button>
            </div>
          
            <i><button className="modal-to-babymodal-btn" onClick={() => setBabyModal(true)}>Er - nothing happened?</button></i>
            
        </div>
    </div>
    )
}

export default Modal;