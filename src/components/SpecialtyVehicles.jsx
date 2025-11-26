import React from 'react';
import ProductPage from './ProductPage';
import specialtyVehicleImage from '../assets/specialty-vehicle.jpg';
import truckImage from '../assets/work-truck.JPG';
import busImage from '../assets/Bus.png';

const SpecialtyVehicles = () => {
  const pageData = {
    title: "Specialty & Work Vehicles",
    description: "Custom-designed specialty vehicles tailored to meet any and all operational requirements across various industries.  TruPath's specialty vehicles are built with 16' and 18' long, by 8' wide commercial bodies, or adding upfit features to a van.  These bodies are engineered towards; service on the go, mobile businesses, or simply performing last mile delivery service.  TPSV constructs these bodies with exacting standards, ensuring reliability, efficiency, and exceptional performance in all weather conditions and in any urban or rural setting.",
    features: [
"7' or 8' wide body X 13'-6\" (overall body height) X maximum body length dependent on vehicle chassis and application",
"Mobile office units",
"Mobile medical units",
"Dog Grooming units",
"Food preparation units"
    ],
    imageUrl: specialtyVehicleImage,
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