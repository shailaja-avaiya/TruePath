import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaGlobe, FaEnvelope, FaSearch } from 'react-icons/fa';
import './DealerLocatorPage.css';

// Demo dealer data - in a real application, this would come from an API
const dealersData = [
  {
    id: 1,
    name: "Midwest Truck Center",
    address: "123 Main Street, Chicago, IL 60007",
    phone: "(312) 555-7890",
    email: "info@midwesttrucks.com",
    website: "www.midwesttrucks.com",
    region: "Midwest"
  },
  {
    id: 2,
    name: "East Coast Specialty Vehicles",
    address: "456 Parkway Avenue, New York, NY 10001",
    phone: "(212) 555-1234",
    email: "sales@eastcoastvehicles.com",
    website: "www.eastcoastvehicles.com",
    region: "Northeast"
  },
  {
    id: 3,
    name: "Southern Transport Solutions",
    address: "789 Oak Boulevard, Atlanta, GA 30301",
    phone: "(404) 555-6789",
    email: "info@southerntransport.com",
    website: "www.southerntransport.com",
    region: "Southeast"
  },
  {
    id: 4,
    name: "Western Fleet Services",
    address: "101 Palm Drive, Los Angeles, CA 90001",
    phone: "(213) 555-4321",
    email: "info@westernfleet.com",
    website: "www.westernfleet.com",
    region: "West"
  },
  {
    id: 5,
    name: "Rocky Mountain Vehicles",
    address: "202 Mountain View Road, Denver, CO 80201",
    phone: "(303) 555-8765",
    email: "sales@rockymtnvehicles.com",
    website: "www.rockymtnvehicles.com",
    region: "Mountain"
  },
  {
    id: 6,
    name: "Southwest Bus & Truck",
    address: "303 Desert Avenue, Phoenix, AZ 85001",
    phone: "(602) 555-9876",
    email: "info@southwestbt.com",
    website: "www.southwestbt.com",
    region: "Southwest"
  },
  {
    id: 7,
    name: "Northwest Specialty Vehicles",
    address: "404 Evergreen Way, Seattle, WA 98101",
    phone: "(206) 555-2345",
    email: "sales@northwestvehicles.com",
    website: "www.northwestvehicles.com",
    region: "Northwest"
  },
  {
    id: 8,
    name: "Central States Trucks",
    address: "505 Prairie Road, Kansas City, MO 64101",
    phone: "(816) 555-3456",
    email: "info@centralstatestrucks.com",
    website: "www.centralstatestrucks.com",
    region: "Midwest"
  }
];

const regions = [
  { id: "all", name: "All Regions" },
  { id: "Northeast", name: "Northeast" },
  { id: "Southeast", name: "Southeast" },
  { id: "Midwest", name: "Midwest" },
  { id: "Southwest", name: "Southwest" },
  { id: "West", name: "West" },
  { id: "Northwest", name: "Northwest" },
  { id: "Mountain", name: "Mountain" }
];

const DealerLocatorPage = () => {
  const [searchZip, setSearchZip] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [filteredDealers, setFilteredDealers] = useState(dealersData);
  
  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    
    if (region === 'all') {
      setFilteredDealers(dealersData);
    } else {
      setFilteredDealers(dealersData.filter(dealer => dealer.region === region));
    }
  };
  
  const handleZipSearch = (e) => {
    e.preventDefault();
    // In a real application, you would search dealers by distance from this ZIP code
    // For demo purposes, we'll just filter based on if the ZIP appears in the address
    if (searchZip) {
      setFilteredDealers(dealersData.filter(dealer => 
        dealer.address.includes(searchZip)
      ));
    } else {
      setFilteredDealers(dealersData);
    }
  };
  
  return (
    <div className="dealer-locator-page">
      <div className="dealer-header">
        <div className="container">
          <h1>Find a TruPath Dealer Near You</h1>
          <p>Locate an authorized dealer to explore our vehicles and get personalized assistance</p>
        </div>
      </div>
      
      <div className="container">
        <div className="dealer-search-container">
          <div className="search-filters">
            <div className="zip-search">
              <h3>Search by ZIP Code</h3>
              <form onSubmit={handleZipSearch} className="zip-form">
                <input 
                  type="text" 
                  placeholder="Enter ZIP Code" 
                  value={searchZip}
                  onChange={(e) => setSearchZip(e.target.value)}
                />
                <button type="submit" className="btn-icon">
                  <FaSearch />
                </button>
              </form>
            </div>
            
            <div className="region-filter">
              <h3>Filter by Region</h3>
              <select 
                value={selectedRegion} 
                onChange={handleRegionChange}
                className="region-select"
              >
                {regions.map(region => (
                  <option key={region.id} value={region.id}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* <div className="dealer-results">
            <h2>Authorized Dealer Partners</h2>
            
            {filteredDealers.length === 0 ? (
              <div className="no-results">
                <p>No dealers found matching your criteria. Please try a different search.</p>
              </div>
            ) : (
              <div className="dealer-list">
                {filteredDealers.map(dealer => (
                  <div key={dealer.id} className="dealer-card">
                    <h3>{dealer.name}</h3>
                    <div className="dealer-region">Region: {dealer.region}</div>
                    <div className="dealer-info">
                      <div className="dealer-info-item">
                        <FaMapMarkerAlt className="dealer-icon" />
                        <span>{dealer.address}</span>
                      </div>
                      <div className="dealer-info-item">
                        <FaPhone className="dealer-icon" />
                        <span>{dealer.phone}</span>
                      </div>
                      <div className="dealer-info-item">
                        <FaEnvelope className="dealer-icon" />
                        <span>{dealer.email}</span>
                      </div>
                      <div className="dealer-info-item">
                        <FaGlobe className="dealer-icon" />
                        <span>{dealer.website}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div> */}
        </div>
        
        <div className="dealer-contact-cta">
          <h3>Need help finding a dealer?</h3>
          <p>Our team can help you locate the nearest TruPath dealer or answer questions about our products.</p>
          <a href="/contact" className="btn">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default DealerLocatorPage;