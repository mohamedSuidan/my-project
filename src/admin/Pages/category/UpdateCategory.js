import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";
import AddorUpdate from "../../hooks/AddorUpdate";

function UpdateCategory() {
  let { id } = useParams();
  let [name, setName] = useState("");
  console.log(id);
  let { postData } = AddorUpdate({
    url: "/category/update",
  });
  let navigate = useNavigate();

  let updateCat = () => {
    postData({
      name: name,
      id: id,
    });
    console.log("good");
    return navigate("/category");
  };
  return (
    <div className="container">
      <h1>Update Category</h1>
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
          clicks={updateCat}
        />
      </div>
    </div>
  );
}

export default UpdateCategory;
