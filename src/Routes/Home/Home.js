import React, { useEffect } from "react";

import HeroSection from "../../components/HeroSection";
import DevProjects from "../../components/Dev";
import Gfx from "../../components/GfxSection";
import UIUXSection from "../../components/userExperienceSection";
import ContactSection from "../../components/Contact";

import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Blog from "../../components/Blog/Blog";

function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location?.state?.scrollToContact) {
      scroller.scrollTo("contact", {
        delay: 150,
        smooth: true,
      });
    }
  });
  return (
    <div id="home">
      <HeroSection />
      <UIUXSection />
      <DevProjects />
      <Gfx />
      <Blog />
      <ContactSection />
    </div>
  );
}

export default Home;
