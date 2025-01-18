import React from 'react';
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConstituenciesPage from './pages/ConstituenciesPage'
import ConstituencyResultPage from './pages/ConstituencyResultPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ConstituenciesPage/>} />
        <Route path="/constituency/:gssId" element={<ConstituencyResultPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
