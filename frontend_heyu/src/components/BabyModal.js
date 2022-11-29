import React from "react";

function BabyModal({setBabyModal}) {

    return (
        <div className="babymodal-container">
            
            <div className="babymodal-disclaimer">

                <div className="babymodal-x-box">
                    <div className="babymodal-xbtn">
                        <button onClick={() => setBabyModal(false)}>x</button>
                    </div>
                </div>

                <p className="babymodal-disclaimer-text">
                    <i>Please note - if your browser is set to block notifications we may not have been able to ask permission.
                        <br></br>
                    If you didn't get a request (or a message that notifications are already allowed), you can update the setting manually in your browser.
                        <br>
                        </br>
                    You can usually access this by right-clicking the icon in the address bar, directly preceeding the website address.
                    </i>
                </p>
                    
                <button className="babymodal-done-btn" onClick={() => setBabyModal(false)}>
                    Close
                </button>

            </div>

    </div>
    )
};

export default BabyModal;