import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Delete from "../hooks/Delete";
import Buttons from "./Buttons";
function DataTable({ data, setIt, arr, columns, url, type }) {
  let { dels } = Delete({
    url: url,
  });
  let del = async (e) => {
    console.log(e.target.id);
    setIt(
      data.filter((ele) => {
        return ele.id !== +e.target.id;
      })
    );
    dels(e.target.id);
    // await axios.get("http://localhost:4000/users/delete", {
    //   headers: {
    //     Authorization: JSON.parse(localStorage.getItem("user")).token,
    //   },
    //   params: {
    //     id: e.target.id,
    //   },
    // });
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            {arr.map((ele, i) => {
              return (
                <th key={i} scope="col">
                  {ele}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((ele, i) => {
            return (
              <tr key={ele.id}>
                {columns.map((data, i) => {
                  if (data === "price") {
                    return <td key={i}>{ele[data]} $</td>;
                  }
                  if (data === "discount") {
                    return <td key={i}>{ele[data]} %</td>;
                  }
                  return <td key={i}>{ele[data]}</td>;
                })}
                <td>
                  <Link to={`/${type}/update/${ele.id}`} className="link">
                    Update
                  </Link>
                  <Buttons
                    bgc="#c43227"
                    color="#fff"
                    borderRaduis="5px"
                    border="none"
                    padding="10px 20px"
                    fontSize="17px"
                    text="Delete"
                    clicks={del}
                    id={ele.id}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to={`/${type}/add`} className="link add">
        Add {type}
      </Link>
    </>
  );
}

export default DataTable;
