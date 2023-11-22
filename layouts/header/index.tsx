"use client";

import Link from "next/link";
import userRoutes from "./user.routes";
import adminRoutes from "./admin.routes";
import unprotectedRoutes from "./routes";
import { v4 as uuidV4 } from "uuid";
import HeaderItem from "./header-item";

import "./header.css";
import DarkModeToggle from "./dark-mode-toggle";
import { useEffect, useState } from "react";
import DarkLink from "@/components/dark-link";
// import SignInOut from "./sign-in-out";
import { useAppSelector } from "@/store/hooks";

const Header = () => {
  const [isShowing, setMobileToggle] = useState(false);
  const [routes, setRoutes] = useState<{ name: string; path: string }[] | null>(
    null,
  );
  const { activeUser } = useAppSelector(({ auth }) => auth);

  const mobileMenuClassName = `xl:hidden w-full ${
    !isShowing ? "hidden" : "inline-block"
  }`;

  const onHamburgerClick = () => {
    setMobileToggle((prevToggle) => !prevToggle);
  };

  useEffect(() => {
    setRoutes(
      !activeUser
        ? unprotectedRoutes
        : activeUser.role === "ADMIN"
        ? adminRoutes
        : userRoutes,
    );
  }, []);

  return (
    <header className='fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 px-4 xl:px-0 py-4 z-50 shadow'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex'>
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
          <h1 className='text-gray-800 dark:text-white text-xl font-bold flex ml-4'>
            <Link className='my-auto' href='/'>
              Hotel ST
            </Link>
          </h1>
        </div>
        <div className='flex'>
          <nav className='hidden xl:flex flex-wrap ml-auto -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
            <ul className='flex flex-wrap -mb-px'>
              {routes &&
                routes.map((props) => (
                  <HeaderItem
                    key={"item-" + uuidV4()}
                    role={activeUser?.role}
                    {...props}
                  />
                ))}
            </ul>
          </nav>
          <DarkModeToggle />
          {/* <SignInOut /> */}
          <DarkLink
            className='ml-4 mr-0 md:mx-6 text-xs md:text-sm px-2 py-4 md:px-4 md:py-4'
            href='/sign-in'
          >
            Sign In
          </DarkLink>
        </div>
      </div>
      <nav className={mobileMenuClassName}>
        <ul className='flex flex-col flex-wrap my-3 w-full mx-auto'>
          {userRoutes.map((props) => (
            <HeaderItem key={"item-" + uuidV4()} {...props} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
