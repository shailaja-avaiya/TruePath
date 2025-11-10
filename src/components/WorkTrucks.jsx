import React from 'react';
import ProductPage from './ProductPage';
import truckImage from '../assets/work-truck.JPG';
import specialtyVehicleImage from '../assets/specialty-vehicle.jpg';
import busImage from '../assets/Bus.png';

const WorkTrucks = () => {
  const pageData = {
    title: "Work Trucks",
    description: "Durable, efficient work trucks designed to meet the demands of any job site or service application.",
    features: [
      "Heavy-duty construction for maximum durability",
      "Customizable configurations for different industries",
      "Fuel-efficient powertrain options",
      "Advanced safety features",
      "Ergonomic cab design for driver comfort",
      "Ample storage and organization solutions",
      "Available in multiple chassis configurations",
      "Optional four-wheel drive for challenging terrain"
    ],
    imageUrl: truckImage,
    relatedProducts: [
      {
        id: 1,
        title: "Specialty Vehicles",
        description: "Custom-designed specialty vehicles for unique applications and specific industry requirements.",
        image: specialtyVehicleImage,
        link: "/specialty-vehicles"
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

export default WorkTrucks;