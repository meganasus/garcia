import "./Nav.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const location = useLocation();

const isHomeLocation = () => {
  return location === "/";
}

const Nav = () => {
  return <nav>
    <section className="navigation">
      <Link to="/" className={"home" && !isHomeLocation() && " hidden"}>Home </Link>
      <Link to="/about" className="about">About </Link>
      <Link to="/contact" className="contact"> Contact</Link>
      <Link to="/sustainability" className="sustainability"> Sustainability</Link>
    </section>
  </nav>
}

export default Nav;
