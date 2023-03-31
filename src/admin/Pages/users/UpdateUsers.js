import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";
import AddorUpdate from "../../hooks/AddorUpdate";
import useAxios from "../../hooks/fetchData";

function UpdateUsers() {
  let { id } = useParams();

  const { response } = useAxios({
    url: `/users/${id}`,
  });
  let [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response.userById[0]);
    }
  }, [response]);
  console.log(data.name);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { postData } = AddorUpdate({
    url: `/users/update`,
  });
  let navigate = useNavigate();
  let updateUser = () => {
    postData({
      name: name === "" ? data.name : name,
      email: email === "" ? data.email : email,
      password: password === "" ? data.password : password,
      id: id,
    });
    console.log("good");
    return navigate("/users");
  };
  return (
    <div className="container">
      <h2>Update User</h2>
      <div className="form-group">
        <Inputs
          type="text"
          placeholder="Your Name"
          id="name"
          text="Name"
          val={(e) => setName(e.target.value)}
        />
        <Inputs
          type="email"
          placeholder="Your Email"
          id="email"
          text="Email"
          val={(e) => setEmail(e.target.value)}
        />
        <Inputs
          type="password"
          placeholder="Your Password"
          id="password"
          text="Password"
          val={(e) => setPassword(e.target.value)}
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
          clicks={updateUser}
        />
      </div>
    </div>
  );
}

export default UpdateUsers;
