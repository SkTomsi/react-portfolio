import "./App.css";
import HeroSection from "./components/HeroSection/";
import Navbar from "./components/Navbar";
import WorksCategory from "./components/WorksCategory";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WorksCategory />
    </div>
  );
}

export default App;
