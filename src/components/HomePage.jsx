import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import workTruckImage from '../assets/BoxTruck.jpg'; 
import nmedaImage from '../assets/nmeda-logo.png';
import MSBMAImage from '../assets/MSBMA.png';
import nteaImage from '../assets/NTEA-logo.svg';
import braunImage from '../assets/braun.jpg';
import specialtyVehicleImage from '../assets/specialty-vehicle.jpg';
import busImage from '../assets/BusImage.jpg';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const HomePage = () => {
  const [emailSignup, setEmailSignup] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [signupConsent, setSignupConsent] = useState(false);

  const images = [
    nmedaImage,
    MSBMAImage,
    nteaImage,
    braunImage  
  ]

  const UpcomingEvents = [
    {
      id: 1,
      title: "National Work Truck Show 2025",
      month: "March",
      date: "10-13",
      location: "Indianapolis Convention Center, IN",
      description:"",
      meet_link:""
    },
    {
      id: 2,
      title: "Midwest Transportation Expo",
      month: "Jul",
      date: "22-24",
      location: "Chicago Exhibition Center, IL",
      description:"",
      meet_link:""
    },
    {
      id: 3,
      title: "Community Transportation Association of America Show",
      month: "May",
      date: "10-13",
      location: "Omaha, Nebraska",
      description:"",
      meet_link:"https://ctaa.org/ctaa-events/"
    },
    {
      id: 4,
      title: "APTA Conference",
      month: "May",
      date: "17-20",
      location: "Salt Lake City, Utah",
      description:"",
      meet_link:"https://aptapassengertransport.com/register-for-apta-2026-mobility-conference-international-bus-roadeo/"
    }
  ]
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailSignup && signupConsent) {
      // This would normally send data to backend
      console.log("Email for signup:", emailSignup);
      setSignupSuccess(true);
      setEmailSignup('');
      setSignupConsent(false);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSignupSuccess(false);
      }, 3000);
    }
  };
  
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Premium Transportation Solutions</h1>
            <p className="hero-tagline">Your Vision, Our Road</p>
            <p>
              Box Trucks, specialty vehicles, and buses 
              customized to meet your specific requirements.
            </p>
            <div className="hero-btns">
              <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
              <Link to="/become-dealer" className="btn btn-primary">Become a Dealer</Link>
              <Link to="/dealer-locator" className="btn btn-outline">Find a Dealer</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="section products">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Vehicle Categories</h2>
            <p>
              TruPath Specialty Vehicles offers a wide range of transportation solutions 
              designed to meet the unique needs of businesses and organizations.
            </p>
          </div>
          
          <div className="product-grid">
            <div className="product-card">
              <div className="product-category-badge">Box Trucks</div>
              <div 
                className="product-image" 
                style={{ backgroundImage: `url(${workTruckImage})` }}
              ></div>
              <div className="product-content">
                <h3>Box Trucks</h3>
                <p>
                  Durable, efficient Box Trucks designed for productivity and reliability in demanding environments.
                </p>
                <Link to="/work-trucks" className="btn-text">
                  View Box Trucks <span>&rarr;</span>
                </Link>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-category-badge">Specialty Vehicles</div>
              <div 
                className="product-image" 
                style={{ backgroundImage: `url(${specialtyVehicleImage})` }}
              ></div>
              <div className="product-content">
                <h3>Specialty & Work Vehicles</h3>
                <p>
                  Custom-designed specialty vehicles for unique applications and specific industry requirements.
                </p>
                <Link to="/specialty-vehicles" className="btn-text">
                  View Specialty & Work Vehicles <span>&rarr;</span>
                </Link>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-category-badge">Buses</div>
              <div 
                className="product-image" 
                style={{ backgroundImage: `url(${busImage})` }}
              ></div>
              <div className="product-content">
                <h3>Buses</h3>
                <p>
                  Comfortable, accessible buses built for passenger safety and operational efficiency.
                </p>
                <Link to="/buses" className="btn-text">
                  View Buses <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Member Certifications and Associations Section */}
      <section className=" products">
        <div className="container">
          <div className="section-header text-center">
            <h2>TPSV Member Certifications and Associations</h2>
           
          </div>

         <div className="associations">
          
      {images.map((src, i) => (
         
        <img key={i} src={src} alt={`img-${i}`} className="associations-image" />
       
      ))}
    </div>
          
          
        </div>
      </section>
      {/* Gallery Section Placeholder */}
      <section className="section gallery-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Portfolio</h2>
            <p>
              Explore our gallery of recently delivered vehicles and customization options.
            </p>
            
          </div>
          
          <div className="gallery-placeholder">
            <p>Image Gallery Coming Soon</p>
            <span>
              Check back soon to see our portfolio of Box Trucks, specialty vehicles, and buses.
            </span>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="section events-section ">
        <div className="container">
          <div className="section-header text-center">
            <h2>Upcoming Events</h2>
            <p>
              Meet our team and see our vehicles at these upcoming industry events.
            </p>
          </div>
          
          <div className="events-grid">
            {UpcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-date">
                  <span className="month">{event.month}</span>
                  <span className="day">{event.date}</span>
                </div>
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <div className="event-location">
                    <FaMapMarkerAlt className="event-icon" />
                    <span>{event.location}</span>
                  </div>
                  {/* <p>
                    Join us at booth #1234 to explore our latest work truck models and customization options.
                  </p> */}
                  <Link to={event.meet_link ?? event.meet_link} className="btn-text">
                    Request Meeting <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
            
            <div className="event-card">
              <div className="event-date">
                <span className="month">JUL</span>
                <span className="day">22-24</span>
              </div>
              <div className="event-info">
                <h3>Midwest Transportation Expo</h3>
                <div className="event-location">
                  <FaMapMarkerAlt className="event-icon" />
                  <span>Chicago Exhibition Center, IL</span>
                </div>
                <p>
                  Discover our expanded line of specialty vehicles designed for municipal and commercial applications.
                </p>
                <Link to="/contact" className="btn-text">
                  Request Meeting <span>&rarr;</span>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="section email-signup-section">
        <div className="container">
          <div className="email-signup-container">
            <div className="signup-content">
              <h2>Stay Ahead with TPSV: Join Our Journey</h2>
              <p>
                Get exclusive access to TruPath Specialty Vehicles' new releases, special offers, and industry insights. 
                From custom trucks to premium buses, our Elkhart-crafted vehicles are built to empower your path. 
                Join our community today to stay informed and drive the future with TPSV.
              </p>
              
              {signupSuccess ? (
                <div className="signup-success">
                  <h3>Thank you for subscribing!</h3>
                  <p>You've been added to our mailing list and will receive updates soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="signup-form">
                  <div className="form-group">
                    <input 
                      type="email" 
                      placeholder="Your Email Address" 
                      value={emailSignup}
                      onChange={(e) => setEmailSignup(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn-primary">Subscribe</button>
                  </div>
                  <div className="consent-checkbox">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      checked={signupConsent}
                      onChange={(e) => setSignupConsent(e.target.checked)}
                      required
                    />
                    <label htmlFor="consent">
                      I agree to receive updates from TPSV. You can unsubscribe at any time.
                    </label>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to find your ideal vehicle solution?</h2>
            <p>
              Contact us today to discuss your requirements or locate a dealer near you.
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

export default HomePage;