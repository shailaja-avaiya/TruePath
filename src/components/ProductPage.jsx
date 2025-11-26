import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';
import { FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

const ProductPage = ({ title, description, features, imageUrl, relatedProducts, quality, floorPlans }) => {
  return (
    <div className="product-page">
      {/* Product Header */}
      <div className="product-header">
        <div className="container">
          <h1>{title}</h1>
          {/* <p>{description}</p> */}
        </div>
      </div>
      
      <div className="container">
        {/* Product Overview */}
        <div className="product-grid">
          <div className="product-info">
            <h2>Overview</h2>
            <p className="product-description">{description}</p>
            
            <div className="action-buttons centered">
              <Link to="/contact" className="btn btn-primary">Request Information</Link>
            </div>
          </div>
          
          <div className="product-image-container">
            <div className="product-quality-badge">{quality? quality : 'Premium Quality'}</div>
            <img src={imageUrl} alt={`TruPath ${title}`} />
          </div>
        </div>

        {/* Features Section - SIMPLIFIED */}
        <div className="features-section-simple">
          <h2>Key Features</h2>
          <div className="features-container">
            {features.map((feature, index) => (
              <div className="feature-bullet" key={index}>
                <FaCheckCircle className="feature-bullet-icon" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {floorPlans && (<div  className="features-section-simple">
          
          <h2>Available Floorplans</h2>
           <div className='floorplan-section'>
              {floorPlans.map((plans) => (
                <div key={plans.id}  >
                   <div className="floorplans">
          
     
         
        <img key={plans.id} src={plans.image} alt={`img-${plans.id}`} className="floorplan-image" />
       
     
    </div>
                  {/* <div 
                    className="related-product-image" 
                    style={{ backgroundImage: `url(${plans.image})` }}
                  ></div> */}
                  <div className="floorplan-title">
                    <h3>{plans.title}</h3>
                   
                  </div>
                </div>
              ))}
            </div>
</div>)}

        {/* Related Products Section */}
        {relatedProducts && relatedProducts.length > 0 && (
          <div className="related-section">
            <h2>Related Products</h2>
            <div className="related-products">
              {relatedProducts.map((product) => (
                <div key={product.id} className="related-product-card">
                  <div 
                    className="related-product-image" 
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="related-product-info">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <Link to={product.link} className="view-link">
                      View {product.title} <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section - Updated with only one button */}
        <div className="cta-section">
          <h2>Ready to find your ideal {title.toLowerCase()} solution?</h2>
          <p>
            Contact us today to discuss your specific requirements.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;