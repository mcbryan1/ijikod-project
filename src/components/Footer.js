import React from "react";
import "./Styles.css";

function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-12 text-center footText">
          <p> Copyright ©2021 Reemote.io - All Rights Reserved</p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-12">
          <div className="social-media">
            <a
              href="https://github.com/mcbryan1"
              className="icons"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github github"></i>
            </a>
            <a
              href="https://twitter.com/mcbryan1z"
              className="icons"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/else_coding/"
              className="icons"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
