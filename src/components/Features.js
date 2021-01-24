import React from "react";
import "./Styles.css";
import image from "../images/Saly-1.png";
import Slide from "react-reveal/Slide";

function Features() {
  return (
    <div id="features">
      <div className="feature">
        <div className="header text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="header">
                  <Slide bottom>
                    <h1>Features</h1>
                  </Slide>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="row">
              <Slide bottom>
                <div className="col-md-6 leftFeature">
                  <img src={image} alt="saly" className="img-fluid" />
                </div>
              </Slide>
              <div className="col-md-6 mainRight">
                <Slide bottom>
                  <div className="row rightContainer">
                    <div className="col-3 iconContainer">
                      <i className="fas fa-comments mainIcon"></i>
                    </div>
                    <div className="col-9 rightDetails">
                      <h3>Good Communication</h3>
                      <p>
                        Making good communication between teams and leaders to
                        achieve company goals.
                      </p>
                    </div>
                  </div>
                </Slide>

                <Slide bottom>
                  <div className="row rightContainer">
                    <div className="col-3 iconContainer">
                      <i className="fas fa-bullhorn mainIcon"></i>
                    </div>
                    <div className="col-9 rightDetails">
                      <h3>Reporting a Progress</h3>
                      <p>
                        In order to achieve good remote workers, it is necessary
                        to report the work that has been done.
                      </p>
                    </div>
                  </div>
                </Slide>

                <Slide bottom>
                  <div className="row rightContainer">
                    <div className="col-3 iconContainer">
                      <i className="fas fa-clock mainIcon"></i>
                    </div>
                    <div className="col-9 rightDetails">
                      <h3>Time Management</h3>
                      <p>
                        Managing time is very important when working remotely
                        with companies.
                      </p>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
