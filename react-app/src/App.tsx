// import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar.tsx";
import Hero from "./components/hero.tsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
      </main>
    </>
  );
}

export default App;
