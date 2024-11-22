"use client";

import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

export default function PopupWindow({ hadleClick }) {
  const [animationState, setAnimationState] = useState("fadeIn");

  const closePopup = () => {
    setAnimationState("fadeOut");
    setTimeout(() => {
      hadleClick();
    }, 1000);
  };

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 ${animationState === "fadeIn" ? "animate-fadeIn" : "animate-fadeOut"
        }`}
    >
      <div className="bg-black w-4/5 h-4/5 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <div
          onClick={closePopup}
          className="absolute top-4 left-4 flex cursor-pointer items-center justify-center rounded-full"
        >
          <FaArrowLeft className="text-xl text-white" />
        </div>

        {/* Main Content */}
        <div className="flex w-full h-full pt-5">
          {/* Left Section */}
          <div className="w-3/5 h-full flex flex-col pr-5">
          <div className=" w-60 flex items-center justify-center mt-4"><p className="text-2xl font-bold">About Us</p></div>
            <p className="m-5 overflow-y-auto text-white text-base leading-6">
              Hello! I’m Thushitha, an aspiring IT professional currently pursuing my degree in Information and Communication Technology (ICT). Alongside my academic journey, I’ve recently completed an internship at Aplicy, where I gained hands-on experience in both front-end and back-end development.

              I’m skilled in a variety of technologies, including Flutter for mobile app development, React for building dynamic web applications, and Node.js for server-side programming. I also have a strong understanding of database management using MySQL. Beyond coding, I enjoy video editing, where I bring creativity to life using Adobe Premiere Pro.

              I’m passionate about learning new technologies, building meaningful projects, and constantly improving my skills to contribute to the tech industry. Feel free to check out my projects and get in touch!
            </p>
          </div>

          {/* Right Section */}
          <div className="relative w-2/5 h-full flex items-center justify-center overflow-hidden">

            <div className="absolute w-full h-full bg-black opacity-60 z-10"></div>

            {/* Image */}
            <div className="absolute w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/assest/image/mysecondimg.png')" }}></div>
          </div>
        </div>
      </div>
    </div>

  );
}
