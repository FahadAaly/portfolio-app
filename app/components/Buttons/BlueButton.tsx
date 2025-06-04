import React from "react";

type BlueButtonProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const BlueButton: React.FC<BlueButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded shadow-md"
    >
      {text}
    </button>
  );
};

export default BlueButton;
