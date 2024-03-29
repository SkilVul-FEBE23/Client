import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { NavLink,Link, useNavigate } from "react-router-dom";
import  { AppContext } from "../../App";
import "./Navbar.css"


function NavBar() {

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5555/users")
  //     .then((res) => {
  //       console.log(res);
  //       setPosts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const Context = useContext(AppContext);
  let navigasi = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink
            exact
            to="/"
            className="nav-logo"
            style={{ textDecoration: "none" }}
          >
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
                style={{ textDecoration: "none" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Aksess"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}  
                style={{ textDecoration: "none" }}
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
                style={{ textDecoration: "none" }}
              >
                Education
              </NavLink>
            </li>
            {Context.pengguna ? (
              <div className="dropdown">
                <p
                  className="btn-name"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textDecoration: "none" }}
                >
                  {Context.pengguna.username}
                  User
                </p>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/education/students/teacherQuiz">Kerjakan Kuis</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/" onClick={
                    ()=>{
                      Context.setPengguna(null)
                      localStorage.clear()
                      navigasi('/')
                    }

                  }>Logout</Link></li>
              </ul>
            </div>
              ) : (
                <Link to={"login"} className="btn-text" onClick={handleClick}  style={{ textDecoration: "none" }}>Login</Link>
              )
            }
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar ;
