import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";
import AddorUpdate from "../../hooks/AddorUpdate";
import useAxios from "../../hooks/fetchData";

function AddProduct() {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [category, setCategory] = useState("");
  let [discount, setDiscount] = useState("");
  let [amount, setAmount] = useState("");
  let [desc, setDesc] = useState("");
  let [file, setFile] = useState([]);
  const [data, setData] = useState([]);
  let navegate = useNavigate();
  console.log(file);

  let { postData } = AddorUpdate({
    url: "/product/add",
  });
  let addProduct = () => {
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("images", file[i]);
    }
    formData.append("name", name);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("description", desc);
    formData.append("category", category);
    formData.append("amount", amount);
    postData(formData, "multipart/form-data");

    setTimeout(() => {
      return navegate("/products");
    }, 300);
  };
  const { response } = useAxios({
    url: "/category",
  });

  useEffect(() => {
    if (response !== null) {
      setData(response.category);
    }
  }, [response]);
  console.log(data);
  console.log(category);
  return (
    <div className="container">
      <h1>Add Category</h1>
      <div className="form-group">
        <Inputs
          type="text"
          placeholder="Product Name"
          id="product"
          text="product"
          val={(e) => setName(e.target.value)}
        />
        <Inputs
          type="text"
          placeholder="Product Price"
          id="price"
          text="price"
          val={(e) => setPrice(e.target.value)}
        />
        <Inputs
          type="text"
          placeholder="amount"
          id="amount"
          text="amount"
          val={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="category">Category</label>
        <select
          style={{ width: "98%" }}
          className="form-control"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option selected disabled>
            select category
          </option>
          {data
            ? data.map((ele) => {
                return (
                  <option key={ele.id} value={ele.id}>
                    {ele.name}
                  </option>
                );
              })
            : ""}
        </select>
        <Inputs
          type="text"
          placeholder="Product Discount"
          id="discount"
          text="discount"
          val={(e) => setDiscount(e.target.value)}
        />
        <Inputs
          type="textarea"
          placeholder="Product Description"
          id="description"
          text="description"
          val={(e) => setDesc(e.target.value)}
        />
        <Inputs
          type="file"
          placeholder="Your Photo"
          id="file"
          text="Photo"
          val={(e) => setFile(Array.from(e.target.files))}
          multi={true}
        />
        <Buttons
          bgc="#3F51B5"
          color="#fff"
          borderRaduis="5px"
          border="none"
          padding="10px 20px"
          fontSize="19px"
          text="Add User"
          margin="15px 0 0 0px"
          clicks={addProduct}
        />
      </div>
    </div>
  );
}

export default AddProduct;
