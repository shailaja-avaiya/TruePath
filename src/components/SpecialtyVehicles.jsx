import React from 'react';
import ProductPage from './ProductPage';
import specialtyVehicleImage from '../assets/specialty-vehicle.jpg';
import truckImage from '../assets/work-truck.JPG';
import busImage from '../assets/Bus.png';

const SpecialtyVehicles = () => {
  const pageData = {
    title: "Specialty Vehicles",
    description: "Custom-designed specialty vehicles tailored to meet specific operational requirements across various industries.",
    features: [
      "Customizable designs for unique applications",
      "Purpose-built solutions for specific industries",
      "Mobile command centers and communication vehicles",
      "Medical and emergency response units",
      "Custom interiors with specialized equipment",
      "Robust electrical systems for equipment power",
      "ADA-compliant accessibility options",
      "Advanced climate control systems"
    ],
    imageUrl: specialtyVehicleImage,
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
        title: "Buses",
        description: "Comfortable, accessible buses built for passenger safety and operational efficiency.",
        image: busImage,
        link: "/buses"
      }
    ]
  };

  return (
    <ProductPage {...pageData} />
  );
};

export default SpecialtyVehicles;