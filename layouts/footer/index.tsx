import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className='bg-white shadow dark:bg-gray-900 min-w-full mt-10'>
      <div className='max-w-screen-md mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <h1 className='text-gray-800 dark:text-white text-xl font-bold mb-2 xl:mb-0'>
            <Link href='/'>Hotel Smart Talent</Link>
          </h1>
          <ul className='flex flex-wrap items-center mb-3 xl:mb-6 text-sm font-medium gap-y-2 text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                Admin
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                Licensing
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className='my-3 xl:my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{" "}
          <Link href='/' className='hover:underline'>
            Hotel ST™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
