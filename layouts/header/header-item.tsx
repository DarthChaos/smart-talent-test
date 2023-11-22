"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderItem = ({ name, path, role }: HeaderItemProps) => {
  const actualPath = usePathname().split("/")[1];

  const className =
    "inline-block p-4 w-full text-center border-b-2 border-transparent rounded-t-lg text-gray-800 dark:text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 [&.active]:text-blue-600 [&.active]:border-blue-600 [&.active]:dark:text-blue-500 [&.active]:dark:border-blue-500 " +
    ("/" + actualPath === path ? "active" : "");

  const pathToRedirect =
    role !== "ADMIN" && actualPath === "admin"
      ? "/errors/no-permissions"
      : path;

  return (
    <li className='mx-3 xl:me-2'>
      <Link {...{ className }} href={pathToRedirect}>
        {name}
      </Link>
    </li>
  );
};

export default HeaderItem;
