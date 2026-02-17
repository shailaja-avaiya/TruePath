import React from 'react';
import ProductPage from './ProductPage';
import busImage from '../assets/BusImage.jpg';
import truckImage from '../assets/BoxTruck.jpg';
import specialtyVehicleImage from '../assets/specialty-vehicle.jpg';
import FP12PImage from '../assets/floorplan-12P.png';
import FP14PImage from '../assets/floorplan-14P.png';
import FP16PImage from '../assets/floorplan-16P.png';
import FP23PImage from '../assets/floorplan-23P.png';
const Buses = () => {
  const pageData = {
    id: 3,
    title: "Buses",
    description: "Superior designed and quality built buses which can safely reduce crowding, facilitate rapid passenger boarding and exiting, and can maximize the comfort of all passengers.  True Path buses undergo rigorous testing and certification to ensure that they meet or exceed all federal safety regulations.  TPSV has partnered and conformed to all vehicle standards with all the major automotive OEM's to build the best in class bus on virtually any cutaway chassis currently produced from the following automotive OEM's: Ford, GM, Dodge, Mercedes, and Freightliner.",
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
        title: "Box Trucks",
        description: "Durable, efficient Box Trucks designed for productivity and reliability in demanding environments.",
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