import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Election Dashboard</h1>
      <button
        onClick={() => navigate(`/UKGeneral/constituencies`)}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        View List of Constituencies
      </button>
    </div>
  );
};

export default HomePage;
