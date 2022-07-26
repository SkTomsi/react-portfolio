import React from "react";
import HeroSection from "../../components/HeroSection";
import WorksCategory from "../../components/WorksCategory";
import About from "../../components/About";
import Footer from "../../components/Footer";

import DevProjects from "../../components/Dev";
import Gfx from "../../components/GfxSection";
function Home() {
  return (
    <div id="home">
      <HeroSection />
      <WorksCategory />
   
      <DevProjects />
      <Gfx />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
