import "./Nav.css"

const Nav = () => {
    return <nav className="top">
        <h1 className="about">
            <Link to="/">About</Link>
        </h1>
        <Link> Contact</Link>
        <Link> Sustainability</Link>
    </nav>
}

export default Nav;