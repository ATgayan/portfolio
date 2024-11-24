"use client";

import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function MyworkWindow({ MyworkPopup }) {
  const [animationState, setAnimationState] = useState("fadeIn");
  const [currentSlide, setCurrentSlide] = useState(0);

  const closePopup = () => {
    setAnimationState("fadeOut");
    setTimeout(() => {
       MyworkPopup();
    }, 1000);
  };

  const slides = [
    { 
      image:'https://cdn.shopify.com/s/files/1/0070/7032/files/about-us-page-lunya.png?v=1716989532',
      title: "About Us",
      content:
        "Hello! I’m Thushitha, an aspiring IT professional currently pursuing my degree in Information and Communication Technology (ICT). Alongside my academic journey, I’ve recently completed an internship at Aplicy, where I gained hands-on experience in both front-end and back-end development.",
    },
    {
      image:'https://lh4.googleusercontent.com/bMCggqZdtc7mhHymBnxdoZIje10C1s12nSjw52TPUisXscPnVaPgWl1oK4su5rZC6AWtUXd7a057-ZwWwniDn2a2exBq2I0oHmVBNsoyv7y4q3GfOP1g4zvKMLdIQlZhtxhkCyed7cWfaoVsc0Rhh2U',
      title: "Technologies",
      content:
        "I’m skilled in a variety of technologies, including Flutter for mobile app development, React for building dynamic web applications, and Node.js for server-side programming. I also have a strong understanding of database management using MySQL.",
    },
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 ${
        animationState === "fadeIn" ? "animate-fadeIn" : "animate-fadeOut"
      }`}
    >
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 w-[80%] h-[80%]  rounded-lg shadow-lg relative flex">
        {/* Close Button */}
        <div
          onClick={closePopup}
          className="absolute top-4 left-4 flex cursor-pointer items-center justify-center rounded-full"
        >
          <FaArrowLeft className="text-xl text-white" />
        </div>

        {/* Left Section */}
        <div className="pt-10 w-1/2 h-full  flex flex-col p-5">
          <h2 className="text-white text-2xl font-bold mb-4">{slides[currentSlide].title}</h2>
          <p className="text-white text-base leading-6 overflow-y-auto">
            {slides[currentSlide].content}
          </p>
        </div>

        {/* Right Section with Navigation */}
        <div className="w-1/2 h-full relative">
          {/* Background Image */}
          <div
            className="absolute w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          ></div>
          


          {/* Overlay */}
          <div className="absolute w-full h-full bg-black opacity-60 z-10"></div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white text-black p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white text-black p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
