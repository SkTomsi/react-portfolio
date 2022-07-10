import React from "react";
import Skills from "./Skills";
import "./About.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="about__container">
        <p>
          I'm a self-taught UI/UX and Graphic Designer who is now learning React
          JS and React Native. I'm pursuing my final-year in Computer
          Engineering Bachelor's Degree from Pillai College of Engineering,
          graduation in 2023.
        </p>
        <p>
          I have more than a year of experience in designing. I've worked as a
          freelance designer as well as helped many clients, colleagues get
          their ideas designed. I've also worked as a UX designer for both
          mobile and web platforms. I worked as a UI/UX designer for the
          official website of our collegiate festival Alegria.
        </p>
        <p>
          I have two years of graphic design expertise. As part of my career, I
          have worked on a variety of graphic design projects. For the year
          2022, I was the Graphic Head of our collegiate festival Alegria, and
          also the Graphic Head of Pillai College of Engineering's Student
          Council.
        </p>
      </div>

      <Skills />
    </div>
  );
};

export default About;
