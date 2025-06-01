import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  //   const [dark, setDark] = useState(
  //     () => localStorage.getItem("theme") === "dark"
  //   );

  //   useEffect(() => {
  //     document.documentElement.classList.toggle("dark", dark);
  //     localStorage.setItem("theme", dark ? "dark" : "light");
  //   }, [dark]);

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Fahad Ali</div>
        <div className="flex items-center gap-4">
          {/* <button
            onClick={() => setDark(!dark)}
            className="text-white text-sm bg-gray-600 px-2 py-1 rounded"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button> */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            ☰
          </button>
        </div>
        <ul
          className={`md:flex space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <a href="#hero" className="hover:text-cyan-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
          </li>
          {/* <li>
            <a href="#experience" className="hover:text-cyan-400">
              Experience
            </a>
          </li> */}
          <li>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
          </li>
          {/* <li>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
