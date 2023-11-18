"use client";

import React from "react";

const LightButton = ({ children, className, onClick, type }: ButtonProps) => {
  const buttonClassName =
    "text-white bg-blue-600 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " +
    className;

  const onButtonClick = () => {
    if (onClick) onClick();
  };

  return (
    <button {...{ type }} className={buttonClassName} onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default LightButton;
