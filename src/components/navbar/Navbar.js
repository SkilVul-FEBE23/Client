import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import "./Navbar.css"

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            BeraniMelawan.Co
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Gethelp"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                GetHelp
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/education"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Education
              </NavLink>
            </li>
              <Link to={"register"} className="btn-text" onClick={handleClick}>Sign up</Link>
              <Link to={"login"} className="btn-text" onClick={handleClick}>Login</Link>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;