// import logo from './logo.svg';
// import './App.css';
import './Appa.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React from 'react'
import { useState } from 'react';
import Wordle from './components/Wordle';
import Alert from './components/Alert';

// import {
//   // ham BrowserRouter naam se router ko pukaar sakta ha
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
//   //  upar ke sare chije hamne "react router dom se import kiya h"
// } from "react-router-dom";

// new version me switch ka naam replace kar dia h with Routes

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const togglemode = () => {
    if (mode === 'light') {

      setmode('dark');
      document.body.style.backgroundColor = '#0f0f41';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  return (
    <>
      <Router>
        <Navbar title="Textutils" Sachaie="About" mode={mode} tggmode={togglemode} />
        <Alert Alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route exact path="/About"
          element={< About mode = {mode} />}>
          </Route>
          <Route exact path="/Wordle"element={<Wordle showAlert={showAlert} mode={mode} />}></Route>
            <Route exact path="/"
              element={<Textform showAlert={showAlert} Heading="Enter the Text to analyze below" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
