import React from "react";
import "./About.scss";

import Me from "../../assets/Tomcy.jpg";

const About = () => {
  return (
    <div className="details__section">
      <div className="about">
        <h1>About Me</h1>
        <div className="about__container">
          <div className="about__info">
            <p>
              I'm a self-taught UI/UX and Graphic Designer who is now learning
              React JS and React Native. I'm pursuing my Bachelor's Degree in
              Computer Engineering from Pillai College of Engineering,
              graduation in 2023.
            </p>
            <p>
              I have more than a year of experience in User Experience
              designing. I've worked as a freelance designer and helped many
              clients, colleagues get their ideas designed. I worked as a UI/UX
              designer for the official website of our collegiate festival
              Alegria.
            </p>
            <p>
              I have two years of graphic design expertise. As part of my
              career, I have worked on a variety of graphic design projects. For
              the year 2022, I was the Graphic Head of our collegiate festival
              Alegria, and also the Graphic Head of Pillai College of
              Engineering's Student Council.
            </p>
          </div>

          <div className="about__image">
            <img src={Me} alt="" />
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="skills__container">
          <h1>Skills</h1>
          <div className="skill__cards">
            <div className="skill__card" style={{ backgroundColor: "#cf92fb" }}>
              <h2>Expertise</h2>
              <p>UI UX Design</p>
              <p>Graphic Design</p>
              <p>Development</p>
            </div>
            <div className="skill__card" style={{ backgroundColor: "#b44bff" }}>
              <h2>Tech Stack</h2>
              <p>React Js</p>
              <p>Javascript</p>
              <p>React Native</p>
              <p>PHP</p>
              <p>CSS</p>
              <p>SASS</p>
              <p>Styled Components</p>
              <p>Redux</p>
              <p>MySql</p>
              <p>Firebase</p>
            </div>

            <div className="skill__card" style={{ backgroundColor: "#911ae5" }}>
              <h2>Design Tools</h2>
              <p>Figma</p>
              <p>Photoshop</p>
              <p>Illustrator</p>
            </div>
          </div>
          {/*  <div className="skills__type">
            <div className="skills__list">
              <h2>Tech Stack</h2>
              <ul>
                <li>React Js</li>
                <li>Javascript</li>
                <li>React Native</li>
                <li>PHP</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>Styled Components</li>
                <li>Redux</li>
                <li>MySql</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="skills__list">
              <h2>Design Tools</h2>
              <ul>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
              </ul>
            </div>
            <div className="skills__list">
              <h2>Expertise</h2>
              <ul>
                <li>UI UX Design</li>
                <li>Graphic Design</li>
                <li>Development</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
