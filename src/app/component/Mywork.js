"use client";

import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";



export default function MyworkWindow({ MyworkPopup }) {
  const [animationState, setAnimationState] = useState("fadeIn");
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const Growmart = "/assest/project_images/Growmart.png"; 
  const portpolio = "/assest/project_images/portpolio.png";
  const Management_system = "/assest/project_images/geymanagementsystem.png";

  const closePopup = () => {
    setAnimationState("fadeOut");
    setTimeout(() => {
       MyworkPopup();
    }, 1000);
  };

  const slides = [
    { 
      image: Growmart,
      title: "Growmart",
      content:
        "Growmart is a full-stack eCommerce platform built with React.js for the frontend, styled using manual CSS for full design control. The backend is powered by Express.js and MySQL, ensuring a scalable and efficient database structure.It features user authentication with JWT (JSON Web Token) for secure login and protected routes. The system includes essential eCommerce functionalities like product listings, shopping cart, orders, and user management.With a responsive and user-friendly UI, Growmart provides a seamless shopping experience across all devices. The backend ensures secure data handling, fast API responses, and authentication protection. This project is a fully functional eCommerce solution with a strong focus on security, performance, and usability.",
    },
    {
      image:  portpolio,
      title: " portpolio",
      content:
        "This is a modern and responsive portfolio website built using Next.js and Tailwind CSS, designed to showcase your skills, projects, and experience. The website features a clean UI, fast loading times, and SEO optimization for better visibility.It is deployed on GitHub Pages using an automated GitHub Actions workflow, ensuring smooth and hassle-free updates whenever you push changes to your repository. The use of Next.js dynamic routing allows for seamless navigation, while Tailwind CSS ensures easy customization and a modern look.The portfolio includes sections like About Me, Projects, Skills, Contact, and Resume, making it a great way to highlight your professional journey. With mobile-first responsiveness, it works flawlessly on all devices. This project serves as an ideal digital portfolio to impress potential employers and clients. ",
    },
    
    {
      image:  Management_system,
      title: "Management system",
      content:
        "Gym Management System is a full-stack web application built using Next.js for a fast and responsive frontend, and Express.js for a powerful backend. The system uses Firebase Authentication for secure user login and Firebase Firestore as the database to store and manage gym-related data.It provides full CRUD operations, allowing admins to manage members, trainers, workout plans, subscriptions, and payments efficiently. Users can register, book sessions, track progress, and manage memberships with ease.With Next.js server-side rendering (SSR) and static generation (SSG), the platform ensures optimal performance and SEO. Firebase Firestore guarantees real-time updates, making data synchronization seamless across all users.This Gym Management System is a scalable, secure, and user-friendly solution for gym owners and members, providing an all-in-one platform for fitness management. ",
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
            className="absolute bg-cover bg-center w-[600px] h-[550px] rounded-lg z-0"
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
