import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/About.module.scss";
import Me from "../../public/images/Tomcy.jpg";

export default function About() {
  return (
    <>
      <main>
        <div className={styles.detailsSection}>
          <div className={styles.about}>
            <h1>About Me</h1>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutInfo}>
                <p>
                  I&#39;m a self-taught UI/UX and Graphic Designer who is now
                  learning React JS and React Native. I&#39;m pursuing my
                  Bachelor&#39;s Degree in Computer Engineering from Pillai
                  College of Engineering, graduation in 2023.
                </p>
                <p>
                  I have more than a year of experience in User Experience
                  designing. I&#39;ve worked as a freelance designer and helped
                  many clients, colleagues get their ideas designed. I worked as
                  a UI/UX designer for the official website of our collegiate
                  festival Alegria.
                </p>
                <p>
                  I have two years of graphic design expertise. As part of my
                  career, I have worked on a variety of graphic design projects.
                  For the year 2022, I was the Graphic Head of our collegiate
                  festival Alegria, and also the Graphic Head of Pillai College
                  of Engineering&#39;s Student Council.
                </p>
              </div>

              <div className={styles.aboutImage}>
                <Image
                  src={Me}
                  alt="Picture of Tomcy Thomas - FullStack Developer"
                />
              </div>
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.skillsContainer}>
              <h1>Skills</h1>
              <div className={styles.skillCards}>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#cf92fb" }}
                >
                  <h2>Expertise</h2>
                  <p>UI UX Design</p>
                  <p>Graphic Design</p>
                  <p>Development</p>
                </div>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#b44bff" }}
                >
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
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#911ae5" }}
                >
                  <h2>Design Tools</h2>
                  <p>Figma</p>
                  <p>Photoshop</p>
                  <p>Illustrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
