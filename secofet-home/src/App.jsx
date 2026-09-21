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
import NotFoundPage from './pages/NotFoundPage';
import RFQQuote from './pages/RFQQuote';

import TermsConditionsPage from './pages/TermsConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';

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
        <Route path='/*' element={<NotFoundPage />} />
        <Route path="/terms" element={<TermsConditionsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/cookie" element={<CookiePolicyPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
