import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

function Navigation() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <nav className="navbar  navbar-expand-lg fixed ">
        <div className="container-fluid">
          <Link className="navbar-brand logo ms-5" to="/">
            Reemote.io
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navIcon">
              <i className="fas fa-bars navIcon"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link className="nav-link links" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link links" to="/">
                Features
              </Link>
              <Link className="nav-link links" to="/">
                Contact
              </Link>
            </div>
            <div className="welcome me-5">
              <p>Welcome Solomon</p>
            </div>
            <div className="me-5">
              <button className="btn">Sign Out</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
