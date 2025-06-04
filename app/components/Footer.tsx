"use client";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const phoneNoClick = () => {
    const phoneNumber = "+491638496235"; // Replace with your phone number in international format without '+' or spaces.
    const message = "Hello, I would like to connect with you!"; // Optional: Replace with your default message.
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank"); // Opens WhatsApp Web in a new tab
  };
  return (
    <div className="flex justify-center flex-col">
      <hr className="border-gray-700 w-[100%]" />
      <div className="flex justify-between py-6 max-[500px]:flex-col max-[500px]: gap-6">
        <div className="flex max-[800px]:flex-col gap-6">
          <a href="#">
            <p className="text-3xl text-cyan-500 max-[550px]:text-2xl max-[400px]:text-xl">
              {`<F`}
              <span className="text-white">{`ahad`}</span>
              {`/> `}
            </p>
          </a>
          <div
            onClick={phoneNoClick}
            className="min-[800px]:hidden text-[#c4c4c4] pl-2 cursor-pointer"
          >
            +49 163 8496235
          </div>
        </div>
        <div className="flex gap-8 items-center text-[#c4c4c4] max-[800px]:flex-col max-[500px]:items-start">
          <div
            onClick={phoneNoClick}
            className="max-[800px]:hidden cursor-pointer"
          >
            +49 163 8496235
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              (window.location.href = "mailto:samee6812@gmail.com")
            }
          >
            fahadalisiddiqui0512@gmail.com
          </div>
          <div className="flex gap-4">
            <div className="bg-[#c4c4c4] p-2 rounded-[50%] cursor-pointer">
              <a
                href={"https://www.linkedin.com/in/fahadali05/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn color="black" />
              </a>
            </div>

            <div className="bg-[#c4c4c4] p-2 rounded-[50%] cursor-pointer">
              <a href={""} target="_blank" rel="noopener noreferrer">
                <FaTwitter color="black" />
              </a>
            </div>
            <div className="bg-[#c4c4c4] p-2 rounded-[50%] cursor-pointer">
              <a
                href={"https://github.com/fahadaaly"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub color="black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
