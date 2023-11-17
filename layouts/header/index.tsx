"use client";

import Link from "next/link";
import routes from "./routes";
import { v4 as uuidV4 } from "uuid";
import HeaderItem from "./header-item";

import "./header.css";
import DarkModeToggle from "./dark-mode-toggle";
import { useState } from "react";

const Header = () => {
  const [isShowing, setMobileToggle] = useState(false);

  const mobileMenuClassName = `xl:hidden w-full ${
    !isShowing ? "hidden" : "inline-block"
  }`;

  const onHamburgerClick = () => {
    setMobileToggle((prevToggle) => !prevToggle);
  };

  return (
    <header className='fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 px-4 xl:px-0 py-4 z-50 shadow'>
      <div className='container mx-auto flex items-center justify-between'>
        <button
          className='inline-block xl:hidden p-2'
          onClick={onHamburgerClick}
        >
          <svg
            className='w-6 h-6 text-gray-800 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <h1 className='text-gray-800 dark:text-white text-xl font-bold'>
          <Link href='/'>Hotel ST</Link>
        </h1>
        <nav className='hidden xl:flex flex-wrap ml-auto -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
          <ul className='flex flex-wrap -mb-px'>
            {routes.map((props) => (
              <HeaderItem key={"item-" + uuidV4()} {...props} />
            ))}
          </ul>
        </nav>
        <DarkModeToggle />
      </div>
      <nav className={mobileMenuClassName}>
        <ul className='flex flex-col flex-wrap my-3 w-full mx-auto'>
          {routes.map((props) => (
            <HeaderItem key={"item-" + uuidV4()} {...props} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
