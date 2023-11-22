import React from "react";

const DarkButton = ({ children, className, onClick, type }: ButtonProps) => {
  const buttonClassName =
    "text-white bg-slate-800 dark:bg-slate-500 rounded-md " + className;

  const onButtonClick = () => {
    if (onClick) onClick();
  };

  return (
    <button {...{ type }} className={buttonClassName} onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default DarkButton;
