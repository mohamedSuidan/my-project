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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UpdateUsers from "./admin/Pages/users/UpdateUsers";
import AddCategory from "./admin/Pages/category/AddCategory";
import UpdateCategory from "./admin/Pages/category/UpdateCategory";
import AddProduct from "./admin/Pages/product/AddProduct";
import UpdateProduct from "./admin/Pages/product/UpdateProduct";
import Coupon from "./admin/Pages/coupon/Coupon";
import AddCoupon from "./admin/Pages/coupon/AddCoupon";
import UpdateCoupon from "./admin/Pages/coupon/UpdateCoupon";
function App() {
  let [activeMenu, setActive] = useState(true);
  console.log(activeMenu);
  return (
    <div className="App">
      <BrowserRouter>
        {activeMenu ? (
          <Sidebar activeClass={true} />
        ) : (
          <Sidebar activeClass={false} />
        )}
        <div className="navbar">
          <Navbar active={setActive} bool={activeMenu} />
        </div>
        <div className={`main-content ${activeMenu ? "" : "without"}`}>
          <Routes>
            <Route path="/" element={<Admin />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/users" element={<Users />} />
            <Route path="/category" element={<Category />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/products/update/:id" element={<UpdateProduct />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/coupons" element={<Coupon />} />
            <Route path="/coupon/add" element={<AddCoupon />} />
            <Route path="/coupon/update/:id" element={<UpdateCoupon />} />
            <Route path="/users/add" element={<AddUsers />} />
            <Route path="/category/add" element={<AddCategory />} />
            <Route path="/category/update/:id" element={<UpdateCategory />} />
            <Route path="/users/update/:id" element={<UpdateUsers />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
