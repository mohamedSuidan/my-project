import { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import useAxios from "../../hooks/fetchData";

function Product() {
  const { response } = useAxios({
    url: "/product",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response.product);
    }
  }, [response]);
  console.log(data);
  return (
    <div>
      <DataTable
        data={data}
        setIt={setData}
        arr={[
          "#",
          "product",
          "price",
          "discount",
          "category",
          "amount",
          "control",
        ]}
        columns={["id", "name", "price", "discount", "category", "amount"]}
        url={"/product/delete"}
        type={"products"}
      />
    </div>
  );
}

export default Product;
