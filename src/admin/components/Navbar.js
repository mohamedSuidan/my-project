import { HiMenu } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import "../../users/styles/navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../App";
function Navbar(props) {
  const location = useLocation();
  let count = useContext(CartContext);

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
  let btn = () => {
    if (hideNavbar) {
    }
    if (props.bool === true) {
      props.active(false);
    } else {
      props.active(true);
    }
  };
  if (hideNavbar) {
    return (
      <nav className="admin-nav">
        <HiMenu onClick={btn} />
      </nav>
    );
  } else {
    return (
      <div className="container">
        <nav>
          <div className="row">
            <div className="col-5">
              <h2>eCommerce Website</h2>
            </div>
            <div className="col-7">
              <ul>
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">Products</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  {localStorage.getItem("user") ? (
                    <Link to="#">Sign out</Link>
                  ) : (
                    <Link to="/signin">Sign in</Link>
                  )}
                </li>
                <li className="cart">
                  {localStorage.getItem("user") ? (
                    <div>
                      <Link to="#">
                        <AiOutlineShoppingCart />
                      </Link>
                      <span className="cart-count">
                        {count.length || count.size || 0}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
