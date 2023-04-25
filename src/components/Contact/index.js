import React from "react";
import ContactLink from "./ContactLink";

/* STYLING */
import "./ContactSection.scss";

/* ICONS */
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

/*  */

import { Element } from "react-scroll";

const ContactSection = () => {
  return (
    <Element name="contact">
      <div className="contact__container">
        <div className="contact__intro">
          <h1>sold yet?</h1>
          <p>
            Thanks for stopping by, I’m currently looking to join a new team of
            creative designers and developers. If you think we might be a good
            fit for one another, please do connect with me online
          </p>
        </div>
        <div className="contact-links" id="contact">
          <ContactLink
            Icon={FaLinkedinIn}
            link="https://www.linkedin.com/in/tomcyt/"
          />
          <ContactLink
            Icon={FaBehance}
            link="https://www.behance.net/tomcythomas"
          />
          <ContactLink Icon={FaDribbble} link="https://dribbble.com/Tomcy48" />
          <ContactLink Icon={FaGithub} link="https://github.com/TomcyT" />
          <ContactLink Icon={FaTwitter} link="https://twitter.com/Tomcy48" />
        </div>
      </div>
    </Element>
  );
};

export default ContactSection;
