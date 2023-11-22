import React from "react";

const Backdrop = ({ className, show }: BackdropProps) => {
  const backdropClassName = `bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30 ${className} ${
    show ? "" : "hidden"
  }`;

  return <div className={backdropClassName} />;
};

export default Backdrop;
