import Image from "next/image";
import React from "react";
import CardDescriptiveSection from "./card-desc-section";
import Link from "next/link";
import LightLink from "../light-link";

const Card = ({
  alt = "",
  src,
  title,
  buttonLabel = "Read More",
  hasButton = false,
  location,
  price,
  taxes,
}: CardProps) => {
  const buttonClassName =
    "items-center mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " +
    (hasButton ? "inline-flex" : "hidden");
  const priceImg = (
    <svg
      className='w-4 h-4 text-gray-800 dark:text-white my-auto align-middle mr-1'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 11 20'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138'
      />
    </svg>
  );
  const taxesImg = (
    <svg
      className='w-4 h-4 text-gray-800 dark:text-white my-auto align-middle mr-1'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 20 16'
    >
      <path d='M18 0H6a2 2 0 0 0-2 2h10a4 4 0 0 1 4 4v6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z' />
      <path d='M14 16H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z' />
      <path d='M8 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z' />
    </svg>
  );
  const locationImg = (
    <svg
      className='w-6 h-6 text-gray-800 dark:text-white'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 16 20'
    >
      <path d='M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z' />
    </svg>
  );

  return (
    <div className='max-w-xs bg-white border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 transform duration-200 hover:scale-110 rounded-md overflow-hidden'>
      <a href='#'>
        <Image {...{ alt, src }} width={1000} height={1000} />
      </a>
      <div className='p-5 text-gray-900 dark:text-white'>
        <div className='flex justify-between'>
          <CardDescriptiveSection img={priceImg} title='Price' value={price} />
          <CardDescriptiveSection img={taxesImg} title='Taxes' value={taxes} />
          <CardDescriptiveSection
            img={locationImg}
            title='Location'
            value={location}
          />
        </div>
        <a href='#'>
          <h5 className='mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </a>
        <LightLink className={buttonClassName}>
          {buttonLabel}
          <svg
            className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </LightLink>
      </div>
    </div>
  );
};

export default Card;
