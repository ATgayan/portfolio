"use client";

import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

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
      <div
  className="bg-gradient-to-br from-gray-900 via-black to-gray-800 w-4/5 h-4/5 rounded-lg relative shadow-lg "
>
        {/* Close Button */}
        <div
          onClick={closePopup}
          className="absolute top-4 left-4 flex cursor-pointer items-center justify-center rounded-full"
        >
          <FaArrowLeft className="text-xl text-white" />
        </div>

        {/* Main Content */}
        <div className="flex w-full h-full pt-10">
          {/* Left Section */}
          <div className="w-3/5 h-full flex flex-col pr-5">
          <div className=" w-60 flex items-center justify-center mt-4"><p className="text-5xl font-bold">About Us</p></div>
          <p className="m-5 mb-10 overflow-y-auto text-white leading-6 text-xl font-bold">Thushitha Athukorale - Software engineer</p>
            <p className="ml-5  overflow-y-auto text-white text-base leading-6">
           IT student pursuing a degree in Information and Communication Technology (ICT). I recently completed an internship at Aplicy, gaining experience in front-end and back-end development.

I’m skilled in Flutter for mobile apps, React for web development, Node.js for server-side programming, and MySQL for database management. I also enjoy video editing with Adobe Premiere Pro.

Passionate about learning and building impactful projects, I’m eager to grow and contribute to the tech industry. Feel free to connect and explore my work!
            </p>
            <div>
            <div className="w-50 h-20 items-center flex">
                            <div className="flex">
                                <a
                                href='https://www.linkedin.com/in/thushitha-athukorale-848765248'
                                target='_blank'   
                                ><FaLinkedin size={24} className="m-4"  /></a>

                                <a
                                 href='https://github.com/ATgayan'
                                 target='_blank'   
                                >
                                <FaGithub size={24} className="m-4" />
                                </a>

                               <a
                               href='https://www.facebook.com/sl.gaiya?mibextid=ZbWKwL'
                               target='_blank'   
                               >
                               <FaFacebook size={24} className="m-4" />
                               </a>
                                <a
                                 href='https://www.instagram.com/'
                                 target='_blank'   
                                >
                                <FaInstagram size={24} className="m-4" />
                                </a>
                            </div>
                        </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative w-2/5 h-full flex items-center justify-center overflow-hidden">


            {/* Image */}
            <div className="opacity-50 absolute w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/assest/image/mysecondimg.png')" }}></div>
          </div>
        </div>
      </div>
    </div>

  );
}
