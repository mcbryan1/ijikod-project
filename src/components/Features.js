import React from "react";
import "./Styles.css";
import image from "../images/Saly-1.png";

function Features() {
  return (
    <div id="features">
      <div className="feature">
        <div className="header text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div class="header">
                  <h1>Features</h1>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="row">
              <div className="col-md-6 leftFeature">
                <img src={image} alt="saly" className="img-fluid" />
              </div>
              <div className="col-md-6 mainRight">
                <div className="row rightContainer">
                  <div className="col-3 iconContainer">
                    <i class="fas fa-comments mainIcon"></i>
                  </div>
                  <div className="col-9 rightDetails">
                    <h3>Good Communication</h3>
                    <p>
                      Making good communication between teams and leaders to
                      achieve company goals.
                    </p>
                  </div>
                </div>

                <div className="row rightContainer">
                  <div className="col-3 iconContainer">
                    <i class="fas fa-bullhorn mainIcon"></i>
                    
                  </div>
                  <div className="col-9 rightDetails">
                    <h3>Reporting a Progress</h3>
                    <p>
                      In order to achieve good remote workers, it is necessary
                      to report the work that has been done.
                    </p>
                  </div>
                </div>

                <div className="row rightContainer">
                  <div className="col-3 iconContainer">
                    <i class="fas fa-clock mainIcon"></i>
                  </div>
                  <div className="col-9 rightDetails">
                    <h3>Time Management</h3>
                    <p>
                      Managing time is very important when working remotely with
                      companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
