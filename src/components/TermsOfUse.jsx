import React from 'react';
import './LegalPages.css';

const TermsOfUse = () => {
  return (
    <div className="legal-page">
      <div className="page-header">
        <div className="container">
          <h1>Terms of Use</h1>
          <p>Last Updated: May 1, 2025</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>Terms and Conditions</h2>
            <p>
              Welcome to TruPath Specialty Vehicles. By accessing or using our website, you agree to be bound by these Terms of Use. 
              Please read these terms carefully before using our website.
            </p>
            
            <div className="legal-section">
              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing or using this website, you agree to these Terms of Use and our Privacy Policy. If you do not agree to these 
                Terms, please do not use our website.
              </p>
            </div>
            
            <div className="legal-section">
              <h3>2. Changes to Terms</h3>
              <p>
                We may revise these Terms of Use at any time without notice. By continuing to use this website after we make any such 
                changes, you accept the revised Terms.
              </p>
            </div>
            
            <div className="legal-section">
              <h3>3. Use of Our Website</h3>
              <p>You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others.</p>
              <p>You are prohibited from:</p>
              <ul>
                <li>Using our website in any way that could disable, overburden, or impair the site</li>
                <li>Using any robot, spider, or other automatic device to access our website</li>
                <li>Introducing viruses, trojans, worms, or other malicious code to our website</li>
                <li>Attempting to gain unauthorized access to our website or systems</li>
              </ul>
            </div>
            
            <div className="legal-section">
              <h3>4. Intellectual Property</h3>
              <p>
                All content, features, and functionality on our website, including but not limited to text, graphics, logos, images, 
                and software, are owned by TruPath Specialty Vehicles and are protected by U.S. and international copyright, trademark, 
                and other intellectual property laws.
              </p>
            </div>
            
            <div className="legal-section">
              <h3>5. Disclaimer of Warranties</h3>
              <p>
                Our website and all content provided on our website are provided on an "as is" and "as available" basis without any 
                warranties of any kind. We do not guarantee that our website will be uninterrupted, timely, secure, or error-free.
              </p>
            </div>
            
            <div className="legal-section">
              <h3>6. Limitation of Liability</h3>
              <p>
                In no event will TruPath Specialty Vehicles, its affiliates, or their licensors, service providers, employees, agents, 
                officers, or directors be liable for damages of any kind arising out of or in connection with your use of our website.
              </p>
            </div>
            
            <div className="legal-section">
              <h3>7. Indemnification</h3>
              <p>
                You agree to defend, indemnify, and hold harmless TruPath Specialty Vehicles from and against any claims, liabilities, 
                damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms 
                of Use or your use of the website.
              </p>
            </div>
            
            <div className="legal-section">
              <h3>8. Governing Law</h3>
              <p>
                These Terms of Use and any dispute or claim arising out of or related to them shall be governed by and construed in 
                accordance with the laws of the State of Indiana, without giving effect to any choice or conflict of law provision.
              </p>
            </div>
            
            <div className="legal-section">
              <h3>9. Contact Information</h3>
              <p>
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <div className="contact-info">
                <p>Email: legal@trupathvehicles.com</p>
                <p>Phone: (800) 555-TRUP</p>
                <p>Address: 123 Vehicle Way, Industryville, IN 46123</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;