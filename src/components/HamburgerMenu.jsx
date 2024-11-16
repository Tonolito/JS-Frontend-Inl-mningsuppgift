import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-container">
      <button className="btn-mobile-menu" onClick={toggleMenu}>
        {isOpen ? (
          <i className="fa-regular fa-xmark"></i>
        ) : (
          <i className="fa-regular fa-bars"></i>
        )}
      </button>

      {isOpen && (
        <nav className="mobile-menu">
          <ul className="mobile-menu-items">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;
