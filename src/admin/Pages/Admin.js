import React from "react";
import Cards from "../components/Cards";
import { FaUsers } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { HiTicket } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import useAxios from "../hooks/fetchData";
import { useState } from "react";
import { useEffect } from "react";
import Charts from "../components/Charts";
// IoCartSharp;
function Admin() {
  const { response, isLoding } = useAxios({
    url: "/dashboard",
  });
  const color = ["#03A9F4", "#7C4DFF", "#F44336", "#757575"];
  const icons = [<FaUsers />, <BsFillCartFill />, <HiTicket />, <BiCategory />];
  const [data, setData] = useState([]);
  useEffect(() => {
    if (response !== null) {
      setData(response.count);
    } else {
      setData([]);
    }
  }, [response]);
  return (
    <>
      <div className="row">
        {data
          ? data.map((ele, i) => {
              return (
                <div className="col-3" key={i}>
                  <Cards
                    bgc={color[i]}
                    number={ele.table_rows}
                    text={ele.table_name}
                    svg={icons[i]}
                  />
                </div>
              );
            })
          : ""}
      </div>
      <div className="row">
        <div className="col-6">
          <Charts url={"/chart-data"} />
        </div>
      </div>
    </>
  );
}

export default Admin;
