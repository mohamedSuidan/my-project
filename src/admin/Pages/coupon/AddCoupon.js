import React, { useState } from "react";
import AddorUpdate from "../../hooks/AddorUpdate";
import { useNavigate } from "react-router-dom";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";

function AddCoupon() {
  let [name, setName] = useState("");
  let [discount, setDiscount] = useState("");
  let [expire, setExpire] = useState("");
  let { postData } = AddorUpdate({
    url: "/coupon/add",
  });
  let navigate = useNavigate();
  let addCoupon = () => {
    postData({
      name: name,
      discount: discount,
      expire: expire,
    });
    return navigate("/coupons");
  };
  return (
    <div className="container">
      <h1>Add Coupon</h1>
      <div className="form-group">
        <Inputs
          type="text"
          placeholder="coupon"
          id="coupon"
          text="coupon"
          val={(e) => setName(e.target.value)}
        />
        <Inputs
          type="text"
          placeholder="discount"
          id="discount"
          text="discount"
          val={(e) => setDiscount(e.target.value)}
        />
        <Inputs
          type="date"
          placeholder="expiration"
          id="expiration"
          text="expiration"
          val={(e) => setExpire(e.target.value)}
        />
        <Buttons
          bgc="#3F51B5"
          color="#fff"
          borderRaduis="5px"
          border="none"
          padding="10px 20px"
          fontSize="19px"
          text="Add Category"
          margin="15px 0 0 0px"
          clicks={addCoupon}
        />
      </div>
    </div>
  );
}

export default AddCoupon;
