import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { BsPerson, BsCart2, BsList } from "react-icons/bs";

import "./styles/navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header className={navbar ? "stay" : "stay active-color"}>
      <nav className={navbar ? "navbar" : "navbar active-width active-color"}>
        <a className="logo">
          <img src={logo} alt="logo" className="logo-img" />
          <span>Earthly</span>
        </a>
        <ul className="navlinks-container">
          <li className="nav-link">
            <BsPerson className="navicon" /> Account
          </li>
          <li className="nav-link">
            <BsCart2 className="navicon" />
            Cart
          </li>
        </ul>
        <BsList className="navicon hamburg" />
      </nav>
    </header>
  );
};

export default Navbar;
