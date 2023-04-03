import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [isLoding, setLoding] = useState(true);
  const fetchData = () => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user")).token
            : "",
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
    fetchData();
  }, [url]);

  return { response, isLoding };
};

export default useAxios;
