import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Routes/Home/Home";
import UiUx from "./Routes/UiUX/UiUx";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ui-ux" element={<UiUx />} />
      </Routes>
    </div>
  );
}

export default App;
