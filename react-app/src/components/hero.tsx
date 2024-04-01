import { useState, useEffect } from "react";
import heroEllie from "../images/hero-ellie.png";
import heroLink from "../images/Link_totk.webp";
import heroJoel from "../images/hero-joel.png";
import heroLeon from "../images/hero-re.png";
import "../css/hero.css";

function Hero() {
  const images = [heroLink, heroLeon, heroEllie, heroJoel];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change the duration (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);
  return (
    // <section className="relative mt-20 px-4 w-full gap-0 flex hero-sec">
    <section className="relative px-4 w-full gap-0 flex hero-sec">
      <div className="mb-36 p-4 flex flex-col justify-center lg:w-1/2 xl:w-3/5 z-20">
        <h1 className="flex text-center justify-center lg:text-left lg:block py-3 text-5xl md:text-6xl xl:text-8xl italic mt-8 mb-4 bg-gradient-to-r from-text to-primary text-transparent bg-clip-text">
          Elevate your gaming experience
        </h1>
        <h4 className="flex text-center lg:text-left justify-center lg:block text-2xl text-text">
          Discover the latest releases, classics, and exclusive deals
          for every gamer. 
        </h4>
        <h4 className="flex text-center lg:text-left justify-center lg:block text-2xl text-text">A single-page mock design.</h4>
        <div className="mt-8 flex space-x-2 flex lg:text-left text-center justify-center lg:block">
          <button className="border border-primary bg-primary hover:bg-secondary active:bg-primary border-solid px-8 py-2">
            Pre-order
          </button>
          <button className="border border-yellow-400 border-solid bg-yellow-400 hover:bg-yellow-200 active:bg-transparent hover:border-yellow-400 active:bg-yellow-400 px-4 py-2">
            Buy Now
          </button>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 xl:w-2/5 relative z-20">
        {images.map((image, index) => (
          <img
            key={index}
            className={`absolute top-0 left-0 w-auto h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            src={image}
            alt={`Hero Image ${index}`}
          />
        ))}
        {/* <img className="w-auto h-full pt-12" src={heroLeon} alt="Hero Image" /> */}
        {/* <img className="w-auto h-full pt-12" src={heroEllie} alt="Hero Image" /> */}
        {/* <img className="w-auto h-full pt-12" src={heroJoel} alt="Hero Image" /> */}
        {/* <img className="w-auto h-full pt-12" src={heroLink} alt="Hero Image" /> */}
      </div>
      {images.map((image, index) => (
        <img
          key={index}
          className={`p-8 block lg:hidden absolute top-0 right-0 z-10 w-auto h-full shadow-se shadow-lg transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-30" : "opacity-0"
          }`}
          src={image}
          alt={`Hero Image ${index}`}
        />
      ))}
    </section>
  );
}

export default Hero;