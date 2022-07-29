/* MODULES */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

/* STYLING */
import "./App.css";

/* COMPONENTS */
import Navbar from "./components/Navbar";
import Home from "./Routes/Home/Home";
import UiUx from "./Routes/UiUX/UiUx";
import About from "./components/About";

/* LOWER ORDER */
import CustomLoader from "./components/CustomLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <CustomLoader />
      ) : (
        <div className="app__container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ui-ux" element={<UiUx />} />
          </Routes>
          <ScrollToTop smooth color="purple" />
        </div>
      )}
    </div>
  );
}

export default App;
