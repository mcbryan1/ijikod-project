import React from "react";
import "./Styles.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed ">
        <div className="container-fluid">
          <Link
            className="navbar-brand logo ms-5"
            onClick={() => scroll.scrollToTop()}
          >
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
              <Link
                className="nav-link links"
                aria-current="page"
                onClick={() => scroll.scrollToTop()}
              >
                Home
              </Link>
              <Link
                className="nav-link links"
                to="features"
                smooth={true}
                duration={1000}
              >
                Features
              </Link>
              <Link
                className="nav-link links"
                to="contact"
                smooth={true}
                duration={1000}
              >
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
