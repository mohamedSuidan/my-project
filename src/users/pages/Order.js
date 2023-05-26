import React from "react";
import Inputs from "../../admin/components/Inputs";
import useAxios from "../hooks/get";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Order() {
  const { response } = useAxios({
    url: "/order",
  });
  const [data, setData] = useState([]);
  console.log(response);
  let hunderd = 100;
  let navigate = useNavigate();
  useEffect(() => {
    if (response !== null) {
      setData(response.orders);
    }
  }, [response]);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>address</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((ele, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.price - (ele.price * ele.discount) / 100}</td>
                    <td>{ele.amount}</td>
                    <td>{ele.adderss}</td>
                    <td>{ele.status}</td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
      <div className="row">
        <div className="col-6">
          <button className="cart-button del">Cancel All</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
