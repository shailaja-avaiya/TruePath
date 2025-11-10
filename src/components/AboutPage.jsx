import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaHandshake, FaLightbulb, FaTrophy, FaUsers, FaIndustry, FaBuilding } from 'react-icons/fa';
import './AboutPage.css';
import aboutImage from '../assets/TPSV building.jpg'; // Add a placeholder image for the facility

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about TruPath Specialty Vehicles</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src={aboutImage} alt="TruPath Facility" />
            </div>
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                In the heart of Elkhart, Indiana, where innovation meets craftsmanship, TruPath Specialty Vehicles was 
                born from a shared passion for building vehicles that go beyond the ordinary. Our founders, with over 90* combined 
                years of experience in the RV, manufacturing, and specialty vehicle industry, have spent decades 
                perfecting the art of creating work trucks, buses, and specialty vehicles that deliver reliability and 
                individuality.
              </p>
              <p>
                From their early days designing custom fleet solutions to leading supplier partnerships across the Midwest, 
                they learned one truth: a vehicle isn't just transportation, it's a promise to get the job done, no 
                matter the road ahead.
              </p>
              <p>
                At TPSV, "true" is more than a word in our name, it's our guiding principle. We're true to our craft, 
                meticulously designing every vehicle to meet the unique needs of our customers, whether it's a fleet 
                operator seeking durability or a business needing a standout specialty vehicle. We're true to innovation, 
                pushing boundaries with customizable designs and cutting-edge features that set new standards. And 
                we're true to our partners, offering dealers and customers unwavering support, from initial design to 
                after-sale service.
              </p>
              <p>
                Our story began with a vision: to create vehicles that embody precision and purpose. Drawing on Elkhart's 
                legacy as the RV capital of the world, we've built a team of artisans and engineers who pour their 
                expertise into every weld, stitch, and finish. Each TPSV vehicle is a testament to our commitment to 
                craftsmanship, handcrafted to perform, designed to inspire. Whether it's a rugged truck for tough jobs, a 
                bus built for comfort, or a specialty vehicle tailored to your vision, we're here to craft your path forward.
              </p>
            </div>
          </div>
          
          <div className="mission-section">
            <h2>Mission & Values</h2>
            <div className="mission-statement">
              <h3>Our Mission</h3>
              <p>
                At TruPath Specialty Vehicles, our mission is to craft innovative, reliable vehicles that empower our customers' journeys. 
                We blend Elkhart's tradition of craftsmanship with forward-thinking design to deliver trucks, buses, and specialty vehicles 
                that exceed expectations, while fostering true partnerships with dealers and clients through exceptional support and integrity.
              </p>
            </div>
            
            <div className="values-section">
              <h3>Our Core Values</h3>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">
                    <FaTools />
                  </div>
                  <h3>Craftsmanship</h3>
                  <p>
                    We take pride in every detail, building vehicles with precision and care to ensure lasting performance and quality.
                  </p>
                </div>
                
                <div className="value-card">
                  <div className="value-icon">
                    <FaHandshake />
                  </div>
                  <h3>Integrity</h3>
                  <p>
                    We stay true to our promises, delivering honesty and transparency in every interaction with customers, dealers, and our community.
                  </p>
                </div>
                
                <div className="value-card">
                  <div className="value-icon">
                    <FaLightbulb />
                  </div>
                  <h3>Innovation</h3>
                  <p>
                    We embrace bold ideas, creating customizable, cutting-edge vehicles that meet the evolving needs of our clients.
                  </p>
                </div>
                
                <div className="value-card">
                  <div className="value-icon">
                    <FaTrophy />
                  </div>
                  <h3>Support</h3>
                  <p>
                    We stand by our partners, offering dealers and customers dedicated resources, training, and service to ensure their success.
                  </p>
                </div>
                
                <div className="value-card">
                  <div className="value-icon">
                    <FaUsers />
                  </div>
                  <h3>Community</h3>
                  <p>
                    Rooted in Elkhart, we contribute to our local legacy by creating jobs, fostering talent, and building vehicles that make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="elkhart-section">
            <h2>Rooted in Elkhart's RV Legacy</h2>
            <div className="elkhart-content">
              <div className="elkhart-image">
                <div className="image-placeholder">
                  <FaBuilding className="placeholder-icon" />
                  <p>Elkhart Facility</p>
                </div>
              </div>
              <div className="elkhart-text">
                <p>
                  Based in Elkhart, Indiana, the undisputed RV capital of the world, TruPath Specialty Vehicles draws on the region's rich 
                  manufacturing heritage to deliver unparalleled quality. Elkhart is home to over 80% of global RV production, and its skilled 
                  workforce and supplier networks are second to none.
                </p>
                <p>
                  TPSV is proud to be part of this vibrant ecosystem, employing local artisans and engineers who bring generations of expertise 
                  to every vehicle we craft. Our state-of-the-art facility in Elkhart leverages the area's robust infrastructure, ensuring access 
                  to premium materials and innovative technologies.
                </p>
                <p>
                  By partnering with local suppliers and supporting community initiatives, TPSV strengthens Elkhart's legacy as a hub of 
                  craftsmanship and innovation, building vehicles that carry the pride of our hometown to customers nationwide.
                </p>
              </div>
            </div>
          </div>
          
          <div className="leadership-section">
            <h2>Our Leadership Team</h2>
            <p className="leadership-intro">
              Our experienced leadership team combines decades of industry expertise, innovative thinking, and a passion for crafting 
              exceptional vehicles. With deep roots in the specialty vehicle sector, our leaders are committed to driving TPSV forward 
              while maintaining our core values of quality, integrity, and customer satisfaction.
            </p>
            
            <div className="team-grid">
              <div className="team-member">
                <div className="team-photo-placeholder">
                  <p>JD</p>
                </div>
                <div className="team-info">
                  <h3>John Doe</h3>
                  <p className="team-title">Chief Executive Officer</p>
                  <p className="team-bio">With over 25 years of experience in the specialty vehicle industry, John leads our company with a focus on innovation and customer satisfaction.</p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="team-photo-placeholder">
                  <p>JS</p>
                </div>
                <div className="team-info">
                  <h3>Jane Smith</h3>
                  <p className="team-title">Chief Operations Officer</p>
                  <p className="team-bio">Jane brings extensive manufacturing expertise, overseeing production processes to ensure every vehicle meets our exacting quality standards.</p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="team-photo-placeholder">
                  <p>RJ</p>
                </div>
                <div className="team-info">
                  <h3>Robert Johnson</h3>
                  <p className="team-title">Director of Sales</p>
                  <p className="team-bio">Robert leads our dealer network development, building strong partnerships and ensuring exceptional service across our distribution channels.</p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="team-photo-placeholder">
                  <p>MG</p>
                </div>
                <div className="team-info">
                  <h3>Michelle Garcia</h3>
                  <p className="team-title">Head of Engineering</p>
                  <p className="team-bio">Michelle leads our design and engineering team, bringing innovative solutions to every vehicle we create.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to discover your ideal vehicle solution?</h2>
            <p>
              Partner with a company that values craftsmanship, integrity, and innovation.
            </p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/dealer-locator" className="btn btn-secondary">Find a Dealer</Link>
              <Link to="/become-dealer" className="btn btn-secondary">Become a Dealer</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;