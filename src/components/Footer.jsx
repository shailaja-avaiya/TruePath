import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#333', color: 'white', padding: '30px 0', marginTop: '30px' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          <div className="footer-info">
            <div className="footer-logo">
              <span style={{ color: '#e85504', fontWeight: 'bold', fontSize: '1.5rem' }}>TruPath</span>
            </div>
            <p style={{ color: '#aaa', marginBottom: '20px' }}>
              TruPath Specialty Vehicles is a premier manufacturer of work trucks, specialty vehicles, 
              and buses designed to meet the unique needs of our customers.
            </p>
          </div>
          
          <div className="footer-nav">
            <h4 style={{ fontSize: '18px', marginBottom: '20px', color: 'white' }}>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}><Link to="/work-trucks" style={{ color: '#aaa' }}>Work Trucks</Link></li>
              <li style={{ marginBottom: '12px' }}><Link to="/specialty-vehicles" style={{ color: '#aaa' }}>Specialty Vehicles</Link></li>
              <li style={{ marginBottom: '12px' }}><Link to="/buses" style={{ color: '#aaa' }}>Buses</Link></li>
            </ul>
          </div>
          
          <div className="footer-nav">
            <h4 style={{ fontSize: '18px', marginBottom: '20px', color: 'white' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}><Link to="/about" style={{ color: '#aaa' }}>About Us</Link></li>
              <li style={{ marginBottom: '12px' }}><Link to="/dealer-locator" style={{ color: '#aaa' }}>Dealer Locator</Link></li>
              <li style={{ marginBottom: '12px' }}><Link to="/become-dealer" style={{ color: '#aaa' }}>Become a Dealer</Link></li>
              <li style={{ marginBottom: '12px' }}><Link to="/contact" style={{ color: '#aaa' }}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="legal-links" style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Link to="/privacy-policy" style={{ color: '#888', margin: '0 15px' }}>Privacy Policy</Link>
          <Link to="/terms-of-use" style={{ color: '#888', margin: '0 15px' }}>Terms of Use</Link>
        </div>
        
        <div className="copyright" style={{ textAlign: 'center', marginTop: '20px', color: '#777' }}>
          <p>&copy; {new Date().getFullYear()} TruPath Specialty Vehicles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;