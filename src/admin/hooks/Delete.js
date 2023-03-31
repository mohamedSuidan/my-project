import axios from "axios";
import { useState } from "react";

function Delete({ url }) {
  const [setData] = useState([]);
  axios.defaults.baseURL = "http://localhost:4000";

  let dels = async (data) => {
    await axios.get(url, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("user")).token,
      },
      params: {
        id: data,
      },
    });
  };
  return { dels };
}

export default Delete;
