import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BarGraph from '../components/BarGraph';
import LineGraph from '../components/LineGraph';

const ConstituencyResultPage = ({results, fetchResults, loading}) => {
  const { gssId } = useParams();


  useEffect(() => {
    if (gssId) {
      fetchResults(gssId);
    }
  }, [gssId]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading data...</p>;
  }

  if (!results) {
    return <h2 className="text-center text-red-600">Error fetching data.</h2>;
  }

  const partyName = results.results.map((result) => {
    return result.partyName
  })
  const candidateName = results.results.map((result) => {
    return `${result?.candidateName || "Unknown candidate"}\n
    (${result?.partyName || "Unknown party"}) `

  })
const chartData = results.results.map((result) => {
    return result.votes
  })
const percentageShare = results.results.map((result) => {
    return result.share
})

let highest = 0
let winningCandidate = null
let winningPartyName = null
const winner = results.results.map((result) => {
            if (result.votes > highest) {
                highest = result.votes
                winningCandidate = result.candidateName
                winningPartyName = result.partyName
            }

  })

  return (
    <main className="min-h-screen bg-gray-100 py-8 p-8">
      <div className="container mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800"> {results.name}</h1>
          <p className="text-gray-600">County: {results.county}</p>
          <p className="text-gray-600">Majority: {results.majority.toLocaleString()}</p>
          <p className="text-gray-600">Turnout: {results.turnout.toLocaleString()}</p>
        </header>
        <section>
          <h2 className="text-2xl font-semibold mb-4 p-8">Results </h2>

          <h2 className="text-2xl font-semibold mb-4 text-center">
  {winningCandidate
    ? `The winner is ${winningCandidate} (${winningPartyName}) with ${highest.toLocaleString()} votes.`
    : "No results available."}
</h2>

          <BarGraph
            labels={candidateName}
            data={chartData}
            title="Votes"
            backgroundColor="rgba(75, 192, 192, 0.5)"
            borderColor="rgb(31, 181, 181)"
            xAxisLabel="Candidates"
            yAxisLabel="Number of Votes"
          />
          <br></br>
          <ul className="grid gap-4 p-8 m-6 grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
            {results.results.map((result, index) => (

              <li key={index} className={` p-6 ${
                result.votes === highest ? "bg-green-200" : "bg-white shadow-md rounded-lg p-6 border border-gray-200"
              }`}>
                <h3 className="text-xl font-semibold text-gray-800">
                  {result.candidateName ?? 'Unknown candidate'} ({result.partyName})
                </h3>
                <p className="text-gray-600 bg-teal-300 p-3 rounded-md my-2">Votes: {result.votes.toLocaleString()}</p>
                <p className="text-gray-600 bg-purple-300 p-3 rounded-md my-2">Percentage Share: {result.share.toFixed(2)}%</p>
              </li>
            ))}
          </ul>
          <LineGraph
            labels={partyName}
            data={percentageShare}
            title="Percentage Share"
            backgroundColor="rgba(225, 118, 246, 0.5)"
            borderColor="rgb(161, 55, 243)"
            xAxisLabel="Political Parties"
            yAxisLabel="Percentage Share (%)"
          />

        </section>
      </div>
    </main>
  );
};

export default ConstituencyResultPage;
