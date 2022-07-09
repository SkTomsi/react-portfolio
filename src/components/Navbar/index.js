import React from "react";
import "./navbar.styles.scss";
import { Link } from "react-scroll";
import TDLogo from "../../assets/Logo.png";
import TDMobile from "../../assets/MobileLogo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__Logo">
          <img src={TDLogo} alt="Logo" />
          <div className="mobileLogo">
            <img src={TDMobile} alt="Logo" />
          </div>
        </div>
        <div className="navbar__Links">
          <Link class="active" to="works">
            Works
          </Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
