import React from "react";
import {useState} from "react";


function Modal({setModal}) {

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
        <div className="modal-container">
            <div className="modal-xbtn">
                <button onClick={() => setModal(false)}>x</button>
            </div>
        
            <div className="modal-msg">
                <h3 className="modal-msg-text">In order fo us to nudge you, we need permission to send notifications - please click <button onClick={permission}>here</button> to set the permissions</h3>
                <button onClick={() => setModal(false)}>Done, back to the nudges</button>
            </div>
          
            <div className="modal-disclaimer">
                <p className="modal-disclaimer-text">
                    <i>Please note that if your browser is set to block notifications, we may not have been able to ask permission. If you didn't get a request, you can update the setting manually in your browser.
                    <br>
                    </br>
                    You can usually access this by right-clicking the icon in the address bar, directly preceeding the website address.
                    </i>
                </p>
            </div>
        </div>
    </div>
    )
}

export default Modal;