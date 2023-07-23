import React from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const BarGraph = () => {
  // Sample data for the bar graph
  const data = {
    labels: ['20', " ", '25', ' ', '30', ' ', '40', ' ', '60', ' ', '65'],
    datasets: [
        {
            label: 'Employer',
            backgroundColor: "#0800A3",
            data: [30, 35, 40, 45, 50, 55, 60, 70, 80, 90, 100],
            barPercentage: 0.4,
          },
          {
            label: 'Employee',
            backgroundColor: "#4834FF",
            data: [30, 35, 40, 45, 50, 55, 60, 70, 80, 90, 100],
            barPercentage: 0.4,
          },
          {
            label: 'Total Interest',
            backgroundColor: "#85AEFE",
            data: [30, 35, 40, 45, 50, 55, 60, 70, 80, 90, 100],
            barPercentage: 0.4,
          },
          
    ],
  };

  // Optional chart configuration options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 300,
        stacked: true,
        grid: {
            // You can change the color, the dash effect, the main axe color, etc.
            color: "#d6d4d4"
        },
        border: {
            dash: [3, 6], // Sets the length and spacing of dashes on grid lines
            dashOffset: 0, // Optionally, you can set an offset for the line dashes
            color: 'rgba(0, 0, 0, 0.05)', // Set the color of the grid lines
            width: 1, // Set the width of the grid lines
            display: false, // Set to true to draw the border (which includes grid lines)
          },
          ticks: {
            callback: (value) => `$${value}`,
            display: true, // Set to true to show tick labels
            drawTicks: false,
            color: 'gray', // Set the color of tick labels
            font: {
              size: 12, // Set the font size for tick labels
            },
            maxTicksLimit: 5, // Set maximum number of ticks
          },
      },
      x: {
        stacked: true,
        grid: {
            // You can change the color, the dash effect, the main axe color, etc.
            color: "#fff"
        },
        border: {
            display: false,
        },
       
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
