"use client";

import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

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
    className={`fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 ${
      animationState === "fadeIn" ? "animate-fadeIn" : "animate-fadeOut"
    }`}
  >
    <div className="bg-black rounded-lg w-[50%] h-auto rounded-4 shadow-lg relative flex flex-col p-6">
      {/* Close Button */}
      <div
        onClick={closePopup}
        className=" absolute top-4 left-4 flex cursor-pointer items-center justify-center rounded-full"
      >
        <FaArrowLeft className="text-xl text-white" />
      </div>
  
      {/* Contact Us Section */}
      <div className="flex flex-col md:flex-row pt-4">
        {/* Left Section */}
        <div className="md:w-1/2 text-center px-4 py-6 bg-gray-100 rounded-l-lg">
          <h2 className="text-black text-2xl font-bold uppercase">Contact Us</h2>
          <p className="mt-2">
            Or reach out manually to{" "}
            <a href="mailto:uifresh.net@gmail.com" className="text-white underline">
              uifresh.net@gmail.com
            </a>
          </p>
          <Image
  src="/images/plane.png"
  alt="Plane"
  width={200}
  height={200}
  className="mx-auto mt-4 animation uf-animation hidden md:block"
/>
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
