import Link from "next/link";
import React from "react";

const DarkLink = ({ children, href = "#", className }: LinkProps) => {
  const newClassName =
    "text-white bg-slate-800 dark:bg-slate-500 rounded-md " + className;

  return (
    <Link className={newClassName} {...{ href }}>
      {children}
    </Link>
  );
};

export default DarkLink;
