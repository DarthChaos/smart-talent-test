"use client";

import React, { useEffect, useState } from "react";
import { Heading2, Heading3 } from "../text";
import Backdrop from "../backdrop";

const Modal = ({
  className,
  hasHeader,
  children,
  onClose,
  title = "",
  titleClassName,
  open = false,
  closeClassName,
}: ModalProps) => {
  const [isOpen, setOpen] = useState(false);

  const modalClassName = `overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${className} ${
    isOpen ? "flex" : "hidden"
  }`;
  const closeButtonClassName =
    "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white ml-auto " +
    closeClassName;
  const modalTitleClassName =
    "text-lg font-semibold text-gray-900 dark:text-white " + titleClassName;

  const handleClose = () => {
    setOpen(false);

    if (onClose) onClose();
  };

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const closeButton = (
    <button
      type='button'
      className={closeButtonClassName}
      data-modal-toggle='crud-modal'
      onClick={handleClose}
    >
      <svg
        className='w-3 h-3'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 14 14'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
        />
      </svg>
      <span className='sr-only'>Close modal</span>
    </button>
  );

  return (
    <>
      <Backdrop className='z-50' show={isOpen} />
      <div id='crud-modal' aria-hidden='true' className={modalClassName}>
        <section className='relative p-4 w-full max-h-full'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            {hasHeader ? (
              <header className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
                <Heading3 className={modalTitleClassName}>{title}</Heading3>
                {closeButton}
              </header>
            ) : (
              <header className='flex p-4 md:p-5 rounded-t'>
                {closeButton}
              </header>
            )}
            <section className='p-4 md:p-5'>{children}</section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Modal;
