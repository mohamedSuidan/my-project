import React from "react";
import "./components.css";
function Cards({ bgc, number, text, svg }) {
  return (
    <div style={{ backgroundColor: bgc }} className="cards">
      <div className="row">
        <div className="col-6">
          <p>{text}</p>
          <h3>{number}</h3>
        </div>
        <div className="col-6">{svg}</div>
      </div>
    </div>
  );
}

export default Cards;
