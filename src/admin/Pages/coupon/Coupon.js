import React from "react";
import useAxios from "../../hooks/fetchData";
import { useState } from "react";
import { useEffect } from "react";
import DataTable from "../../components/DataTable";

function Coupon() {
  const { response } = useAxios({
    url: "/coupon",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response.coupon);
    }
  }, [response]);
  console.log(data);
  return (
    <div>
      <DataTable
        data={data}
        setIt={setData}
        arr={["#", "code", "discount", "expiration", "control"]}
        columns={["id", "name", "discount", "expiration"]}
        url={"/coupon/delete"}
        type={"coupon"}
      />
    </div>
  );
}

export default Coupon;
