import React from "react";

type BorderedButtonProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const BorderedButton: React.FC<BorderedButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-500 font-semibold px-6 py-3 rounded"
    >
      {text}
    </button>
  );
};

export default BorderedButton;
