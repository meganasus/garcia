import React from "react";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return <Routes>
    <Route to="/" element={<p>About</p>} />
    <Route to="/contact" element={<Footer />} />
    <Route to="/about" element={<p>About</p>} />
  </Routes>;
};

export default App;
