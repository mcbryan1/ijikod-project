import React from "react";
import image from "../images/Saly-11.png";
import brands from "../images/brands.png";

function LandingPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="leftContainer">
            <h1 className="text-left">
              Planing the <br /> success of the <br /> Working Remotely
            </h1>
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

            <img src={brands} alt="brand" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <img src={image} alt="Saly" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
