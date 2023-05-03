import React from "react";
import "./Footer.scss";

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <div className="Footer">
      &copy; Copyright {currYear}, designed & developed by{" "}
      <a href="https://github.com/TomcyT" target="_blank" rel="noreferrer">
        Tomcy Thomas
      </a>
    </div>
  );
}

export default Footer;
