'use client'
import React, { useState } from 'react';

const sliderData = [
  {
    title: 'HRMS',
    description: 'Seamlessly integrate with HRMS for synchronized attendance data, optimizing workforce management and enhancing overall operational efficiency.',
    image: 'Home/tech.webp', // Replace with actual image path
    icon: 'person-icon.svg', // Replace with actual icon path
  },
  {
    title: 'ERP System',
    description: 'Integrate with ERP to streamline business processes, boost productivity, and ensure efficient resource management.',
    image: 'Home/tech.webp', // Replace with actual image path
    icon: 'erp-icon.svg', // Replace with actual icon path
  },
  {
    title: 'CRM Solutions',
    description: 'Manage customer relationships and interactions with ease, boost sales, and improve service delivery with our CRM solutions.',
    image: 'Home/tech.webp', // Replace with actual image path
    icon: 'crm-icon.svg', // Replace with actual icon path
  }
];

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <div id="home-portpholio" className="relative w-full flex justify-center items-center h-[500px]">
      {/* Left Arrow */}
      <button
        className="absolute left-4 bg-white text-blue-500 p-2 rounded-full shadow-lg z-10"
        onClick={prevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Slide Container */}
      <div className="w-[800px] h-full flex justify-center items-center relative overflow-hidden">
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Content */}
            <div className="flex items-center justify-between h-full px-10">
              {/* Slide Content */}
              <div className="text-white text-left px-8 max-w-lg">
                <h1 className="text-4xl font-bold">{slide.title}</h1>
                <p className="mt-4 text-lg">
                  {slide.description}
                </p>
                <button className="mt-8 bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center hover:bg-blue-600">
                  View More 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-2 w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Right Icon */}
              <div className="flex items-center justify-center">
                <div className="p-4 border-4 border-white rounded-full">
                  <img src={slide.icon} alt="Icon" className="w-12 h-12" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-4 bg-white text-blue-500 p-2 rounded-full shadow-lg z-10"
        onClick={nextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Portfolio;
