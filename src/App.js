import "./App.css";

import { Routes, Route } from "react-router-dom";
import UiUx from "./components/Routes/UiUX/UiUx";
import Home from "./components/Routes/Home/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ui-ux" element={<UiUx />} />
      </Routes>

      {/*  <Navbar />
        <HeroSection />
        <WorksCategory /> */}
    </div>
  );
}

export default App;
