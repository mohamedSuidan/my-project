import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);

  const fetchData = () => {
    axios
      .get(url, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("user")).token,
        },
      })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { response };
};

export default useAxios;
