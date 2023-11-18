import React, { ChangeEvent } from "react";

const Selector = ({
  onChange,
  options,
  className,
  id = "",
  placeholder = "Select an option",
  defaultValue = "default",
}: SelectorProps) => {
  const selectorClassName =
    "border border-l-0 border-t-0 border-r-0 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " +
    className;

  const opts = options.map(({ label, value }) => (
    <option key={`selector-opt-${value}`} {...{ value }}>
      {label}
    </option>
  ));

  const handleSelectorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      {...{ id, defaultValue }}
      className={selectorClassName}
      onChange={handleSelectorChange}
    >
      <option value='default'>{placeholder}</option>
      {opts}
    </select>
  );
};

export default Selector;
