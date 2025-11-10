import React, { useState } from 'react';
import { FaHandshake, FaMapMarkedAlt, FaHeadset, FaUserTie, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './BecomeDealer.css';

const BecomeDealer = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    currentBrands: '',
    yearsInBusiness: '',
    additionalInfo: '',
    agreeToTerms: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setFormError(null);
    
    // Here you would normally send this data to your backend
    // For demo purposes, we'll simulate a successful submission
    setTimeout(() => {
      setFormSubmitted(true);
      setLoading(false);
    }, 1500);
  };
  
  return (
    <div className="dealer-page">
      <div className="dealer-header">
        <div className="container">
          <h1>Become a TruPath Dealer</h1>
          <p>Join our network of trusted dealers and grow your business with our innovative specialty vehicles</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="partner-section">
            <h2>Partner with TPSV: Drive Profit with Proven Expertise</h2>
            <p>
              Join TruPath Specialty Vehicles' exclusive dealer network and tap into our innovative lineup of work trucks, 
              specialty vehicles, and buses, backed by over 30 years of RV industry leadership. From our base in Elkhart, 
              Indiana, the RV capital of the world, TPSV empowers dealers with:
            </p>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaHandshake />
                </div>
                <h3>Market-Leading Products</h3>
                <p>
                  Offer customizable, high-demand vehicles designed for fleets, government contracts, and more.
                </p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaMapMarkedAlt />
                </div>
                <h3>Dedicated Territories</h3>
                <p>
                  Maximize profits with protected regions and premium branding.
                </p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaHeadset />
                </div>
                <h3>Unmatched Support</h3>
                <p>
                  Access dedicated training, co-branded marketing materials, and a secure dealer portal for seamless ordering and inventory management.
                </p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaUserTie />
                </div>
                <h3>Proven Leadership</h3>
                <p>
                  Our team, with decades of industry experience, has driven growth by scaling innovative vehicle lines 
                  and forging lasting dealer partnerships throughout the space.
                </p>
              </div>
            </div>
          </div>
          
          <div className="dealer-portal-preview">
            <h1 >Coming Soon ...</h1>

            <h2>Dealer Portal</h2>
            <p>
              As a TruPath dealer, you'll gain access to our secure online portal featuring:
            </p>
            <ul className="portal-features">
              <li>Real-time inventory availability</li>
              <li>Online ordering system</li>
              <li>Pricing and specification details</li>
              <li>Marketing materials and product images</li>
              <li>Technical documentation and support resources</li>
              <li>Sales training and product updates</li>
            </ul>
            <div className="portal-image-placeholder">
              <p>Dealer Portal Preview</p>
              <span>(Portal image will be added here)</span>
            </div>
          </div>
          
          <div className="application-section">
            <h2>Become a TPSV Dealer Today</h2>
            <p>
              Complete the application form below to start the process of becoming an authorized 
              TruPath Specialty Vehicles dealer. Our team will review your information and contact 
              you to discuss the next steps.
            </p>
            
            {formSubmitted ? (
              <div className="form-success">
                <h3>Thank you for your interest!</h3>
                <p>Your application has been received. A member of our dealer development team will contact you soon to discuss your application.</p>
              </div>
            ) : (
              <form className="dealer-application-form" onSubmit={handleSubmit}>
                <div className="form-section">
                  <h3>Business Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="businessName">Business Name*</label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="yearsInBusiness">Years in Business</label>
                      <input
                        type="number"
                        id="yearsInBusiness"
                        name="yearsInBusiness"
                        value={formData.yearsInBusiness}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="address">Business Address*</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="city">City*</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="state">State*</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="zip">ZIP Code*</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="currentBrands">Current Vehicle Brands (if applicable)</label>
                    <input
                      type="text"
                      id="currentBrands"
                      name="currentBrands"
                      value={formData.currentBrands}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-section">
                  <h3>Contact Information</h3>
                  <div className="form-group">
                    <label htmlFor="contactName">Contact Name*</label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number*</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="form-section">
                  <h3>Additional Information</h3>
                  <div className="form-group">
                    <label htmlFor="additionalInfo">What TPSV product are you interested in?</label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows="5"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <div className="form-group checkbox-group">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="agreeToTerms">
                      I agree to receive communications from TruPath Specialty Vehicles regarding my dealer application and other business opportunities.*
                    </label>
                  </div>
                </div>
                
                <button type="submit" className="btn btn-primary" disabled={loading || !formData.agreeToTerms}>
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
                
                {formError && (
                  <div className="form-error">
                    <p>{formError}</p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
      
      <section className="dealer-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Have Questions About Becoming a Dealer?</h2>
            <p>
              Contact our dealer development team to learn more about the benefits of partnering with TruPath Specialty Vehicles.
            </p>
            <Link to="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeDealer;