import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function AddorUpdate({ url }) {
  const [res, setResponse] = useState(null);
  axios.defaults.baseURL = "http://localhost:4000";

  const postData = (data, headers) => {
    axios
      .post(url, data, {
        headers: {
          Authorization: localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user")).token
            : "",
          "Content-Type": headers,
        },
      })
      .then((res) => {
        setResponse(res.data);
        // console.log("good");
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("good");
  };
  return { postData };
}

export default AddorUpdate;
