import React from "react";
import WorksCategory from "../../WorksCategory";
import HeroSection from "../../HeroSection";
import About from "../../About";

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
