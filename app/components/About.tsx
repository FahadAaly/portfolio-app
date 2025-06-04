import React from "react";
import image from "../../public/images/ProfileImage.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="flex max-[800px]:flex-col max-[800px]:pt-24">
      <div className="flex justify-center min-[800px]:hidden">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">About me</h2>
      </div>
      <div className="flex w-[25%] justify-center max-[800px]:w-[100%] max-[800px]:mt-5">
        <div className="w-40 h-40 rounded-full object-cover">
          <Image
            className="w-40 h-40 rounded-full object-cover"
            src={image}
            alt="pic"
          />
        </div>
      </div>
      <div className="flex flex-col w-[75%] gap-6 max-[800px]:w-[100%]">
        <div>
          <h2 className="text-4xl font-bold text-cyan-400 mb-10">About me</h2>
        </div>
        <div className="text-cyan-500 text-4xl w-[530px] leading-none max-[800px]:max-w-[100%] max-[550px]:text-3xl max-[400px]:text-2xl max-[800px]:text-center">
          Transforming visions into exceptional portfolios
        </div>
        <div className="text-lg text-[#c4c4c4] leading-normal mt-6 max-[550px]:text-2xl max-[400px]:text-xl max-[800px]:mt-0">
          I&apos;m a full stack developer with 6+ years of experience building
          web apps using modern technologies like JavaScript, TypeScript, React,
          Angular, Java, Python and more. I translate complex business needs
          into scalable, efficient software solutions. Experienced in Agile
          teams, CI/CD, and writing maintainable code. Passionate about
          transforming ideas into impactful digital experiences.
        </div>
      </div>
    </div>
  );
};

export default About;
