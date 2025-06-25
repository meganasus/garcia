import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return <h1 className="nav">
    <Link to="/about" className="about">About</Link>
    <Link to="/contact" className="contact">Contact</Link>
    <Link to="/sustainability" className="sustainability">Sustainability</Link>
  </h1>
}

export default Nav;