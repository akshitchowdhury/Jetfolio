import React from 'react';
import f0 from '../../../assets/gallery/kk1.jpg';
import f1 from '../../../assets/gallery/kk2.jpg';
import f2 from '../../../assets//gallery/kk3.jpg';
import f3 from '../../../assets/gallery/kk4.jpg';
import f4 from '../../../assets/gallery/kk5.jpg';
// import f5 from '../../../assets/gallery/kk6.jpg';
import f6 from '../../../assets/gallery/kk7.jpg';
import f7 from '../../../assets/gallery/kk8.jpg';
import f8 from '../../../assets/gallery/kk9.jpg';
import f9 from '../../../assets/gallery/kk10.jpg';
import f10 from '../../../assets/gallery/kk11.jpg';
import f11 from '../../../assets/gallery/kk12.jpg';
import f12 from '../../../assets/gallery/kk13.jpg';
import f13 from '../../../assets/gallery/kk14.jpg';
import f14 from '../../../assets/gallery/kk15.jpg';
import f15 from '../../../assets/gallery/kk16.jpg';
import f16 from '../../../assets/gallery/kk17.jpg';
import f17 from '../../../assets/gallery/kk18.jpg';
import './Card.css'
const cardsData = [
  { image: f0, description: "Description for card 1", title: "Building the backbone of progress." },
  { image: f1, description: "Description for card 2", title: "Constructing havens for hard work."},
  { image: f2, description: "Description for card 3", title: "Foundations for a flourishing workforce."},
  { image: f3, description: "Description for card 4", title: "Creating spaces where labor finds home."},
  { image: f4, description: "Description for card 5", title: "Empowering workers through study shelters."},
  // { image: f5, description: "Description for card 6", title: "Pioneering solutions for labor accommodation."},
  { image: f6, description: "Description for card 6", title: "Redefining the concept of labor housing with visionary fabrication approaches."},
  { image: f7, description: "Description for card 6", title: "Pioneering solutions for labor accommodation."},
  { image: f8, description: "Description for card 6", title: "Innovating construction methods for modern, adaptable labour camps."},
  { image: f9, description: "Description for card 6", title: "Leading the charge in fabricating comfortable and safe labor accommodations."},
  { image: f10, description: "Description for card 6", title: "Creating sustainable and ergonomic labor camps through expert fabrication."},
  { image: f11, description: "Description for card 6", title: "Transforming the landscape of workforce living with custom fabrication."},
  { image: f12, description: "Description for card 6", title: "Empowering industries with bespoke fabrication solutions for labor housing."},
  { image: f13, description: "Description for card 6", title: "Building tomorrow's communities with cutting-edge fabrication technology."},
  { image: f14, description: "Description for card 6", title: "Setting new benchmarks in construction for efficient labor camps."},
  { image: f15, description: "Description for card 6", title: "Revolutionizing labor accommodation through advanced fabrication techniques."},
  { image: f16, description: "Description for card 6", title: "Crafting superior living spaces for the workforce with precision fabrication."},
  { image: f17, description: "Description for card 6", title: "Elevating standards in labor housing through innovative fabrication."},
  // { image: f18, description: "Description for card 6", title: "Pioneering solutions for labor accommodation."},
  // { image: f19, description: "Description for card 6", title: "Pioneering solutions for labor accommodation."},
  // { image: f20, description: "Description for card 6", title: "Pioneering solutions for labor accommodation."}, 9980280635--Prashanth
  // Add similar entries for f1, f2, ..., f8
];

const Card = () => {
  return (
    <div className='card-grid'>
      {cardsData.map((card, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-2xl m-4 card-container" >
          <img className="w-full h-64 object-cover" src={card.image} alt={`Card ${index}`} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{card.title}</div>
            {/* <p className="text-gray-700 text-base">{card.description}</p> */}
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
