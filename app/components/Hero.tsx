// src/components/Hero.jsx
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import heroImage from "../../public/assets/heroImage.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center text-white px-4 py-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I&apos;m Fahad Ali Siddiqui
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Full Stack Developer with 6+ years of experience building scalable
            web apps using JavaScript, TypeScript, React, Angular, Java, SQL,
            and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
            <a
              href="mailto:fahadalisiddiqui0512@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded shadow-md"
            >
              Hire Me
            </a>
            <a
              href="mailto:fahadalisiddiqui0512@gmail.com"
              className="border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-500 font-semibold px-6 py-3 rounded"
            >
              Let&#39;s Talk
            </a>
          </div>
          <div className="flex gap-4 justify-center md:justify-start text-2xl">
            <a
              href="https://linkedin.com/in/fahadali05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/FahadAaly"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a href="mailto:fahadalisiddiqui0512@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right content */}
        <Image
          src={heroImage}
          alt="Fahad Ali Siddiqui"
          className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
          placeholder="blur"
          priority
        />
      </div>
    </section>
  );
}
