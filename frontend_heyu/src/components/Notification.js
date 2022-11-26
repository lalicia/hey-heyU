import React from "react";
import {useState} from "react";
import {Component} from "react";

var notification;

class SimpleNotification extends Component {
  // button(props) {
  //   super(props);
  //   this.state = {
  //     fakeButton: false
  //   };
  // }
  // _button = () => () => {
  //   const [fakeButton, setFakeButton] = useState(false);

  //   return <div>{ fakeButton }</div>
  // }

    //THIS is start of tested working code
    constructor() {
      super();
      this.showNotification = this.showNotification.bind(this);
    //   onClick={onClick}; importing this made it work but not correctly - replaced the start countdown button
    }

    //checks that Notification API supported in the browser, and if so asks permission to send them  
    componentDidMount() {
        if (!("Notification" in window)) {
          console.log("This browser does not support desktop notification");
        } else {
            Notification.requestPermission();
          }
    }

    showNotification() {
        var options = {
            body: "*nudge*",
            icon: "",
            }
        notification = new Notification("hey-heyu", options);
    }

    closeNotification() {
        notification.close();
    }

  render() {
      return (
      <>
        {this.showNotification()}
      </>
      )
      
    // {fakeButton === true ? (<>{this.showNotification()}</>) : (<>{this.componentDidMount()}</>)}
        //THIS is the tested working code
        

    //THIS was code with example but we didn't want as we're not using a button
    //   <div>
    //     <button onClick={this.showNotification}>
    //       Click to show notification
    //     </button>
    //   </div>
  }

}

export default SimpleNotification;