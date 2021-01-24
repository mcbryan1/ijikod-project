import React from "react";
import "./Styles.css";
import image from "../images/Saly-13.png";
import Slide from "react-reveal/Slide";

function Contact() {
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="header">
            <Slide bottom>
              <h1>Contact</h1>
            </Slide>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row mt-3">
        {/*********** Form ************/}
        <div className="col-md-4 mainForm">
          <Slide bottom>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Email"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 ">
                <textarea placeholder="Message" className="input"></textarea>
              </div>
              <button
                className="btn"
                onClick={() => {
                  alert("Thanks For reaching out to us");
                }}
              >
                Submit
              </button>
            </form>
          </Slide>
        </div>

        {/* ********** Location ************/}
        <div className="col-md-4 location">
          <div className="row mb-5">
            <div className="col-1"></div>
            <div className="col-10">
              <Slide bottom>
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-map-marker-alt locaIcon"></i>
                  </div>
                  <div className="col-10 locaText">
                    <p className="text-left">Achimota - Accra, Ghana</p>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="col-1"></div>
          </div>

          <div className="row mb-5">
            <div className="col-1"></div>
            <div className="col-10">
              <Slide bottom>
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-paper-plane locaIcon"></i>
                  </div>
                  <div className="col-10 locaText">
                    <p className="text-left">info@reemote.io</p>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="col-1"></div>
          </div>

          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <Slide bottom>
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-phone-alt locaIcon"></i>
                  </div>
                  <div className="col-10 locaText">
                    <p className="text-left">+233 55 453 6187</p>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="col-1"></div>
          </div>
        </div>

        {/* ********** Image ************/}
        <Slide bottom>
          <div className="col-md-4">
            <img src={image} alt="saly" className="img-fluid" />
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Contact;
