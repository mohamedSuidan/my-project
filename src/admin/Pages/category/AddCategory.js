import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";
import AddorUpdate from "../../hooks/AddorUpdate";

function AddCategory() {
  let [name, setName] = useState("");
  let { postData } = AddorUpdate({
    url: "/category/add",
  });
  let navigate = useNavigate();
  let addCat = () => {
    postData({
      name: name,
    });
    return navigate("/category");
  };
  return (
    <div className="container">
      <h1>Add Category</h1>
      <div className="form-group">
        <Inputs
          type="text"
          placeholder="Category"
          id="category"
          text="Category"
          val={(e) => setName(e.target.value)}
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
          clicks={addCat}
        />
      </div>
    </div>
  );
}

export default AddCategory;
