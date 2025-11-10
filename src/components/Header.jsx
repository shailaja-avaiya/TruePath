import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Header.css';
import logo from '../assets/trupath-logo-orange.png'; // Make sure to add this to your assets folder

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="TruPath Specialty Vehicles" />
            </Link>
          </div>
          
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            
            {/* Products Dropdown */}
            <div className="dropdown-container">
              <button 
                className="dropdown-toggle" 
                onClick={toggleProductsDropdown}
              >
                Our Products <FaChevronDown className={`dropdown-icon ${isProductsDropdownOpen ? 'open' : ''}`} />
              </button>
              
              <div className={`dropdown-menu ${isProductsDropdownOpen ? 'open' : ''}`}>
                <Link 
                  to="/work-trucks" 
                  onClick={() => {
                    setIsProductsDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Work Trucks
                </Link>
                <Link 
                  to="/specialty-vehicles" 
                  onClick={() => {
                    setIsProductsDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Specialty Vehicles
                </Link>
                <Link 
                  to="/buses" 
                  onClick={() => {
                    setIsProductsDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Buses
                </Link>
              </div>
            </div>
            
            <Link to="/dealer-locator" onClick={() => setIsMobileMenuOpen(false)}>Dealer Locator</Link>
            <Link to="/become-dealer" onClick={() => setIsMobileMenuOpen(false)} >Become a Dealer</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;