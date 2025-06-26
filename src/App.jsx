import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Sustainability from "./components/Sustainability.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/sustainability" element={<Sustainability />} />
  </Routes>;
};

export default App;
