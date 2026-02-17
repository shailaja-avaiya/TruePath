import React from 'react';
import ProductPage from './ProductPage';
import truckImage from '../assets/BoxTruck.jpg';
import specialtyVehicleImage from '../assets/specialty-vehicle.jpg';
import busImage from '../assets/BusImage.jpg';

const WorkTrucks = () => {
  const pageData = {
    id:1,
    title: "Box Trucks",
    description: "Durable commercial vehicle bodies built with the best in class materials from the ground up to meet your specifications.  Designed and built for the; job site, service on location, or simply delivering products daily to customers, TPSV provides solutions for your business needs.  TPSV has partnered with GM, Ford, and Mercedes to offer commercial bodies on any truck or van cutaway application to service any industry.  Whether you need to carry dry freight or refrigerated cargo, TPSV has you covered.",
    features: [
"8' wide body X  13'-6\" (overall body height) X 21' maximum body length (on E-450 cutaway)",
"Aluminized 3\" corrosion resistant crossmembers",
"FRP, aluminum, insulated aluminum or Dura Plate side walls",
"Aluminized roof bows",
"One piece translucent roof .045",
"E-coat, powder coat, or polyurethane coated bumpers",
"E-coat, powder coat, or polyurethane coated rear structures",
"Flush or raised floors",
"Aluminum, hardwood, or plywood flooring",
"Refrigerated bodies",
"Lift gates up to 2000#'s",
"Diamond or Whiting roll up doors",
"Tuff coat polyurea coating over all floor substrates"
     
    ],
    imageUrl: truckImage,
    relatedProducts: [
      {
        id: 1,
        title: "Specialty & Work Vehicles",
        description: "Custom-designed Specialty & Work Vehicles for unique applications and specific industry requirements.",
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