// import React from 'react'
import './Navbar.css';

import { SlCallOut, SlEnvolope } from "react-icons/sl";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <section className="row top_header">
            <div className="container">
                <div className="row">
                    <div className="wc_msg">Welcome to MyVTU</div>
                    <div className="handles">
                        <ul className="nav nav-pills">
                            <li><a href="tel:+2349033935712">
                                <i><SlCallOut /></i>
                                +234-90-3393-5712
                            </a></li>
                            <li><a href="mailto:info@domainame.com">
                                <i><SlEnvolope /></i>
                                rapharm7207@gmail.com
                            </a></li>
                            <li><a href="https://facebook.com/domainame">
                                <i><FaFacebook color='blue' /></i>
                            </a></li>
                            <li><a href="https://twitter.com/domainame">
                                <i><FaTwitter color='blue' /></i>
                            </a></li>
                            <li><a href="https://instagram.com/domainame">
                                <i><FaInstagram color='blue' /></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <nav className="navbar fluid_header centered">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href=""><img  src="../../../assets/images/myvtu-logo.png" alt="Logo" /></a>
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main_navigation" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="main_navigation">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a href="#">Dashboard</a>
                        </li>
                        <li className=" dropdown">
                            <a href="#" >Pricing</a>
                        </li>
                        <li className="login-link" style={{ fontWeight: "bolder" }}>
                            <a className="login_popup_btn cursor-pointer">Login</a>
                        </li>
                        <li id="signup" className="login-link" style={{ fontWeight: "bolder" }}>
                            <a className="register_popup_btn cursor-pointer" href="#">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>   
    </div>
  )
}

export default Navbar