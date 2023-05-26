import React from "react";
import "./landing.css";
import myImg from "../img/home.png";
function Landing() {
  return (
    <div className="landing">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>
              New <br /> <span>Arrivals</span>
            </h1>
            <button>Go Shopping</button>
          </div>
          <div className="col-6">
            <img src={myImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
