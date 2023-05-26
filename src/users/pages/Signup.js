import React, { useState } from "react";
import Inputs from "../../admin/components/Inputs";
import Buttons from "../../admin/components/Buttons";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let navegate = useNavigate();
  if (localStorage.getItem("user")) {
    if (JSON.parse(localStorage.getItem("user")).isAdmin) {
      return <Navigate to="/admin" />;
    } else {
      return <Navigate to="/" />;
    }
  } else {
    const signup = async () => {
      await axios.post(
        "http://localhost:4000/signup",
        {
          name: name,
          email: email,
          password: password,
        },
        {
          headers: {
            Authorization: localStorage.getItem("user")
              ? JSON.parse(localStorage.getItem("user")).token
              : "",
          },
        }
      );
      console.log("giid");
      return navegate("/signin");
    };
    return (
      <div className="container">
        <h2>Sign In</h2>
        <div className="form-group">
          <Inputs
            type="email"
            placeholder="email"
            id="email"
            text="email"
            val={(e) => setEmail(e.target.value)}
          />
          <Inputs
            type="text"
            placeholder="username"
            id="name"
            text="username"
            val={(e) => setName(e.target.value)}
          />
          <Inputs
            type="password"
            placeholder="password"
            id="password"
            text="password"
            val={(e) => setPassword(e.target.value)}
          />
        </div>
        <Buttons
          bgc="#3F51B5"
          color="#fff"
          borderRaduis="5px"
          border="none"
          padding="10px 20px"
          fontSize="19px"
          text="Add User"
          margin="15px 0 0 0px"
          clicks={signup}
        />
      </div>
    );
  }
}

export default Signup;
