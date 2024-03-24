import "./navbar.css";
import Logo from "./icons/logo";
import { RiShoppingCartFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div className="relative">
      <nav className="w-full border border-t-0 shadow-t-0 shadow-md border-2 px-4 py-4 sm:px-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 sm:space-x-8 lg:space-x-36 items-center">
            <div className="logo text-3xl italic flex items-center">
              <a href="#" className="flex items-center">
                <Logo />
              </a>
            </div>
            {/* Primary Navbar */}
            <div className="hidden md:flex items-center md:space-x-12 lg:space-x-20">
              <a href="" className="text-gray-600 hover:text-gray-900">
                Consoles
              </a>
              <a href="" className="text-gray-600 hover:text-gray-900">
                Games
              </a>
              <a href="" className="text-gray-600 hover:text-gray-900">
                Accessories
              </a>
              <a href="" className="text-gray-600 hover:text-gray-900">
                News
              </a>
            </div>
          </div>
          {/* Secondary Navbar */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <input
                className="border border-black border-solid rounded-md px-4 mx-4"
                type="text"
                placeholder="Search"
              />
              <RiShoppingCartFill className="w-10 h-10 cursor-pointer hover:opacity-80 active:opacity-100" />
              <button className="bg-primary active:bg-primary hover:bg-secondary transtition duration-300 border-solid rounded-md py-2 px-4 mx-4">
                Sign In
              </button>
            </div>
          </div>
          <div className="flex lg:hidden">
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
        className={isVisible == false ? "lg:hidden hidden" : "lg:hidden block"}
      >
        <ul className="px-4 m-4">
          <li>
            <input
              className="border border-black border-solid rounded-md px-4"
              type="text"
              placeholder="Search"
            />
          </li>
          <li className="my-1 mt-4">
            <a href="" className="text-gray-600 hover:text-gray-900">
              Consoles
            </a>
          </li>
          <li className="my-1">
            <a href="" className="text-gray-600 hover:text-gray-900">
              Games
            </a>
          </li>
          <li className="my-1">
            <a href="" className="py-1 text-gray-600 hover:text-gray-900">
              Accessories
            </a>
          </li>
          <li className="my-1">
            <a href="" className="text-gray-600 hover:text-gray-900">
              News
            </a>
          </li>
          <li className="my-1">
            <a href="" className="text-gray-600 hover:text-gray-900">
              Cart
            </a>
          </li>
          <li className="my-1">
            <a href="" className="text-gray-600 hover:text-gray-900">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
