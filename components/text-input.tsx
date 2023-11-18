"use client";

import React, { ChangeEvent } from "react";

const TextInput = ({
  defaultValue,
  type,
  className,
  hasLabel,
  id,
  name,
  required = false,
  label,
  onChange,
  placeholder = " ",
}: TextInputProps) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value);
  };

  const labelClassName =
    "peer-focus:font-medium absolute text-sm left-[10px] focus:left-[0px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" +
    (hasLabel ? "" : " hidden");

  return (
    <div className='relative z-0 w-full mb-6 group'>
      <input
        className='block py-2.5 px-[10px] w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        onChange={onInputChange}
        {...{ defaultValue, type, id, name, required, placeholder }}
      />
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
    </div>
  );
};

export default TextInput;
