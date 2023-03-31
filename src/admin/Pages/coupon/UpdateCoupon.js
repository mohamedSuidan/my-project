import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddorUpdate from "../../hooks/AddorUpdate";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";

function UpdateCoupon() {
  let { id } = useParams();
  let [name, setName] = useState("");
  let [discount, setDiscount] = useState("");
  let [expire, setExpire] = useState("");
  console.log(id);
  let { postData } = AddorUpdate({
    url: "/coupon/update",
  });
  let navigate = useNavigate();

  let updateCoupon = () => {
    postData({
      name: name,
      discount: discount,
      expire: expire,
      id: id,
    });
    return navigate("/coupons");
  };
  return (
    <div className="container">
      <h1>Update Coupon</h1>
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
          clicks={updateCoupon}
        />
      </div>
    </div>
  );
}

export default UpdateCoupon;
