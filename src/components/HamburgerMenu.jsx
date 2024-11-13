import React, { useState } from "react";

function HamburgerMenu() {
  // Manage the open/close state of the menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Button */}
      <button className="btn-mobile-menu" onClick={toggleMenu}>
        <i className="fa-regular fa-bars"></i>
      </button>

      {/* Menu (conditionally rendered based on the isOpen state) */}
      {isOpen && (
        <nav className="mobile-menu">
          <button onClick={toggleMenu} className="close-menu-btn">
            X
          </button>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;
