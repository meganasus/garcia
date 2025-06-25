import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return <h1 className="nav">
    <p className="about"><Link to="/about" className="about">About</Link></p>
    <p className="contact"><Link to="/contact" className="contact"> Contact</Link></p>
    <p className="sustainability"><Link to="/sustainability" className="sustainability"> Sustainability</Link></p>
  </h1>
}

export default Nav;