"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({
  onChange,
  className,
  initialValue = new Date(),
  placeholder = "Select date",
}: DateInputProps) => {
  const [startDate, setStartDate] = useState(initialValue);

  const dateClassName =
    "border border-t-0 border-l-0 border-r-0 border-gray-300 text-gray-900 text-sm focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " +
    className;

  const onDateChange = (date: Date) => {
    onChange(date);
    setStartDate(date);
  };

  return (
    <div className='relative max-w-sm'>
      <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none z-20'>
        <svg
          className='w-4 h-4 text-gray-800 dark:text-white my-auto'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z' />
        </svg>
      </div>
      <DatePicker
        selected={startDate}
        onChange={onDateChange}
        className={dateClassName}
        placeholderText={placeholder}
        wrapperClassName='w-full'
      />
    </div>
  );
};

export default DateInput;
