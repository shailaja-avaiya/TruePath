import React, { useState, useRef } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const ContactPage = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setFormError(null);
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_testfortobby',       
      'template_q20swby',      
      form.current,
      '7iOdLnNtmIpaHUJHC',        
    )
      .then(() => {
        console.log('Form submitted successfully');
        setFormSubmitted(true);
        setLoading(false);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        }, 3000);
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        setFormError('Failed to send message. Please try again or contact us directly.');
        setLoading(false);
      });
  };
  
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team to discuss your transportation needs</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>How to Reach Us</h2>
              
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h3>Address</h3>
                  <p>2503 W. Mishawaka Road</p>
                  <p>Elkhart, IN 46517</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaPhone className="info-icon" />
                <div>
                  <h3>Phone</h3>
                  <p>Sales & Support : </p>
                  <p>574-359-5321</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <p>sales : rodc@tpsv1.com</p>
                  <p>support : tobyc@tpsv1.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaClock className="info-icon" />
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="form-success">
                  <h3>Thank you for your message!</h3>
                  <p>We have received your inquiry and will get back to you shortly.</p>
                </div>
              ) : (
                <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name" // This should match EmailJS template variable
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email" // This should match EmailJS template variable
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="user_phone" // This should match EmailJS template variable
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject*</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject" // This should match EmailJS template variable
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message*</label>
                    <textarea
                      id="message"
                      name="message" // This should match EmailJS template variable
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
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
        </div>
      </section>
      
      <section className="section-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Looking for a specific vehicle model?</h2>
            <p>
              Browse our products or find a dealer near you for personalized assistance.
            </p>
            <div className="cta-btns">
              <a href="/work-trucks" className="btn btn-primary">View Products</a>
              <a href="/dealer-locator" className="btn btn-secondary">Find a Dealer</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;