"use client";

import { useState, useEffect } from 'react';
import Navbar from "../component/navbar";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

import Popupwindow from '../component/Aboutus';
import MyworkWindow from '../component/Mywork';
import MyServices from '../component/MyService';
import ContactUs from '../component/Contactus';

export default function Hompage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isState, setState] = useState(false);
    // const [Myworkwindow, setWork] = useState(false);
    // const [isState, setState] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleState = () => {
        if (isState > 0) {
            setState(false);
        }
        else {
            setState(1);
        }
    };
    const handleState2 = () => {
        if (isState > 0) {
            setState(false);
        }
        else {
            setState(2);
        }
    };
    const handleState3 = () => {
        if (isState > 0) {
            setState(false);
        }
        else {
            setState(3);
        }
    };

    const handleState4 = () => {
        if (isState > 0) {
            setState(false);
        }
        else {
            setState(4);
        }
    };

    return (
        <div className="animate-fadeIn flex flex-col">
            <div className="w-auto h-auto z-50">
                <Navbar handleClick={handleState} MyworkPopup={handleState2} MyServices={handleState3} Contact={handleState4}/>
            </div>

            <div className="md:flex w-screen/2 h-[100%] overflow-hidden z-20">
            <div className="md:hidden absolute inset-0 z-10 bg-[url('/assest/image/myPhoto.png')] opacity-20 bg-cover"></div>

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
                            {isState === 1 && (
                                <Popupwindow hadleClick={handleState} />
                            )}
                            {isState === 2 && (
                                <MyworkWindow MyworkPopup={handleState2} />
                            )}
                            {isState === 3 && (
                                <MyServices MyServicepopup={handleState3} />
                            )}
                             {isState === 4 && (
                                <ContactUs MyContact={handleState4} />
                            )}

                        </div>

                        <div className="w-50 h-20 items-center flex ">
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

                <div className="h-screen mt-16 w-[50%] ">
                    <div className="relative h-screen ">
                        
                        <div className="absolute inset-0 z-10 md:bg-[url('/assest/image/myPhoto.png')] opacity-20 bg-cover"></div>

                       

                        <div className="relative z-10 flex items-center justify-center h-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
