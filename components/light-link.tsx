import Link from "next/link";
import React from "react";

const LightLink = ({ children, href = "#", className }: LinkProps) => {
  const newClassName =
    "px-5 py-4 bg-blue-600 dark:bg-blue-500 rounded-md " + className;

  return (
    <Link {...{ href }} className={newClassName}>
      {children}
    </Link>
  );
};

export default LightLink;
