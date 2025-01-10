import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
    datasets: [
      {
        label: "Sales",
        data:[65, 59, 80, 81, 56, 55], 
        borderColor: "#EDA011",
        backgroundColor: "#EDA011",
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Liczba sprzedanych sztuk",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-bar">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
