"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideDrawer from "./drawer/SideDrawer";
import BlueButton from "./Buttons/BlueButton";

const navItems = [
  {
    text: "Home",
    href: "#",
  },
  {
    text: "About Me",
    href: "#about",
  },
  {
    text: "Skills",
    href: "#skills",
  },
  {
    text: "Projects",
    href: "#projects",
  },
  {
    text: "Experience",
    href: "#experience",
  },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerButtonClick = () => {
    setIsDrawerOpen(true);
  };

  const handleClick = () => {
    const phoneNumber = "+491638496235"; 
    const message = "Hello, I would like to connect with you!"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank"); // Opens WhatsApp Web in a new tab
  };

  return (
    <div className="px-10 py-7 border-gray-700 border-2 rounded-2xl max-[450px]:px-5 max-[450px]:py-3">
      <div className="flex justify-between items-center">
        <div className="max-[1000px]:hidden pointer">
          <a href="#">
            <p className="text-3xl text-cyan-500 max-[550px]:text-2xl max-[400px]:text-xl">
              {`<F`}
              <span className="text-white">{`ahad`}</span>
              {`/> `}
            </p>
          </a>
        </div>
        <div className="flex justify-between gap-10 max-[1200px]:gap-5 max-[1000px]:hidden">
          {navItems.map((item) => (
            <a
              key={item.text}
              href={item.href}
              className="p-2 transition-all duration-200 hover:bg-cyan-500 hover:text-black cursor-pointer rounded-md"
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className="min-[1000px]:hidden">
          {/* <div className="bg-[#01bf69] p-3 rounded-[7px]"> */}
          <div onClick={handleDrawerButtonClick}>
            <GiHamburgerMenu size={25} />
          </div>
          {/* </div> */}
        </div>
        <div className="pointer">
          <BlueButton text={"Contact Me"} onClick={handleClick} />
        </div>
      </div>
      <SideDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default Navbar;
