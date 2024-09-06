import React, { Children } from "react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className={"rounded bg-slate-500 p-3 m-4 text-white"}
      onClick={onClick}
      aria-label="close"
    >
      {children}
    </button>
  );
};

export default Button;
