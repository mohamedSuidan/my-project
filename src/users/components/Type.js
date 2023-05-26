import { Link } from "react-router-dom";
import man from "../img/backpackMan.png";
import woman from "../img/backpackWoman.png";
import "./type.css";
function Type() {
  return (
    <div className="type">
      <div className="container">
        <div className="row">
          <div className="col-6 the-type">
            <div className="gander">
              <div className="row">
                <div className="col-6">
                  <img src={man} />
                </div>
                <div className="col-6">
                  <div className="text">
                    <h3>Men</h3>
                    <h2>BackPack</h2>
                    <Link to="/product">view collection</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 the-type">
            <div className="gander">
              <div className="row">
                <div className="col-6">
                  <img src={woman} />
                </div>
                <div className="col-6">
                  <div className="text">
                    <h3>Woman</h3>
                    <h2>BackPack</h2>
                    <Link to="/product">view collection</Link>
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

export default Type;
