import React from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(PointElement, LinearScale, Tooltip, Legend);

const ScatterChart = ({ labels, data, title, backgroundColor, borderColor, xAxisLabel, yAxisLabel }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        pointRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            size: 20,
            weight: "bold",
          },
        },
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: xAxisLabel || "",
          font: {
            weight: "bold",
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: yAxisLabel || "",
          font: {
            weight: "bold",
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="h-96 w-full">
      <Scatter data={chartData} options={chartOptions} />
    </div>
  );
};

export default ScatterChart;
