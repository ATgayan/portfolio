

export default function Navbar({hadleClick}){

     

    return(
      <div >
      <nav className=" dark:bg-black fixed w-full top-0 left-0 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
              <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                  <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  md:space-x-8 md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-black ">
                     
                      <li>
                          <div onClick={hadleClick} className="cursor-pointer block py-2 px-3  rounded  md:hover:bg-transparent  md:p-0 md:dark:hover:bg-transparent md:hover:font-bold">About</div>
                      </li>
                      <li>
                          <a href="#" className="block py-2 px-3  rounded  md:hover:bg-transparent  md:p-0 md:dark:hover:bg-transparent md:hover:font-bold">Contact us</a>
                      </li>
                      <li>
                          <a href="#" className="block py-2 px-3  rounded  md:hover:bg-transparent  md:p-0 md:dark:hover:bg-transparent md:hover:font-bold">My work</a>
                      </li>
                      <li>
                          <a href="#" className="block py-2 px-3  rounded  md:hover:bg-transparent  md:p-0 md:dark:hover:bg-transparent md:hover:font-bold">Services</a>
                      </li>
                      
                  </ul>
              </div>
          </div>
      </nav>
  </div>
    )
}