// import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar.tsx";
import Hero from "./components/hero.tsx";
import Consoles from "./components/consoles.tsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Consoles />
        <section className="fake-sec">
          hello
        </section>
      </main>
    </>
  );
}

export default App;
