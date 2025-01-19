import React from 'react';
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ConstituenciesPage from './pages/ConstituenciesPage'
import ConstituencyResultPage from './pages/ConstituencyResultPage.jsx';
import HomePage from './pages/HomePage.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router >
      <Routes>
      <Route path="/" element={<Navigate to="/UKGeneral" replace />} />
      <Route path="/UKGeneral" element={<HomePage/>} />
        <Route path="/UKGeneral/constituencies" element={<ConstituenciesPage/>} />
        <Route path="/UKGeneral/results/:gssId" element={<ConstituencyResultPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
