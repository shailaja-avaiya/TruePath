import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import DealerLocatorPage from './components/DealerLocatorPage';
import BecomeDealer from './components/BecomeDealer';
import WorkTrucks from './components/WorkTrucks';
import SpecialtyVehicles from './components/SpecialtyVehicles';
import Buses from './components/Buses';

// The following components need to be created or might not exist yet
// If they don't exist, you can create simple placeholder components for now
const PrivacyPolicy = () => (
  <div className="container" style={{ paddingTop: "100px", minHeight: "60vh" }}>
    <h1>Privacy Policy</h1>
    <p>This page is under construction. Our privacy policy will be available soon.</p>
  </div>
);

const TermsOfUse = () => (
  <div className="container" style={{ paddingTop: "100px", minHeight: "60vh" }}>
    <h1>Terms of Use</h1>
    <p>This page is under construction. Our terms of use will be available soon.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/dealer-locator" element={<DealerLocatorPage />} />
            <Route path="/become-dealer" element={<BecomeDealer />} />
            <Route path="/work-trucks" element={<WorkTrucks />} />
            <Route path="/specialty-vehicles" element={<SpecialtyVehicles />} />
            <Route path="/buses" element={<Buses />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;