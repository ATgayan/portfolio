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
      className={`fixed inset-0 bg-neutral-900 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 ${animationState === "fadeIn" ? "animate-fadeIn" : "animate-fadeOut"}`}
    >
      <div className="bg-black w-4/5 h-4/5 p-8 rounded-lg shadow-lg relative">
        <div
          onClick={closePopup}
          className="absolute top-4 left-4 flex cursor-pointer items-center justify-center p-2 rounded-full"
        >
          <FaArrowLeft className="text-2xl text-white" />
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
