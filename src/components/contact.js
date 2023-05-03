import React from "react";

/* STYLING */
import styles from "@/styles/Contact.module.scss";
/* ICONS */
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

/*  */

import { Element } from "react-scroll";

const ContactLink = ({ Icon, link }) => {
  return (
    <div className={styles.contactLinkContainer}>
      <a href={link} target="_blank" rel="noreferrer">
        <Icon className={styles.icon} />
      </a>
    </div>
  );
};

const ContactSection = () => {
  return (
    <Element name={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.contactIntro}>
          <h1>sold yet?</h1>
          <p>
            Thanks for stopping by, I’m currently looking to join a new team of
            creative designers and developers. If you think we might be a good
            fit for one another, please do connect with me online
          </p>
        </div>
        <div className={styles.contactLinks} id="contact">
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
