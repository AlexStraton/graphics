import React from "react";
import { useNavigate } from "react-router-dom";
import Map from "../components/Map";
//import ScatterChart from "../components/Scatter";

const HomePage = ({results, allConstituencies}) => {
  const navigate = useNavigate();

// console.log("results", results, "all constituencies", allConstituencies)
// let countyGssIdsObj = {}
// const countyList = allConstituencies.forEach((constituency) => {
//    data[constituency.coun] = constituency.gssId
// })
// const countyTurnout = results.reduce((acc, result) => {
//   acc[result.county] = (acc[result.county] || 0) + result.turnout;
//   return acc;
// }, {});

// console.log(countyTurnout);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Election Dashboard</h1>
      <button
        onClick={() => navigate(`/UKGeneral/constituencies`)}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        View List of Constituencies
      </button>
      <br />
      {/* <ScatterChart
      data={results}
      title="Turnout by County"
      backgroundColor="rgba(75, 192, 192, 0.2)"
      borderColor="rgba(75, 192, 192, 1)"
      xAxisLabel="County"
      yAxisLabel="Turnout (%)"
      /> */}
      <Map results={results}/>
    </div>
  );
};

export default HomePage;
