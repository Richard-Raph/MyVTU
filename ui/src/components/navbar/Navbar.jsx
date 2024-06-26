import { Link } from "react-router-dom";
import AuthOverlay from "../AuthOverlay";
import { useState } from "react";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
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
        <div className="container flex items-center justify-between">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand z-0">
              <img
                src="../../../assets/images/myvtu-logo.png"
                alt="MyVTU Logo"
                width={80}
              />
            </Link>
          </div>

          <ul className="nav navbar-nav navbar-right">
            <li id="signup" className="login-link" style={{ backgroundColor: "#216ea7", fontWeight: "bolder" }}>
              <a className="register_popup_btn cursor-pointer" onClick={openModal}>Login</a>
            </li>
          </ul>
          {showModal && <AuthOverlay onClose={openModal} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
