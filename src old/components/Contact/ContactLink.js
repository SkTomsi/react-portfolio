import React from "react";
import "./ContactLink.scss";
const ContactLink = ({ Icon, link }) => {
  return (
    <div className="contact-link__container">
      <a href={link} target="_blank" rel="noreferrer">
        <Icon className="icon" />
      </a>
    </div>
  );
};

export default ContactLink;
