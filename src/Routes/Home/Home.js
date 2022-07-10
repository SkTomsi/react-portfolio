import React from "react";
import HeroSection from "../../components/HeroSection";
import WorksCategory from "../../components/WorksCategory";
import About from "../../components/About";
function Home() {
  return (
    <div id="home">
      <HeroSection />
      <WorksCategory />
      <About />
    </div>
  );
}

export default Home;
