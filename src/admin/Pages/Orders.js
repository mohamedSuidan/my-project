import { useEffect, useState } from "react";
import useAxios from "../hooks/fetchData";
import DataTable from "../components/DataTable";

function Orders() {
  const { response } = useAxios({
    url: "/admin/order",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response.order);
    }
  }, [response]);
  console.log(data);
  return (
    <div>
      <DataTable
        data={data}
        setIt={setData}
        arr={[
          "id",
          "name",
          "product",
          "price",
          "amount",
          "adderss",
          "coupon",
          "status",
          "control",
        ]}
        columns={[
          "id",
          "name",
          "product",
          "price",
          "amount",
          "adderss",
          "coupon",
          "status",
        ]}
        url={"/order/delete"}
        type={"order"}
      />
    </div>
  );
}

export default Orders;
