import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DataTable from "../../components/DataTable";
import useAxios from "../../hooks/fetchData";

function Category() {
  const { response } = useAxios({
    url: "/category",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response.category);
    }
  }, [response]);
  // console.log(data);
  return (
    <DataTable
      data={data}
      setIt={setData}
      arr={["#", "category", "control"]}
      columns={["id", "name"]}
      url={"/category/delete"}
      type={"category"}
    />
  );
}

export default Category;
