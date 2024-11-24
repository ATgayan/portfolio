"use client";

import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function MyServices({ MyServicepopup }) {
  const [animationState, setAnimationState] = useState("fadeIn");
  

  const closePopup = () => {
    setAnimationState("fadeOut");
    setTimeout(() => {
       MyServicepopup();
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
    {
      image:'https://lh5.googleusercontent.com/ZVwm-B-lXbVyairBx2ywVzWNiNLiEbNuzYrKKU05xG5y9t6m3vrqdjvdsxCRL9kTtKeNnLzCIgXIv7HC8_Vd4G6xN8T8-t2j-NWptAlJEJvk_Q4VDt9lvXsnCwLjY6sJyhMoW3KlQHLhFiExRskph6g',
      title: "Passions",
      content:
        "Beyond coding, I enjoy video editing, where I bring creativity to life using Adobe Premiere Pro. I’m passionate about learning new technologies, building meaningful projects, and constantly improving my skills to contribute to the tech industry.",
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

      

      
          


      </div>
    </div>
  );
}
