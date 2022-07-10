import React from "react";
import "./navbar.styles.scss";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import TDLogo from "../../assets/Logo.png";
import TDMobile from "../../assets/MobileLogo.png";
const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <div className="navbar__container">
        <div className="navbar__Logo">
          <LinkR className="navbar__logo-link" to="/">
            <img src={TDLogo} alt="Logo" />
            <div className="mobileLogo">
              <img src={TDMobile} alt="Logo" />
            </div>
          </LinkR>
        </div>
        <div className="navbar__Links">
          <LinkS
            /* class="active" */ to="works-section"
            smooth={true}
            duration="1000"
          >
            Works
          </LinkS>
          <LinkS to="about" smooth={true} duration="1000">
            About
          </LinkS>
          <LinkS to="contact" smooth={true} duration="1000">
            Contact
          </LinkS>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
