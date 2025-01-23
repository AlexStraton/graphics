
import './App.css'
import React from "react";
import ConstituenciesPage from './pages/ConstituenciesPage'
import ConstituencyResultPage from './pages/ConstituencyResultPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from 'react';

const API_KEY = '87c47b251a9f5c499a515bcc5300d0815f11b82100e17282';
const BASE_URL = 'https://jse-assignment.uk';

function App() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allConstituencies, setAllConstituencies] = useState([])

const ConstituencyResults = async (gssId) => {
    try {
        const res = await fetch(`${BASE_URL}/UKGeneral/results/${gssId}`, {
            headers: { 'x-api-key': API_KEY },
          });
          const jsonData = await res.json();
          setResults(jsonData);
          setLoading(false);
      } catch (error) {
          console.error('Error fetching constituency result:', error);
          setLoading(false);
      }
  };
  const getAllConstituencies = async () => {
    try {
     const res = await fetch( `${BASE_URL}/UKGeneral/constituencies/`, {
      headers: {
        'x-api-key': API_KEY
      }
    })
    const jsonData = await res.json();
    setAllConstituencies(jsonData)
    } catch(error) {
        console.error()
    }
 }

  
  return (
   <>
    <Routes>
      <Route path="/" element={<Navigate to="/UKGeneral" replace />} />
      <Route path="/UKGeneral" element={<HomePage results={results} allConstituencies={allConstituencies}/>} />
      <Route path="/UKGeneral/constituencies" element={<ConstituenciesPage fetchConstituencies={getAllConstituencies} allConstituencies={allConstituencies}/>} />
      <Route
      path="/UKGeneral/results/:gssId"
      element={<ConstituencyResultPage loading={loading} results={results} fetchResults={ConstituencyResults} />}
    />
  </Routes>
   </>
  )
}

export default App
