// ham yahan fuction based component banayenge... just type "rfc" and press enter
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import logo1 from './sun.svg';
import logo2 from './moon.svg';
// import { useState } from 'react';

// hamne Navbar naam se ek component banaya h... aur ab ham ise bas import kar lenge apne app.js 

export default function Navbar(ek_variable_ka_naam) {

  return (
    // ab agar ham is component me chijoon ko variable bhi rekh skate h
    <>
      <nav className={`navbar navbar-expand-lg navbar-${ek_variable_ka_naam.mode} bg-${ek_variable_ka_naam.mode}`}>
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">{ek_variable_ka_naam.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">{ek_variable_ka_naam.Sachaie}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Wordle">Wordle</Link>
              </li>
            </ul>
            {/* <div className={`form-check form-switch text-${ek_variable_ka_naam.mode ==='light' ?'dark': 'light'}`}>
                <input className="form-check-input" onClick={ek_variable_ka_naam.tggmode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  {
                    ek_variable_ka_naam.mode ==='light' ?'Enable Dark Mode': 'Disable Dark Mode'
                  }
                </label>
            </div> */}
            <button className="btn btn-primary " onClick={ek_variable_ka_naam.tggmode}>
              {ek_variable_ka_naam.mode==='light' ? <img src={logo2} style={{width: "30px",height: "30px"}} alt="Dark Mode"/> 

              : 

              <img src={logo1} style={{width: "30px",height: "30px"}} alt="Light Mode"/> }
              
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

// ye alag se use hua h... taki ham title aur Sachcaie me hamesa string pass karen
// so this just for saftey

// what is the use of is required?
// is required ka matlab h ki agar ham title aur Sachcaie me kuch nahi pass karenge to ye error dega
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  Sachaie: PropTypes.string.isRequired
}


// ye default value h... agar ham title aur Sachcaie me kuch nahi pass karenge to ye value use hogi
// to tum phele se set kar sakte ho ki tumko defalt me kya chahiye
Navbar.defaultProps = {
  title: "agar tum title nahi pass karoge to ye title use hoga",
  Sachaie: "agar tum kuch pass nahi karoge to defalt ye use hoga"
}
