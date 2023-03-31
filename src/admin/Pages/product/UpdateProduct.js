import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";
import AddorUpdate from "../../hooks/AddorUpdate";

function UpdateProduct() {
  let { id } = useParams();
  let [name, setName] = useState("");
  let [discount, setDiscount] = useState("");
  let [amount, setAmount] = useState("");
  let { postData } = AddorUpdate({
    url: "/product/update",
  });
  let navigate = useNavigate();

  let updateProduct = () => {
    postData({
      price: name,
      discount: discount,
      id: id,
      amount: amount,
    });
    console.log("good");
    return navigate("/products");
  };
  return (
    <div className="container">
      <h1>Update Product</h1>
      <div className="form-group">
        <Inputs
          type="text"
          placeholder="price of product"
          id="price"
          text="price"
          val={(e) => setName(e.target.value)}
        />
        <Inputs
          type="text"
          placeholder="amount"
          id="amount"
          text="amount"
          val={(e) => setAmount(e.target.value)}
        />
        <Inputs
          type="text"
          placeholder="discount of product"
          id="discount"
          text="discount"
          val={(e) => setDiscount(e.target.value)}
        />
        <Buttons
          bgc="#3F51B5"
          color="#fff"
          borderRaduis="5px"
          border="none"
          padding="10px 20px"
          fontSize="19px"
          text="Add Product"
          margin="15px 0 0 0px"
          clicks={updateProduct}
        />
      </div>
    </div>
  );
}

export default UpdateProduct;
