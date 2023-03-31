import { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import useAxios from "../../hooks/fetchData";

function Users() {
  const { response } = useAxios({
    url: "/users",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response.user);
    }
  }, [response]);
  console.log(data);
  return (
    <div>
      <DataTable
        data={data}
        setIt={setData}
        arr={["#", "name", "email", "control"]}
        columns={["id", "name", "email"]}
        url={"/users/delete"}
        type={"users"}
      />
    </div>
  );
}

export default Users;
