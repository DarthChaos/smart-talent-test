"use client";

import React, { useEffect } from "react";
import TextInput from "../text-input";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TableProps } from "./table";

const Table = ({ data, columns, pageSize = 10, onInputChange }: TableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  useEffect(() => {
    table.setPageSize(pageSize);
  }, [table, pageSize]);

  const handleChange = (e: string) => {
    if (onInputChange) onInputChange(e);
  };

  return (
    <div className='mt-6'>
      <div className='grid md:grid-cols-3 gap-x-6 px-6 items-end bg-white dark:bg-gray-800 sm:rounded-t-md'>
        <div className='col-span-1' />
        <div className='col-span-1' />
        <div className='pb-3 pt-4'>
          <TextInput
            label='Search: '
            type='text'
            hasLabel
            className='mb-0'
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-y dark:border-gray-700'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={`header-group-${headerGroup.id}`}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={`header-${header.id}`}
                    colSpan={header.colSpan}
                    scope='col'
                    className='px-6 py-3'
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr
                  key={row.id}
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className='px-6 py-4'>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <nav
        className='flex items-center flex-column flex-wrap md:flex-row justify-between py-3 px-6 bg-gray-50 dark:bg-gray-700 sm:rounded-b-md'
        aria-label='Table navigation'
      >
        <span className='text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full text-center md:text-left md:inline md:w-auto'>
          Showing{" "}
          <span className='font-semibold text-gray-900 dark:text-white'>
            {table.getState().pagination.pageIndex + 1}
          </span>{" "}
          of{" "}
          <span className='font-semibold text-gray-900 dark:text-white'>
            {table.getPageCount()}
          </span>
        </span>
        <div className='mx-3 px-3 flex gap-2 mb-4'>
          <span className='mr-2 w-1/4 h-full my-auto -translate-y-[1px] text-gray-900 dark:text-white'>
            Go to:
          </span>
          <TextInput
            label=''
            type='text'
            defaultValue={(
              table.getState().pagination.pageIndex + 1
            ).toString()}
            onChange={(value) => {
              const page = value ? Number(value) - 1 : 0;

              table.setPageIndex(page);
            }}
          />
        </div>
        <ul className='inline-flex -space-x-px mx-auto md:mx-0 rtl:space-x-reverse text-sm h-8'>
          <li>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className='flex items-center justify-center py-2 px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              <svg
                className='w-3 h-3 text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 1 1 5l4 4'
                />
              </svg>
            </button>
          </li>
          <li>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className='flex items-center justify-center py-2 px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              <svg
                className='w-3 h-3 text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 9 4-4-4-4'
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Table;
