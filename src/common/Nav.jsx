import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return <nav>
    <section className="navigation" >
      <Link to="/about" className="about">About </Link></p>
      <Link to="/contact" className="contact"> Contact</Link>
      <Link to="/sustainability" className="sustainability"> Sustainability</Link>
    </section>
  </nav>
}

export default Nav;