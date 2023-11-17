import React from "react";

export const Heading1 = ({ children, className }: TextProps) => {
  const headingClassName =
    "text-4xl md:text-5xl xl:text-7xl font-semibold " + className;

  return <h1 className={headingClassName}>{children}</h1>;
};
