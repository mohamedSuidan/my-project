import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";

function AddUsers() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [file, setFile] = useState("");
  let navigate = useNavigate();
  const formData = new FormData();
  formData.append("img", file);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);
  let addUser = async () => {
    let msg = await axios.post("http://localhost:4000/users/add", formData, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("user")).token,
        "content-type": "multipart/form-data",
      },
    });
    if (msg) {
      console.log("good");

      return navigate("/users");
    }
  };
  return (
    <div className="container">
      <h1>Add User</h1>
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
        <Inputs
          type="file"
          placeholder="Your Photo"
          id="file"
          text="Photo"
          val={(e) => setFile(e.target.files[0])}
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
          clicks={addUser}
        />
      </div>
    </div>
  );
}

export default AddUsers;
