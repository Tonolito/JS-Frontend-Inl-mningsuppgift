import React from "react";
import LogoLight from "../../assets/images/Silicon logo.svg";
import LogoDark from "../../assets/images/Silicon logo darkMode.svg";
import DarkModeSwitch from "../DarkModeSwitch";
function Header() {
  return (
    <header>
      {/* <!-- Container --> */}
      <div className="container">
        {/* <!-- Logo --> */}
        <a id="logo" href="index.html">
          <img
            className="lightMode-logo"
            src={LogoLight}
            alt="Silicon Logotype"
          />
          <img
            className="darkMode-logo"
            src={LogoDark}
            alt="Silicon Logotype"
          />
        </a>
        {/* <!-- Navbar --> */}
        <nav id="main-menu" className="navbar">
          <a className="nav-link" href="#">
            Features
          </a>
        </nav>
        <DarkModeSwitch />
        {/* <!-- Sign in/ Up  --> */}
        <a id="signin" className="btn-primary" href="#">
          <i className="fa-thin fa-user"></i>
          <span>Sign in / Up</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
