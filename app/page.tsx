"use client";
import About from "./components/About";
import { Experience } from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="pt-20 pb-0 px-20 bg-gray-900 max-[1000px]:px-10 max-[1000px]:pt-10 max-[550px]:px-5 max-[550px]:pt-5">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
