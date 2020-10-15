import React from "react";
import ChartStyle from "../styles/chart.module.css";
import { Doughnut } from "react-chartjs-2";

function doughnut() {
  const data = {
    labels: ["jan", "feb", "mar", "apr", "may"],
    datasets: [
      {
        label: "Number of contracts for 2020",
        data: [5, 8, 4, 7, 8],
        borderColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        backgroundColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Doughnut Chart",
    },
  };

  return (
    <div className={ChartStyle.chartContainer}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default doughnut;
