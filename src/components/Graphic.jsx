import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Graphic = ({ type, labels, data, title, backgroundColor, borderColor, xAxisLabel, yAxisLabel }) => {
  const chartData = {
    type,
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
        labels: {
          display: true,
          font: {
            size: 20,
            weight: "bold",
          },
      },
      },
  },
    scales: {
      x: {
        ticks: {
          callback: function (value) {
            return this.getLabelForValue(value).split('\n');
          },
        },
        title: {
          display: true,
          text: xAxisLabel || "x Axis",
          font: {
            weight: "bold",
            size: 18
          },
        },
      },
      y: {
        title: {
          display: true,
          text: yAxisLabel || "y Axis",
          font: {
            weight: "bold",
            size: 18
          },
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
export default Graphic;
