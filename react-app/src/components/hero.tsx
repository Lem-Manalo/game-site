// import { useState, useEffect } from "react";
import React from "react";
import heroLink from "../images/Link_totk.webp";
import heroLeon from "../images/hero-re.png";
import heroEllie from "../images/hero-ellie.png";
import heroJoel from "../images/hero-joel.png";
import "../css/hero.css";

function Hero() {
  return (
    <section className="mt-20 px-4 w-full gap-0 flex hero-sec">
      <div className="mb-80 p-4 flex flex-col justify-center md:w-1/2 xl:w-3/5">
        <h1 className="text-3xl md:text-5xl lg:text-6xl italic mt-8 mb-4">
          Elevate your gaming experience
        </h1>
        <h4 className="text-2xl">
          Discover the latest releases, classic favorites, and exclusive deals
          for every gamer.
        </h4>
        <div className="mt-20 flex space-x-2">
          <button className="border border-primary bg-primary border-primary border-solid rounded-md px-8 py-2">
            Buy Now
          </button>
          <button className="border border-black border-solid rounded-md px-4 py-2">
            Pre-order
          </button>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 xl:w-2/5">
        <img className="w-auto h-full pt-12" src={heroLeon} alt="Hero Image" />
        {/* <img className="w-auto h-full pt-12" src={heroEllie} alt="Hero Image" /> */}
        {/* <img className="w-auto h-full pt-12" src={heroJoel} alt="Hero Image" /> */}
        {/* <img className="w-auto h-full pt-12" src={heroLink} alt="Hero Image" /> */}
      </div>
    </section>
  );
}

export default Hero;
