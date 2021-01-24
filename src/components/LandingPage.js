import React from "react";
import image from "../images/Saly-11.png";
import brands from "../images/brands.png";
import Slide from "react-reveal/Slide";

function LandingPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="leftContainer">
            <Slide left>
              <h1 className="text-left">
                Planing the <br /> success of the <br /> Working Remotely
              </h1>
            </Slide>
            <Slide left>
              <div className="buttn">
                <button
                  className="btn"
                  onClick={() => {
                    alert("Congrats!! You Just Tried");
                  }}
                >
                  Try it Now
                </button>
              </div>
            </Slide>
            <Slide left>
              <img src={brands} alt="brand" className="img-fluid" />
            </Slide>
          </div>
        </div>
        <Slide right>
          <div className="col-md-6">
            <img src={image} alt="Saly" className="img-fluid" />
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default LandingPage;
