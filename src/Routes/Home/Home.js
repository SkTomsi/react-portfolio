import React from "react";
import HeroSection from "../../components/HeroSection";
import WorksCategory from "../../components/WorksCategory";
import Footer from "../../components/Footer";

import DevProjects from "../../components/Dev";
import Gfx from "../../components/GfxSection";
import UIUXSection from "../../components/userExperienceSection";
function Home() {
  return (
    <div id="home">
      <HeroSection />
      <WorksCategory />
      <UIUXSection />
      <DevProjects />
      <Gfx />
      <Footer />
    </div>
  );
}

export default Home;
