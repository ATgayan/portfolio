import { useState } from "react";

export default function Navbar({ handleClick, MyworkPopup, MyServices, Contact }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const downloadLink =
    "https://drive.google.com/uc?export=download&id=1REM3HyqW_SG4VDObBqJ82JADQ7sieG1g";

  return (
    <div>
      <nav className="fixed w-full h-14 top-0 right-0 shadow-md z-50 bg-black">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo Section */}
          <div className="md:hidden absolute top-0 right-0 text-2xl font-bold text-white m-4">Brand</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium text-white">
            <li>
              <button
                onClick={handleClick}
                className="cursor-pointer block py-2 px-3 rounded-md hover:text-slate-300 transition"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={Contact}
                className="cursor-pointer block py-2 px-3 rounded-md hover:text-slate-300 transition"
              >
                Contact Us
              </button>
            </li>
            <li>
              <button
                onClick={MyworkPopup}
                className="cursor-pointer block py-2 px-3 rounded-md hover:text-slate-300 transition"
              >
                My Work
              </button>
            </li>
            <li>
              <button
                onClick={MyServices}
                className="cursor-pointer block py-2 px-3 rounded-md hover:text-slate-300 transition"
              >
                Services
              </button>
            </li>
          </ul>

          {/* Download CV Button */}
          <a
            href={downloadLink}
            className="hidden bg-white md:flex w-[130px] h-[40px] rounded-2xl hover:bg-black hover:border border-black p-2 items-center justify-center transition duration-300"
          >
            <p className="text-black hover:text-white">Download CV</p>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="absolute top-0 left-0 md:hidden text-3xl text-white focus:outline-none m-4"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 h-screen w-3/4 bg-black shadow-lg p-6 flex flex-col space-y-6 transform transition-transform duration-300 ease-in-out">
            <button
              className="text-white text-2xl absolute top-4 left-4 focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </button>
            <button
              onClick={handleClick}
              className="block py-2 px-3 text-white rounded-md hover:bg-gray-700 transition"
            >
              About
            </button>
            <button
              onClick={Contact}
              className="block py-2 px-3 text-white rounded-md hover:bg-gray-700 transition"
            >
              Contact Us
            </button>
            <button
              onClick={MyworkPopup}
              className="block py-2 px-3 text-white rounded-md hover:bg-gray-700 transition"
            >
              My Work
            </button>
            <button
              onClick={MyServices}
              className="block py-2 px-3 text-white rounded-md hover:bg-gray-700 transition"
            >
              Services
            </button>
            <a
              href={downloadLink}
              className="w-full text-center py-2 px-3 text-white bg-white rounded-2xl hover:bg-black hover:border border-black transition duration-300"
            >
              <p className="text-black hover:text-white">Download CV</p>
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
