"use client";
import React from "react";
import { motion } from "framer-motion";
import { Montserrat_Alternates, Poppins } from "next/font/google";

const pop = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const mons = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400"],
});

// JSON Array for the cards data
const cardData = [
  {
    id: 1,
    title: "Expert Team",
    image: "/Home/indus/expert.webp",
    description:
      "Building innovative solutions for businesses belonging to food and restaurants that can help them scale up.",
    gradient: "from-[#0017ff]/90 to-[#186980]/30",
  },
  {
    id: 2,
    title: "Innovative Technologies",
    image: "/Home/indus/technolo.webp",
    description:
      "Building innovative solutions for businesses belonging to food and restaurants that can help them scale up.",
    gradient: "from-[#0a0f24]/90 via-[#1e3a72]/80 to-[#8b34a8]/70",
  },
  {
    id: 3,
    title: "Client-Centric Approach",
    image: "/Home/indus/approch.webp",
    description:
      "Building innovative solutions for businesses belonging to food and restaurants that can help them scale up.",
    gradient: "from-[#ff0099]/90 via-[#6600ff]/70 to-[#001f4d]/60",
  },
  {
    id: 4,
    title: "Robust Security Protocols",
    image: "/Home/indus/sec.webp",
    description:
      "Building innovative solutions for businesses belonging to food and restaurants that can help them scale up.",
    gradient: "from-[#ff007f]/80 via-[#b300b3]/70 to-[#003366]/80",
  },
];

const Differ = () => {
  return (
    <div className="container mx-auto px-4">
      
     <h1 className={` ${pop.className}  pb-2 xl:px-12 px-5 text-center text-transparent text-[24px] md:text-[48px] bg-clip-text bg-gradient-to-r from-[#2980d1] to-black font-bold`}>
       How We Differ
      </h1>
      <p className={`${pop.className} text-center mb-5 text-[14px] md:text-[20px]`}>Whether you are a startup, midsize or an enterprise-grade company, our bespoke software solutions are developed to streamline your business operations and fuel your growth.</p>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            className="relative text-white p-6 w-full h-[520px] shadow-2xl flex flex-col justify-between overflow-hidden transform perspective-1000"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)", // Diagonal clip-path
            }}
            whileHover={{
              rotateX: -10,
              rotateY: 10,
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
          >
            {/* Background Image with Zoom-in Effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ scale: 1 }} // Initial state (no zoom)
              animate={{ scale: 1.1 }} // Final state (zoomed in)
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} // Smooth transition
            />

            {/* Overlay Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${card.gradient} rounded-lg`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)", // Same clip-path for gradient overlay
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Title Section */}
              <h2
                className={`text-3xl font-bold leading-tight ${pop.className}`}
                style={{
                  textShadow: "4px 4px 20px rgba(0, 0, 0, 1)", // Increased shadow blur and opacity for more prominence
                }}
              >
                {card.title}
              </h2>
              <hr className="w-10 border-t-2 border-white mt-5 mb-5" />

              {/* Description */}
              <p
                className={`text-[16px] leading-relaxed mb-8 ${mons.className}`}
                style={{
                  textShadow: "3px 3px 15px rgba(0, 0, 0, 1)", // Enhanced shadow for more visibility
                }}
              >
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Differ;
