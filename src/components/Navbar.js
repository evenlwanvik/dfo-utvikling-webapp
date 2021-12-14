import React, {useState} from "react"
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar(props) {
  // Toggle dropdown menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
  <nav class="navbar">
    <div class="container navbar-container">
      <Link to="/" className="navbar-logo">
          <img src='/images/logo-blue.svg' alt="DFØ logo"></img>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "far fa-times-circle" : "fas fa-bars"}/>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/wikijs" className="h3 nav-links" onClick={closeMobileMenu}> Home </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="h3 nav-links" onClick={closeMobileMenu}> Contact </Link>
        </li>
        <li className="nav-item">
          <Link to="/home" className="h3 nav-links" onClick={closeMobileMenu}> Wiki.js </Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar

