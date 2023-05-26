import React from "react";
import DataTable from "../../admin/components/DataTable";
import Inputs from "../../admin/components/Inputs";
import useAxios from "../hooks/get";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { response } = useAxios({
    url: "/cart",
  });
  const [data, setData] = useState([]);
  const [order, setOrder] = useState([]);
  const [address, setAddress] = useState("");
  const [coupon, setCoupon] = useState("");
  const [orderToken, setOrderToken] = useState("");
  const [dis, setDis] = useState([]);
  const [bool, setbool] = useState(false);
  let hunderd = 100;
  let navigate = useNavigate();
  useEffect(() => {
    if (response !== null) {
      setData(response.cart);
    }
  }, [response]);
  const addToOrder = async (e) => {
    if (order.length !== 0) {
      for (let i = 0; i < order.length; i++) {
        if (order.indexOf(e.target.value) === -1) {
          setOrder([...order, e.target.value]);
        } else {
          let arr = order.filter((ele) => {
            return ele !== e.target.value;
          });
          setOrder(arr);
        }
      }
    } else {
      setOrder([...order, e.target.value]);
    }
  };
  const orderProduct = async () => {
    if (bool) {
      setbool(false);
    } else {
      setbool(true);
    }
    console.log(bool);
  };
  console.log(data);
  const addOrder = async () => {
    if (data) {
      console.log(data);
      data.forEach((ele) => {
        setDis(dis.push(ele.discount));
      });
    }
    await axios.post(
      "http://localhost:4000/order",
      {
        id: order,
        coupon: coupon,
        address: address,
        discount: dis,
      },
      {
        headers: {
          Authorization: localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user")).token
            : "",
        },
      }
    );
    return navigate("/order");
  };

  if (localStorage.getItem("user")) {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>discount</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((ele, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <input
                          type="checkbox"
                          value={ele.id}
                          onChange={addToOrder}
                        />
                      </td>
                      <td>{ele.name}</td>
                      <td>{ele.price - (ele.price * ele.discount) / 100}</td>
                      <td>{ele.discount}%</td>
                      <td>{ele.amount}</td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
        <div className="row">
          <div className="col-6">
            <button className="cart-button add" onClick={orderProduct}>
              Order
            </button>
          </div>
          <div className="col-6">
            <button className="cart-button del">Delete All</button>
          </div>
        </div>
        <div
          className="vrify-order"
          style={!bool ? { display: "none" } : { display: "block" }}
        >
          <div className="container">
            <Inputs
              text="your address"
              type="text"
              val={(e) => setAddress(e.target.value)}
              placeholder="address"
            />
            <Inputs
              text="your address"
              type="text"
              className="have coupon ?"
              placeholder="coupon"
              val={(e) => setCoupon(e.target.value)}
            />
            <button className="cart-button add" onClick={addOrder}>
              verfy order
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Signin</h1>;
  }
}

export default Cart;
