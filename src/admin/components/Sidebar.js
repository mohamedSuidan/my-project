import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./components.css";
function Sidebar(props) {
  const location = useLocation();
  const hideNavbar = [
    "/admin",
    "/admin/users",
    "/admin/category",
    "/admin/products",
    "/admin/products/add",
    "/admin/products/update/:id",
    "/admin/orders",
    "/admin/coupons",
    "/admin/coupon/add",
    "/admin/coupon/update/:id",
    "/admin/users/add",
    "/admin/category/add",
    "/admin/category/update/:id",
    "/admin/users/update/:id",
  ].includes(location.pathname);
  console.log(location);
  if (hideNavbar) {
    return (
      <div className={`sidebar${props.activeClass ? "" : " disapear"}`}>
        <div className="title">
          <h2>ecommerce</h2>
        </div>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/users">Users</Link>
        <Link to="/admin/category">Category</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/coupons">Coupons</Link>
      </div>
    );
  }
}

export default Sidebar;
