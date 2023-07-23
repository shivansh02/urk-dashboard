import React from "react";
import {
  Chart as ChartJS,
  Tooltip,
  ArcElement
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(Tooltip, ArcElement);

const Donut = ({data}) => {
  

  // Optional chart configuration options
  const options = {
    responsive: true,
    maintainAspectRatio: false,

  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
  };
export default Donut;
