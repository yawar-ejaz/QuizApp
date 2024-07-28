import React from "react";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Diagonal Sections */}
      <div className="absolute inset-0 bg-blue-100 transform -skew-y-6 origin-top-left"></div>
      <div className="absolute inset-0 bg-blue-200 transform -skew-y-6 origin-bottom-left"></div>

      {/* Content */}
      <div className="relative z-10 text-center p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Quiz App
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Test your knowledge with our interactive quizzes. Ready to get
          started?
        </p>
        <button
          onClick={()=>navigate("/login")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Root;
