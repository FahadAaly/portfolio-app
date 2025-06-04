import MuiAccordion from "./Accordian/Accordian";

export function Experience() {
  return (
    <div id="experience" className="flex justify-center">
      <div className="flex justify-center w-[67%] max-[800px]:w-[100%]">
        <div className="flex flex-col py-20 gap-5 w-[100%]">
          <div className="flex justify-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-10">
              Experience
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="text-cyan-500 text-center text-2l w-[530px] leading-none max-[800px]:w-[100%] max-[550px]:text-3xl max-[400px]:text-2xl">
              Here is a quick summary of my most recent experiences
            </div>
          </div>
          <MuiAccordion />
        </div>
      </div>
    </div>
  );
}
