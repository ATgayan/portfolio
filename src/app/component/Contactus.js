"use client";

import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function ContactUs({ MyContact }) {
  const [animationState, setAnimationState] = useState("fadeIn");
  

  const closePopup = () => {
    setAnimationState("fadeOut");
    setTimeout(() => {
       MyContact();
    }, 1000);
  };

  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
   

    <div
    className={` fixed inset-0 backdrop-blur-sm bg-slate-800  flex items-center justify-center z-50 ${
      animationState === "fadeIn" ? "animate-fadeIn" : "animate-fadeOut"
    }`}
  >
    <div className=" rounded-lg w-[50%] h-auto rounded-4 shadow-lg relative flex flex-col p-6 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Close Button */}
      <div
        onClick={closePopup}
        className=" absolute top-4 left-4 flex cursor-pointer items-center justify-center rounded-full"
      >
        <FaArrowLeft className="text-xl text-white" />
      </div>
  
      {/* Contact Us Section */}
      <div className="flex  md:flex-row pt-4 justify-center flex-col items-center">
        {/* Left Section */}
        <div className="md:w-1/2 text-center px-4 py-6  rounded-l-lg ">
          <h2 className=" text-4xl font-bold uppercase">Contact Us</h2>
          <p className="mt-2 text-2xl p-5">
            my email eddress 
          </p>
          <p className="hover:text-slate-400">thusitha.personal@gmail.com</p>
         
        </div>
  
        {/* Right Section */}
        <div className="md:w-1/2 px-6 py-6">
          <form>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="uf-imail"
                className="block text-white font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                id="uf-imail"
                placeholder="Enter your email"
              />
              <div className="text-sm text-white mt-1">
              <p>We&apos;ll never share your email with anyone else.</p>
              </div>
            </div>
  
            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="uf-iname"
                className="block text-white font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="uf-iname"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"
              />
            </div>
  
            {/* Message Textarea */}
            <div className="mb-4">
              <label
                htmlFor="uf-itextarea"
                className="block text-white font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="uf-itextarea"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Write your message"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-white text-black rounded-lg  transition duration-300 boder hover:border-white hover:bg-black hover:text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  

  );
}
