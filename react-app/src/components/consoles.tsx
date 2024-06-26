import "../css/consoles.css";
import PS5 from "../images/ps5-console.webp";
import SwitchOLED from "../images/switch-oled.webp";
import Xbox from "../images/xbox-console.png";
import Steamdeck from "../images/steamdeck.png";
import { useState, useEffect } from "react";

function Consoles() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ["PS5", "Xbox", "Nintendo Switch", "Steamdeck"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change interval time as needed

    return () => clearInterval(interval);
  }, []);

  const handleSvgClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="console-sec flex flex-col items-center relative z-40 bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <div className="flex justify-center space-x-8 lg:space-x-24 items-center py-8 px-4">
        <svg
          onClick={() => handleSvgClick(0)}
          className={`transition-transform duration-500 transform w-8 md:w-16 h-auto hover:cursor-pointer ${
            activeIndex === 0 ? "translate-y-4" : "hover:translate-y-4"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
          fill="#ffffff"
        >
          <path d="M 19.3125 4 C 19.011719 4 18.707031 3.988281 18.40625 4.1875 C 18.105469 4.386719 18 4.699219 18 5 L 18 41.59375 C 18 41.992188 18.289063 42.394531 18.6875 42.59375 L 26.6875 45 L 27 45 C 27.199219 45 27.394531 44.914063 27.59375 44.8125 C 27.894531 44.613281 28 44.300781 28 44 L 28 13.40625 C 28.601563 13.707031 29 14.300781 29 15 L 29 26.09375 C 29 26.394531 29.199219 26.804688 29.5 26.90625 C 29.699219 27.007813 31.199219 27.90625 34 27.90625 C 36.699219 27.90625 40 26.414063 40 19.3125 C 40 13.613281 36.8125 9.292969 31.3125 7.59375 Z M 17 26.40625 L 5.90625 30.40625 L 4.3125 31 C 1.613281 32.101563 0 33.886719 0 35.6875 C 0 39.488281 2.699219 41.6875 7.5 41.6875 C 10.101563 41.6875 13.300781 41.113281 17 39.8125 L 17 36 C 16.101563 36.300781 15.113281 36.699219 14.3125 37 C 12.710938 37.601563 11.5 37.8125 10.5 37.8125 C 9 37.8125 8.300781 37.300781 8 37 C 7.601563 36.699219 7.398438 36.3125 7.5 35.8125 C 7.601563 34.8125 8.800781 33.894531 11 33.09375 C 11.5 32.894531 14.898438 31.699219 17 31 Z M 36.5 28.90625 C 34.101563 29.007813 31.601563 29.394531 29 30.09375 L 29 34.6875 C 30.101563 34.289063 31.585938 33.800781 33.6875 33 C 38.488281 31.300781 40.492188 31.488281 41.09375 31.6875 C 42.292969 31.789063 42.800781 32.5 43 33 C 43.5 34.5 41.613281 35.1875 38.8125 36.1875 C 37.511719 36.6875 31.898438 38.6875 29 39.6875 L 29 44.3125 L 44.5 38.8125 L 45.6875 38.3125 C 47.6875 37.613281 50.199219 36.300781 50 34 C 49.898438 31.800781 47.210938 30.695313 45.3125 30.09375 C 42.511719 29.195313 39.5 28.804688 36.5 28.90625 Z"></path>
        </svg>
        <svg
          onClick={() => handleSvgClick(1)}
          className={`transition-transform duration-500 transform w-8 md:w-16 h-auto hover:cursor-pointer ${
            activeIndex === 1 ? "translate-y-4" : "hover:translate-y-4"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
          fill="#ffffff"
        >
          <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M25,2c-4.291,0 -8.38144,1.20078 -11.77344,3.30078c-0.219,0.073 -0.59741,0.36102 -0.94141,0.66602c3.045,-2.419 10.08658,2.42614 12.14258,3.86914c0.346,0.243 0.80048,0.243 1.14648,0c2.056,-1.443 9.09758,-6.28914 12.14258,-3.86914c-0.344,-0.305 -0.72341,-0.59302 -0.94141,-0.66602c-3.393,-2.1 -7.48439,-3.30078 -11.77539,-3.30078zM11,8c-1.597,0 -2.76367,1.30078 -2.76367,1.30078c-3.792,4.1 -6.18555,9.59922 -6.18555,15.69922c0,12.7 10.27722,23 22.94922,23c6.685,0 12.77189,-2.9 16.96289,-7.5c0,0 -0.4988,-3.00039 -3.5918,-7.40039c-3.459,-5.217 -10.46598,-11.78769 -12.70898,-13.80469c-0.383,-0.344 -0.95398,-0.34214 -1.33398,0.00586c-1.69,1.547 -6.05072,5.877 -7.01172,7c-2.295,2.4 -8.68108,9.99883 -9.08008,14.29883c0,0 -1.39769,-3.39922 1.69531,-11.19922c1.925,-4.686 7.90373,-11.65241 10.80273,-14.69141c0.385,-0.403 0.37575,-1.03987 -0.03125,-1.42187c-0.96,-0.899 -3.19784,-2.4745 -5.21484,-3.6875c-1.396,-0.9 -2.99128,-1.49961 -4.48828,-1.59961zM38.68945,8c-0.653,0 -4.89538,1.34283 -9.35937,5.29883c-0.422,0.374 -0.43887,1.02664 -0.04687,1.43164c1.617,1.671 6.03945,5.95092 8.68945,10.16992c3.293,5.4 5.28784,9.69961 4.08984,15.59961c3.692,-4.1 5.98828,-9.5 5.98828,-15.5c-0.1,-6 -2.3955,-11.49961 -6.1875,-15.59961c-0.1,-0.1 -0.19983,-0.20078 -0.29883,-0.30078c-0.798,-0.9 -1.977,-1.09961 -2.875,-1.09961z"></path></g></g>
        </svg>
        <svg
          onClick={() => handleSvgClick(2)}
          className={`transition-transform duration-500 transform w-8 md:w-16 h-auto hover:cursor-pointer ${
            activeIndex === 2 ? "translate-y-4" : "hover:translate-y-4"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
          fill="#ffffff"
        >
          <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M14.5293,4c-3.5868,0 -6.32345,1.05343 -8.07422,3.10352c-1.75077,2.05009 -2.45508,4.93792 -2.45508,8.42188v20c0,6.03248 4.40487,10.47461 10.5293,10.47461h9.4707v-42zM35.47461,4l-9.5,0.01563v41.98438h9.5c6.139,0 10.52539,-4.435 10.52539,-10.5v-19.94922c0,-7.592 -3.55439,-11.55078 -10.52539,-11.55078zM14.5293,6h7.4707v38h-7.4707c-5.20557,0 -8.5293,-3.36709 -8.5293,-8.47461v-20c0,-3.21205 0.66234,-5.58414 1.97656,-7.12305c1.31423,-1.53891 3.34153,-2.40234 6.55273,-2.40234zM14.5,10c-1.41667,0 -2.60644,0.56726 -3.37305,1.42969c-0.76661,0.86243 -1.12695,1.97309 -1.12695,3.07031c0,1.09722 0.36035,2.20788 1.12695,3.07031c0.76661,0.86243 1.95638,1.42969 3.37305,1.42969c1.41667,0 2.60644,-0.56726 3.37305,-1.42969c0.76661,-0.86243 1.12695,-1.97309 1.12695,-3.07031c0,-1.09722 -0.36035,-2.20788 -1.12695,-3.07031c-0.76661,-0.86243 -1.95638,-1.42969 -3.37305,-1.42969zM14.5,12c0.91667,0 1.47689,0.30774 1.87695,0.75781c0.40006,0.45007 0.62305,1.08941 0.62305,1.74219c0,0.65278 -0.22299,1.29212 -0.62305,1.74219c-0.40006,0.45007 -0.96029,0.75781 -1.87695,0.75781c-0.91667,0 -1.47689,-0.30774 -1.87695,-0.75781c-0.40006,-0.45007 -0.62305,-1.08941 -0.62305,-1.74219c0,-0.65278 0.22299,-1.29212 0.62305,-1.74219c0.40006,-0.45007 0.96029,-0.75781 1.87695,-0.75781zM36,24c2.206,0 4,1.794 4,4c0,2.206 -1.794,4 -4,4c-2.206,0 -4,-1.794 -4,-4c0,-2.206 1.794,-4 4,-4z"></path></g></g>
        </svg>
        <svg
          onClick={() => handleSvgClick(3)}
          className={`transition-transform duration-500 transform w-8 md:w-16 h-auto hover:cursor-pointer ${
            activeIndex === 3 ? "translate-y-4" : "hover:translate-y-4"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
          fill="#ffffff"
        >
          <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M25,3c-11.41,0 -20.79062,8.68078 -21.89062,19.80078l11.19141,5.72852c1.13,-0.95 2.59922,-1.5293 4.19922,-1.5293h0.05078c0.39,-0.6 0.83859,-1.35086 1.30859,-2.13086c0.98,-1.61 2.08016,-3.43008 3.16016,-4.83008c0.24,-4.47 3.95047,-8.03906 8.48047,-8.03906c4.69,0 8.5,3.81 8.5,8.5c0,4.53 -3.56906,8.24047 -8.03906,8.48047c-1.4,1.08 -3.21008,2.18039 -4.83008,3.15039c-0.78,0.48 -1.53086,0.92836 -2.13086,1.31836v0.05078c0,3.59 -2.91,6.5 -6.5,6.5c-3.59,0 -6.5,-2.91 -6.5,-6.5c0,-0.17 0.00953,-0.33 0.01953,-0.5l-8.74023,-4.48047c1.69,10.48 10.7707,18.48047 21.7207,18.48047c12.15,0 22,-9.85 22,-22c0,-12.15 -9.85,-22 -22,-22zM31.5,14c-3.58,0 -6.5,2.92 -6.5,6.5c0,3.58 2.92,6.5 6.5,6.5c3.58,0 6.5,-2.92 6.5,-6.5c0,-3.58 -2.92,-6.5 -6.5,-6.5zM31.5,16c2.49,0 4.5,2.01 4.5,4.5c0,2.49 -2.01,4.5 -4.5,4.5c-2.49,0 -4.5,-2.01 -4.5,-4.5c0,-2.49 2.01,-4.5 4.5,-4.5zM18.5,29c-0.79,0 -1.53969,0.20031 -2.17969,0.57031l3.32031,1.69922c1.23,0.63 1.70984,2.14109 1.08984,3.37109c-0.45,0.86 -1.32047,1.35938 -2.23047,1.35938c-0.39,0 -0.77062,-0.08953 -1.14062,-0.26953l-3.33008,-1.71094c0.26,2.24 2.1607,3.98047 4.4707,3.98047c2.49,0 4.5,-2.01 4.5,-4.5c0,-2.49 -2.01,-4.5 -4.5,-4.5z"></path></g></g>
        </svg>
      </div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${
            activeIndex === index
              ? "w-full h-full flex flex-col items-center"
              : "hidden"
          }`}
        >
          <img
            className="max-h-1/2 max-w-full w-auto absolute top-1/4 left-50 z-0 opacity-15 lg:static lg:opacity-100 lg:h-1/3"
            src={
              image === "PS5"
                ? PS5
                : image === "Xbox"
                ? Xbox
                : image === "Nintendo Switch"
                ? SwitchOLED
                : Steamdeck
            }
            alt={image}
          />
          <h1 className="px-12 text-center text-white text-3xl mt-12 z-10">
            {image === "PS5"
              ? "Your Gateway to Next-Gen Fun!"
              : image === "Xbox"
              ? "Power Your Play, Unleash the Next Level!"
              : image === "Nintendo Switch"
              ? "Switch Up Your Game, Anytime, Anywhere!"
              : "Unlock Infinite Worlds, Anywhere You Go!"}
          </h1>
          <h4 className="px-12 text-center text-white text-lg mt-40 lg:mt-12 z-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            at!
          </h4>
          <button className="z-10 my-8 border border-primary bg-primary hover:bg-secondary active:bg-primary border-solid px-8 py-2">
            See More
          </button>
        </div>
      ))}
    </section>
  );
}

export default Consoles;
