import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";



const Gallery = ({
  categories,
  autoPlay = true,
  autoPlayInterval = 3000,
}) => {
  const categoryKeys = Object.keys(categories);

  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);
  const [vehicleIndex, setVehicleIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const vehicles = categories[selectedCategory];
  const currentVehicle = vehicles[vehicleIndex];

  const intervalRef = useRef(null);

  // Reset vehicle/image when category changes
  useEffect(() => {
    setVehicleIndex(0);
    setImageIndex(0);
  }, [selectedCategory]);

  // Autoplay logic
  useEffect(() => {
    if (!autoPlay || isHovered) return;

    intervalRef.current = setInterval(() => {
      setImageIndex((prev) =>
        prev === currentVehicle.images.length - 1 ? 0 : prev + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(intervalRef.current);
  }, [currentVehicle, autoPlay, autoPlayInterval, isHovered]);

  const nextImage = () => {

    setImageIndex((prev) =>

      prev === currentVehicle.images.length - 1 ? 0 : prev + 1
  );
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? currentVehicle.images.length - 1 : prev - 1
    );
  };

  const nextVehicle = () => {
    setVehicleIndex((prev) =>
      prev === vehicles.length - 1 ? 0 : prev + 1
    );
    setImageIndex(0);
  };

  const prevVehicle = () => {
    setVehicleIndex((prev) =>
      prev === 0 ? vehicles.length - 1 : prev - 1
    );
    setImageIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="vs-wrapper">
      {/* Category Tabs */}
      <div className="vs-tabs">
        {categoryKeys.map((key) => (
          <button
            key={key}
            className={`vs-tab ${
              selectedCategory === key ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(key)}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div
        className="vs-slider"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <h2 className="vs-title">{currentVehicle.name}</h2> */}

        <div className="vs-image-container">
          <button className="vs-nav left" onClick={prevImage}>
            ❮
          </button>
{currentVehicle.images  && currentVehicle.images.length > 0 ? (
          <img 
            src={currentVehicle.images[imageIndex]}
            alt={currentVehicle.name}
            className="vs-image fade"
          />): <p>Image Gallery Coming Soon !.</p>}

          <button className="vs-nav right" onClick={nextImage}>
            ❯
          </button>
        </div>

        {/* <div className="vs-vehicle-controls">
          <button onClick={prevVehicle}>Previous Vehicle</button>
          <button onClick={nextVehicle}>Next Vehicle</button>
        </div> */}
      </div>
    </div>
  );
};

export default Gallery;