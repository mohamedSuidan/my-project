import { Navbar, Sidebar } from "./admin/components/Index";
import {
  Admin,
  Category,
  Orders,
  Product,
  Users,
  Signin,
  AddUsers,
} from "./admin/Pages/Index";
import SingleProduct from "./users/pages/SingleProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import UpdateUsers from "./admin/Pages/users/UpdateUsers";
import AddCategory from "./admin/Pages/category/AddCategory";
import UpdateCategory from "./admin/Pages/category/UpdateCategory";
import AddProduct from "./admin/Pages/product/AddProduct";
import UpdateProduct from "./admin/Pages/product/UpdateProduct";
import Coupon from "./admin/Pages/coupon/Coupon";
import AddCoupon from "./admin/Pages/coupon/AddCoupon";
import UpdateCoupon from "./admin/Pages/coupon/UpdateCoupon";
import Protected from "./admin/gurd/gurd";
import Home from "./users/pages/Home";
import { createContext } from "react";
import useAxios from "./admin/hooks/fetchData";
import Cart from "./users/pages/Cart";
import Order from "./users/pages/Order";
import Signup from "./users/pages/Signup";
export const CartContext = createContext();
export const EditContext = createContext();
function App() {
  let [activeMenu, setActive] = useState(true);
  let bool = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).isAdmin
    : "";
  let { response } = useAxios({
    url: "/cart",
  });

  let [count, setCount] = useState([]);
  useEffect(() => {
    if (response !== null) {
      console.log(response);
      if (!(typeof response === "string")) {
        response.cart.forEach((element) => {
          setCount((the_count) => [...the_count, element.product_id]);
        });
      }
    }
  }, [response]);
  return (
    <CartContext.Provider value={count}>
      <EditContext.Provider value={setCount}>
        <div className="App">
          <BrowserRouter>
            {window.location.href.includes("/admin") ? (
              activeMenu ? (
                <Sidebar activeClass={true} />
              ) : (
                <Sidebar activeClass={false} />
              )
            ) : (
              ""
            )}
            <div className="navbar">
              <Navbar active={setActive} bool={activeMenu} />
            </div>
            <div
              className={
                window.location.href.includes("/admin")
                  ? `main-content ${activeMenu ? "" : "without"}`
                  : ""
              }
            >
              {/* start admin route */}

              <Routes>
                <Route
                  path="/admin"
                  element={
                    <Protected isSignedIn={bool}>
                      <Admin />
                    </Protected>
                  }
                />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/admin/users"
                  element={
                    <Protected isSignedIn={bool}>
                      <Users />
                    </Protected>
                  }
                />
                <Route
                  path="/admin/category"
                  element={
                    <Protected isSignedIn={bool}>
                      <Category />
                    </Protected>
                  }
                />
                <Route
                  path="/admin/products"
                  element={
                    <Protected isSignedIn={bool}>
                      <Product />
                    </Protected>
                  }
                />
                <Route
                  path="/admin/products/add"
                  element={
                    <Protected isSignedIn={bool}>
                      <AddProduct />
                    </Protected>
                  }
                />
                <Route
                  path="/admin/products/update/:id"
                  element={
                    <Protected isSignedIn={bool}>
                      <UpdateProduct />
                    </Protected>
                  }
                />
                <Route
                  path="/admin/orders"
                  element={
                    <Protected isSignedIn={bool}>
                      <Orders />
                    </Protected>
                  }
                />
                <Route
                  path="/admin/coupons"
                  element={
                    <Protected isSignedIn={bool}>
                      <Coupon />
                    </Protected>
                  }
                />
                <Route
                  path="/admin/coupon/add"
                  element={
                    <Protected isSignedIn={bool}>
                      <AddCoupon />
                    </Protected>
                  }
                />
                <Route
                  path="/admin/coupon/update/:id"
                  element={
                    <Protected isSignedIn={bool}>
                      <UpdateCoupon />
                    </Protected>
                  }
                />
                <Route
                  path="/admin/users/add"
                  element={
                    <Protected isSignedIn={bool}>
                      <AddUsers />
                    </Protected>
                  }
                />
                <Route
                  path="/admin/category/add"
                  element={
                    <Protected isSignedIn={bool}>
                      <AddCategory />
                    </Protected>
                  }
                />
                <Route
                  path="/admin/category/update/:id"
                  element={
                    <Protected isSignedIn={bool}>
                      <UpdateCategory />
                    </Protected>
                  }
                />
                <Route
                  path="/admin/users/update/:id"
                  element={
                    <Protected isSignedIn={bool}>
                      <UpdateUsers />
                    </Protected>
                  }
                />
                {/* end admin route */}
                {/* start users route */}
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order" element={<Order />} />
                {/* end users route */}
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </EditContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
