import React from "react";
import LogoLight from "../../assets/images/Silicon logo.svg";
import LogoDark from "../../assets/images/Silicon logo darkMode.svg";
import DarkModeSwitch from "../DarkModeSwitch";
import HamburgerMenu from "../HamburgerMenu";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      {/* <!-- Container --> */}
      <div className="container">
        {/* <!-- Logo --> */}
        <Link id="logo" to="/">
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
        </Link>
        {/* <!-- Navbar --> */}
        <nav id="main-menu" className="navbar">
          <NavLink className="nav-link" to="/#features">
            Features
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </nav>
        <DarkModeSwitch />
        {/* <!-- Sign in/ Up  --> */}
        <a id="signin" className="btn-primary" href="#">
          <i className="fa-thin fa-user"></i>
          <span>Sign in / Up</span>
        </a>
        <HamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
