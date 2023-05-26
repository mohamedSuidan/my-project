import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../admin/hooks/fetchData";
import "./product.css";
import Inputs from "../../admin/components/Inputs";
import Buttons from "../../admin/components/Buttons";
import AddorUpdate from "../../admin/hooks/AddorUpdate";
import { useContext } from "react";
import { CartContext, EditContext } from "../../App";
function Product() {
  let { id } = useParams();
  let { response } = useAxios({
    url: `/user/product/${id}`,
  });
  let editCount = useContext(EditContext);
  let count = useContext(CartContext);
  let [product, setProduct] = useState([]);
  let [mainImg, setMain] = useState("");
  let [img, setImg] = useState([]);
  let [amount, setAmount] = useState(1);
  let [price, setPrice] = useState(product.price);
  let [discount, setDiscount] = useState(product.discount);
  let { postData } = AddorUpdate({
    url: "/cart",
  });
  useEffect(() => {
    if (response !== null) {
      setProduct(response.product[0]);
      setImg(response.img);
      setMain(response.product[0].main_img);
    }
  }, [response]);

  let change = (e) => {
    setMain(e.target.id);
  };
  let addToCart = () => {
    // editCount(count + 1);

    editCount((current) => new Set([...current, +id]));
    postData({
      user_id: JSON.parse(localStorage.getItem("user")).id,
      product_id: id,
      amount: amount,
      price: amount * product.price,
    });
  };
  return (
    <div className="single">
      <div className="container">
        <div className="row spaces">
          <div className="col-6 spaces">
            <img src={`http://localhost:4000/${mainImg}`} />
            <div className="row spaces">
              {img.map((ele) => {
                return (
                  <div className="col-4 spaces" key={ele.id}>
                    <img
                      src={`http://localhost:4000/${ele.img}`}
                      id={ele.img}
                      onClick={change}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-6 spaces">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>{product.price} $</h3>
            <h3>Amount: {product.amount}</h3>
            <h3>discount: {product.discount}%</h3>
            <div className="form">
              <Inputs
                type="number"
                placeholder="amount"
                val={(e) => setAmount(e.target.value)}
                data={amount}
              />
              <Inputs
                type="hidden"
                val={(e) => setPrice(e.target.value)}
                data={price}
              />
              <Inputs
                type="hidden"
                val={(e) => setDiscount(e.target.value)}
                data={discount}
              />
              <Buttons
                bgc="#3F51B5"
                color="#fff"
                borderRaduis="5px"
                border="none"
                padding="10px 20px"
                fontSize="19px"
                text="Add To Cart"
                margin="15px 0 0 0px"
                clicks={addToCart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
