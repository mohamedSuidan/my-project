import React from "react";
import { Link } from "react-router-dom";
import "./components.css";
function Sidebar(props) {
  return (
    <div className={`sidebar${props.activeClass ? "" : " disapear"}`}>
      <div className="title">
        <h2>ecommerce</h2>
      </div>
      <Link to="/">Dashboard</Link>
      <Link to="/users">Users</Link>
      <Link to="/category">Category</Link>
      <Link to="/products">Products</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/coupons">Coupons</Link>
    </div>
  );
}

export default Sidebar;
