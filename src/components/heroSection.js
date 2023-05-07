import React from "react";

import styles from "@/styles/HeroSection.module.scss";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className={styles.heroSection} id="hero-section">
      <div className={styles.heroContainer}>
        <div className={styles.heroIntro}>
          <p>Hi! my name is Tomcy, I love</p>
          <h1>
            building <span className={styles.heroColor}>products</span> and{" "}
            <span className={styles.heroColor2}>experiences</span>.
          </h1>
          <div className={styles.heroShortIntro}>
            <p>
              Final Year Computer Engineering student from Mumbai, working as a
              freelance User Experience Designer since a year and currently
              building cool stuff with ReactJS and React Native
            </p>
          </div>
        </div>
        <div className={styles.heroCta}>
          <Link to="uiux" smooth={true} className={styles.heroCtaButtonLink}>
            <button>Check out my works!</button>
          </Link>
          <a
            href="https://smallify.vercel.app/resume"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resume}
          >
            View my Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
