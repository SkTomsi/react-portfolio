import React from "react";
import "./navbar.styles.scss";
import { Link } from "react-scroll";
import TDLogo from "../../assets/tomc.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__Logo">
          <img src={TDLogo} alt="Logo" />
        </div>
        <div className="navbar__Links">
          <Link to="works">Works</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
