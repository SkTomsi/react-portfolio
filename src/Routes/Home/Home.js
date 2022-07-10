import React from "react";
import HeroSection from "../../components/HeroSection";
import WorksCategory from "../../components/WorksCategory";
import About from "../../components/About";
import Footer from "../../components/Footer";
function Home() {
  return (
    <div id="home">
      <HeroSection />
      <WorksCategory />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
