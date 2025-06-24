import React from "react";
import { Link } from "react-router-dom";
import Nav from "Nav.jsx";
import Footer from "Footer.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return <div>
        <Nav />
        <h2>Unparalleled web development for small businesses</h2>
        <Footer />
    </div>;
};

export default App;
