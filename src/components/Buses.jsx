import React from 'react';
import ProductPage from './ProductPage';
import busImage from '../assets/Bus.png';
import truckImage from '../assets/work-truck.JPG';
import specialtyVehicleImage from '../assets/specialty-vehicle.jpg';
import FP12PImage from '../assets/floorplan-12P.png';
import FP14PImage from '../assets/floorplan-14P.png';
import FP16PImage from '../assets/floorplan-16P.png';
import FP23PImage from '../assets/floorplan-23P.png';
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
        title: "Delivery Trucks",
        description: "Durable, efficient Delivery Trucks designed for productivity and reliability in demanding environments.",
        image: truckImage,
        link: "/work-trucks"
      },
      {
        id: 2,
        title: "Specialty & Work Vehicles",
        description: "Custom-designed Specialty & Work Vehicles for unique applications and specific industry requirements.",
        image: specialtyVehicleImage,
        link: "/specialty-vehicles"
      }
    ],
    quality: "Best in Class",
    floorPlans: [
      {
        id: 1,
        title: "12 Passenger 2 Wheelchair",
        image: FP12PImage,
      },
         {
        id: 2,
        title: "14 Passenger with Rear Luggage",
        image: FP14PImage,
      },   {
        id: 3,
        title: "16 Passenger 2 Wheelchair",
        image: FP16PImage,
      },   {
        id: 4,
        title: "23 Passenger with Rear Luggage",
        image: FP23PImage,
      }
    ]
  };

  return (
    <ProductPage {...pageData} />
  );
};

export default Buses;