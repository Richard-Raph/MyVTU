import React from "react";
import '../Home/Login.css'

function index() {
  return (
    <div className="general-div">
      <div className="slider">
        <div className="logo"><h1>LOgo</h1></div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Sign-UP</li>
            <li>Data Plan</li>
            <li>Airtime</li>
            <li>Pay Bills</li>
          </ul>
        </div>
        <div className="logout">
          <a href="#">Logout</a>
        </div>
      </div>
      <div className="main">
        <div className="one">one</div>
        <div className="two">
           <h1>this is where login form will be</h1>
        </div>
      </div>
    </div>
  );
}

export default index;
