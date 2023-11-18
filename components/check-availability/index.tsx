"use client";

import React from "react";
import DateInput from "../date-input";
import Selector from "../selector";

const CheckAvailability = () => {
  const people = [
    { value: "1", label: "1 Person" },
    { value: "2", label: "2 Person" },
    { value: "3", label: "3 Person" },
    { value: "4", label: "4 Person" },
  ];

  const onStartDateChange = (date: Date) => {
    console.log("Start", date);
  };

  const onEndDateChange = (date: Date) => {
    console.log("Start", date);
  };

  const onChangePeople = (number: string) => {
    console.log("People ", number);
  };

  return (
    <div className='relative z-10 w-full'>
      <div className='static max-w-7xl px-4 mx-auto'>
        <form className='flex flex-wrap flex-col md:flex-row items-center w-full bg-slate-500 dark:bg-slate-800 shadow-lg mx-auto relative p-3 md:p-6 xl:p-8 rounded-md'>
          <div className='relative pt-4 pb-3 w-full max-w-xs md:max-w-none md:w-4/5 bg-white dark:bg-gray-700 md:pr-auto rounded-t-md'>
            <ul className='flex flex-col md:flex-row gap-2 px-4'>
              <li className='md:w-1/4'>
                <DateInput
                  className='border-none'
                  onChange={onStartDateChange}
                />
              </li>
              <li className='md:w-1/4'>
                <DateInput onChange={onEndDateChange} />
              </li>
              <li className='md:w-1/4'>
                <Selector
                  placeholder='# People'
                  options={people}
                  onChange={onChangePeople}
                />
              </li>
            </ul>
          </div>
          <button className='w-full max-w-xs md:max-w-none md:w-1/5 h-[70px] bg-slate-800 dark:bg-slate-500 rounded-b-md'>
            Check Availability
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckAvailability;
