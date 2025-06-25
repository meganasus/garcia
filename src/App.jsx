import Footer from "./common/Footer.jsx";
import Home from "./components/Home.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Footer />} />
    <Route path="/about" element={<p>About</p>} />
  </Routes>;
};

export default App;
