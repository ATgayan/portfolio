

export default function Navbar({hadleClick, MyworkPopup,MyServices,Contact}){

  const downloadLink =
  "https://drive.google.com/uc?export=download&id=1REM3HyqW_SG4VDObBqJ82JADQ7sieG1g";

    return(
        <div>
        <nav className="dark:bg-black fixed w-full top-0 left-0">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
            {/* Center aligned ul */}
            <div className="flex justify-center flex-1">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-black">
                <li>
                  <div
                    onClick={hadleClick}
                    className="cursor-pointer block py-2 px-3 rounded md:hover:bg-transparent md:p-0 md:dark:hover:bg-transparent md:hover:font-bold"
                  >
                    About
                  </div>
                </li>
                <li>
                  <div
                    onClick={Contact}
                    className="cursor-pointer block py-2 px-3 rounded md:hover:bg-transparent md:p-0 md:dark:hover:bg-transparent md:hover:font-bold"
                  >
                    Contact us
                  </div>
                </li>
                <li>
                  <div
                    onClick={MyworkPopup}
                    className="cursor-pointer block py-2 px-3 rounded md:hover:bg-transparent md:p-0 md:dark:hover:bg-transparent md:hover:font-bold"
                  >
                    My work
                  </div>
                </li>
                <li>
                  <div
                    onClick={MyServices}
                    className="cursor-pointer block py-2 px-3 rounded md:hover:bg-transparent md:p-0 md:dark:hover:bg-transparent md:hover:font-bold"
                  >
                    Services
                  </div>
                </li>
              </ul>
            </div>
      
            {/* Right side white div */}
            <div  href={downloadLink}
             className="bg-white w-[130px] h-[40px] rounded-2xl hover:bg-black hover:border border-black p-2 flex justify-center items-center transition duration-300 hover:border-white">
  <p className="text-black hover:text-white w-full h-full text-center rounded-2xl flex justify-center items-center">
    Download CV
  </p>
</div>


          </div>
        </nav>
      </div>
      
    )
}