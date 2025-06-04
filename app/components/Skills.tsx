import Image from "next/image";
import React from "react";
import skills from "../data/Skills";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center py-20 gap-5"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">Skills</h2>

      <div className="text-cyan-500 justify-center text-center text-lg w-[530px] leading-none max-[800px]:w-[100%] max-[550px]:text-3xl max-[400px]:text-2xl">
        The skills, tools and technologies I am really good at:
      </div>
      <div className="flex flex-wrap gap-10 max-w-[620px]">
        {skills.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-fit justify-center items-center"
          >
            <div className="flex w-[55px] h-[50px] max-[600px]:w-[35px] max-[600px]:h-[30px]">
              <Image src={item.Image} alt="pic" />
            </div>
            <p className="py-1">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
