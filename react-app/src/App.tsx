// import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar.tsx";
import Hero from "./components/hero.tsx";
import Consoles from "./components/consoles.tsx";
import Accessories from "./components/accessories.tsx";
import Games from "./components/games.tsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Consoles />
        <Accessories />
        <Games/>
        <section className="bg-white h-96">
          Extra Section sample
        </section>
      </main>
    </>
  );
}

export default App;
