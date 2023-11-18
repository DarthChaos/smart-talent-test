import React from "react";

const CardDescriptiveSection = ({
  img,
  title,
  value,
}: CardDescriptiveSectionProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex'>
        {img}
        <h6 className='font-semibold text-sm md:text-base'>{title}</h6>
      </div>
      <p className='text-xs md:text-sm text-center'>{value}</p>
    </div>
  );
};

export default CardDescriptiveSection;
