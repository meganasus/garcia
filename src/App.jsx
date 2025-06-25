import React from "react";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Footer />} />
    <Route path="/about" element={<p>About</p>} />
  </Routes>;
};

export default App;
