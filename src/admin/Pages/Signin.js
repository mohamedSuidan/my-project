import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Inputs from "../components/Inputs";
import Buttons from "../components/Buttons";
function Signin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let signin = async () => {
    let data = await axios.post("http://localhost:4000/signin", {
      email: email,
      password: password,
    });
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data.data));
  };
  if (localStorage.getItem("user")) {
    if (JSON.parse(localStorage.getItem("user")).isAdmin) {
      return <Navigate to="/admin" />;
    } else {
      return <Navigate to="/" />;
    }
  } else {
    return (
      <div className="container">
        <h2>Sign In</h2>
        <div className="form-group">
          <Inputs
            type="text"
            placeholder="email"
            id="email"
            text="email"
            val={(e) => setEmail(e.target.value)}
          />
          <Inputs
            type="text"
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
          clicks={signin}
        />
      </div>
    );
  }
}

export default Signin;
