import React from "react";

import HeroSection from "../../components/HeroSection";
import WorksCategory from "../../components/WorksCategory";
import DevProjects from "../../components/Dev";
import Gfx from "../../components/GfxSection";
import UIUXSection from "../../components/userExperienceSection";
import ContactSection from "../../components/Contact";

function Home() {
  return (
    <div id="home">
      <HeroSection />
      <WorksCategory />
      <UIUXSection />
      <DevProjects />
      <Gfx />
      <ContactSection />
    </div>
  );
}

export default Home;
