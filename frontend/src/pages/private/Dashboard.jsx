import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Example data for the graph
const quizData = {
  Java: 70,
  Python: 80,
  MERN: 90,
  Springboot: 60,
};

// Data for the bar chart
const data = {
  labels: ["Java", "Python", "MERN", "Springboot"],
  datasets: [
    {
      label: "Correct Answers Percentage",
      data: [
        quizData.Java,
        quizData.Python,
        quizData.MERN,
        quizData.Springboot,
      ],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar username="Yawar Ejaz" />

      {/* Main Content */}
      <div className="h-[85vh] p-8 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Graph Section (Left Side) */}
        <div className="lg:w-3/5 w-full bg-[#D0EFFF] bg-opacity-50 backdrop-blur-lg p-4 rounded-lg shadow-lg">
          <div className="h-full">
            <Bar data={data} options={options} />
          </div>
        </div>

        {/* Glass-style Box Section (Right Side) */}
        <div className="lg:w-2/5 w-full bg-[#D0EFFF] bg-opacity-50 backdrop-blur-lg p-8 rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-center flex flex-col">
            <button
              className="btn bg-[#3582ff] hover:bg-[#2d6fda] text-white font-bold w-40 mb-4"
              onClick={() => console.log("Start a new quiz")}
            >
              Start a New Quiz
            </button>
            <button
              className="btn bg-[#3582ff] hover:bg-[#2d6fda] text-white font-bold w-40"
              onClick={() => console.log("Past quizzes")}
            >
              Past Quizzes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
