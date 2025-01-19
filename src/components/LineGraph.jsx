import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
  } from "chart.js";

  ChartJS.register(LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend);


  const LineGraph = ({labels, data, title, backgroundColor, borderColor, xAxisLabel, yAxisLabel}) => {

      const chartData = {
        labels,
        datasets: [{
          label: title,
          data: data,
          fill: false,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          tension: 0.1
        }]
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
            <Line data={chartData} options={chartOptions} />
      </div >
      )
  }

  export default LineGraph;
