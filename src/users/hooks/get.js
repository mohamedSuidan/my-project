import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [isLoding, setLoding] = useState(true);
  const fetchData = (id) => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user")).token
            : "",
        },
        params: {
          id: id,
        },
      })
      .then((res) => {
        setResponse(res.data);
        setLoding(false);
      })
      .catch((err) => {
        console.log(err);
        setLoding(false);
      });
  };

  useEffect(() => {
    fetchData(
      JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user")).id
        : ""
    );
  }, [url]);

  return { response, isLoding };
};

export default useAxios;
