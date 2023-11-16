"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import routes from "./routes";
import { v4 as uuidV4 } from "uuid";
import HeaderItem from "./header-item";

import "./header.css";
import DarkModeToggle from "./dark-mode-toggle";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setIsHeaderVisible(
      prevScrollPos > currentScrollPos || currentScrollPos < 10,
    );
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const headerClassName = `fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 py-4  ${
    isHeaderVisible ? "" : "header-hidden"
  }`;
  return (
    <header className={headerClassName}>
      <div className='container mx-auto flex items-center justify-between'>
        <h1 className='text-gray-800 dark:text-white text-xl font-bold'>
          <Link href='/'>Hotel Smart Talent</Link>
        </h1>
        <nav className='flex flex-wrap ml-auto -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
          <ul className='flex flex-wrap -mb-px'>
            {routes.map((props) => (
              <HeaderItem key={"item-" + uuidV4()} {...props} />
            ))}
          </ul>
        </nav>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
