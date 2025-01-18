import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ labels, data, title, backgroundColor, borderColor }) => {

  const chartData = {
    labels,
    datasets: [
      {
        label: title || "Data",
        data,
        backgroundColor: backgroundColor || "rgba(54, 162, 235, 0.5)",
        borderColor: borderColor || "rgba(54, 162, 235, 1)",
        borderWidth: 1,
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
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Political Parties",
        },
      },
      y: {
        title: {
          display: true,
          text: "Nunmber of Votes",
        },
      },
    },
  };

  return (
    <div className="h-96 w-full">
      <Bar data={chartData} options={chartOptions} />
</div >
)
}
export default BarChart;
