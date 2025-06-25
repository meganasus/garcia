import React from "react";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return <Routes>
    <Route path="/" element={<p>About</p>} />
    <Route path="/contact" element={<Footer />} />
    <Route path="/about" element={<p>About</p>} />
  </Routes>;
};

export default App;
