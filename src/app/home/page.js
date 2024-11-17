"use client";

import { useState, useEffect } from 'react';
import Navbar from "../component/navbar";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

import ReactTypingEffect from "react-typing-effect";
import Popupwindow from '../component/popupwindow';

export default function Hompage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isState, setState] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleState = () => {
        setState(!isState);
    };

    return (
        <div className="animate-fadeIn flex flex-col">
            <div className="w-auto h-auto z-50">
                <Navbar hadleClick={handleState} />
            </div>

            <div className="flex w-screen/2 h-[100%] overflow-hidden">
                <div className="flex items-center justify-center mt-16 w-[50%] h-screen">
                    <div className="flex-col w-[90%] h-[40%] m-10">
                        {isLoaded && (
                            <div>
                                <div>
                                    <p className="font-bold text-2xl m-4 text-slate-200" style={{ animationDelay: "0.3s" }}>
                                        Hello, I&apos;m
                                    </p>
                                </div>
                                <div>
                                    <p className="text-6xl m-4 font-bold" style={{ animationDelay: "0.5s" }}>Thushitha Athukorale</p>
                                </div>
                                <div>
                                    <p className="text-4xl ml-6 " style={{ animationDelay: "0.9s" }}>Software Engineer</p>
                                </div>
                            </div>
                        )}

                        <div className='z-100'>
                            {isState && (
                                <Popupwindow hadleClick={handleState} />
                            )}
                        </div>

                        <div className="w-50 h-20 items-center flex">
                            <div className="flex">
                                <FaLinkedin size={24} className="m-4" />
                                <FaGithub size={24} className="m-4" />
                                <FaFacebook size={24} className="m-4" />
                                <FaInstagram size={24} className="m-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-screen mt-16 w-[50%]">
                    <div className="relative h-screen">
                        {/* Background image */}
                        <div className="absolute inset-0 z-10 bg-[url('/assest/image/myPhoto.png')] bg-cover"></div>

                        {/* Overlay for transparency */}
                        <div className="absolute inset-0 z-20 bg-black opacity-70"></div>

                        <div className="relative z-10 flex items-center justify-center h-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
