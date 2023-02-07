import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = (props) => {
  return (
    <div className="navDiv">
      <div className="navLeft">
        <img
          src={require("../assets/gcetlogo.png")}
          alt=""
          className="gcetLogo"
        />
        <img
          src={require("../assets/cvmulogo.png")}
          alt=""
          className="cvmuLogo"
        />
      </div>
      <div className="navRight">
        <ul className="navList">
          <Link
            to="/"
            className={props.menu === "/" ? "navItem activeNav" : "navItem"}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={
              props.menu === "/about" ? "navItem activeNav" : "navItem"
            }
          >
            About
          </Link>
          <Link
            to="/events"
            className={
              props.menu === "/events" ? "navItem activeNav" : "navItem"
            }
          >
            Events
          </Link>
          <Link
            to="/team"
            className={props.menu === "/team" ? "navItem activeNav" : "navItem"}
          >
            Core Team
          </Link>
          <Link
            to="/contact"
            className={
              props.menu === "/contact" ? "navItem activeNav" : "navItem"
            }
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
