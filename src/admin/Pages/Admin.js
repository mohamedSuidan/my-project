import React from "react";
import Cards from "../components/Cards";
import { FaUsers } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
// IoCartSharp;
function Admin() {
  return (
    <div className="row">
      <div className="col-3">
        <Cards bgc="#fea755" number="50" text="user" svg={<FaUsers />} />
      </div>
      <div className="col-3">
        <Cards
          bgc="#01c1f0"
          number="50"
          text="products"
          svg={<BsFillCartFill />}
        />
      </div>
      <div className="col-3">
        <Cards bgc="#b58dd3" number="50" text="user" svg={<FaUsers />} />
      </div>
      <div className="col-3">
        <Cards bgc="#719fb9" number="50" text="user" svg={<FaUsers />} />
      </div>
    </div>
  );
}

export default Admin;
