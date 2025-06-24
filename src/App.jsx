import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return <Routes>
        <Route to="/" element={<p>About</p>} />
        <Route to="/contact" element={<Footer /> } />
    </Routes>;
};

export default App;
