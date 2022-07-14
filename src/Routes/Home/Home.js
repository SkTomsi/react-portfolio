import React from "react";
import HeroSection from "../../components/HeroSection";
import WorksCategory from "../../components/WorksCategory";
import About from "../../components/About";
import Footer from "../../components/Footer";
import UIUX from "../../components/userExperienceSection";
function Home() {
  return (
    <div id="home">
      <HeroSection />
      <WorksCategory />
      <UIUX />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
