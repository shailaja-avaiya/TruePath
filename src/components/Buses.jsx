import React from 'react';
import ProductPage from './ProductPage';
import busImage from '../assets/Bus.png';
import truckImage from '../assets/work-truck.JPG';
import specialtyVehicleImage from '../assets/specialty-vehicle.jpg';

const Buses = () => {
  const pageData = {
    title: "Buses",
    description: "Comfortable, accessible buses built for passenger safety and operational efficiency.",
    features: [
      "Passenger capacities from 12 to 35+",
      "ADA-compliant accessibility features",
      "Comfortable seating with multiple configuration options",
      "Advanced climate control systems",
      "Enhanced safety features and visibility",
      "Durable construction for long service life",
      "Fuel-efficient powertrain options",
      "Low floor design for easy entry and exit"
    ],
    imageUrl: busImage,
    relatedProducts: [
      {
        id: 1,
        title: "Work Trucks",
        description: "Durable, efficient work trucks designed for productivity and reliability in demanding environments.",
        image: truckImage,
        link: "/work-trucks"
      },
      {
        id: 2,
        title: "Specialty Vehicles",
        description: "Custom-designed specialty vehicles for unique applications and specific industry requirements.",
        image: specialtyVehicleImage,
        link: "/specialty-vehicles"
      }
    ]
  };

  return (
    <ProductPage {...pageData} />
  );
};

export default Buses;