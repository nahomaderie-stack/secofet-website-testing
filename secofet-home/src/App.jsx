import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurCoffeesPage from './pages/OurCoffeesPage';
import OriginsPage from './pages/OriginsPage';
import OurOperationsPage from './pages/OurOperationsPage';
import ContactPage from './pages/ContactPage';
import RFQQuote from './pages/RFQQuote';

function App() {
  return (
    <div className="app-container">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/our-coffees" element={<OurCoffeesPage />} />
        <Route path="/origins" element={<OriginsPage />} />
        <Route path="/operations" element={<OurOperationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/rfq" element={<RFQQuote />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
