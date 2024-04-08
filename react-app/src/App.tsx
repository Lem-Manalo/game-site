// import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar.tsx";
import Hero from "./components/hero.tsx";
import Consoles from "./components/consoles.tsx";
import Accessories from "./components/accessories.tsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Consoles />
        <Accessories />
        <div className="h-96 w-full">Hello World</div>
      </main>
    </>
  );
}

export default App;
