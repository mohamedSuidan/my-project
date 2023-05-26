import Header from "../components/Header";
import Product from "../components/Product";
import Type from "../components/Type";
import "../styles/index.css";
import useAxios from "../hooks/get";
import { useState } from "react";
import { useEffect } from "react";
// import Navbar from "../components/Navbar";
function Home() {
  let { response } = useAxios({
    url: "/user/product",
  });
  let [data, setData] = useState([]);
  let [img, setImg] = useState([]);
  useEffect(() => {
    if (response !== null) {
      setData(response.product);
      setImg(response.img);
    }
  }, [response]);
  return (
    <>
      {/* <Navbar /> */}
      <Product product={data} img={img} />
    </>
  );
}

export default Home;
