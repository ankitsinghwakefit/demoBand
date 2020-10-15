import React from "react";
import ChartStyle from "../styles/chart.module.css";
import { Line } from "react-chartjs-2";

function chart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Number of contracts for 2020",
        data: [5, 8, 4, 7, 8],
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
      {
        label: "Number of contracts for 2019",
        data: [7, 4, 1, 3, 6],
        borderColor: ["rgba(54, 162, 235, 0.2)"],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        pointBackgroundColor: "rgba(54, 162, 235, 0.2)",
        pointBorderColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 9,
            stepSize: 1,
          },
        },
      ],
    },
  };

  return (
    <div className={ChartStyle.chartContainer}>
      <Line data={data} options={options} />
    </div>
  );
}

export default chart;
