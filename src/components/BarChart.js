import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
    datasets: [
      {
        label: "Sales",
        data:[65, 59, 80, 81, 56, 55], 
        borderColor: "#EDA011",
        backgroundColor: "#EDA011",
        borderWidth: 1,
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
      title: {
        display: false,
        text: "Monthly Sales",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
