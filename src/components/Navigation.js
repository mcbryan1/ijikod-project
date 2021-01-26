import React, { useState } from "react";
import "./Styles.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Navigation() {
  const [error, setError] = useState("");
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch (error) {
      setError("Failed to logout");
    }
  }
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
              {error && <Alert variant="danger">{error}</Alert>}
              <p>Welcome {currentUser.email}</p>
            </div>
            <div className="me-5">
              <button className="btn" onClick={handleLogout}>Sign Out</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
