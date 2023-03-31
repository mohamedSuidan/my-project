import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
// import "./signin.css";
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
      return <Navigate to="/admin" />;
    }
  } else {
    return (
      <div className="container">
        <div>
          <h2>Sign In</h2>
          <label htmlFor="email">Username</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <br />

          <button type="submit" onClick={signin}>
            Sign In
          </button>
        </div>
      </div>
    );
  }
}

export default Signin;
