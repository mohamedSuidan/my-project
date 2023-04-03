import {
  Chart,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useAxios from "../hooks/fetchData";
import { useState } from "react";
import { useEffect } from "react";
Chart.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

function Charts({ url }) {
  const { response } = useAxios({
    url: url,
  });
  const [datas, setData] = useState([]);
  const [month, setMonth] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setMonth(response.month);
      setCount(response.userCount);
    }
  }, [response]);
  console.log(month);
  const data = {
    labels: month,
    datasets: [
      {
        label: "Users",
        backgroundColor: "#9BD0F5",
        borderColor: "#36A2EB",
        borderWidth: 2,
        data: count,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Users",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "right",
    },
  };
  return (
    <div>
      {" "}
      <Bar data={data} options={options} />
    </div>
  );
}

export default Charts;
