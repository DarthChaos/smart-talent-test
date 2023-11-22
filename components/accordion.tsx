"use client";

import React, { useState } from "react";
import { AccordionProps } from "./interfaces/accordion";
import { v4 as uuidV4 } from "uuid";

const Accordion = ({ accordions }: AccordionProps) => {
  const [openPos, setOpenPos] = useState<number>(0);

  const handleOpenAccordion = (pos: number) => {
    setOpenPos((prevPos) => {
      return prevPos === pos ? -1 : pos;
    });
  };
  const showHiddenDiv = (actPos: number) =>
    openPos === actPos ? "block" : "hidden";

  return (
    <div
      id='accordion-open'
      className='bg-white dark:bg-gray-900 overflow-hidden rounded-md'
      data-accordion='open'
    >
      {accordions.map(({ content, title, isAble, tagMessage }, idx) => (
        <div key={`accordion-item-${uuidV4()}`}>
          <h2 id={`accordion-open-heading-${idx + 1}`}>
            <button
              type='button'
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 [&.active]:bg-gray-100 [&.active]:dark:bg-slate-700 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
                openPos === idx ? "active" : ""
              }`}
              data-accordion-target={`#accordion-open-body-${idx + 1}`}
              aria-expanded='true'
              aria-controls={`accordion-open-body-${idx + 1}`}
              onClick={() => handleOpenAccordion(idx)}
            >
              <span className='flex items-center w-[200px]'>{title}</span>
              <svg
                data-accordion-icon
                className='w-3 h-3 rotate-180 shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5 5 1 1 5'
                />
              </svg>
              {typeof isAble !== "undefined" ? (
                <span
                  className={` text-xs font-medium me-2 px-2.5 py-0.5 rounded  ${
                    isAble
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                  }`}
                >
                  {tagMessage}
                </span>
              ) : null}
            </button>
          </h2>
          <div
            id={`accordion-open-body-${idx + 1}`}
            className={showHiddenDiv(idx)}
            aria-labelledby={`accordion-open-heading-${idx + 1}`}
          >
            {content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
