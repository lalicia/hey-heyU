import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import OptionsSlouch from "../src/pages/OptionsSlouch.js";
import OptionsWater from "../src/pages/OptionsWater.js";
import OptionsBreak from "../src/pages/OptionsBreak.js";
import OptionsPosture from "../src/pages/OptionsPosture.js";
// import Enabled from "../src/pages/Enabled.js";
// import SetupOptions from "../src/pages/SetupOptions.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/nudges-slouch" element={<OptionsSlouch />} />
        <Route path="/nudges-water" element={<OptionsWater />} />
        <Route path="/nudges-break" element={<OptionsBreak />} />
        <Route path="/nudges-posture" element={<OptionsPosture />} />
        {/* <Route path="/nudges" element={<SetupOptions />} /> */}
        {/* <Route path="/enabled" element={<Enabled />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
