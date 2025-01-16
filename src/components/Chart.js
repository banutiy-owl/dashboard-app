import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "@/app/layout";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ chartType, showLastData, salesMeasure, timePeriod, t }) => {
  const [chartDataState, setChartDataState] = useState(null);
  const { theme } = useContext(LanguageContext);

  useEffect(() => {
    fetch("/data/chart.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch chart data");
        return response.json();
      })
      .then((data) => {
        let currentData = [];
        let lastData = [];
        let labels = [];

        const days = {
          monday: t["monday"],
          tuesday: t["tuesday"],
          wednesday: t["wednesday"],
          thursday: t["thursday"],
          friday: t["friday"],
          saturday: t["saturday"],
          sunday: t["sunday"],
        };

        if (timePeriod === "week") {
          currentData = data.week.current || [];
          lastData = data.week.last || [];
          labels = currentData.map(
            (entry) => days[entry.weekday.toLowerCase()]
          );
        } else if (timePeriod === "month") {
          currentData = data.month.current || [];
          lastData = data.month.last || [];
          labels = currentData.map((entry) => `${entry.dayNo}`);
        } else if (timePeriod === "day") {
          currentData = data.day.current || [];
          lastData = data.day.last || [];
          labels = currentData.map((entry) => `${entry.hour}:00`);
        }

        const extendedLabels = showLastData
          ? Array.from(
              new Set([
                ...labels,
                ...(lastData || []).map((entry) =>
                  timePeriod === "month"
                    ? `${entry.dayNo}`
                    : timePeriod === "day"
                    ? `${entry.hour}:00`
                    : days[entry.weekday.toLowerCase()]
                ),
              ]))
          : labels;

        const dataForCurrent = extendedLabels.map(
          (label) =>
            currentData.find((entry) => {
              const key =
                timePeriod === "month"
                  ? `${entry.dayNo}`
                  : timePeriod === "day"
                  ? `${entry.hour}:00`
                  : days[entry.weekday.toLowerCase()];
              return key === label;
            })?.[salesMeasure] || 0
        );

        const dataForLast = extendedLabels.map(
          (label) =>
            lastData.find((entry) => {
              const key =
                timePeriod === "month"
                  ? `${entry.dayNo}`
                  : timePeriod === "day"
                  ? `${entry.hour}:00`
                  : days[entry.weekday.toLowerCase()];
              return key === label;
            })?.[salesMeasure] || 0
        );

        setChartDataState({
          labels: extendedLabels,
          datasets: [
            {
              label:
                salesMeasure === "soldItems"
                  ? t["soldItems"] + " (" + t["current"] + ")"
                  : t["turnover"] + " (" + t["current"] + ")",
              data: dataForCurrent,
              backgroundColor: theme === "dark" ? "#F1A600" : "#EDA011",
              borderColor: theme === "dark" ? "#F1A600" : "#EDA011",
              borderWidth: 1,
            },
            ...(showLastData
              ? [
                  {
                    label:
                      salesMeasure === "soldItems"
                        ? t["soldItems"] + " (" + t["last"] + ")"
                        : t["turnover"] + " (" + t["last"] + ")",
                    data: dataForLast,
                    backgroundColor: theme === "dark" ? "#D86B00" : "#db6516",
                    borderColor: theme === "dark" ? "#D86B00" : "#db6516",
                    borderWidth: 1,
                  },
                ]
              : []),
          ],
        });
      })
      .catch((error) => console.error("Error fetching chart data:", error));
  }, [salesMeasure, showLastData, timePeriod, t, theme]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: theme === "dark" ? "#fff" : "#000",
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: theme === "dark" ? "#6b6b6b" : "#ccc",
          display: true,
        },
        ticks: {
          color: theme === "dark" ? "#fff" : "#000",
        },
      },
      y: {
        title: {
          display: true,
          text: salesMeasure === "soldItems" ? t["soldItems"] : t["turnover"],
          color: theme === "dark" ? "#fff" : "#000",
        },
        grid: {
          color: theme === "dark" ? "#6b6b6b" : "#ccc",
          display: true,
        },
        ticks: {
          color: theme === "dark" ? "#fff" : "#000",
        },
        beginAtZero: true,
      },
    },
  };

  if (!chartDataState) {
    return <div>Loading chart data...</div>;
  }

  return (
    <div className="chart-bar">
      {chartType === "bar" ? (
        <Bar data={chartDataState} options={options} />
      ) : (
        <Line data={chartDataState} options={options} />
      )}
    </div>
  );
};

export default Chart;
