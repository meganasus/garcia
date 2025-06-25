import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return <h1 className="nav">
    <Link className="about">About</Link>
    <Link className="contact">Contact</Link>
    <Link className="sustainability">Sustainability</Link>
  </h1>
}

export default Nav;