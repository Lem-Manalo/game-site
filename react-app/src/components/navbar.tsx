import "../css/navbar.css";
import Logo from "../icons/logo";
import { RiShoppingCartFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        <nav className="w-full bg-background border border-t-0 shadow-t-0 shadow-md border-2 px-6 sm:px-8 py-2 md:py-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 sm:space-x-8 lg:space-x-36 items-center">
              <div className="logo text-3xl italic flex items-center">
                <a href="#" className="flex items-center">
                  <Logo />
                </a>
              </div>
              {/* Primary Navbar */}
              <div className="hidden md:flex items-center md:space-x-12 lg:space-x-20">
                <a
                  href=""
                  className="text-gray-600 hover:text-gray-900 hover:font-bold"
                >
                  Consoles
                </a>
                <a
                  href=""
                  className="text-gray-600 hover:text-white-900 hover:font-bold"
                >
                  Games
                </a>
                <a
                  href=""
                  className="text-gray-600 hover:text-gray-900 hover:font-bold"
                >
                  Accessories
                </a>
                <a
                  href=""
                  className="text-gray-600 hover:text-gray-900 hover:font-bold"
                >
                  News
                </a>
              </div>
            </div>
            {/* Secondary Navbar */}
            <div className="hidden xl:flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <input
                  className="border border-gray-500 border-solid rounded-md px-4 mx-4"
                  type="text"
                  placeholder="Search"
                />
                <RiShoppingCartFill className="w-10 h-10 cursor-pointer hover:opacity-80 active:opacity-100" />
                <button className="bg-yellow-400 active:bg-yellow-400 hover:bg-yellow-200 transtition duration-100 border-solid py-2 px-4 mx-4">
                  Sign In
                </button>
              </div>
            </div>
            <div className="flex xl:hidden">
              {/* <IoSearchOutline className="block w-10 h-10" /> */}
              <GiHamburgerMenu
                onClick={toggleVisibility}
                className="block w-10 h-10"
              />
            </div>
          </div>
        </nav>
        {/* Mobile Navbar */}
        <div
          className={
            isVisible == false
              ? "lg:hidden hidden bg-slate-950 bg-cover bg-center fixed w-full h-full"
              : "lg:hidden block bg-slate-950 bg-cover bg-center fixed w-full h-full"
          }
        >
          <ul className="px-2 py-4 mx-2 md:mx-6">
            <li>
              <input
                className="border border-black border-solid rounded-md px-4"
                type="text"
                placeholder="Search"
              />
            </li>
            <li className="my-1 mt-4">
              <a href="" className="text-gray-600 hover:text-white">
                Consoles
              </a>
            </li>
            <li className="my-1">
              <a href="" className="text-gray-600 hover:text-white">
                Games
              </a>
            </li>
            <li className="my-1">
              <a href="" className="py-1 text-gray-600 hover:text-white">
                Accessories
              </a>
            </li>
            <li className="my-1">
              <a href="" className="text-gray-600 hover:text-white">
                News
              </a>
            </li>
            <li className="my-1">
              <a href="" className="text-gray-600 hover:text-white">
                Cart
              </a>
            </li>
            <li className="my-1">
              <a href="" className="text-gray-600 hover:text-white">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="h-20 w-full"></div>
    </>
  );
}

export default Navbar;
