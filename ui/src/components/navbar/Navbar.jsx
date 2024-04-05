import { Link } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import { useState } from "react";

const Navbar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const openLoginModal = () => {
    setLoginOpen(true);
    setRegisterOpen(false);
  };

  const openRegisterModal = () => {
    setRegisterOpen(true);
    setLoginOpen(false);
  };

  const closeModals = () => {
    setLoginOpen(false);
    setRegisterOpen(false);
  };

  return (
    <div>
      <section className="row top_header">
        <div className="container">
          <div className="row overflow-auto lg:overflow-hidden">
            <div className="col-sm-6 wc_msg">Welcome to MyVTU</div>
            <div className="col-sm-6">
              <ul className="nav nav-pills">
                <li>
                  <a href="tel:+2349033935712">
                    <i className="icon-call-out"></i>+234-90-3393-5712
                  </a>
                </li>
                <li>
                  <a href="mailto:info@domainame.com">
                    <i className="icon-envelope"></i>rapharm7207@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/domainame">
                    <i className="fab fa-facebook text-blue-600"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/domainame">
                    <i className="fab fa-twitter text-blue-600"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/domainame">
                    <i className="fab fa-instagram text-blue-600"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <nav className="navbar navbar-default navbar-static-top fluid_header centered affix-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img
                src="../../../assets/images/myvtu-logo.png"
                alt="MyVTU Logo"
                width={80}
              />
            </Link>
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#main_navigation"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="main_navigation">
            <ul className="nav navbar-nav navbar-right">
              <li className=" hidden dropdown active">
                <a href="/" className="dropdown-toggle">
                  home
                </a>
              </li>
              <li className=" hidden dropdown">
                <a
                  href="#"
                  className="data_btn dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  VTU
                </a>
              </li>
              <li className=" hidden dropdown">
                <a
                  href="#"
                  className="electricity_btn dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  Electricity
                </a>
              </li>
              <li className=" hidden dropdown">
                <a
                  href="#"
                  className="cable_btn dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  Cable TV
                </a>
              </li>
              <li className="dropdown">
                <a href="/dashboard/index.html">Dashboard</a>
              </li>

              <li className=" dropdown">
                <a href="/Pricing">Pricing</a>
              </li>
              
              <li id="signup" className="login-link" style={{ backgroundColor: "#216ea7", fontWeight: "bolder" }}>
                <a className="register_popup_btn cursor-pointer" onClick={openLoginModal}>Login</a>
              </li>
            </ul>
          </div>
          {isLoginOpen && <Login onClose={closeModals} />}
          {isRegisterOpen && <Register onClose={closeModals} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;