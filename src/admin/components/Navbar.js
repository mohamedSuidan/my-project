import { HiMenu } from "react-icons/hi";
import { useLocation } from "react-router-dom";

function Navbar(props) {
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
      <nav>
        <HiMenu onClick={btn} />
      </nav>
    );
  }
}

export default Navbar;
