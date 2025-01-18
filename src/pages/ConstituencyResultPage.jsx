import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = '87c47b251a9f5c499a515bcc5300d0815f11b82100e17282';
const BASE_URL = 'https://jse-assignment.uk';

const ConstituencyResultPage = () => {
  const { gssId } = useParams();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
 console.log(gssId)

  const fetchConstituencyResult = async () => {
    try {
      const res = await fetch(`${BASE_URL}/UKGeneral/results/${gssId}`, {
        headers: { 'x-api-key': API_KEY },
      });
      const jsonData = await res.json();
      setResults(jsonData);
      console.log(results)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching constituency result:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConstituencyResult();
  }, [gssId]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading data...</p>;
  }

  if (!results) {
    return <p className="text-center text-red-600">Error fetching data.</p>;
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">{results.name}</h1>
          <p className="text-gray-600">{results.county}</p>
          <p className="text-gray-600">Majority: {results.majority.toLocaleString()}</p>
        </header>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <ul className="space-y-4">
            {results.results.map((result, index) => (
              <li key={index} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800">
                  {result.candidateName} ({result.partyName})
                </h3>
                <p className="text-gray-600">Votes: {result.votes.toLocaleString()}</p>
                <p className="text-gray-600">Share: {result.share.toFixed(2)}%</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default ConstituencyResultPage;
