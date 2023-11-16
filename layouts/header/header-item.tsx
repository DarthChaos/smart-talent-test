"use client";

import { usePathname } from "next/navigation";
import React from "react";

const HeaderItem = ({ name, path }: HeaderItemProps) => {
  const actualPath = usePathname().split("/")[1];

  const className =
    "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 [&.active]:text-blue-600 [&.active]:border-blue-600 [&.active]:dark:text-blue-500 [&.active]:dark:border-blue-500 " +
    ("/" + actualPath === path ? "active" : "");

  return (
    <li className='me-2'>
      <a {...{ className }} href={path}>
        {name}
      </a>
    </li>
  );
};

export default HeaderItem;
