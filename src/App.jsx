import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import MessageSection from "./sections/MessageSection";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <MessageSection />
    </main>
  );
};

export default App;
