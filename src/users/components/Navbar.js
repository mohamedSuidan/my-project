import { Link } from "react-router-dom";
import "./navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
function NavbarUser() {
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
              <li>
                <Link to="#">
                  <AiOutlineShoppingCart />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarUser;
