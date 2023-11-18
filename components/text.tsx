import React from "react";

export const Heading1 = ({ children, className }: TextProps) => {
  const headingClassName =
    "text-4xl md:text-5xl xl:text-7xl font-semibold text-gray-900 dark:text-white " +
    className;

  return <h1 className={headingClassName}>{children}</h1>;
};

export const Heading2 = ({ children, className }: TextProps) => {
  const headingClassName =
    "text-2xl md:text-3xl xl:text-5xl font-semibold text-gray-900 dark:text-white " +
    className;

  return <h2 className={headingClassName}>{children}</h2>;
};

export const Heading3 = ({ children, className }: TextProps) => {
  const headingClassName =
    "text-xl md:text-3xl font-semibold text-gray-900 dark:text-white " +
    className;

  return <h2 className={headingClassName}>{children}</h2>;
};
